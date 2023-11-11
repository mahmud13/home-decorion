import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import '../styles/globals.css';

let title = 'Instant and Affordable Interior Design';
let description = 'Making the Iterior Design Instant and Affordable';
let ogimage = '/decorion.png';
let sitename = 'HomeDecorion';

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: 'https://homedecorion.com',
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-ful">
      <body className="text-white h-full">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
