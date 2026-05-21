import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { GoogleAdsTracker } from '@/components/GoogleAdsTracker';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'optional',
  weight: ['600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Assistência Técnica de TVs em Manaus`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    'assistência técnica de TV em Manaus',
    'conserto de TV Manaus',
    'reparo Smart TV Manaus',
    'troca de display TV',
    'iTV Centro Técnico',
    'conserto TV Samsung Manaus',
    'conserto TV LG Manaus',
  ],
  authors: [{ name: 'iTV Centro Técnico' }],
  openGraph: {
    title: `${site.name} — Assistência Técnica de TVs em Manaus`,
    description: site.description,
    locale: 'pt_BR',
    type: 'website',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/tecnico-768w.avif"
          type="image/avif"
          imageSrcSet="/images/tecnico-480w.avif 480w, /images/tecnico-768w.avif 768w, /images/tecnico-1200w.avif 1200w"
          imageSizes="(min-width: 1024px) 480px, 100vw"
          fetchPriority="high"
        />
      </head>
      <body>
        {children}
        <GoogleAdsTracker />
      </body>
    </html>
  );
}
