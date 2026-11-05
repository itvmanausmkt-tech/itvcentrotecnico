import { ArrowRight, Star, Truck, ShieldCheck, Clock } from 'lucide-react';
import { defaultWhatsapp, site } from '@/lib/site';
import { Picture } from './ui/Picture';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44">
      <div className="absolute inset-0 grid-bg mask-fade-bottom opacity-50" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-forest-500/20 blur-3xl" />

      <div className="container-max container-px relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="anim-fade-up lg:col-span-7">
            <h1 className="h-display text-balance text-5xl text-cream sm:text-6xl lg:text-7xl">
              Sua TV merece um{' '}
              <span className="bg-gradient-to-br from-forest-400 via-forest-500 to-forest-700 bg-clip-text text-transparent">
                centro técnico
              </span>{' '}
              de verdade.
            </h1>

            <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-cream/70">
              Reparo profissional de TVs em Manaus com coleta grátis em casa,
              garantia de até 6 meses e diagnóstico em até 48h. Mais de{' '}
              <strong className="text-cream">{site.reviewsCount}+ avaliações 5★</strong> no Google.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={defaultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar orçamento agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#servicos" className="btn-ghost text-base">
                Ver serviços
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { icon: Truck, label: 'Coleta grátis em casa' },
                { icon: ShieldCheck, label: 'Garantia até 6 meses' },
                { icon: Clock, label: 'Pronto em até 48h' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-center sm:gap-3 sm:p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-500/10 text-forest-500">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <span className="text-xs leading-tight text-cream/80 sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="anim-fade-scale relative lg:col-span-5"
            style={{ animationDelay: '100ms' }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-forest-radial">
              <Picture
                base="tecnico"
                widths={[480, 768, 1200]}
                sizes="(min-width: 1024px) 480px, 100vw"
                alt="Técnico iTV Centro Técnico apresentando TV reparada"
                width={1200}
                height={675}
                priority
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/70 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-forest-500 text-forest-500"
                      />
                    ))}
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-semibold text-cream">5,0 no Google</div>
                    <div className="text-cream/60">{site.reviewsCount}+ avaliações</div>
                  </div>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="text-[10px] uppercase tracking-widest text-forest-500">
                    Mais bem avaliada
                  </div>
                  <div className="text-xs text-cream/70">de Manaus</div>
                </div>
              </div>
            </div>

            <div
              className="anim-fade-up absolute -left-4 top-12 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur-xl shadow-glow-soft sm:flex sm:items-center sm:gap-3 lg:-left-8"
              style={{ animationDelay: '500ms' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-500/15">
                <ShieldCheck className="h-5 w-5 text-forest-500" />
              </div>
              <div className="text-xs leading-tight">
                <div className="font-semibold text-cream">Garantia real</div>
                <div className="text-cream/60">Em todo serviço</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
