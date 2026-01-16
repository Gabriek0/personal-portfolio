import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from './providers';

const generalSans = localFont({
  src: [
    {
      path: '../public/fonts/GeneralSans-Variable.ttf',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeneralSans-VariableItalic.ttf',
      weight: '200 700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-general-sans',
});

export const metadata: Metadata = {
  title: 'Gh; Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${generalSans.className}`}
    >
      <body
        suppressHydrationWarning
        className={`bg-background dark:bg-background`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
