import { Box, useRadio } from '@chakra-ui/react';

export default function AddressCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const { children } = props;

  return (
    <Box as="label" width="full">
      <input {...input} />
      <Box
        {...checkbox}
        width="full"
        bgColor="blackAlpha.100"
        cursor="pointer"
        fontWeight="light"
        borderWidth="1px"
        borderRadius="2"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
}
