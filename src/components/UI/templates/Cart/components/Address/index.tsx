import { get } from 'lodash';
import { useEffect, useMemo, useState } from 'react';

import api from 'services';

import { useAuth } from 'contexts/auth';

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
import { FaHome, FaPlus } from 'react-icons/fa';

import Title from 'components/UI/atoms/Title';
import Loader from 'components/UI/atoms/Loader';
import ModalAddress from 'components/UI/organisms/Modals/ModalAddress';

import { IAddress } from 'types/IAddress';

import AddressCard from './AddressCard';

export default function Address() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useAuth();

  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const hasAddresses = addresses.length > 0;

  useEffect(() => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    api
      .get('/address')
      .then(response => {
        setAddresses(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isAuthenticated]);

  const options = useMemo(() => {
    return addresses.map(address => {
      const {
        id,
        city,
        number,
        state,
        street,
        zipCode,
        complement,
        streetType,
        neighborhood,
      } = address;

      return {
        value: id,
        label: (
          <Stack>
            <HStack>
              <FaHome />
              <Text>{streetType}</Text>
            </HStack>

            <Text>
              {street} {number}, {neighborhood}, {city.name} {state.initials},{' '}
              {zipCode} {complement}
            </Text>
          </Stack>
        ),
      };
    });
  }, [addresses]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'addressId',
    defaultValue: get(addresses, '[0].id', ''),
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Box>
      <ModalAddress isOpen={isOpen} onClose={onClose} />

      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Endereços
      </Title>

      {isLoading && (
        <Box my="6">
          <Loader />
        </Box>
      )}

      {!hasAddresses && !isLoading && (
        <Stack>
          <Text fontSize="sm" color="blackAlpha.500" my="2">
            Você ainda não possui endereços.
          </Text>
        </Stack>
      )}

      {hasAddresses && (
        <VStack {...group}>
          {options.map(value => {
            const radio = getRadioProps({ value: value.value });
            return (
              <AddressCard key={value} {...radio}>
                {value.label}
              </AddressCard>
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

          <Text>Adicionar endereço</Text>
        </HStack>
      </Button>
    </Box>
  );
}
