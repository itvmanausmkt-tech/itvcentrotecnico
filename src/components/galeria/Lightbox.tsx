'use client';

// Foto ampliada, compartilhada pelas versões da galeria.
// Abre "ligando" como uma TV; setas, teclado (← →, Esc), miniaturas e arrastar no celular.

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Foto } from './fotos';

export function FotoImg({ f, className = '', sizes, eager = false }: { f: Foto; className?: string; sizes?: 'grid' | 'full'; eager?: boolean }) {
  const base = sizes === 'full' ? f.full : f.grid;
  return (
    <picture>
      <source type="image/avif" srcSet={`${base}.avif`} />
      <img
        src={`${base}.webp`}
        alt={f.legenda}
        width={f.w}
        height={f.h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

export function useLightbox(lista: Foto[]) {
  const [aberta, setAberta] = useState<number | null>(null);
  const origem = useRef<HTMLElement | null>(null);
  const abrir = useCallback((i: number, el: HTMLElement) => {
    origem.current = el;
    setAberta(i);
  }, []);
  const node = <Lightbox lista={lista} aberta={aberta} setAberta={setAberta} origem={origem} />;
  return { abrir, node };
}

function Lightbox({
  lista,
  aberta,
  setAberta,
  origem,
}: {
  lista: Foto[];
  aberta: number | null;
  setAberta: (fn: number | null | ((a: number | null) => number | null)) => void;
  origem: React.MutableRefObject<HTMLElement | null>;
}) {
  const [ligando, setLigando] = useState(false);
  const fechar = useRef<HTMLButtonElement | null>(null);
  const tira = useRef<HTMLDivElement | null>(null);
  const dialogo = useRef<HTMLDivElement | null>(null);
  const toqueX = useRef<number | null>(null);
  const total = lista.length;

  const passar = useCallback(
    (dir: number) => setAberta((a) => (a === null ? a : (a + dir + total) % total)),
    [total, setAberta],
  );

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberta(null);
      if (e.key === 'ArrowRight') passar(1);
      if (e.key === 'ArrowLeft') passar(-1);
      if (e.key === 'Tab' && dialogo.current) {
        const foco = dialogo.current.querySelectorAll<HTMLElement>('button');
        const primeiro = foco[0];
        const ultimo = foco[foco.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [aberta, passar, setAberta]);

  const estaAberta = aberta !== null;
  useEffect(() => {
    if (!estaAberta) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setLigando(true);
    fechar.current?.focus();
    const t = setTimeout(() => setLigando(false), 700);
    const el = origem.current;
    return () => {
      clearTimeout(t);
      document.body.style.overflow = overflow;
      el?.focus();
    };
  }, [estaAberta, origem]);

  useEffect(() => {
    if (aberta === null) return;
    [aberta - 1, aberta + 1].forEach((j) => {
      const img = new Image();
      img.src = `${lista[(j + total) % total].full}.webp`;
    });
    const t = tira.current;
    const ativo = t?.querySelector<HTMLElement>(`[data-i="${aberta}"]`);
    if (t && ativo) {
      const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      t.scrollTo({ left: ativo.offsetLeft - t.clientWidth / 2 + ativo.clientWidth / 2, behavior: reduz ? 'auto' : 'smooth' });
    }
  }, [aberta, lista, total]);

  if (aberta === null) return null;
  const atual = lista[aberta];

  const btnRedondo =
    'rounded-full border border-white/20 bg-ink-950/70 text-cream backdrop-blur-sm transition-colors hover:border-forest-500 hover:text-forest-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500';

  return (
    <div
      ref={dialogo}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${aberta + 1} de ${total}: ${atual.legenda}`}
      className="fixed inset-0 z-[60] flex touch-pan-y flex-col overscroll-contain bg-ink-950/95 backdrop-blur"
      onTouchStart={(e) => {
        toqueX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (toqueX.current === null) return;
        const dx = e.changedTouches[0].clientX - toqueX.current;
        toqueX.current = null;
        if (Math.abs(dx) > 50) passar(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-sm text-cream/70" aria-live="polite">
          <span className="font-semibold text-cream">{aberta + 1}</span> de {total}
          <span className="ml-3 hidden text-cream/50 sm:inline">{atual.ambiente}</span>
        </p>
        <button ref={fechar} type="button" aria-label="Fechar" onClick={() => setAberta(null)} className={`${btnRedondo} p-2.5`}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-24"
        onClick={(e) => e.target === e.currentTarget && setAberta(null)}
      >
        <button type="button" aria-label="Foto anterior" onClick={() => passar(-1)} className={`${btnRedondo} absolute left-2 top-1/2 z-10 -translate-y-1/2 p-2.5 sm:left-6 sm:p-3`}>
          <ChevronLeft className="h-6 w-6" />
        </button>

        <figure className={`flex max-h-full flex-col items-center ${ligando ? 'tv-liga' : ''}`}>
          <picture key={atual.id}>
            <source type="image/avif" srcSet={`${atual.full}.avif`} />
            <img
              src={`${atual.full}.webp`}
              alt={atual.legenda}
              width={atual.w}
              height={atual.h}
              className="max-h-[calc(100vh-14rem)] w-auto max-w-full animate-[fade-in_0.3s_ease-out_both] rounded-lg object-contain shadow-2xl motion-reduce:animate-none supports-[height:100dvh]:max-h-[calc(100dvh-14rem)]"
            />
          </picture>
          <figcaption className="mt-4 text-center text-base text-cream">{atual.legenda}</figcaption>
        </figure>

        <button type="button" aria-label="Próxima foto" onClick={() => passar(1)} className={`${btnRedondo} absolute right-2 top-1/2 z-10 -translate-y-1/2 p-2.5 sm:right-6 sm:p-3`}>
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div ref={tira} className="relative flex gap-2 overflow-x-auto px-4 py-4 sm:justify-center sm:px-6">
        {lista.map((f, i) => (
          <button
            key={f.id}
            type="button"
            data-i={i}
            aria-label={`Ver foto ${i + 1}: ${f.legenda}`}
            aria-current={i === aberta}
            onClick={() => setAberta(i)}
            className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 ${
              i === aberta ? 'border-forest-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
            }`}
          >
            <picture>
              <source type="image/avif" srcSet={`${f.grid}.avif`} />
              <img src={`${f.grid}.webp`} alt="" width={80} height={56} loading="lazy" className="h-full w-full object-cover" />
            </picture>
          </button>
        ))}
      </div>
    </div>
  );
}
