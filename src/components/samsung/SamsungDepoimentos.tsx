import { Star } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { StoreVisit } from '@/components/StoreVisit';
import { site } from '@/lib/site';
import f from './SamsungFundoClaro.module.css';

const testimonials = [
  {
    name: 'Wendell S.',
    text:
      'Gostei muito do atendimento. Equipe treinada no atendimento da entrega em casa. Uma garantia de manutenção de 180 dias.',
    rating: 5,
  },
  {
    name: 'Lucas M.',
    text:
      'Atendimento excelente, os profissionais atenciosos, o serviço de qualidade e a entrega foi rápida e com garantia.',
    rating: 5,
  },
  {
    name: 'Fernando A.',
    text:
      'Ótimo atendimento. Profissionais de alto nível, além de ótimos preços. Visite a loja, não irá se arrepender.',
    rating: 5,
  },
  {
    name: 'Allyson M.',
    text:
      'Estou muito satisfeito com o serviço. Trabalho sério, preços justos, rapidez na entrega e instalação.',
    rating: 5,
  },
  {
    name: 'Patrícia R.',
    text:
      'Achei que minha Smart TV estava perdida. Orçamento honesto, consertaram em poucos dias e ainda buscaram e entregaram em casa.',
    rating: 5,
  },
  {
    name: 'Marcos T.',
    text:
      'Pediram fotos pelo WhatsApp, deram um pré-orçamento, buscaram em casa e devolveram funcionando perfeitamente. Profissionais honestos.',
    rating: 5,
  },
];

// cores das iniciais, como os avatares sem foto do Google
const cores = ['#1e7f6c', '#7b4fa8', '#c2571a', '#2f6fb3', '#a8326e', '#5b7c1f'];

const perfilGoogle = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `iTV Centro Técnico ${site.address.street} ${site.address.city}`,
)}`;

function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

function Estrelas({ n, className }: { n: number; className: string }) {
  return (
    <div className="flex gap-px" role="img" aria-label={`${n} de 5 estrelas`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className={`${className} fill-[#fbbc04] text-[#fbbc04]`} aria-hidden="true" />
      ))}
    </div>
  );
}

function Avaliacao({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-ink-950/[0.08] bg-white p-6 shadow-[0_12px_40px_-24px_rgba(5,13,9,0.35)] transition-shadow duration-300 hover:shadow-[0_18px_50px_-22px_rgba(5,13,9,0.45)]">
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[17px] font-semibold text-white"
          style={{ background: cores[i % cores.length] }}
        >
          {t.name[0]}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-semibold text-ink-950">{t.name}</div>
          <div className="text-xs text-ink-950/55">Cliente verificado</div>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </figcaption>
      <div className="mt-4">
        <Estrelas n={t.rating} className="h-4 w-4" />
      </div>
      <blockquote className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-950/80">{t.text}</blockquote>
    </figure>
  );
}

// Depoimentos da página Samsung: versão clara de Testimonials (branco com verde,
// SamsungFundoClaro), cards brancos; o cartão da visita (StoreVisit) fica escuro como
// contraste. No celular as avaliações viram carrossel de arrastar.
// Testimonials (home) não foi alterado.
export function SamsungDepoimentos() {
  return (
    <section className={`section relative ${f.fundo}`} id="depoimentos">
      <div className="container-max container-px">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="mb-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#0f7a3d]">Depoimentos</span>
            <h2 className="h-display text-4xl text-ink-950 sm:text-5xl">
              1.250+ avaliações 5★ no Google.
              <br />
              <span className="text-ink-950/50">Esses são alguns deles.</span>
            </h2>
          </div>
          <a
            href={perfilGoogle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nota 5,0 de 5. Mais de 1.250 avaliações reais no Google. Abrir no Google Maps"
            className="flex items-center gap-5 rounded-2xl border border-ink-950/[0.08] bg-white px-6 py-[1.375rem] shadow-[0_12px_40px_-24px_rgba(5,13,9,0.35)] transition-colors hover:border-[#fbbc04]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 lg:col-span-5"
          >
            <div className="font-display text-[3.25rem] font-bold leading-none tracking-[-0.03em] text-ink-950 tabular-nums">
              5,0
            </div>
            <div className="min-w-0 flex-1">
              <Estrelas n={5} className="h-[22px] w-[22px]" />
              <div className="mt-1.5 text-balance text-sm text-ink-950/65">Mais de 1.250 avaliações reais no Google</div>
            </div>
            <GoogleG className="h-7 w-7 shrink-0 self-start" />
          </a>
        </Reveal>

        {/* Melhoria 7 — celular: avaliações num carrossel de arrastar para o lado
            (antes ocupavam várias telas); o cartão da visita vem logo abaixo. */}
        <div className="mt-10 sm:hidden">
          <ul
            aria-label="Avaliações de clientes"
            className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <li key={t.name} className="w-[84%] shrink-0 snap-center">
                <Avaliacao t={t} i={i} />
              </li>
            ))}
          </ul>
          <p className="mt-2 text-center text-xs text-ink-950/50">Arraste para ver mais avaliações →</p>
          <div className="mt-8 rounded-2xl bg-ink-950 shadow-[0_20px_60px_-28px_rgba(5,13,9,0.6)]">
            <StoreVisit />
          </div>
        </div>

        {/* a partir do tablet: avaliações em duas colunas; o cartão da visita na
            terceira, fixo ao rolar. */}
        <div className="mt-14 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
          {testimonials.slice(0, 3).map((t, i) => (
            <Avaliacao key={t.name} t={t} i={i} />
          ))}
          <div className="sm:col-span-2 lg:sticky lg:self-start lg:top-24 lg:col-span-1 lg:col-start-3 lg:row-span-3 lg:row-start-1">
            {/* StoreVisit é transparente (feito para fundo escuro): aqui ganha um
                fundo escuro próprio para virar o contraste da seção clara. */}
            <div className="rounded-2xl bg-ink-950 shadow-[0_20px_60px_-28px_rgba(5,13,9,0.6)]">
              <StoreVisit />
            </div>
          </div>
          {testimonials.slice(3).map((t, i) => (
            <Avaliacao key={t.name} t={t} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
