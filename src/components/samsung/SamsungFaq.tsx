import {
  Plus,
  Clock,
  Truck,
  ShieldCheck,
  Tag,
  CreditCard,
  Scale,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Picture } from '@/components/ui/Picture';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { defaultWhatsapp } from '@/lib/site';
import s from './SamsungFaq.module.css';

// FAQ da página Samsung. Mesmas perguntas do Faq do site (sem "qual marca"), com a
// regra real da coleta: buscar é grátis; se o orçamento não for aprovado ou faltar
// peça, a devolução por rota tem taxa logística de R$ 70,00. O Faq da home não
// foi alterado.
// destaque (usado na página Samsung): cartão "Ainda com dúvida?" na
// coluna da esquerda, ícone em cada pergunta, pergunta aberta destacada e
// abrir/fechar com animação.
const faqs: { q: string; a: string; icon: LucideIcon }[] = [
  {
    icon: Clock,
    q: 'Quanto tempo leva o conserto da minha TV?',
    a: 'A maioria dos reparos fica pronta em até 48h após a aprovação do orçamento. Casos que dependem de peças específicas podem levar um pouco mais — sempre te avisamos com antecedência.',
  },
  {
    icon: Truck,
    q: 'A coleta em casa é gratuita?',
    a: 'A coleta é grátis em qualquer bairro de Manaus, e com o reparo aprovado devolvemos a TV no mesmo endereço sem custo. Se você não aprovar o orçamento, ou se não for possível consertar por falta de peça, a devolução por rota tem taxa logística de R$ 70,00.',
  },
  {
    icon: ShieldCheck,
    q: 'Como funciona a garantia?',
    a: 'Todo serviço executado tem garantia de até 6 meses (180 dias). Se voltar a apresentar o mesmo defeito dentro do prazo, a gente resolve sem cobrar de novo.',
  },
  {
    icon: Tag,
    q: 'O orçamento tem custo?',
    a: 'O orçamento é sempre gratuito e sem compromisso. Você só autoriza o reparo se concordar com o valor — sem letrinhas miúdas.',
  },
  {
    icon: CreditCard,
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Aceitamos PIX, dinheiro, cartões de débito e crédito (parcelamos em até 5x sem juros) e Crediário Bemol em até 12x.',
  },
  {
    icon: Scale,
    q: 'Vale a pena consertar minha TV ou é melhor comprar uma nova?',
    a: 'A regra prática: se o reparo custar menos da metade de uma TV nova equivalente, vale muito a pena consertar. 70% dos defeitos são simples e baratos. A gente te ajuda a decidir com honestidade.',
  },
  {
    icon: Wrench,
    q: 'Vocês instalam suporte de parede?',
    a: 'Sim, fazemos instalação profissional de suportes, configuração de Smart TV, conexão com internet, decoder e tudo que sua TV precisar.',
  },
];


// Cartão "Ainda com dúvida?" (modo destaque): na coluna da esquerda no
// computador; no celular vem depois das perguntas.
function CartaoDuvida({ className }: { className: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}>
      <Picture
        base="samsung-tecnico-desmontando"
        widths={[480, 768]}
        sizes="(min-width: 1024px) 360px, 100vw"
        alt="Técnico da iTV tirando os parafusos da tampa traseira de uma TV Samsung na bancada"
        width={768}
        height={512}
        className="aspect-[4/3] w-full object-cover object-[30%_50%]"
      />
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-cream">
          Ainda com dúvida?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          Fale com um técnico de verdade. Manda no WhatsApp — respondemos em
          minutos.
        </p>
        <a
          href={defaultWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-5 w-full"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Tirar dúvida no WhatsApp
        </a>
      </div>
    </div>
  );
}

export function SamsungFaq({ destaque = false }: { destaque?: boolean }) {
  return (
    <section id="faq" className={`section relative ${destaque ? s.secao : ''}`}>
      <div className="container-max container-px">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className={destaque ? 'lg:sticky lg:top-28' : undefined}>
              <span className="eyebrow mb-4">Perguntas frequentes</span>
              <h2 className="h-display text-4xl text-cream sm:text-5xl">
                Antes de pedir, talvez você queira saber.
              </h2>
              {destaque ? (
                <CartaoDuvida className="mt-8 hidden lg:block" />
              ) : (
                <p className="mt-5 text-base text-cream/70">
                  Não achou sua dúvida? Manda no WhatsApp — respondemos em minutos.
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              {faqs.map((item, i) => (
                <details
                  key={item.q}
                  className={`group ${destaque ? s.item : ''}`}
                  open={i === 0}
                >
                  <summary className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] sm:gap-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-4">
                      {destaque && (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-500/10 text-forest-500 transition-colors group-open:bg-forest-500 group-open:text-ink-950">
                          <item.icon className="h-5 w-5" strokeWidth={1.9} />
                        </span>
                      )}
                      <span className="font-display text-base font-semibold text-cream sm:text-lg">
                        {item.q}
                      </span>
                    </span>
                    {destaque ? (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-500/40 text-forest-500 transition-all duration-300 group-open:rotate-45 group-open:border-forest-500 group-open:bg-forest-500/15">
                        <Plus className="h-4 w-4" />
                      </span>
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-forest-500 transition-transform duration-300 group-open:rotate-45" />
                    )}
                  </summary>
                  <p
                    className={`px-6 pb-6 text-sm leading-relaxed text-cream/70 sm:text-base ${destaque ? 'sm:pl-20' : ''}`}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
            {destaque && <CartaoDuvida className="mt-8 lg:hidden" />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
