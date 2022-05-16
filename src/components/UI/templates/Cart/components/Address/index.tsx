import { useMemo } from 'react';

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
import ModalAddress from 'components/UI/organisms/Modals/ModalAddress';

import { IAddress } from 'types/IAddress';

import AddressCard from './AddressCard';

interface IAaddressProps {
  addresses: IAddress[];
}

export default function Address({ addresses }: IAaddressProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

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
        addressType,
        neighborhood,
      } = address;

      return {
        value: id,
        label: (
          <Stack>
            <HStack>
              <FaHome />
              <Text>{addressType}</Text>
            </HStack>

            <Text>
              {street} {number}, {neighborhood}, {city} {state}, {zipCode}{' '}
              {complement}
            </Text>
          </Stack>
        ),
      };
    });
  }, [addresses]);

  // const options = [
  //   {
  //     value: '1',
  //     label: (
  //       <Stack>
  //         <HStack>
  //           <FaHome />
  //           <Text>Casa</Text>
  //         </HStack>

  //         <Text>
  //           Rua bandeirantes 1140, Jardim Revista, Suzano SP, 08694-180
  //         </Text>
  //       </Stack>
  //     ),
  //   },
  // ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Box>
      <ModalAddress isOpen={isOpen} onClose={onClose} />

      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Endereços
      </Title>

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
