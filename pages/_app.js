import '../styles/globals.css';
import { AppProps } from 'next/app';
import { SessionProvider as AuthProvider } from 'next-auth/react';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <AuthProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp;