import { FaCcMastercard } from 'react-icons/fa';
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import ModalCard from 'components/UI/organisms/Modals/ModalCard';
import { useCallback } from 'react';

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
          variant="outline"
          colorScheme="blackAlpha"
          borderColor="primary.900"
          color="primary.900"
          borderRadius="2"
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
