import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { SocialProof } from '@/components/SocialProof';
import { HowItWorks } from '@/components/HowItWorks';
import { Services } from '@/components/Services';
import { Differentials } from '@/components/Differentials';
import { Store } from '@/components/Store';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { LgHero } from '@/components/lg/LgHero';
import { LgProblems } from '@/components/lg/LgProblems';
import { LgCta } from '@/components/lg/LgCta';
import { brandBySlug } from '@/lib/brands';

// Landing page LG para o Google Ads (etapa 1). Mesma ordem de seções da página
// inicial; só o topo e "O que resolvemos" são próprios da LG. A página inicial
// e os componentes dela não foram alterados.
const lg = brandBySlug('conserto-tv-lg')!;

const title = 'Assistência Técnica de TV LG em Manaus | Conserto de Smart TV LG';
const description =
  'Conserto de TV LG em Manaus: TV LG não liga, tela preta, linhas na tela e falha de iluminação. Diagnóstico e reparo com coleta grátis em casa e garantia de até 6 meses.';

export const metadata: Metadata = {
  title: { absolute: `${title} · iTV Centro Técnico` },
  description,
  keywords: [
    'conserto de tv lg',
    'conserto tv lg manaus',
    'assistência técnica lg manaus',
    'tv lg não liga',
    'tela de tv lg com defeito',
    'reparo de smart tv lg',
  ],
  alternates: { canonical: '/assistencia-lg/' },
  openGraph: { title, description, locale: 'pt_BR', type: 'website' },
};

export default function AssistenciaLgPage() {
  return (
    <>
      <Header />
      <main>
        <LgHero />
        <SocialProof brand={lg} />
        <LgProblems />
        <HowItWorks />
        <Services />
        <Differentials />
        <Store />
        <Testimonials />
        <Faq brand={lg} />
        <LgCta />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
