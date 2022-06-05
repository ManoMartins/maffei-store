import React, {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';

import MiniCart from 'components/UI/organisms/MiniCart';

import { useDisclosure } from '@chakra-ui/react';

import api from 'services';
import { useAuth } from 'contexts/auth';

import axios from 'axios';
import { useRouter } from 'next/router';
import {
  CartContextProviderProps,
  CartContextValues,
  CartData,
  CheckoutData,
  IOrderAPI,
  PaymentMethodType,
} from './types';

const CartContext = createContext<CartContextValues>({} as CartContextValues);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { user } = useAuth();
  const [cart, setCart] = useState<CartData | undefined>(undefined);
  const [checkout, setCheckout] = useState<CheckoutData | undefined>(undefined);

  const router = useRouter();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleCheckout = useCallback(
    async (newCart: CartData) => {
      const response = await api.post<CheckoutData>('/shopping-cart', {
        userId: user?.id,
        voucherCode: newCart.voucherCode,
        storeProducts: newCart.storeProducts,
      });

      setCheckout(response.data);
    },
    [user?.id],
  );

  // Product
  const addProduct = useCallback(
    async (storeProductId: string) => {
      onOpen();

      const oldCart = { ...cart };

      const storeProducts = oldCart.storeProducts || [];

      const product = storeProducts.find(
        p => p.storeProductId === storeProductId,
      );

      if (product) {
        product.quantity += 1;
      } else {
        storeProducts.push({
          storeProductId,
          quantity: 1,
        });
      }

      const newCart = {
        ...oldCart,
        storeProducts,
      };

      try {
        await handleCheckout(newCart);
        setCart(newCart);
      } catch (error) {
        console.error(error);
        alert('Erro ao adicionar o produto ao carrinho');
      }
    },
    [cart, handleCheckout, onOpen],
  );

  const removeProduct = useCallback(
    async (productId: string) => {
      const oldCart = { ...cart };

      const storeProducts = oldCart.storeProducts || [];

      const product = storeProducts.find(p => p.storeProductId === productId);

      if (product) {
        storeProducts.splice(storeProducts.indexOf(product), 1);
      }

      const newCart = {
        ...oldCart,
        storeProducts,
      };

      try {
        await handleCheckout(newCart);
        setCart(newCart);
      } catch (error) {
        console.error(error);
        alert('Erro ao remover o produto do carrinho');
      }
    },
    [cart, handleCheckout],
  );

  const updateProductQuantity = useCallback(
    async (productId: string, quantity: number) => {
      const oldCart = { ...cart };

      const storeProducts = oldCart.storeProducts || [];

      const product = storeProducts.find(p => p.storeProductId === productId);

      if (!product) return;

      product.quantity = quantity;

      const newCart = {
        ...oldCart,
        storeProducts,
      };

      try {
        await handleCheckout(newCart);
        setCart(newCart);
      } catch (error) {
        console.error(error);
        alert('Erro ao atualizar a quantidade do produto no carrinho');
      }
    },
    [cart, handleCheckout],
  );

  // Coupon
  const addPromoCode = useCallback(
    async (voucherCode: string) => {
      const oldCart = { ...cart };

      const newCart = {
        ...oldCart,
        voucherCode,
      };

      try {
        await handleCheckout(newCart);
        setCart(newCart);
      } catch (error) {
        console.error(error);
        alert('Erro ao adicionar o código promocional');
      }
    },
    [cart, handleCheckout],
  );

  const removePromoCode = useCallback((voucherCode: string) => {
    alert(`Remover produto ${voucherCode}`);
  }, []);

  // Payment method
  const addPaymentMethod = useCallback(
    (paymentMethods: PaymentMethodType[]) => {
      setCart(oldState => ({
        ...oldState,
        payment: paymentMethods,
      }));
    },
    [],
  );

  const removePaymentMethod = useCallback(() => {
    setCart(oldState => ({
      ...oldState,
      paymentMethodId: undefined,
    }));
  }, []);

  const addShippingAddress = useCallback((shippingAddressId: string) => {
    setCart(oldState => ({
      ...oldState,
      shippingAddressId,
    }));
  }, []);

  const removeShippingAddress = useCallback(() => {
    setCart(oldState => ({
      ...oldState,
      shippingAddressId: undefined,
    }));
  }, []);

  const makeOrder = useCallback(async () => {
    try {
      const response = await api.post<IOrderAPI>('/order', cart);
      setCart(undefined);
      setCheckout(undefined);

      const voucherCode = response.data?.exchangeCode?.voucherCode;

      if (voucherCode) {
        await router.push(`/thanks?voucherCode=${voucherCode}`);
      }

      await router.push(`/thanks`);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message);
        return;
      }

      alert(error);
    }
  }, [cart, router]);

  const cartLength = useMemo(() => {
    const storeProducts = cart?.storeProducts || [];

    return storeProducts.length;
  }, [cart]);

  const values = useMemo(
    () => ({
      cart,
      cartLength,

      checkout,

      addProduct,
      removeProduct,
      updateProductQuantity,

      addPromoCode,
      removePromoCode,

      addPaymentMethod,
      removePaymentMethod,

      addShippingAddress,
      removeShippingAddress,

      makeOrder,

      disclosureMiniCart: {
        isOpen,
        onOpen,
        onClose,
      },
    }),
    [
      checkout,
      cart,
      cartLength,
      addProduct,
      removeProduct,
      updateProductQuantity,
      addPromoCode,
      removePromoCode,
      addPaymentMethod,
      removePaymentMethod,
      addShippingAddress,
      removeShippingAddress,
      makeOrder,
      isOpen,
      onOpen,
      onClose,
    ],
  );

  return (
    <CartContext.Provider value={values}>
      <MiniCart
        checkout={checkout}
        isOpen={isOpen}
        onClose={onClose}
        onRemoveProduct={removeProduct}
      />
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
