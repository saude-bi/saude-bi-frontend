'use client';

import { CacheProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import { theme } from '@/utils/theme';
import { baseApi } from '@/store/api';
import { useGluedEmotionCache } from '@/lib/emotionNextjsGlue';

export default function EmotionProvider({ children }: { children: React.ReactNode }) {
  const cache = useGluedEmotionCache();
  return (
    <CacheProvider value={cache}>
      {/* You can wrap ColorSchemeProvider right here but skipping that for brevity ;) */}
      <MantineProvider
        theme={{ ...theme, colorScheme: 'light' }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
      >
        <ModalsProvider>
          <ApiProvider api={baseApi}>
            {children}
            <Notifications position="top-center" autoClose={5000} />
          </ApiProvider>
        </ModalsProvider>
      </MantineProvider>
    </CacheProvider>
  );
}
