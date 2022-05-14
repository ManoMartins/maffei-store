import React, {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';

import MiniCart from 'components/UI/organisms/MiniCart';

import { useDisclosure } from '@chakra-ui/react';

import { IGame } from 'types/IGame';
import { CartContextProviderProps, CartContextValues, CartData } from './types';

const CartContext = createContext<CartContextValues>({} as CartContextValues);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartData | undefined>(undefined);

  const { isOpen, onClose, onOpen } = useDisclosure();

  // Product
  const addProduct = useCallback(
    (game: IGame) => {
      onOpen();

      const oldCart = { ...cart };

      const storeProducts = oldCart.storeProducts || [];

      const product = storeProducts.find(p => p.id === game.id);

      if (product) {
        product.quantity += 1;
      } else {
        storeProducts.push({
          ...game,
          quantity: 1,
        });
      }

      setCart({
        ...oldCart,
        storeProducts,
      });
    },
    [cart, onOpen],
  );

  const removeProduct = useCallback(
    (productId: string) => {
      const oldCart = { ...cart };

      const storeProducts = oldCart.storeProducts || [];

      const product = storeProducts.find(p => p.id === productId);

      if (product) {
        storeProducts.splice(storeProducts.indexOf(product), 1);
      }

      setCart({
        ...oldCart,
        storeProducts,
      });
    },
    [cart],
  );

  const updateProductQuantity = useCallback((productId: string) => {
    alert(`Atualizar produto de quantidade ${productId}`);
  }, []);

  // Coupon
  const addCoupon = useCallback((voucherCode: string) => {
    alert(`Adicionar produto ${voucherCode}`);
  }, []);

  const removeCoupon = useCallback((voucherCode: string) => {
    alert(`Remover produto ${voucherCode}`);
  }, []);

  // Payment method
  const addPaymentMethod = useCallback((paymentMethodId: string) => {
    alert(`Adicionar produto ${paymentMethodId}`);
  }, []);

  const removePaymentMethod = useCallback((paymentMethodId: string) => {
    alert(`Remover produto ${paymentMethodId}`);
  }, []);

  const makeOrder = useCallback(() => {
    alert('Fazer pedido');
  }, []);

  const cartLength = useMemo(() => {
    const storeProducts = cart?.storeProducts || [];

    return storeProducts.length;
  }, [cart]);

  const values = useMemo(
    () => ({
      cart,
      cartLength,

      addProduct,
      removeProduct,
      updateProductQuantity,

      addCoupon,
      removeCoupon,

      addPaymentMethod,
      removePaymentMethod,

      makeOrder,

      disclosureMiniCart: {
        isOpen,
        onOpen,
        onClose,
      },
    }),
    [
      cart,
      addProduct,
      removeProduct,
      updateProductQuantity,
      addCoupon,
      removeCoupon,
      addPaymentMethod,
      removePaymentMethod,
      makeOrder,
      isOpen,
      onOpen,
      onClose,
      cartLength,
    ],
  );

  return (
    <CartContext.Provider value={values}>
      <MiniCart
        cart={cart}
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
