import { Box, Button, HStack, Input } from '@chakra-ui/react';
import Title from 'components/UI/atoms/Title';
import { useCart } from 'contexts/cart';
import { useCallback, useState } from 'react';

export default function PromoCode() {
  const { addPromoCode } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const [voucherCode, setVoucherCode] = useState('');

  const handleAddPromoCode = useCallback(async () => {
    setIsLoading(true);
    await addPromoCode(voucherCode);
    setIsLoading(false);
  }, [addPromoCode, voucherCode]);

  return (
    <Box>
      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Vale troca ou código promocional
      </Title>

      <HStack>
        <Input
          size="sm"
          bgColor="blackAlpha.100"
          placeholder="Digite o código..."
          _placeholder={{ color: 'blackAlpha.900' }}
          _hover={{ bgColor: 'blackAlpha.300' }}
          value={voucherCode}
          onChange={e => setVoucherCode(e.target.value)}
        />

        <Button
          size="sm"
          borderRadius="2"
          isLoading={isLoading}
          bgColor="blackAlpha.100"
          onClick={handleAddPromoCode}
          _hover={{ bgColor: 'blackAlpha.300' }}
        >
          Adicionar
        </Button>
      </HStack>
    </Box>
  );
}
