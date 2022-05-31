import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import api from 'services';
import { IOrderOnStoreProducts } from 'types/IOrder';

interface IModalExchangeOrderProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  orderOnStoreProducts: IOrderOnStoreProducts[];
}

interface IExchangeOrder {
  quantity: number;
  storeProductId: string;
}

export default function ModalExchangeOrder({
  isOpen,
  onClose,
  orderId,
  orderOnStoreProducts,
}: IModalExchangeOrderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeOrders, setExchangeOrders] = useState<IExchangeOrder[]>([]);

  const handleExchangeOrder = useCallback(async () => {
    setIsLoading(true);
    await api.post('/exchange', {
      orderId,
      storeProducts: exchangeOrders,
    });
    onClose();
    setIsLoading(false);
  }, [exchangeOrders, onClose, orderId]);

  const onChange = useCallback(
    (quantity: number, storeProductId: string) => {
      let newExchangeOrders = [...exchangeOrders];

      const hasStoreProduct = newExchangeOrders.some(
        i => i.storeProductId === storeProductId,
      );

      const exchangeOrder = {
        quantity: Number(quantity),
        storeProductId,
      };

      if (quantity > 0 && hasStoreProduct) {
        newExchangeOrders = newExchangeOrders.map(i => {
          if (i.storeProductId === storeProductId) {
            return exchangeOrder;
          }

          return i;
        });
      }

      if (quantity > 0 && !hasStoreProduct) {
        newExchangeOrders.push(exchangeOrder);
      }

      if (quantity === 0 && hasStoreProduct) {
        newExchangeOrders = newExchangeOrders.filter(
          i => i.storeProductId !== storeProductId,
        );
      }

      setExchangeOrders(newExchangeOrders);
    },
    [exchangeOrders],
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Solicitar troca</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Stack spacing="4">
            {orderOnStoreProducts.map(storeProduct => (
              <FormControl>
                <FormLabel htmlFor={storeProduct.storeProduct.name}>
                  {storeProduct.storeProduct.name}
                </FormLabel>
                <NumberInput
                  id={storeProduct.storeProduct.id}
                  min={0}
                  max={storeProduct.quantity}
                  defaultValue={0}
                  name={storeProduct.storeProduct.name}
                  onChange={e => {
                    onChange(+e, storeProduct.storeProduct.id);
                  }}
                >
                  <NumberInputField rounded="2" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            ))}
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button rounded="2" variant="outline" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Button
            rounded="2"
            bg="primary.900"
            _active={{ filter: 'brightness(1)' }}
            _hover={{ filter: 'brightness(0.85)' }}
            isLoading={isLoading}
            onClick={handleExchangeOrder}
          >
            Solicitar troca
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
