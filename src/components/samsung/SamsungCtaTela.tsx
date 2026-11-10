'use client';

// TV Samsung da chamada final da página Samsung: moldura fina, logo Samsung no rodapé da TV,
// pezinhos e a fachada da loja na tela. Liga uma vez quando a seção aparece
// (mesma lógica da CtaTela do site). Por padrão já fica ligada: se o script
// falhar ou o visitante pedir menos movimento, nada fica escondido.

import { useEffect, useRef, useState } from 'react';
import { Picture } from '@/components/ui/Picture';
import s from './SamsungCta.module.css';

export function SamsungCtaTela() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [estado, setEstado] = useState<'ligada' | 'espera' | 'ligando'>('ligada');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
    <div ref={ref} className={`${s.tv} ${s[estado]}`}>
      <div className={s.painel}>
        <div className={s.tela}>
          <Picture
            base="loja-fachada-real"
            widths={[640, 1024]}
            sizes="(min-width: 1024px) 480px, 90vw"
            alt="Fachada da loja iTV Centro Técnico em Manaus"
            width={1024}
            height={576}
            className={s.foto}
          />
        </div>
        <div className={s.queixo}>
          <span className={s.marca}>
            <span>SAMSUNG</span>
          </span>
          <span className={s.led} aria-hidden="true" />
        </div>
      </div>
      <div className={s.pes} aria-hidden="true">
        <span />
        <span />
      </div>
      <div className={s.sombra} aria-hidden="true" />
    </div>
  );
}
