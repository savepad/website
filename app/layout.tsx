import './globals.css';
import { ReactNode } from 'react';
import CookieConsent from '@/components/CookieConsent';
import { CSPostHogProvider } from './providers'

export const metadata = {
  title: 'Savepad',
  description: 'Collaborative Swipe File and Knowledge Base for growth teams',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.savepad.app/',
    siteName: 'Savepad',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savepadapp',
    creator: '@gunnyganatra',
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