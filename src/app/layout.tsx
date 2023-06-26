import EmotionProvider from '@/components/Providers/Emotion';
import React from 'react';

export const metadata = {
  title: 'Saúde BI',
  description: 'O sistema de gestão de BI para a área da saúde!',
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
