import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormLabel,
  SelectProps,
  FormControl,
  FormControlProps,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

export interface IFieldSelectProps extends SelectProps {
  label: string;
  error?: FieldError;
  formControlProps?: FormControlProps;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const FieldSelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  IFieldSelectProps
> = ({ label, error, options, formControlProps, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      {label && <FormLabel>{label}</FormLabel>}

      <Select
        variant="filled"
        borderRadius="2"
        bgColor="blackAlpha.100"
        _focus={{ bgColor: 'blackAlpha.50' }}
        _hover={{ bgColor: 'blackAlpha.200' }}
        ref={ref}
        {...rest}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default forwardRef(FieldSelectBase);
