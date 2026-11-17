import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TclHero } from '@/components/tcl/TclHero';
import { TclProblems } from '@/components/tcl/TclProblems';
import { TclCta } from '@/components/tcl/TclCta';
import { TclDiferenciais } from '@/components/tcl/TclDiferenciais';
import { TclFaq } from '@/components/tcl/TclFaq';
import { TclLinhas } from '@/components/tcl/TclLinhas';
import { TclServicos } from '@/components/tcl/TclServicos';
import { TclLoja } from '@/components/tcl/TclLoja';
import { TclFAB } from '@/components/tcl/TclFAB';
import { TclComoFunciona } from '@/components/tcl/TclComoFunciona';
import { TclDepoimentos } from '@/components/tcl/TclDepoimentos';

// Landing page TCL para o Google Ads (etapa 3): cópia fiel da página Samsung
// (/assistencia-samsung/) trocando só a marca. Mesma ordem de seções da página inicial,
// mas todas as seções com versão própria da TCL em src/components/tcl/ (ex.: Como
// funciona em linha do tempo, Depoimentos claros, FAQ com o cartão do técnico).
// A página inicial e os componentes dela não foram alterados.

const title = 'Assistência Técnica de TV TCL em Manaus | Conserto de Smart TV TCL';
const description =
  'Conserto de TV TCL em Manaus: TV TCL não liga, tela preta, linhas na tela e falha de iluminação. Diagnóstico e reparo com coleta grátis em casa e garantia de até 6 meses.';

export const metadata: Metadata = {
  title: { absolute: `${title} · iTV Centro Técnico` },
  description,
  keywords: [
    'conserto de tv tcl',
    'conserto tv tcl manaus',
    'assistência técnica tcl manaus',
    'tv tcl não liga',
    'tela de tv tcl com defeito',
    'reparo de smart tv tcl',
  ],
  alternates: { canonical: '/assistencia-tcl/' },
  openGraph: { title, description, locale: 'pt_BR', type: 'website' },
};

export default function AssistenciaTclPage() {
  return (
    <>
      <Header />
      <main>
        <TclHero />
        <TclLinhas />
        <TclProblems />
        <TclComoFunciona />
        <TclServicos />
        <TclDiferenciais />
        <TclLoja />
        <TclDepoimentos />
        <TclFaq destaque />
        <TclCta />
      </main>
      <Footer />
      <TclFAB />
    </>
  );
}
