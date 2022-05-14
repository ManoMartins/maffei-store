import {
  Text,
  Flex,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react';

export default function Quantity() {
  return (
    <FormControl>
      <Flex alignItems="center">
        <Text fontWeight="medium" color="blackAlpha.600" fontSize="xs">
          Quantidade
        </Text>

        <NumberInput ml="2" w="14" size="xs" variant="filled">
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
