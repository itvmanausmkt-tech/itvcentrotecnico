import {
  Truck,
  ShieldCheck,
  CreditCard,
  Sparkles,
  Star,
  HeadphonesIcon,
} from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

// Diferenciais da página LG: cópia de Differentials com a regra real da coleta
// (buscar é grátis; sem reparo aprovado, a devolução tem taxa de R$ 70,00).
// Differentials (home) não foi alterado.

const items = [
  {
    icon: Truck,
    title: 'Coleta grátis em casa',
    desc: 'Em toda Manaus, e a devolução é grátis com o reparo aprovado. Você não precisa carregar TV pra lugar nenhum.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de até 6 meses',
    desc: 'Em todo serviço executado. Se voltar, a gente resolve.',
  },
  {
    icon: CreditCard,
    title: 'Parcele em até 5x sem juros',
    desc: 'Ou em até 12x via Crediário Bemol. Aprovação rápida.',
  },
  {
    icon: Sparkles,
    title: 'Peças de alta qualidade',
    desc: 'Originais ou compatíveis homologadas. Nada de gambiarra.',
  },
  {
    icon: Star,
    title: '1.250+ avaliações 5★',
    desc: 'A assistência de TV mais bem avaliada de Manaus no Google.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento humano',
    desc: 'Sem robôs nem URA. Você fala com gente que entende de TV.',
  },
];

export function LgDiferenciais() {
  return (
    <section className="section relative" id="diferenciais">
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Por que iTV</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            O padrão de assistência técnica que Manaus precisava.
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            Tecnologia com solução, atendimento com coração — e sem nenhuma surpresa
            no orçamento.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 50}
              className="group relative bg-ink-950 p-8 transition-colors hover:bg-ink-900"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/10 text-forest-500 transition-all group-hover:bg-forest-500/20 group-hover:shadow-glow">
                <item.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-semibold text-cream">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
