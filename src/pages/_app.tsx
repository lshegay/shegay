import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo
        title="Leonid Shegay — Versatile Software Developer"
        titleTemplate="%s — Leonid Shegay"
        themeColor="#000000"
        description="Leonid Shegay is a versatile software engineer
        and full-stack web developer who is very passionate about IT!"
        openGraph={{
          type: 'website',
          profile: {
            firstName: 'Leonid',
            lastName: 'Shegay',
            username: 'lshegay',
          },
          images: [
            {
              url: '/opengraph.png',
              width: 1200,
              height: 630,
              alt: 'Thumbnail — Leonid Shegay',
            },
          ],
        }}
      />
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
