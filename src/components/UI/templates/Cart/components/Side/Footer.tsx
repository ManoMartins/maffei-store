import { MouseEvent, useCallback } from 'react';
import { useRouter } from 'next/router';

import { useCart } from 'contexts/cart';

import { FiShoppingCart } from 'react-icons/fi';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';

export default function Footer() {
  const { makeOrder } = useCart();

  const router = useRouter();

  const handleKeepShopping = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      router.push('/');
    },
    [],
  );

  const handleOrder = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    makeOrder();
    router.push('/thanks');
  }, []);

  return (
    <Box bgColor="whiteAlpha.900" px="6" py="4">
      <ButtonGroup width="full" justifyContent="space-between">
        <Button
          size="sm"
          variant="ghost"
          borderRadius="2"
          color="primary.900"
          transition="all 0.2s"
          onClick={handleKeepShopping}
          _hover={{
            color: 'white',
            bgGradient: 'linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)',
          }}
        >
          Continuar comprando
        </Button>

        <Button
          size="sm"
          borderRadius="2"
          transition="all 0.2s ease-in-out"
          _hover={{ filter: 'brightness(0.9)' }}
          bgGradient="linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)"
          leftIcon={<FiShoppingCart />}
          onClick={handleOrder}
        >
          Comprar agora
        </Button>
      </ButtonGroup>
    </Box>
  );
}
