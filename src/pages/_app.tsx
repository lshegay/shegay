import type { AppProps } from 'next/app';
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
    <main
      className={`${radwave.variable} ${roadrage.variable} ${inter.variable} font-sans antialiased`}
    >
      <Component {...pageProps} />
    </main>
  );
}
