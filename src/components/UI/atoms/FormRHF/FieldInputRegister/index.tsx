import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import FieldInput, { IFieldInputProps } from '../../FieldInput';

type IFieldInputRegisterProps<T> = IFieldInputProps & {
  name: Path<T>;
  error?: FieldError;
  register: UseFormRegister<T>;
};

export default function FieldInputRegister<T extends FieldValues>({
  name,
  error,
  register,
  ...rest
}: IFieldInputRegisterProps<T>) {
  return <FieldInput error={error} {...rest} {...register(name)} />;
}
