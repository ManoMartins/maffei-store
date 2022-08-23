import { Text, Flex, Stack, Divider, Box } from '@chakra-ui/react';

import { useCart } from 'contexts/cart';

import Title from 'components/UI/atoms/Title';
import { FaEthereum } from 'react-icons/fa';
import Footer from './Footer';

export default function Side() {
  const { checkout } = useCart();

  return (
    <Box minW="400px">
      <Stack backgroundColor="white" px="6" py="4">
        <Title placement="bottom" color="blackAlpha.900">
          Resumo do pedido
        </Title>

        <Flex color="blackAlpha.900" justifyContent="space-between">
          <Text>Itens</Text>
          <Text d="flex" alignItems="center" color="primary.900">
            <FaEthereum />
            {checkout?.totalWithoutDiscount || 0}
          </Text>
        </Flex>

        <Flex color="blackAlpha.900" justifyContent="space-between">
          <Text>Frete</Text>
          <Text color="primary.900">Grátis</Text>
        </Flex>

        <Flex color="blackAlpha.900" justifyContent="space-between">
          <Text>Desconto</Text>
          <Text d="flex" alignItems="center" color="primary.900">
            <FaEthereum />
            {checkout?.priceDiscount || 0}
          </Text>
        </Flex>

        <Divider />

        <Flex
          fontWeight="bold"
          color="blackAlpha.900"
          justifyContent="space-between"
        >
          <Text>Total</Text>
          <Flex alignItems="center" color="primary.900">
            <FaEthereum />
            <Text data-testid="priceTotal">
              {checkout?.priceTotal || 0}
            </Text>
          </Flex>
        </Flex>
      </Stack>

      <Footer />
    </Box>
  );
}
