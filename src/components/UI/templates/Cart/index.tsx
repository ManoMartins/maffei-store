import Desktop from 'layout/desktop';

import { Stack } from '@chakra-ui/react';

import { useCart } from 'contexts/cart';

import Title from 'components/UI/atoms/Title';
import Side from './components/Side';
import Address from './components/Address';
import Payment from './components/Payment';
import CartItem from './components/CartItem';
import PromoCode from './components/PromoCode';

export default function Cart() {
  const { cart } = useCart();

  const hasProducts = cart?.storeProducts?.length > 0;

  return (
    <Desktop>
      <Title>Meu carrinho</Title>

      <Stack direction="row" spacing="4">
        <Stack w="full" spacing="8">
          <Stack bgColor="whiteAlpha.900" spacing="0.5" borderRadius="2">
            {hasProducts &&
              cart.storeProducts.map(game => (
                <CartItem key={game.id} game={game} />
              ))}
          </Stack>

          <Stack
            px="6"
            py="8"
            spacing="8"
            boxShadow="md"
            bgColor="#FFF"
            color="blackAlpha.900"
          >
            <Address />
          </Stack>

          <Stack
            px="6"
            py="8"
            spacing="8"
            boxShadow="md"
            bgColor="#FFF"
            color="blackAlpha.900"
          >
            <Payment />
          </Stack>

          <Stack
            px="6"
            py="8"
            spacing="8"
            boxShadow="md"
            bgColor="#FFF"
            color="blackAlpha.900"
          >
            <PromoCode />
          </Stack>
        </Stack>

        <Side />
      </Stack>
    </Desktop>
  );
}
