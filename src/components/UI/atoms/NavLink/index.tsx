import React from 'react';
import * as S from './styles';

type NavLinkProps = {
  href: string
  label: string
  variant?: keyof typeof S.LinkVariant
}

export const NavLink = ({ 
  href, 
  label,
  variant = 'ghost',
}: NavLinkProps) => {
  return (
    <S.Container href={href}>
      <S.Content variant={variant}>{label}</S.Content>
    </S.Container>
  );
};
