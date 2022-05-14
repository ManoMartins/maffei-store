import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
  variantType?: 'secondary' | 'primary';
}

export default function Button({
  children,
  variantType = 'primary',
  ...rest
}: ButtonProps) {
  const styles = {
    primary: {
      borderRadius: '2',
      transition: 'all 0.2s ease-in-out',
      _hover: { filter: 'brightness(0.85)' },
      bgGradient: 'linear(to-r, #9146FF 0%, #9E5CFF 50%, #AB72FF 100%)',
    },
    secondary: {
      borderRadius: '2',
    },
  };

  return (
    <ChakraButton {...styles[variantType]} {...rest}>
      {children}
    </ChakraButton>
  );
}
