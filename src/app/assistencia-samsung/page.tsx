import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SamsungHero } from '@/components/samsung/SamsungHero';
import { SamsungProblems } from '@/components/samsung/SamsungProblems';
import { SamsungCta } from '@/components/samsung/SamsungCta';
import { SamsungDiferenciais } from '@/components/samsung/SamsungDiferenciais';
import { SamsungFaq } from '@/components/samsung/SamsungFaq';
import { SamsungLinhas } from '@/components/samsung/SamsungLinhas';
import { SamsungServicos } from '@/components/samsung/SamsungServicos';
import { SamsungLoja } from '@/components/samsung/SamsungLoja';
import { SamsungFAB } from '@/components/samsung/SamsungFAB';
import { SamsungComoFunciona } from '@/components/samsung/SamsungComoFunciona';
import { SamsungDepoimentos } from '@/components/samsung/SamsungDepoimentos';

// Landing page Samsung para o Google Ads (etapa 2): cópia fiel da página LG
// (/assistencia-lg/) trocando só a marca. Mesma ordem de seções da página inicial,
// mas todas as seções com versão própria da Samsung em src/components/samsung/ (ex.: Como
// funciona em linha do tempo, Depoimentos claros, FAQ com o cartão do técnico).
// A página inicial e os componentes dela não foram alterados.

const title = 'Assistência Técnica de TV Samsung em Manaus | Conserto de Smart TV Samsung';
const description =
  'Conserto de TV Samsung em Manaus: TV Samsung não liga, tela preta, linhas na tela e falha de iluminação. Diagnóstico e reparo com coleta grátis em casa e garantia de até 6 meses.';

export const metadata: Metadata = {
  title: { absolute: `${title} · iTV Centro Técnico` },
  description,
  keywords: [
    'conserto de tv samsung',
    'conserto tv samsung manaus',
    'assistência técnica samsung manaus',
    'tv samsung não liga',
    'tela de tv samsung com defeito',
    'reparo de smart tv samsung',
  ],
  alternates: { canonical: '/assistencia-samsung/' },
  openGraph: { title, description, locale: 'pt_BR', type: 'website' },
};

export default function AssistenciaSamsungPage() {
  return (
    <>
      <Header />
      <main>
        <SamsungHero />
        <SamsungLinhas />
        <SamsungProblems />
        <SamsungComoFunciona />
        <SamsungServicos />
        <SamsungDiferenciais />
        <SamsungLoja />
        <SamsungDepoimentos />
        <SamsungFaq destaque />
        <SamsungCta />
      </main>
      <Footer />
      <SamsungFAB />
    </>
  );
}
