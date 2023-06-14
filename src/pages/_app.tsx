import NextApp, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { ModalsProvider } from '@mantine/modals';
import { MantineProvider, ColorSchemeProvider, LoadingOverlay } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { baseApi } from '@/store/api';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { theme } from '@/utils/theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false)
  }, [router]);

  return (
    isLoading ? (
      <LoadingOverlay visible />
    ) : (
      <>
        <Head>
          <title>Saude BI</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>

        <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => { }}>
          <MantineProvider
            theme={{ ...theme, colorScheme: 'light' }}
            withGlobalStyles
            withNormalizeCSS
          >
            <ModalsProvider>
              <ApiProvider api={baseApi}>
                <Component {...pageProps} />
                <Notifications position="top-center" autoClose={5000} />
              </ApiProvider>
            </ModalsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </>
    )
  )
}
App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
