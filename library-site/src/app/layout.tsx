import Link from 'next/link';
import Head from 'next/head';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactElement, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Library',
  description: 'Book management system',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <Head>
        <title>Liste</title>
      </Head>
      <body>
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-center space-x-10">
            <li>
              <Link href="/">
                <div className="text-white font-bold text-[24px] hover:border-white hover:text-black hover:bg-white border-b-2 border-transparent">
                  Accueil
                </div>
              </Link>
            </li>
            <li>
              <Link href="/books">
                <div className="text-white font-bold text-[24px] hover:border-white hover:text-black hover:bg-white border-b-2 border-transparent">
                  Liste des livres
                </div>
              </Link>
            </li>
            <li>
              <Link href="/authors">
                <div className="text-white font-bold text-[24px] hover:border-white hover:text-black hover:bg-white border-b-2 border-transparent">
                  Liste des auteurs
                </div>
              </Link>
            </li>
            <li>
              <Link href="/users">
                <div className="text-white font-bold text-[24px] hover:border-white hover:text-black hover:bg-white border-b-2 border-transparent">
                  Liste des utilisateurs
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
