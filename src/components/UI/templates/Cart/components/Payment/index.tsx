import {
  Box,
  Text,
  VStack,
  Button,
  HStack,
  useRadioGroup,
  useDisclosure,
} from '@chakra-ui/react';
import { FaCcMastercard, FaCcVisa, FaPlus } from 'react-icons/fa';

import Title from 'components/UI/atoms/Title';
import ModalCard from 'components/UI/organisms/Modals/ModalCard';
import PaymentCard from './PaymentCard';

export default function Payment() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const options = [
    {
      value: '1',
      label: (
        <HStack>
          <FaCcVisa />
          <Text>**** **** **** 1234</Text>
        </HStack>
      ),
    },
    {
      value: '2',
      label: (
        <HStack>
          <FaCcMastercard />
          <Text>**** **** **** 1234</Text>
        </HStack>
      ),
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Box>
      <ModalCard isOpen={isOpen} onClose={onClose} />
      <Title stackProps={{ mb: '2' }} placement="bottom" fontSize="lg">
        Pagamentos
      </Title>

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
