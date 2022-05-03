import { CustomProvider } from 'rsuite'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/styles/global'
import theme from '../global/styles/theme'

import 'rsuite/dist/rsuite.min.css'; 
import { CartContextProvider } from '../contexts/cart';

function MyApp({ Component, pageProps }) {
  return (
    <CustomProvider theme='dark'>
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <Component {...pageProps} />

          <GlobalStyle />
        </CartContextProvider>
      </ThemeProvider>
    </CustomProvider>
  )
}

export default MyApp
