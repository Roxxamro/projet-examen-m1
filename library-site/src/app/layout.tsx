import Link from 'next/link';


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
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
            <Link href="/liste_livres">Liste des livres</Link>
            </li>
            <li>
            <Link href="/liste_auteurs">Liste des auteurs</Link>
            </li>
            <li>
            <Link href="/liste_utilisateurs">Liste des utilisateurs</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
