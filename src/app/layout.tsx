import NavBar from '@/components/Shared/navbar/NavBar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio of Fahima',
  description:
    'Frontend developer crafting responsive and user-friendly websites with modern tech like React, Tailwind, and JavaScript.',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative">
          <div className="absolute md:top-1/2 md:right-11 md:bottom-0 md:-translate-y-1/2">
            <NavBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
