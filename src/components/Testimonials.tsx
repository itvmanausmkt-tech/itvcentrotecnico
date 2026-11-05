import { Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { StoreVisit } from './StoreVisit';
import { site } from '@/lib/site';

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
    <figure className="card card-hover relative flex h-full flex-col p-6">
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[17px] font-semibold text-white"
          style={{ background: cores[i % cores.length] }}
        >
          {t.name[0]}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-semibold text-cream">{t.name}</div>
          <div className="text-xs text-cream/55">Cliente verificado</div>
        </div>
        <GoogleG className="h-5 w-5 shrink-0" />
      </figcaption>
      <div className="mt-4">
        <Estrelas n={t.rating} className="h-4 w-4" />
      </div>
      <blockquote className="mt-2.5 flex-1 text-[15px] leading-relaxed text-cream/85">{t.text}</blockquote>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="section relative" id="depoimentos">
      <div className="container-max container-px">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow mb-4">Depoimentos</span>
            <h2 className="h-display text-4xl text-cream sm:text-5xl">
              1.250+ avaliações 5★ no Google.
              <br />
              <span className="text-cream/60">Esses são alguns deles.</span>
            </h2>
          </div>
          <a
            href={perfilGoogle}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nota 5,0 de 5. Mais de 1.250 avaliações reais no Google. Abrir no Google Maps"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-[1.375rem] transition-colors hover:border-[#fbbc04]/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 lg:col-span-5"
          >
            <div className="font-display text-[3.25rem] font-bold leading-none tracking-[-0.03em] text-cream tabular-nums">
              5,0
            </div>
            <div className="min-w-0 flex-1">
              <Estrelas n={5} className="h-[22px] w-[22px]" />
              <div className="mt-1.5 text-balance text-sm text-cream/70">Mais de 1.250 avaliações reais no Google</div>
            </div>
            <GoogleG className="h-7 w-7 shrink-0 self-start" />
          </a>
        </Reveal>

        {/* avaliações em duas colunas; o cartão da visita na terceira, fixo ao rolar.
            No celular ele entra depois da 3ª avaliação. */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
          {testimonials.slice(0, 3).map((t, i) => (
            <Avaliacao key={t.name} t={t} i={i} />
          ))}
          <div className="sm:col-span-2 lg:sticky lg:self-start lg:top-24 lg:col-span-1 lg:col-start-3 lg:row-span-3 lg:row-start-1">
            <StoreVisit />
          </div>
          {testimonials.slice(3).map((t, i) => (
            <Avaliacao key={t.name} t={t} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
