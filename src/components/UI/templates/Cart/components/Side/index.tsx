import { Text, Flex, Stack, Divider, Box } from '@chakra-ui/react';

import Title from 'components/UI/atoms/Title';
import Footer from './Footer';

export default function Side() {
  return (
    <Box minW="400px">
      <Stack backgroundColor="white" px="6" py="4">
        <Title placement="bottom" color="blackAlpha.900">
          Resumo do pedido
        </Title>

        <Flex color="blackAlpha.900" justifyContent="space-between">
          <Text>Itens</Text>
          <Text color="primary.900">R$ 699,99</Text>
        </Flex>

        <Flex color="blackAlpha.900" justifyContent="space-between">
          <Text>Frete</Text>
          <Text color="primary.900">R$ 69,99</Text>
        </Flex>

        <Divider />

        <Flex
          fontWeight="bold"
          color="blackAlpha.900"
          justifyContent="space-between"
        >
          <Text>Total</Text>
          <Text color="primary.900">R$ 69,99</Text>
        </Flex>
      </Stack>

      <Footer />
    </Box>
  );
}
