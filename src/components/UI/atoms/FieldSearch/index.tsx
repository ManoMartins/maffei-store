import {
  FormControl,
  FormControlProps,
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

interface IFieldSearchProps extends InputProps {
  formControl?: FormControlProps;
  inputGroupProps?: InputGroupProps;
}

export default function FieldSearch({
  inputGroupProps,
  ...rest
}: IFieldSearchProps) {
  return (
    <FormControl>
      <InputGroup {...inputGroupProps}>
        <Input
          variant="filled"
          borderRadius="2"
          bgColor="whiteAlpha.200"
          borderColor="whiteAlpha.200"
          _hover={{ bgColor: 'whiteAlpha.300' }}
          _focus={{ bgColor: 'whiteAlpha.200' }}
          placeholder="Buscar por ..."
          {...rest}
        />

        <InputRightElement>
          <FiSearch />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}
