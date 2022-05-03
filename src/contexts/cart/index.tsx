import NextImage from "next/image";
import { createContext, useCallback, useContext, useState } from "react";
import { Drawer } from "rsuite";
import styled from "styled-components";
import { useDisclosure } from "../../hooks/useDisclosure";
import { CartContextProviderProps, CartContextValues, CartData } from "./types";

const CartContext = createContext<CartContextValues>({} as CartContextValues)

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const NoCart = styled.span``

const Image = styled(NextImage)``

const S = {
  Container,
  NoCart,
  Image,
}

export const CartContextProvider = ({ 
  children 
}: CartContextProviderProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [cart, setCart] = useState<CartData | undefined>(undefined)

  // Product
  const addProduct = useCallback((productId: string) => {
    console.log('Adicionar produto')
    onOpen()
  }, [onOpen])

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
      <Drawer open={isOpen} onClose={onClose} size="xs">
        <Drawer.Header>
          <Drawer.Title>
            Carrinho de compras
          </Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          {(!cart || cart?.storeProducts.length === 0) && (
            <S.Container>
              <S.Image 
                width="170.5px" 
                height="200px" 
                alt="Não há produtos no carrinho" 
                src="/assets/cart/Hands-Phone.png" 
              />
            </S.Container>
          )}
        </Drawer.Body>
      </Drawer>

      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
