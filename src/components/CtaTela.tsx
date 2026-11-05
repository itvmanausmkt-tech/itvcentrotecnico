'use client';

// TV da chamada final: a marca aparece numa tela que liga uma vez quando a seção
// entra na tela (mesma linha de luz da galeria), com um reflexo que passa pelo vidro
// e o LED que acende. Por padrão a tela já está ligada: se o script falhar ou o
// visitante pedir menos movimento, nada fica escondido.

import { useEffect, useRef, useState } from 'react';
import { Picture } from './ui/Picture';

export function CtaTela() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [estado, setEstado] = useState<'ligada' | 'espera' | 'ligando'>('ligada');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // só espera se a TV ainda não está à vista (quem chega direto no fim já vê ligada)
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;
    setEstado('espera');
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          setEstado('ligando');
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`cta-tv ${estado}`}>
      <div className="cta-tv-vidro">
        <div className="cta-tv-imagem">
          <Picture
            base="brand-mark"
            widths={[320, 640]}
            sizes="(min-width: 1024px) 440px, 320px"
            alt="Marca iTV Centro Técnico"
            width={640}
            height={362}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="cta-tv-led" aria-hidden="true" />
      </div>
    </div>
  );
}
