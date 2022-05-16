import { Stack } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import AccountItem from 'components/UI/molecules/AccountItem';
import Desktop from 'layout/desktop';
import OrderItem from '../OrderItem';
import Side from '../Side';

export default function Orders() {
  return (
    <Desktop>
      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus pedidos">
            <OrderItem />
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
