import {
  Input,
  FormLabel,
  InputProps,
  FormControl,
  FormControlProps,
} from '@chakra-ui/react';

interface IFieldInputProps extends InputProps {
  label: string;
  formControlProps?: FormControlProps;
}

export default function FieldInput({
  label,
  formControlProps,
  ...rest
}: IFieldInputProps) {
  return (
    <FormControl {...formControlProps}>
      {label && <FormLabel>{label}</FormLabel>}

      <Input
        variant="filled"
        borderRadius="2"
        bgColor="blackAlpha.100"
        placeholder="Digite aqui..."
        _focus={{ bgColor: 'blackAlpha.50' }}
        _hover={{ bgColor: 'blackAlpha.200' }}
        {...rest}
      />
    </FormControl>
  );
}
