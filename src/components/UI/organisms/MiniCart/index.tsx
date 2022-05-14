import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import MiniCartItem from 'components/UI/molecules/MiniCartItem';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

interface IMiniCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MiniCart({ isOpen, onClose }: IMiniCartProps) {
  const router = useRouter();

  const handleFinishOrder = useCallback(() => {
    onClose();
    router.push('/cart');
  }, []);

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Sua sacola</DrawerHeader>

        <DrawerBody>
          <Stack spacing="4">
            <MiniCartItem />
            <MiniCartItem />
            <MiniCartItem />
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
