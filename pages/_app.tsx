import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) => {
  return ()
  <Component {...pageProps} />
}

export default MyApp
