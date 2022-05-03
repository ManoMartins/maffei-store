import React from 'react';
import { IconButton } from '../../atoms/IconButton';
import { NavLink } from '../../atoms/NavLink';
import * as S from './styles';

import { FiShoppingCart } from 'react-icons/fi'

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <div>
          <NavLink href='#' label='Home' />
          <NavLink href='#' label='Loja' />
        </div>

        <div>
          <IconButton  icon={FiShoppingCart} iconProps={{ color: '#FAFAFA', size: '18' }} />
          <NavLink href='login' label='Entrar' variant='solid' />
        </div>
      </S.Content>
    </S.Container>
  );
};
