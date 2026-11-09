'use client';

import { useEffect, useRef, useState } from 'react';
import s from './TvLg.module.css';

type NetInfo = { saveData?: boolean; effectiveType?: string };

// Vídeo da cachoeira (loop emendado) na tela da TV. Só carrega depois que a página
// abriu e só onde vale a pena: sem "reduzir movimento", sem economia de dados e
// fora de rede 2G. Até tocar (ou se não tocar), fica a foto da TV ligada.
export function TvVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const net = (navigator as Navigator & { connection?: NetInfo }).connection;
    if (net?.saveData || /2g/.test(net?.effectiveType ?? '')) return;

    // Começa a baixar enquanto a TV faz o boot (sem esperar os scripts de
    // rastreamento), para já estar tocando quando a imagem aparece.
    const t = window.setTimeout(() => setAtivo(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!ativo || !v) return;
    v.muted = true;
    v.play()
      .then(() => setVisivel(true))
      .catch(() => {});
  }, [ativo]);

  if (!ativo) return null;

  return (
    <video
      ref={ref}
      className={`${s.video} ${visivel ? s.videoOn : ''}`}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/videos/lg-cachoeira.webm?v=2" type="video/webm" />
      <source src="/videos/lg-cachoeira.mp4?v=2" type="video/mp4" />
    </video>
  );
}
