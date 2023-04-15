import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import Layout from '@/components/layout/Layout';
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
  const router = useRouter();

  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false;
      return true;
    });
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF50B9" />
      </Head>
      <Script id="scrollRestoration">{`window.history.scrollRestoration = "manual"`}</Script>
      <main
        className={`${radwave.variable} ${roadrage.variable} ${inter.variable}
        font-sans antialiased`}
      >
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window != 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Layout key={router.pathname}>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </main>
    </>
  );
}
