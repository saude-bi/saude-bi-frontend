import EmotionProvider from '@/components/Providers/Emotion';
import React from 'react';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
