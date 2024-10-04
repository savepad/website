import './globals.css';
import { ReactNode } from 'react';
import CookieConsent from '@/components/CookieConsent';
import { CSPostHogProvider } from './providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Savepad',
  description: 'Collaborative swipe file, knowledge base, and bookmark manager.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.savepad.app/',
    siteName: 'Savepad',
    images: [
      {
        url: '/images/savepad-og.png',
        width: 1280,
        height: 720,
        alt: 'Savepad OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savepadapp',
    creator: '@gunnyganatra',
    images: ['/images/savepad-og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body>
          {children}
        </body>
        <CookieConsent />
      </CSPostHogProvider>
    </html>
  );
}
