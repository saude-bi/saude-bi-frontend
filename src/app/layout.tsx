import EmotionProvider from '@/components/Providers/Emotion';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html>
      <head></head>
      <body>
        <EmotionProvider>{children}</EmotionProvider>
      </body>
    </html>
  );
}
