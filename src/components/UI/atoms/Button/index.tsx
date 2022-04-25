import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant: keyof typeof S.ButtonVariant;
}

export const Button = ({ label, variant, ...rest }: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      {label}
    </S.Container>
  );
};
