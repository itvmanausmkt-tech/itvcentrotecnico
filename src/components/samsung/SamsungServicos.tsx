import {
  Stethoscope,
  Cpu,
  Monitor,
  Lightbulb,
  Settings,
  Plug,
  Wrench,
  Cable,
  ArrowRight,
} from 'lucide-react';
import { defaultWhatsapp } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';

type Service = {
  tag: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  accent: string;
};

const services: Service[] = [
  {
    tag: 'Diagnóstico',
    title: 'Diagnóstico técnico completo',
    desc: 'Identificação precisa do problema com análise profissional, evitando tentativas e erros.',
    icon: Stethoscope,
    accent: 'from-forest-400 to-forest-700',
  },
  {
    tag: 'Reparos',
    title: 'Reparo de placas eletrônicas',
    desc: 'Correção de falhas em placas main, fonte e auxiliares responsáveis pela imagem e funcionamento da TV.',
    icon: Cpu,
    accent: 'from-forest-500 to-forest-800',
  },
  {
    tag: 'Display',
    title: 'Substituição de display',
    desc: 'Troca de painéis e displays em TVs LED, QLED e Smart TV de até 85", com peças de alta qualidade.',
    icon: Monitor,
    accent: 'from-emerald-400 to-forest-700',
  },
  {
    tag: 'Manutenção',
    title: 'Reparo e troca de LEDs',
    desc: 'Correção de imagem escura, manchas ou falhas na iluminação da tela com substituição de barras de LED.',
    icon: Lightbulb,
    accent: 'from-forest-400 to-forest-800',
  },
  {
    tag: 'Sistema',
    title: 'Atualização de software',
    desc: 'Correção de travamentos, lentidão e falhas em Smart TVs com firmware oficial.',
    icon: Settings,
    accent: 'from-forest-400 to-forest-700',
  },
  {
    tag: 'Acessórios',
    title: 'Suportes, cabos e acessórios',
    desc: 'Suportes de parede, cabos HDMI, controles, conversores e soluções complementares para sua TV.',
    icon: Cable,
    accent: 'from-forest-500 to-forest-800',
  },
  {
    tag: 'Instalação',
    title: 'Instalação profissional',
    desc: 'Instalação correta de imagem, sistema e conectividade. Sua TV pronta pra usar do jeito certo.',
    icon: Wrench,
    accent: 'from-emerald-400 to-forest-700',
  },
  {
    tag: 'Equipamentos',
    title: 'Reparo de equipamentos específicos',
    desc: 'Análise de placas e identificação precisa de falhas em equipamentos específicos da sua TV.',
    icon: Plug,
    accent: 'from-forest-400 to-forest-800',
  },
];

// Serviços da página Samsung: cópia de Services com as abas de canto só em verdes da
// marca. Services (home) não foi alterado.
export function SamsungServicos() {
  return (
    <section id="servicos" className="section relative">
      <div className="container-max container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Serviços</span>
            <h2 className="h-display text-4xl text-cream sm:text-5xl">
              Tudo que sua TV precisa, num só centro técnico.
            </h2>
            <p className="mt-5 text-lg text-cream/70">
              Da troca de uma barra de LED ao reparo completo de placa, com diagnóstico
              honesto e peças que duram.
            </p>
          </div>
          <a
            href={defaultWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 40}
              as="article"
              className="card card-hover group relative flex h-full flex-col p-6"
            >
              <div
                className={`absolute right-0 top-0 h-20 w-20 rounded-bl-[40px] bg-gradient-to-br ${s.accent}`}
              >
                <div className="absolute right-3 top-3 text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {s.tag}
                </div>
              </div>

              <div className="mt-12 flex-1">
                <s.icon className="h-7 w-7 text-cream/80 transition-colors group-hover:text-forest-500" strokeWidth={1.6} />
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
