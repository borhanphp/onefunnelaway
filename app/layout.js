import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://www.onefunnelaway.com'),
  title: {
    default: 'One Funnel Away | ClickFunnels Affiliate Resources and Guides',
    template: '%s | One Funnel Away'
  },
  description: 'Find the best ClickFunnels resources, honest reviews, and comparison guides to help you build high-converting sales funnels for your business.',
  keywords: ['ClickFunnels', 'sales funnels', 'marketing funnels', 'landing pages', 'Russell Brunson', 'digital marketing'],
  authors: [{ name: 'One Funnel Away Team' }],
  creator: 'One Funnel Away',
  publisher: 'One Funnel Away',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'One Funnel Away | ClickFunnels Affiliate Resources and Guides',
    description: 'Find the best ClickFunnels resources, honest reviews, and comparison guides to help you build high-converting sales funnels for your business.',
    url: 'https://www.onefunnelaway.com',
    siteName: 'One Funnel Away',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'One Funnel Away',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Funnel Away | ClickFunnels Affiliate Resources and Guides',
    description: 'Find the best ClickFunnels resources, honest reviews, and comparison guides to help you build high-converting sales funnels for your business.',
    images: ['/twitter-image.jpg'],
    creator: '@onefunnelaway',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'manifest', url: '/manifest.json' }
    ],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
  alternates: {
    canonical: 'https://www.onefunnelaway.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
