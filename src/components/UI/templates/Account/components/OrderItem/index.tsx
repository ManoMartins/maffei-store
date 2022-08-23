import { Box, Divider, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import DetailItem from 'components/UI/molecules/DetailItem';
import { format } from 'date-fns';
import { IOrder } from 'types/IOrder';
import ptBR from 'date-fns/locale/pt-BR';
import { FaEthereum } from 'react-icons/fa';
import OrderActions from '../OrderActions';
import OrderInfos from '../OrderInfos';
import { useAuth } from 'contexts/auth';

interface IOrderItem {
  order: IOrder;
}

export default function OrderItem({ order }: IOrderItem) {
  const { user } = useAuth()

  return (
    <Box
      as="section"
      borderRadius="2"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="blackAlpha.400"
    >
      <Stack
        as="header"
        direction="row"
        spacing="8"
        py="5"
        px="6"
        bgColor="blackAlpha.100"
      >
        <DetailItem
          title="Pedido realizado"
          label={format(
            new Date(order.createdAt),
            "'Dia' dd 'de' MMMM' de 'yyyy'",
            {
              locale: ptBR,
            },
          )}
          wrapItemProps={{ width: 'auto' }}
          labelProps={{ color: 'blackAlpha.900' }}
          titleProps={{ color: 'blackAlpha.900' }}
        />
        <DetailItem
          title="Total"
          label={
            <HStack spacing="1">
              <FaEthereum size="14" />
              <Text>{order.totalPrice}</Text>
            </HStack>
          }
          wrapItemProps={{ width: 'auto' }}
          labelProps={{ color: 'blackAlpha.900' }}
          titleProps={{ color: 'blackAlpha.900' }}
        />
        <DetailItem
          title="Enviado para"
          label={user.name}
          wrapItemProps={{ width: 'auto' }}
          labelProps={{ color: 'blackAlpha.900' }}
          titleProps={{ color: 'blackAlpha.900' }}
        />
      </Stack>

      <Flex my="5" px="6" color="blackAlpha.900" justifyContent="space-between">
        <Stack
          px="2"
          pb="4"
          spacing="5"
          divider={<Divider borderColor="blackAlpha.400" />}
        >
          {order.storeProducts.map(orderOnStoreProducts => (
            <OrderInfos orderOnStoreProducts={orderOnStoreProducts} />
          ))}
        </Stack>

        <OrderActions
          orderId={order.id}
          orderOnStoreProducts={order.storeProducts}
        />
      </Flex>
    </Box>
  );
}
