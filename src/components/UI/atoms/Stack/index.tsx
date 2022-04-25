import React from 'react';
import * as S from './styles';

type StackProps = {
  children: React.ReactNode;
  spacing?: string
}

export const Stack = ({ children, spacing }: StackProps) => {
  return (
    <S.Container spacing={spacing}>
      {children}
    </S.Container>
  );
};
