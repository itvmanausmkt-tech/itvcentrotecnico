import type { Metadata } from 'next';
import { SitePage } from '@/components/SitePage';
import { brandBySlug } from '@/lib/brands';

const brand = brandBySlug('conserto-tv-lg')!;

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  keywords: brand.keywords,
  alternates: { canonical: '/conserto-tv-lg/' },
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Page() {
  return <SitePage brand={brand} />;
}
