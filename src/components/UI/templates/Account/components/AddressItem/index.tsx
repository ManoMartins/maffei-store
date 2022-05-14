import {
  Text,
  Button,
  Flex,
  HStack,
  Stack,
  useDisclosure,
  ButtonGroup,
} from '@chakra-ui/react';
import ModalAddress from 'components/UI/organisms/Modals/ModalAddress';
import { useCallback } from 'react';
import { FiHome } from 'react-icons/fi';

export default function AddressItem() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleDelete = useCallback(() => {
    alert('Delete address');
  }, []);

  return (
    <Flex justifyContent="space-between">
      <ModalAddress isOpen={isOpen} onClose={onClose} />

      <Stack color="blackAlpha.900">
        <HStack>
          <FiHome />
          <Text fontWeight="bold">Casa</Text>
        </HStack>

        <Text>Rua bandeirantes 1140, Jardim Revista, Suzano SP, 08694-180</Text>
      </Stack>

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
