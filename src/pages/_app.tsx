import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from 'contexts/auth';
import { CartContextProvider } from 'contexts/cart';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <CartContextProvider>
          <NextNProgress />
          <Component {...pageProps} />
        </CartContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
