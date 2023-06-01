import NextApp, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { baseApi } from '@/store/api';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { theme } from '@/utils/theme';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <MantineProvider
          theme={{ ...theme, colorScheme: 'light' }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ApiProvider api={baseApi}>
            <Component {...pageProps} />
            <Notifications />
          </ApiProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};
