import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

import { IconBaseProps, IconType } from 'react-icons';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  icon: IconType
  iconProps?: IconBaseProps
}

export const IconButton = ({ icon: Icon, iconProps, ...rest }: IconButtonProps) => {
  return (
    <S.Container {...rest}>
      <Icon {...iconProps} /> 
    </S.Container>
  );
};
