import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css'
import { ReactNode } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import LayoutProvider from './provider/_app';
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        <LayoutProvider>
        {children}
        </LayoutProvider>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
