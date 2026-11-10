'use client';

// "Como funciona" da página LG: seção clara (branco com verde, LgFundoClaro) para
// quebrar a sequência de fundos escuros. Os 4 passos formam uma linha do tempo;
// quando a seção aparece na
// tela, a linha vai se preenchendo e cada passo acende em sequência.
// Por padrão já fica tudo aceso (sem script ou com "reduzir movimento").

import { useEffect, useRef, useState } from 'react';
import { Truck, ClipboardCheck, Tv } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import s from './LgComoFunciona.module.css';
import f from './LgFundoClaro.module.css';

const steps = [
  {
    icon: WhatsAppIcon,
    title: 'Você chama no WhatsApp',
    desc: 'Manda foto e descreve o defeito. Em minutos, devolvemos um pré-orçamento.',
  },
  {
    icon: Truck,
    title: 'Coleta grátis em casa',
    desc: 'Buscamos a TV de graça onde você estiver em Manaus. Sem reparo aprovado, a devolução tem taxa de R$ 70.',
  },
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico e aprovação',
    desc: 'Avaliação técnica, orçamento detalhado e transparente. Só seguimos com seu OK.',
  },
  {
    icon: Tv,
    title: 'Reparo e entrega em 48h',
    desc: 'Conserto profissional com peças de qualidade. Devolvemos funcionando 100%.',
  },
];

export function LgComoFunciona() {
  const ref = useRef<HTMLOListElement | null>(null);
  const [estado, setEstado] = useState<'aceso' | 'espera' | 'acendendo'>('aceso');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.8 && r.bottom > 0) return;
    setEstado('espera');
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          setEstado('acendendo');
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="como-funciona" className={`section relative ${f.fundo}`}>
      <div className="container-max container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className={s.eyebrow}>Como funciona</span>
          <h2 className="h-display mt-4 text-4xl text-ink-950 sm:text-5xl">
            Do WhatsApp até a TV de volta funcionando.
          </h2>
          <p className="mt-5 text-lg text-ink-950/65">
            Um processo simples, rastreável e sem surpresas no boleto.
          </p>
        </div>

        <ol ref={ref} className={`${s.linha} ${s[estado]}`}>
          {steps.map((step, i) => (
            <li key={step.title} className={s.passo} style={{ '--i': i } as React.CSSProperties}>
              <div className={s.marco}>
                <step.icon className={s.icone} strokeWidth={1.9} />
                <span className={s.numero}>{i + 1}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-950/65">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
