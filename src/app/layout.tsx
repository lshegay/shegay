import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import classNames from 'classnames';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const radwave = localFont({
  src: '../fonts/radwave.otf',
  variable: '--font-radwave',
});

export const metadata: Metadata = {
  title: 'Leonid Shegay — Versatile Software Developer',
  description:
    'Leonid Shegay is a versatile software engineer and full-stack web developer who is very passionate about IT!',
  manifest: '/favicons/site.webmanifest',
  icons: { shortcut: '/favicon.ico' },
  openGraph: {
    type: 'website',
    /* profile: {
      firstName: 'Leonid',
      lastName: 'Shegay',
      username: 'lshegay',
    }, */
    images: [
      {
        url: '/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Thumbnail — Leonid Shegay',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  initialScale: 1.0,
  width: 'device-width',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={classNames('dark', inter.className, radwave.variable)}>
      <body className="dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}
