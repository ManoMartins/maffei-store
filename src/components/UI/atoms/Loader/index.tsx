import { HStack, Spinner, Text } from '@chakra-ui/react';

export default function Loader() {
  return (
    <HStack>
      <Spinner borderColor="primary.900" />
      <Text color="blackAlpha.900">Carregando...</Text>
    </HStack>
  );
}
