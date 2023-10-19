import React from 'react';
import EmotionProvider from '@/components/Providers/Emotion';

export const metadata = {
  title: {
    default: 'Saúde BI',
    template: '%s - Saúde BI',
  },
  description: 'O sistema de gestão de BI para a área da saúde!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
