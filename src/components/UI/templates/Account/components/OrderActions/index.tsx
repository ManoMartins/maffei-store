import { ButtonGroup, Stack } from '@chakra-ui/react';
import Button from 'components/UI/atoms/Button';
import { useCallback } from 'react';

export default function OrderActions() {
  const handleTrackOrder = useCallback(() => {
    alert('Follow');
  }, []);

  const handleRequestExchange = useCallback(() => {
    alert('Solicitar troca de pedido');
  }, []);

  const handleCancel = useCallback(() => {
    alert('Cancelar pedido');
  }, []);

  return (
    <ButtonGroup variant="outline" size="xs">
      <Stack>
        <Button
          variantType="secondary"
          color="primary"
          borderColor="blackAlpha.400"
          onClick={handleTrackOrder}
          _hover={{
            backgroundColor: 'blackAlpha.100',
            borderColor: 'blackAlpha.500',
          }}
        >
          Rastrear pedido
        </Button>

        <Button
          variantType="secondary"
          color="primary"
          borderColor="blackAlpha.400"
          onClick={handleRequestExchange}
          _hover={{
            backgroundColor: 'blackAlpha.100',
            borderColor: 'blackAlpha.500',
          }}
        >
          Solicitar troca de item
        </Button>

        <Button
          variantType="secondary"
          color="primary"
          borderColor="blackAlpha.400"
          onClick={handleCancel}
          _hover={{
            backgroundColor: 'blackAlpha.100',
            borderColor: 'blackAlpha.500',
          }}
        >
          Cancelar item
        </Button>
      </Stack>
    </ButtonGroup>
  );
}
