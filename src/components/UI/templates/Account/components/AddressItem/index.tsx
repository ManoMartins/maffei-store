import { useCallback, useMemo, useState } from 'react';

import api from 'services';

import ModalAddress from 'components/UI/organisms/Modals/ModalAddress';

import {
  Text,
  Flex,
  Stack,
  Button,
  HStack,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';

import { IAddress } from 'types/IAddress';

interface IAddressItemProps {
  address: IAddress;
  reload: () => void;
}

export default function AddressItem({ address, reload }: IAddressItemProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [isDeleting, setIsDeleting] = useState(false);

  const sanitizeAddress = useMemo(() => {
    const {
      id,
      street,
      streetType,
      number,
      complement,
      neighborhood,
      cityId,
      stateId,
      zipCode,
    } = address;

    return {
      id,
      street,
      number,
      cityId,
      stateId,
      zipCode,
      complement,
      streetType,
      neighborhood,
    };
  }, [address]);

  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      await api.delete(`/address/${address.id}`);
      reload();
    } catch (error) {
      console.error(error);

      alert('Erro ao deletar endereço');
    } finally {
      setIsDeleting(false);
    }
  }, [address.id]);

  return (
    <Flex justifyContent="space-between">
      <ModalAddress
        isOpen={isOpen}
        reload={reload}
        onClose={onClose}
        defaultValues={sanitizeAddress}
      />

      <Stack color="blackAlpha.900">
        <HStack>
          <FiHome />
          <Text fontWeight="bold">{address.streetType}</Text>
        </HStack>

        <Text>
          {address.street} {address.number}, {address.neighborhood},{' '}
          {address.city.name} {address.state.initials}, {address.zipCode}{' '}
          {address.complement}
        </Text>
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
          isLoading={isDeleting}
          onClick={handleDelete}
        >
          Deletar
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
