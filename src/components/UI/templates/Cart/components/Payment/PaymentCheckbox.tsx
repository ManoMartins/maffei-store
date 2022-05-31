import {
  Box,
  Text,
  Flex,
  chakra,
  useCheckbox,
  UseCheckboxProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IPaymentCheckboxProps extends UseCheckboxProps {
  label: string | ReactNode;
  value: string;
}

export default function PaymentCheckbox(props: IPaymentCheckboxProps) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  const { label } = props;

  return (
    <chakra.label
      flex="2"
      px={3}
      py={1}
      h="12"
      w="full"
      rounded="2"
      bg="blackAlpha.100"
      display="flex"
      cursor="pointer"
      gridColumnGap={2}
      flexDirection="row"
      alignItems="center"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />

      <Flex
        w={4}
        h={4}
        border="2px solid"
        alignItems="center"
        justifyContent="center"
        borderColor="primary.900"
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="primary.900" />}
      </Flex>

      <Text {...getLabelProps()}>{label}</Text>
    </chakra.label>
  );
}
