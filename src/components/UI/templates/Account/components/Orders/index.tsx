import { Text, Stack } from '@chakra-ui/react';

import useFetch from 'hooks/useFetch';
import Desktop from 'layout/desktop';

import Title from 'components/UI/atoms/Title';
import AccountItem from 'components/UI/molecules/AccountItem';

import { IOrder } from 'types/IOrder';

import Loader from 'components/UI/atoms/Loader';
import OrderItem from '../OrderItem';
import Side from '../Side';

export default function Orders() {
  const { loading, response } = useFetch<IOrder[]>({
    url: 'order',
    isPrivate: true,
  });

  const hasOrders = response?.length > 0;

  return (
    <Desktop>
      <Title>Minha conta</Title>

      <Stack direction="row" spacing="10">
        <Side />

        <Stack w="full" spacing="6">
          <AccountItem title="Meus pedidos">
            {loading && <Loader />}

            {!hasOrders && !loading && (
              <Stack>
                <Text fontSize="sm" color="blackAlpha.500">
                  Você ainda não possui pedidos.
                </Text>
              </Stack>
            )}

            {hasOrders && !loading && (
              <Stack spacing="6">
                {response.map(order => (
                  <OrderItem key={order.id} order={order} />
                ))}
              </Stack>
            )}
          </AccountItem>
        </Stack>
      </Stack>
    </Desktop>
  );
}
