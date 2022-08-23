import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  Input,
  FormLabel,
  InputProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

export interface IFieldInputProps extends InputProps {
  label: string;
  error?: FieldError;
  formControlProps?: FormControlProps;
}

const FieldInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  IFieldInputProps
> = ({ label, error, formControlProps, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      {label && <FormLabel>{label}</FormLabel>}

      <Input
        id={rest.name}
        name={rest.name}
        variant="filled"
        borderRadius="2"
        bgColor="blackAlpha.100"
        placeholder="Digite aqui..."
        _focus={{ bgColor: 'blackAlpha.50' }}
        _hover={{ bgColor: 'blackAlpha.200' }}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default forwardRef(FieldInputBase);
