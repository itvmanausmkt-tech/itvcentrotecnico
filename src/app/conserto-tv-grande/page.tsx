import type { Metadata } from 'next';
import { BrandPage } from '@/components/brand/BrandPage';
import { brandBySlug } from '@/lib/brands';

const brand = brandBySlug('conserto-tv-grande')!;

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  keywords: brand.keywords,
  alternates: { canonical: '/conserto-tv-grande/' },
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Page() {
  return <BrandPage brand={brand} />;
}
