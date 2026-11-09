import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Problems } from '@/components/Problems';
import { HowItWorks } from '@/components/HowItWorks';
import { Services } from '@/components/Services';
import { Differentials } from '@/components/Differentials';
import { Store } from '@/components/Store';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import type { Brand } from '@/lib/brands';

// A página completa do site. Com `brand`, vira a versão da marca para o Google Ads:
// muda o título do topo, o texto, as linhas atendidas, a mensagem do WhatsApp do
// topo, os defeitos comuns e as primeiras perguntas do FAQ. O resto é igual.
export function SitePage({ brand }: { brand?: Brand }) {
  return (
    <>
      <Header />
      <main>
        <Hero brand={brand} />
        <SocialProof brand={brand} />
        <Problems brand={brand} />
        <HowItWorks />
        <Services />
        <Differentials />
        <Store />
        <Testimonials />
        <Faq brand={brand} />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
