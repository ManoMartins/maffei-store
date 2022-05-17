import { get } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

import api from 'services';

import {
  Box,
  Text,
  Stack,
  VStack,
  Button,
  HStack,
  useRadioGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { FaCcVisa, FaPlus } from 'react-icons/fa';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import ModalCard from 'components/UI/organisms/Modals/ModalCard';

import { ICreditCard } from 'types/ICreditCard';

import PaymentCard from './PaymentCard';

export default function Payment() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [creditCards, setCreditCards] = useState<ICreditCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'creditCardId',
    defaultValue: get(creditCards, '0.id', ''),
    onChange: console.log,
  });

  const group = getRootProps();

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
        <VStack {...group}>
          {options.map(value => {
            const radio = getRadioProps({ value: value.value });
            return (
              <PaymentCard key={value} {...radio}>
                {value.label}
              </PaymentCard>
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
