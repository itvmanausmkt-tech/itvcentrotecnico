import { Plus } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import type { Brand } from '@/lib/brands';

const faqs = [
  {
    q: 'Quanto tempo leva o conserto da minha TV?',
    a: 'A maioria dos reparos fica pronta em até 48h após a aprovação do orçamento. Casos que dependem de peças específicas podem levar um pouco mais — sempre te avisamos com antecedência.',
  },
  {
    q: 'A coleta em casa é mesmo gratuita?',
    a: 'Sim. Buscamos sua TV em qualquer bairro de Manaus sem nenhum custo, e devolvemos no mesmo endereço quando o reparo estiver pronto.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Todo serviço executado tem garantia de até 6 meses (180 dias). Se voltar a apresentar o mesmo defeito dentro do prazo, a gente resolve sem cobrar de novo.',
  },
  {
    q: 'Vocês atendem qual marca de TV?',
    a: 'Atendemos todas as marcas: Samsung, LG, TCL, Sony, Philips, AOC, Philco, Hisense, Panasonic, entre outras. De TVs comuns a Smart TVs e QLED de até 85".',
  },
  {
    q: 'O orçamento tem custo?',
    a: 'O orçamento é sempre gratuito e sem compromisso. Você só autoriza o reparo se concordar com o valor — sem letrinhas miúdas.',
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Aceitamos PIX, dinheiro, cartões de débito e crédito (parcelamos em até 5x sem juros) e Crediário Bemol em até 12x.',
  },
  {
    q: 'Vale a pena consertar minha TV ou é melhor comprar uma nova?',
    a: 'A regra prática: se o reparo custar menos da metade de uma TV nova equivalente, vale muito a pena consertar. 70% dos defeitos são simples e baratos. A gente te ajuda a decidir com honestidade.',
  },
  {
    q: 'Vocês instalam suporte de parede?',
    a: 'Sim, fazemos instalação profissional de suportes, configuração de Smart TV, conexão com internet, decoder e tudo que sua TV precisar.',
  },
];

export function Faq({ brand }: { brand?: Brand }) {
  const lista = brand
    ? faqs.filter((f) => !f.q.startsWith('Vocês atendem qual marca'))
    : faqs;
  return (
    <section id="faq" className="section relative">
      <div className="container-max container-px">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow mb-4">Perguntas frequentes</span>
            <h2 className="h-display text-4xl text-cream sm:text-5xl">
              Antes de pedir, talvez você queira saber.
            </h2>
            <p className="mt-5 text-base text-cream/70">
              Não achou sua dúvida? Manda no WhatsApp — respondemos em minutos.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              {lista.map((item, i) => (
                <details key={item.q} className="group" open={i === 0}>
                  <summary className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-base font-semibold text-cream sm:text-lg">
                      {item.q}
                    </span>
                    <Plus className="h-5 w-5 shrink-0 text-forest-500 transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-cream/70 sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
