import { CartContextProvider } from '../contexts/cart';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
