import {
  Path,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

import FieldSelect, { IFieldSelectProps } from '../../FieldSelect';

type IFieldSelectRegisterProps<T> = IFieldSelectProps & {
  name: Path<T>;
  error?: FieldError;
  register: UseFormRegister<T>;
};

export default function FieldSelectRegister<T extends FieldValues>({
  name,
  error,
  register,
  ...rest
}: IFieldSelectRegisterProps<T>) {
  return <FieldSelect error={error} {...rest} {...register(name)} />;
}
