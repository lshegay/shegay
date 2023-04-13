import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['cyrillic'], variable: '--font-inter' });
const radwave = localFont({
  src: '../fonts/radwave.otf',
  variable: '--font-radwave',
});
const roadrage = localFont({
  src: '../fonts/roadrage.otf',
  variable: '--font-roadrage',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF50B9" />
      </Head>
      <main
        className={`${radwave.variable} ${roadrage.variable} ${inter.variable} font-sans antialiased`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
