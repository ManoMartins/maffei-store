import { Box, Button, HStack, Input } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';

export default function PromoCode() {
  return (
    <Box>
      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Vale troca ou código promocional
      </Title>

      <HStack>
        <Input size="sm" placeholder="Digite o código" />

        <Button size="sm" borderRadius="2">
          Adicionar
        </Button>
      </HStack>
    </Box>
  );
}
