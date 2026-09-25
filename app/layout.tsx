import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fajer Al-Ghanim — Graphic Design Portfolio',
  description:
    'Graphic design student portfolio of Fajer Al-Ghanim (American University of Kuwait), featuring visual identity, editorial layouts, packaging, and poster design in English and Arabic.',
  openGraph: {
    title: 'Fajer Al-Ghanim — Graphic Design Portfolio',
    description:
      'Graphic design student portfolio of Fajer Al-Ghanim (American University of Kuwait), featuring visual identity, editorial layouts, packaging, and poster design in English and Arabic.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_KW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fajer Al-Ghanim — Graphic Design Portfolio',
    description:
      'Graphic design student portfolio of Fajer Al-Ghanim (American University of Kuwait), featuring visual identity, editorial layouts, packaging, and poster design in English and Arabic.',
  },
};

export const viewport: Viewport = {
  themeColor: '#F4F1EA',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className="min-h-screen bg-[#F4F1EA] text-[#141414] antialiased selection:bg-[#FF4B2B] selection:text-[#F4F1EA]">
        {children}
      </body>
    </html>
  );
}
