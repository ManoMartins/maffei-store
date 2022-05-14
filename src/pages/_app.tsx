import { ChakraProvider } from '@chakra-ui/react';
import { CartContextProvider } from 'contexts/cart';
import { AppProps } from 'next/app';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
