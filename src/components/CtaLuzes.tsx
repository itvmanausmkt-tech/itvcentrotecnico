'use client';

// Luzes de fundo da chamada final: deriva lenta, só enquanto a seção está à vista.

import { useEffect, useRef, useState } from 'react';

export function CtaLuzes() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`cta-luzes pointer-events-none absolute inset-0 ${visivel ? '' : 'pausada'}`}>
      <div className="cta-luz-a absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-500/30 blur-3xl" />
      <div className="cta-luz-b absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-forest-700/20 blur-3xl" />
    </div>
  );
}
