import '~/styles/global.css';

import Head from 'next/head';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '~/store';
import defaultTheme from '~/styles/themes';

import type { AppProps } from 'next/app';
import ErrorBoundary from '~/components/common/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<b>Loading</b>}>
      <Head>
        <title>NextJS Restful API</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
}
