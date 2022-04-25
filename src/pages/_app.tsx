import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/styles/global'
import theme from '../global/styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
