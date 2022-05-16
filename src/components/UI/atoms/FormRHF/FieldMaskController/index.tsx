import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import FieldMask, { FieldMaskProps } from '../../FieldMask';

type IFieldMaskControllerProps<T> = FieldMaskProps & {
  name: Path<T>;
  control: Control<T>;
};

export default function FieldMaskController<T extends FieldValues>({
  name,
  control,
  ...rest
}: IFieldMaskControllerProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <FieldMask {...rest} {...field} />}
    />
  );
}
