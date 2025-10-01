import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dimensions Print - PCB Assembly and Custom Automation',
  description: 'Professional desktop pick and place machine for PCB assembly and custom automation. High-precision component placement for prototypes and production.',
  icons: {
    icon: './Dimensionsprintlogo',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
