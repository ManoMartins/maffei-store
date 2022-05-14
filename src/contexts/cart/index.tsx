import { useDisclosure } from '@chakra-ui/react';
import MiniCart from 'components/UI/organisms/MiniCart';
import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { CartContextProviderProps, CartContextValues, CartData } from './types';

const CartContext = createContext<CartContextValues>({} as CartContextValues);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartData | undefined>(undefined);

  const { isOpen, onClose, onOpen } = useDisclosure();

  // Product
  const addProduct = useCallback((productId: string) => {
    onOpen();
    alert(`Adicionar produto ${productId}`);
  }, []);

  const removeProduct = useCallback((productId: string) => {
    alert(`Remover produto ${productId}`);
  }, []);

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

  const values = useMemo(
    () => ({
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
    [],
  );

  return (
    <CartContext.Provider value={values}>
      <MiniCart isOpen={isOpen} onClose={onClose} />
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
