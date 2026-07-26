import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SchemaScript } from '@/components/SchemaScript';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.defaultMeta.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.defaultMeta.description,
  keywords: [
    "freelance website developer India",
    "website development services",
    "Shopify developer",
    "SEO expert India",
    "Google Business Profile optimization",
    "Mohd Ahmad web developer",
    "website developer Aligarh"
  ],
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  publisher: siteConfig.name,
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
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.baseUrl,
    title: siteConfig.defaultMeta.title,
    description: siteConfig.defaultMeta.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultMeta.title,
    description: siteConfig.defaultMeta.description,
  },
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaScript />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-700 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="pt-20 flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
