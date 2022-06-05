import {
  Box,
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
  ScaleFade,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
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

export interface IExchangeCode {
  id: string;
  voucherCode: string;
  discountPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

interface IResponse {
  id: string;
  orderId: string;
  exchangeCodeId: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  exchangeCode: IExchangeCode;
}

export default function ModalExchangeOrder({
  isOpen,
  onClose,
  orderId,
  orderOnStoreProducts,
}: IModalExchangeOrderProps) {
  const responseDisclouse = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [exchangeOrders, setExchangeOrders] = useState<IExchangeOrder[]>([]);

  const [response, setResponse] = useState<IResponse | undefined>(undefined);
  const handleExchangeOrder = useCallback(async () => {
    setIsLoading(true);
    const { data } = await api.post<IResponse>('/exchange', {
      orderId,
      storeProducts: exchangeOrders,
    });

    setResponse(data);
    responseDisclouse.onOpen();
    setIsLoading(false);
  }, [exchangeOrders, orderId, responseDisclouse]);

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

  const handleClose = useCallback(() => {
    onClose();
    responseDisclouse.onClose();
    setResponse(undefined);
  }, [onClose, responseDisclouse]);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Solicitar troca</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          {response && (
            <ScaleFade in={responseDisclouse.isOpen}>
              <Text>Segue abaixo o código de troca gerado para você.</Text>

              <Box my="4" p="4" rounded="2" bgColor="gray.600">
                <Text color="white" textAlign="center">
                  {response.exchangeCode.voucherCode}
                </Text>

                <Text
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <FaEthereum /> {response.exchangeCode.discountPrice}
                </Text>
              </Box>

              <Text fontStyle="italic" fontSize="sm">
                O código estará disponível na aba{' '}
                <Text as="strong">Meus cupons</Text>
              </Text>
            </ScaleFade>
          )}

          {!response && (
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
          )}
        </ModalBody>

        <ModalFooter>
          <Button rounded="2" variant="outline" mr={3} onClick={handleClose}>
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
