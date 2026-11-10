import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LgHero } from '@/components/lg/LgHero';
import { LgProblems } from '@/components/lg/LgProblems';
import { LgCta } from '@/components/lg/LgCta';
import { LgDiferenciais } from '@/components/lg/LgDiferenciais';
import { LgFaq } from '@/components/lg/LgFaq';
import { LgLinhas } from '@/components/lg/LgLinhas';
import { LgServicos } from '@/components/lg/LgServicos';
import { LgLoja } from '@/components/lg/LgLoja';
import { LgFAB } from '@/components/lg/LgFAB';
import { LgComoFunciona } from '@/components/lg/LgComoFunciona';
import { LgDepoimentos } from '@/components/lg/LgDepoimentos';

// Landing page LG para o Google Ads. Mesma ordem de seções da página inicial,
// mas todas as seções com versão própria da LG em src/components/lg/ (ex.: Como
// funciona em linha do tempo, Depoimentos claros, FAQ com o cartão do técnico).
// A página inicial e os componentes dela não foram alterados.

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
        <LgLinhas />
        <LgProblems />
        <LgComoFunciona />
        <LgServicos />
        <LgDiferenciais />
        <LgLoja />
        <LgDepoimentos />
        <LgFaq destaque />
        <LgCta />
      </main>
      <Footer />
      <LgFAB />
    </>
  );
}
