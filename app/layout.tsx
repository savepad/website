import './globals.css';
import { ReactNode } from 'react';

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
      <body>
        {children}
      </body>
    </html>
  );
}