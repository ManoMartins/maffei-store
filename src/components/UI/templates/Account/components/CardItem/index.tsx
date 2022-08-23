import { useCallback, useMemo, useState } from 'react';

import api from 'services';

import ModalCard from 'components/UI/organisms/Modals/ModalCard';

import {
  Flex,
  Text,
  Button,
  HStack,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

import { EnumCardBrand, ICreditCard } from 'types/ICreditCard';
import { FiCreditCard } from 'react-icons/fi';

interface ICreditCardItemProps {
  reload: () => void;
  creditCard: ICreditCard;
}

export default function CardItem({ reload, creditCard }: ICreditCardItemProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const CardBrandIcon = useMemo(() => {
    if (creditCard.cardBrand === 'VISA') {
      return FaCcVisa
    }

    if (creditCard.cardBrand === 'MASTERCARD') {
      return FaCcMastercard
    }

    return FiCreditCard
  }, [])

  const [isDeleting, setIsDeleting] = useState(false);

  const sanitizeCreditCard = useMemo(() => {
    const { 
      id, 
      cardCvv, 
      cardBrand, 
      cardExpiry, 
      cardHolder, 
      cardNumber, 
      documentNumber 
    } = creditCard;

    return {
      id,
      cardCvv,
      cardBrand,
      cardExpiry,
      cardHolder,
      cardNumber,
      documentNumber,
    };
  }, [creditCard]);

  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      await api.delete(`/credit-card/${creditCard.id}`);
      reload();
    } catch (error) {
      console.error(error);

      alert('Erro ao deletar cartão');
    } finally {
      setIsDeleting(false);
    }
  }, [creditCard]);

  return (
    <Flex justifyContent="space-between">
      <ModalCard
        isOpen={isOpen}
        onClose={onClose}
        reload={reload}
        defaultValues={sanitizeCreditCard}
      />

      <HStack color="blackAlpha.900">
        <CardBrandIcon size="24" />
        <Text>**** **** **** {creditCard.cardNumber.slice(12, 16)}</Text>
      </HStack>

      <ButtonGroup>
        <Button
          size="sm"
          borderRadius="2"
          variant="outline"
          color="primary.900"
          colorScheme="blackAlpha"
          borderColor="primary.900"
          onClick={onOpen}
        >
          Editar
        </Button>

        <Button
          size="sm"
          variant="outline"
          colorScheme="red"
          borderRadius="2"
          onClick={handleDelete}
          isLoading={isDeleting}
        >
          Deletar
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
