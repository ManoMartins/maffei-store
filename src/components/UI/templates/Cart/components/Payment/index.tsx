import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

import api from 'services';

import {
  Box,
  Text,
  Stack,
  VStack,
  Button,
  HStack,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import { FaCcVisa, FaPlus } from 'react-icons/fa';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import ModalCard from 'components/UI/organisms/Modals/ModalCard';

import { ICreditCard } from 'types/ICreditCard';

import { useCart } from 'contexts/cart';
import { PaymentMethodType } from 'contexts/cart/types';
import PaymentCheckbox from './PaymentCheckbox';

export interface IPaymentMethodData {
  paymentMethodId: string;
  price: number;
}

export default function Payment() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { addPaymentMethod } = useCart();

  const [creditCards, setCreditCards] = useState<ICreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodType[]>([]);

  const handleAddPaymentMethod = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      let formattedPaymentMethods = [...paymentMethods];

      const hasPaymentMethod = formattedPaymentMethods.some(
        i => i.paymentMethodId === value,
      );

      if (hasPaymentMethod) {
        formattedPaymentMethods = formattedPaymentMethods.filter(
          i => i.paymentMethodId !== value,
        );
      }

      formattedPaymentMethods = [
        ...formattedPaymentMethods,
        { paymentMethodId: value, price: 0 },
      ];

      addPaymentMethod(formattedPaymentMethods);
      setPaymentMethods(formattedPaymentMethods);
    },
    [addPaymentMethod, paymentMethods],
  );

  const handleAddPrice = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;

      const formattedName = name.split('.')[0];

      let formattedPaymentMethods = [...paymentMethods];

      formattedPaymentMethods = formattedPaymentMethods.map(paymentMethod => {
        if (paymentMethod.paymentMethodId === formattedName) {
          return {
            ...paymentMethod,
            price: +value,
          };
        }

        return paymentMethod;
      });

      addPaymentMethod(formattedPaymentMethods);
      setPaymentMethods(formattedPaymentMethods);
    },
    [addPaymentMethod, paymentMethods],
  );

  const hasCreditCards = creditCards.length > 0;

  useEffect(() => {
    api
      .get<ICreditCard[]>('/credit-card')
      .then(response => {
        setCreditCards(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const options = useMemo(() => {
    return creditCards.map(creditCard => ({
      value: creditCard.id,
      label: (
        <HStack>
          <FaCcVisa />
          <Text>**** **** **** {creditCard.cardNumber.slice(12, 16)}</Text>
        </HStack>
      ),
    }));
  }, [creditCards]);

  return (
    <Box>
      <ModalCard isOpen={isOpen} onClose={onClose} />
      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Pagamentos
      </Title>

      {isLoading && (
        <Box my="6">
          <Loader />
        </Box>
      )}

      {!hasCreditCards && !isLoading && (
        <Stack>
          <Text fontSize="sm" color="blackAlpha.500" my="2">
            Você ainda não possui cartões de crédito.
          </Text>
        </Stack>
      )}

      {hasCreditCards && (
        <VStack>
          {options.map(({ value, label }, index) => {
            return (
              <HStack w="full">
                <PaymentCheckbox
                  value={value}
                  label={label}
                  onChange={handleAddPaymentMethod}
                />

                <Input
                  data-testid={`payment-price-${index}`}
                  flex="1"
                  size="lg"
                  rounded="2"
                  fontSize="md"
                  name={`${value}.price`}
                  onChange={handleAddPrice}
                  bgColor="blackAlpha.100"
                  placeholder="Digite o valor..."
                  _placeholder={{ color: 'blackAlpha.900' }}
                  _hover={{ bgColor: 'blackAlpha.200' }}
                  isDisabled={
                    !paymentMethods.some(i => i.paymentMethodId === value)
                  }
                />
              </HStack>
            );
          })}
        </VStack>
      )}

      <Button
        mt="2"
        px={5}
        py={3}
        height="12"
        width="full"
        display="flex"
        borderRadius="2"
        borderWidth="1px"
        fontWeight="light"
        bgColor="blackAlpha.100"
        justifyContent="flex-start"
        transition="all 0.2s ease-in-out"
        _hover={{ bgColor: 'blackAlpha.300' }}
        onClick={onOpen}
      >
        <HStack>
          <FaPlus />

          <Text>Adicionar cartão de crédito</Text>
        </HStack>
      </Button>
    </Box>
  );
}
