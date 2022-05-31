import {
  Text,
  Flex,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputProps,
} from '@chakra-ui/react';

type QuantityProps = NumberInputProps;

export default function Quantity({ ...rest }: QuantityProps) {
  return (
    <FormControl>
      <Flex alignItems="center">
        <Text fontWeight="medium" color="blackAlpha.600" fontSize="xs">
          Quantidade
        </Text>

        <NumberInput ml="2" w="16" min={1} size="xs" variant="filled" {...rest}>
          <NumberInputField
            borderRadius="2"
            borderColor="blackAlpha.100"
            _hover={{ bgColor: 'whiteAlpha.300' }}
          />

          <NumberInputStepper>
            <NumberIncrementStepper />

            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
    </FormControl>
  );
}
