import { useCallback } from 'react';
import { useRouter } from 'next/router';

import MiniCartItem from 'components/UI/molecules/MiniCartItem';

import { CartData } from 'contexts/cart/types';

import {
  Stack,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface IMiniCartProps {
  cart?: CartData;
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
}

export default function MiniCart({
  cart,
  isOpen,
  onClose,
  onRemoveProduct,
}: IMiniCartProps) {
  const router = useRouter();

  const handleFinishOrder = useCallback(() => {
    onClose();
    router.push('/cart');
  }, [onClose, router]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Sua sacola</DrawerHeader>

        <DrawerBody>
          <Stack spacing="4">
            {cart?.storeProducts.map(game => (
              <MiniCartItem
                key={game.id}
                game={game}
                onRemoveProduct={onRemoveProduct}
              />
            ))}
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Stack w="full">
            <Button
              bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
              transition="all 0.2s ease-in-out"
              borderRadius="2"
              onClick={handleFinishOrder}
              _hover={{
                filter: 'brightness(0.85)',
              }}
            >
              Finalizar compra
            </Button>

            <Button variant="outline" borderRadius="2" onClick={onClose}>
              Continuar comprando
            </Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
