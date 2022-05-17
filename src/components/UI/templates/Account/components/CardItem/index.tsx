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
import { FaCcMastercard } from 'react-icons/fa';

import { ICreditCard } from 'types/ICreditCard';

interface ICreditCardItemProps {
  creditCard: ICreditCard;
}

export default function CardItem({ creditCard }: ICreditCardItemProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [isDeleting, setIsDeleting] = useState(false);

  const sanitizeCreditCard = useMemo(() => {
    const { id, cardCvv, cardExpiry, cardHolder, cardNumber, documentNumber } =
      creditCard;

    return {
      id,
      cardCvv,
      cardExpiry,
      cardHolder,
      cardNumber,
      documentNumber,
    };
  }, [creditCard]);

  const handleDelete = useCallback(() => {
    try {
      setIsDeleting(true);
      api.delete(`/credit-card/${creditCard.id}`);
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
        defaultValues={sanitizeCreditCard}
      />

      <HStack color="blackAlpha.900">
        <FaCcMastercard size="24" />
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
