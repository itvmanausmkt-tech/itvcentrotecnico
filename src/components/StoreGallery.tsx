'use client';

// Galeria da seção "A loja": parede de telas.
// Um único módulo (a tela 16:9) repetido numa grade estrita, como a parede de TVs da
// loja e a fileira do laboratório, com uma tela dupla no centro. Foto em pé aparece
// inteira, com as faixas pretas que a TV mostra ao exibir vídeo em pé.
// Mostra 9 fotos (6 no celular); "Ver todas" completa a parede.
// Clicar abre a foto ampliada (efeito "TV ligando", setas, teclado, miniaturas, arrastar).

import { useEffect, useRef, useState } from 'react';
import type { Foto } from './galeria/fotos';
import { useLightbox } from './galeria/Lightbox';

type FotoParede = Foto & { mestra?: 1 | 2; soDesktop?: boolean };

const real = (n: number, ambiente: Foto['ambiente'], legenda: string, emPe = false): FotoParede => {
  const id = String(n).padStart(2, '0');
  return {
    id: `g${id}`,
    ambiente,
    legenda,
    grid: `/images/galeria-${id}-grid`,
    full: `/images/galeria-${id}-full`,
    w: emPe ? 900 : 1600,
    h: emPe ? 1600 : 900,
  };
};

const arte = (base: string, ambiente: Foto['ambiente'], legenda: string): FotoParede => ({
  id: base,
  ambiente,
  legenda,
  grid: `/images/${base}-640w`,
  full: `/images/${base}-1024w`,
  w: 1600,
  h: 900,
});

// Ordem da parede (= ordem da foto ampliada). Fotos quase iguais nunca encostam.
//  [01 ][   04    ][15 ]
//  [02▯][  dupla  ][14▯]
//  [07 ][18 ][09 ][16 ]
//  ---- Ver todas ----
//  [11 ][03▯][08 ][05 ]
//  [17▯][10 ][06▯][13 ]
//  [Fi ][12 ][Sh ][Ba ]
const fotos: FotoParede[] = [
  real(1, 'Fachada', 'Fachada da loja, com o carro da coleta na porta'),
  { ...real(4, 'Loja', 'Vista geral, do balcão ao showroom'), mestra: 1 },
  real(15, 'Laboratório', 'Laboratório onde as TVs são consertadas'),
  real(2, 'Atendimento', 'Recepção com TV de demonstração', true),
  real(14, 'Laboratório', 'Corredor de TVs aguardando reparo', true),
  real(7, 'Atendimento', 'Balcão de atendimento com a marca iTV'),
  real(18, 'Laboratório', 'Técnico trabalhando no laboratório'),
  { ...real(9, 'Loja', 'Painel que mostra uma TV por dentro'), soDesktop: true },
  { ...real(16, 'Laboratório', 'TVs organizadas aguardando reparo'), soDesktop: true },
  real(11, 'Laboratório', 'Bancada de testes com TV ligada'),
  real(3, 'Atendimento', 'Cadeiras de espera em frente ao balcão', true),
  real(8, 'Atendimento', 'Balcão e janela para o laboratório'),
  real(5, 'Loja', 'Showroom com o tapete da marca'),
  real(17, 'Laboratório', 'Bancada de testes e painel informativo', true),
  real(10, 'Loja', 'Como é uma TV por dentro, peça por peça'),
  real(6, 'Atendimento', 'Cadeiras de espera da recepção', true),
  real(13, 'Laboratório', 'Área de testes com vista para a rua'),
  arte('loja-fachada', 'Fachada', 'Fachada iluminada da iTV'),
  real(12, 'Atendimento', 'Atendimento no balcão'),
  arte('loja-showroom', 'Loja', 'Showroom com TVs em exposição'),
  arte('loja-balcao', 'Atendimento', 'Balcão e expositores'),
];

const INICIAL = 9;

export function StoreGallery() {
  const [toda, setToda] = useState(false);
  const { abrir, node } = useLightbox(fotos);
  const parede = useRef<HTMLUListElement | null>(null);
  const focarNovas = useRef(false);

  // depois de "Ver todas", o foco do teclado vai para a primeira tela que apareceu
  useEffect(() => {
    if (!toda || !focarNovas.current) return;
    focarNovas.current = false;
    parede.current?.querySelector<HTMLElement>(`[data-i="${INICIAL}"]`)?.focus({ preventScroll: true });
  }, [toda]);

  return (
    <>
      <ul id="galeria" ref={parede} aria-label="Fotos da loja" className={`parede mt-12 scroll-mt-28 ${toda ? 'toda' : ''}`}>
        {fotos.map((f, i) => {
          const emPe = f.h > f.w;
          const base = f.mestra ? f.full : f.grid;
          return (
            <li
              key={f.id}
              className={f.mestra ? `mestra mestra-${f.mestra}` : undefined}
              data-extra={i >= INICIAL ? '' : undefined}
              data-m-extra={f.soDesktop ? '' : undefined}
            >
              <button
                type="button"
                data-i={i}
                onClick={(e) => abrir(i, e.currentTarget)}
                aria-label={`Ampliar: ${f.legenda}`}
                className={`tela ${emPe ? 'em-pe' : ''}`}
              >
                <picture>
                  <source type="image/avif" srcSet={`${base}.avif`} />
                  <img src={`${base}.webp`} alt={f.legenda} width={f.w} height={f.h} loading="lazy" decoding="async" />
                </picture>
              </button>
            </li>
          );
        })}
      </ul>

      {!toda && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              focarNovas.current = true;
              setToda(true);
            }}
            className="btn-ghost"
          >
            Ver todas as {fotos.length} fotos
          </button>
        </div>
      )}

      {node}
    </>
  );
}
