import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Secret Santa',
  description: 'Secret Santa for Maciej Zając',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="winter-is-coming">
          <div className="snow snow--near"></div>
          <div className="snow snow--near snow--alt"></div>

          <div className="snow snow--mid"></div>
          <div className="snow snow--mid snow--alt"></div>

          <div className="snow snow--far"></div>
          <div className="snow snow--far snow--alt"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
