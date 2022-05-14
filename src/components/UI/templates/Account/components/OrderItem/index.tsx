import { Box, Divider, Flex, Stack } from '@chakra-ui/react';
import DetailItem from 'components/UI/molecules/DetailItem';
import OrderActions from '../OrderActions';
import OrderInfos from '../OrderInfos';

export default function OrderItem() {
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
          label="24 abril de 2022"
          wrapItemProps={{ width: 'auto' }}
          labelProps={{ color: 'blackAlpha.900' }}
          titleProps={{ color: 'blackAlpha.900' }}
        />
        <DetailItem
          title="Total"
          label="R$ 129,99"
          wrapItemProps={{ width: 'auto' }}
          labelProps={{ color: 'blackAlpha.900' }}
          titleProps={{ color: 'blackAlpha.900' }}
        />
        <DetailItem
          title="Enviado para"
          label="Manoel Carlos"
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
          <OrderInfos />
          <OrderInfos />
        </Stack>

        <OrderActions />
      </Flex>
    </Box>
  );
}
