import NextImage from "next/image";
import { createContext, useCallback, useContext, useState } from "react";
import { CartContextProviderProps, CartContextValues, CartData } from "./types";

const CartContext = createContext<CartContextValues>({} as CartContextValues)

export const CartContextProvider = ({ 
  children 
}: CartContextProviderProps) => {

  const [cart, setCart] = useState<CartData | undefined>(undefined)

  // Product
  const addProduct = useCallback((productId: string) => {
    console.log('Adicionar produto')
  }, [])

  const removeProduct = useCallback((productId: string) => {
    console.log('Remover produto')
  }, [])

  const updateProductQuantity = useCallback((productId: string) => {
    console.log('Atualizar produto de quantidade')
  }, [])

  // Coupon
  const addCoupon = useCallback((voucherCode: string) => {
    console.log('Adicionar produto')
  }, [])

  const removeCoupon = useCallback((voucherCode: string) => {
    console.log('Remover produto')
  }, [])

  // Payment method
  const addPaymentMethod = useCallback((paymentMethodId: string) => {
    console.log('Adicionar produto')
  }, [])

  const removePaymentMethod = useCallback((paymentMethodId: string) => {
    console.log('Remover produto')
  }, [])

  return (
    <CartContext.Provider value={{
      addProduct,
      removeProduct,
      updateProductQuantity,
      
      addCoupon,
      removeCoupon,

      addPaymentMethod,
      removePaymentMethod,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
