// Vendors
import React from 'react';
import { FieldError } from 'react-hook-form';
import InputMask, { Props as InputMaskProps } from 'react-input-mask';

// Styles
import {
  Input,
  FormLabel,
  InputProps,
  InputGroup,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

// Interfaces
export type FieldMaskProps = InputProps &
  InputMaskProps & {
    name: string;
    label?: string;
    error?: FieldError;
    isRequired?: boolean;
  };

const FieldMaskBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FieldMaskProps
> = (props: FieldMaskProps, ref) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */

  const { name, label, error, ...rest } = props;

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        <Input
          as={InputMask}
          id={name}
          variant="filled"
          borderRadius="2"
          bgColor="blackAlpha.100"
          placeholder="Digite aqui..."
          _focus={{ bgColor: 'blackAlpha.50' }}
          _hover={{ bgColor: 'blackAlpha.200' }}
          ref={ref}
          _disabled={{
            opacity: 0.7,
            cursor: 'not-allowed',
          }}
          {...rest}
        />
      </InputGroup>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default React.forwardRef(FieldMaskBase);
