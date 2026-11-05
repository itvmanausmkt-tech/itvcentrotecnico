import { Truck, ClipboardCheck, Tv } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const steps = [
  {
    icon: WhatsAppIcon,
    label: '01',
    title: 'Você chama no WhatsApp',
    desc: 'Manda foto e descreve o defeito. Em minutos, devolvemos um pré-orçamento.',
  },
  {
    icon: Truck,
    label: '02',
    title: 'Coleta grátis em casa',
    desc: 'Buscamos a TV onde você estiver em Manaus, sem custo nenhum.',
  },
  {
    icon: ClipboardCheck,
    label: '03',
    title: 'Diagnóstico e aprovação',
    desc: 'Avaliação técnica, orçamento detalhado e transparente. Só seguimos com seu OK.',
  },
  {
    icon: Tv,
    label: '04',
    title: 'Reparo e entrega em 48h',
    desc: 'Conserto profissional com peças de qualidade. Devolvemos funcionando 100%.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section relative overflow-hidden border-y border-white/5 bg-ink-900/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-forest-500/40 to-transparent" />
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">Como funciona</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            Do WhatsApp até a TV de volta funcionando.
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            Um processo simples, rastreável e sem surpresas no boleto.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 80} className="card relative overflow-hidden p-7">
              <div className="absolute right-5 top-5 font-display text-5xl font-bold text-white/[0.04]">
                {step.label}
              </div>
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-500/15 text-forest-500">
                  <step.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="mb-1 text-xs font-semibold text-forest-500">{step.label}</div>
                <h3 className="font-display text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
