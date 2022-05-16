import { useCallback } from 'react';

import { FaCcMastercard } from 'react-icons/fa';
import {
  Flex,
  Text,
  Button,
  HStack,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';

import ModalCard from 'components/UI/organisms/Modals/ModalCard';

export default function CardItem() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleDelete = useCallback(() => {
    alert('Delete card');
  }, []);

  return (
    <Flex justifyContent="space-between">
      <ModalCard isOpen={isOpen} onClose={onClose} />

      <HStack color="blackAlpha.900">
        <FaCcMastercard size="24" />
        <Text>**** **** **** 1234</Text>
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
        >
          Deletar
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
