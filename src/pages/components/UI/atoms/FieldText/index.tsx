import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string;
}

const FieldTextBase: React.ForwardRefRenderFunction<HTMLInputElement, FieldProps> = ({
  name,
  label,
  ...rest
}, ref) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>

      <S.Content ref={ref} id={name} name={name} placeholder='Digite aqui...' {...rest} />
    </S.Container>
  );
};

export const FieldText = React.forwardRef(FieldTextBase)
