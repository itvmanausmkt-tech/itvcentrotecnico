import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { site, defaultWhatsapp } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { TvSamsung } from './TvSamsung';
import s from './SamsungHero.module.css';

// Links de WhatsApp da página Samsung: mensagem padrão do site.
export const waSamsung = defaultWhatsapp;

// Topo da landing page Samsung (Google Ads). Mesma estrutura e estilo do Hero do site;
// muda o texto e, no lugar da foto, a TV Samsung que liga ao abrir a página.
// No celular os 3 selos são pílulas de uma linha. "Luz ambiente": quando a TV
// liga, um brilho com as cores da tela aparece atrás do quadro (SamsungHero.module.css).
export function SamsungHero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      <div className="absolute inset-0 grid-bg mask-fade-bottom opacity-50" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-forest-500/20 blur-3xl" />

      <div className="container-max container-px relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="anim-fade-up lg:col-span-6">
            <h1 className="h-display text-balance text-4xl text-cream sm:text-5xl lg:text-6xl">
              Assistência Técnica Especializada em{' '}
              <span className="bg-gradient-to-br from-forest-400 via-forest-500 to-forest-700 bg-clip-text text-transparent">
                TVs Samsung
              </span>{' '}
              em Manaus
            </h1>

            <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-cream/70">
              Sua TV Samsung não liga, está com tela preta ou com linhas na imagem? A iTV
              Centro Técnico faz o diagnóstico e o conserto, com coleta grátis em casa e
              garantia de até 6 meses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waSamsung}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#servicos" className="btn-ghost text-base">
                Ver serviços
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-6">
              {[
                { icon: Truck, label: 'Coleta grátis em casa' },
                { icon: ShieldCheck, label: 'Garantia até 6 meses' },
                { icon: Clock, label: 'Pronto em até 48h' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-1.5 pr-3.5 sm:gap-3 sm:rounded-xl sm:p-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-500/10 text-forest-500 sm:h-9 sm:w-9 sm:rounded-lg">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  </div>
                  <span className="whitespace-nowrap text-[13px] leading-tight text-cream/85 sm:whitespace-normal sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-cream/45">
              Assistência técnica independente, especializada em televisores. Não somos
              assistência autorizada da Samsung Electronics.
            </p>
          </div>

          <div className="relative lg:col-span-6">
            <div className={s.luz} aria-hidden="true" />
            <TvSamsung />

            <div className="mx-auto mt-6 flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-ink-950/70 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-forest-500 text-forest-500" />
                  ))}
                </div>
                <div className="text-xs leading-tight">
                  <div className="font-semibold text-cream">5,0 no Google</div>
                  <div className="text-cream/60">{site.reviewsCount}+ avaliações</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-forest-500">
                  Mais bem avaliada
                </div>
                <div className="text-xs text-cream/70">de Manaus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
