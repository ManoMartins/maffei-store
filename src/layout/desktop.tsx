import { Box } from '@chakra-ui/react';
import Header from 'components/UI/molecules/Header';
import { ReactNode } from 'react';

interface IDesktopProps {
  children: ReactNode;
}

export default function Desktop({ children }: IDesktopProps) {
  return (
    <Box maxWidth="1250px" mx="auto" px="8" py="10">
      <Header />

      {children}
    </Box>
  );
}
