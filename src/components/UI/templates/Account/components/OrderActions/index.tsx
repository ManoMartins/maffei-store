import { ButtonGroup, Stack, useDisclosure } from '@chakra-ui/react';
import Button from 'components/UI/atoms/Button';
import { useCallback } from 'react';
import { IOrderOnStoreProducts } from 'types/IOrder';
import ModalCancelOrder from './ModalCancelOrder';
import ModalExchangeOrder from './ModalExchangeOrder';

interface IOrderActionsProps {
  orderId: string;
  orderOnStoreProducts: IOrderOnStoreProducts[];
}

export default function OrderActions({
  orderId,
  orderOnStoreProducts,
}: IOrderActionsProps) {
  const exchangeDisclosure = useDisclosure();
  const cancelDisclosure = useDisclosure();

  const handleTrackOrder = useCallback(() => {
    alert('Follow');
  }, []);

  const handleRequestExchange = useCallback(async () => {
    exchangeDisclosure.onOpen();
  }, [exchangeDisclosure]);

  const handleCancel = useCallback(() => {
    cancelDisclosure.onOpen();
  }, [cancelDisclosure]);

  return (
    <>
      <ModalExchangeOrder
        isOpen={exchangeDisclosure.isOpen}
        onClose={exchangeDisclosure.onClose}
        orderId={orderId}
        orderOnStoreProducts={orderOnStoreProducts}
      />

      <ModalCancelOrder
        isOpen={cancelDisclosure.isOpen}
        onClose={cancelDisclosure.onClose}
        orderId={orderId}
        orderOnStoreProducts={orderOnStoreProducts}
      />

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
    </>
  );
}
