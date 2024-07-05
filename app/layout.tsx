// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react';

export const metadata = {
  title: 'Savepad',
  description: 'The collaborative swipe file for growth teams.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
