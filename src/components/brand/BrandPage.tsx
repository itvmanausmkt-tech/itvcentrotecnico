import Link from 'next/link';
import {
  ArrowRight, MessageCircle, Plus, ShieldCheck, Truck, Clock, Wrench, Star,
  MonitorOff, PowerOff, RefreshCw, AlertTriangle, Sparkles, Cable, Settings,
  VolumeX, Lightbulb, Cpu, Plug,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { HowItWorks } from '@/components/HowItWorks';
import { Differentials } from '@/components/Differentials';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFAB } from '@/components/WhatsAppFAB';
import { Reveal } from '@/components/ui/Reveal';
import { Picture } from '@/components/ui/Picture';
import { whatsappMessage, site } from '@/lib/site';
import type { Brand, IconeNome } from '@/lib/brands';

const ICONES: Record<IconeNome, React.ElementType> = {
  MonitorOff, PowerOff, RefreshCw, AlertTriangle, Sparkles,
  Cable, Settings, VolumeX, Lightbulb, Cpu, Plug,
};

export function BrandPage({ brand }: { brand: Brand }) {
  const wa = whatsappMessage(
    `Olá! Vim pelo site e quero um orçamento para minha TV ${brand.marca}.`,
  );

  return (
    <>
      <Header />
      <main>
        {/* ───────── HERO ───────── */}
        <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
          <div className="absolute inset-0 grid-bg mask-fade-bottom opacity-50" />
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-forest-500/20 blur-3xl" />

          <div className="container-max container-px relative">
            <nav className="mb-8 text-sm text-cream/50">
              <Link href="/" className="hover:text-forest-400">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-cream/80">{brand.marca}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="anim-fade-up lg:col-span-7">
                <span className="eyebrow mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-500 shadow-glow" />
                  {brand.eyebrow}
                </span>

                <h1 className="h-display text-balance text-4xl text-cream sm:text-5xl lg:text-6xl">
                  {brand.h1}
                </h1>

                <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-cream/70">
                  {brand.lead}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary group text-base">
                    <MessageCircle className="h-5 w-5" />
                    Orçamento grátis no WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#defeitos" className="btn-ghost text-base">Ver defeitos comuns</a>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {[
                    { icon: Truck, label: 'Coleta grátis' },
                    { icon: Clock, label: 'Pronto em 48h' },
                    { icon: ShieldCheck, label: 'Garantia 6 meses' },
                    { icon: Wrench, label: 'Peças de qualidade' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <Icon className="h-4 w-4 shrink-0 text-forest-500" strokeWidth={2} />
                      <span className="text-xs leading-tight text-cream/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* imagem do hero */}
              <div className="anim-fade-scale relative lg:col-span-5" style={{ animationDelay: '100ms' }}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-forest-radial">
                  <Picture
                    base="tecnico"
                    widths={[480, 768, 1200]}
                    sizes="(min-width: 1024px) 480px, 100vw"
                    alt={`Técnico da iTV Centro Técnico consertando TV ${brand.marca} em Manaus`}
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
                          <Star key={i} className="h-4 w-4 fill-forest-500 text-forest-500" />
                        ))}
                      </div>
                      <div className="text-xs leading-tight">
                        <div className="font-semibold text-cream">5,0 no Google</div>
                        <div className="text-cream/60">{site.reviewsCount}+ avaliações</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="anim-fade-up absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 backdrop-blur-xl shadow-glow-soft sm:flex sm:items-center sm:gap-3 lg:-left-8"
                     style={{ animationDelay: '500ms' }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-500/15">
                    <Wrench className="h-5 w-5 text-forest-500" />
                  </div>
                  <div className="text-xs leading-tight">
                    <div className="font-semibold text-cream">Especialista</div>
                    <div className="text-cream/60">em TV {brand.marca}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* linhas atendidas */}
            <div className="mt-16 flex flex-wrap gap-2">
              {brand.linhas.map((l) => (
                <span key={l} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-cream/70">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── DEFEITOS ───────── */}
        <section id="defeitos" className="section relative">
          <div className="container-max container-px">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="eyebrow mb-4">Defeitos mais comuns</span>
              <h2 className="h-display text-4xl text-cream sm:text-5xl">
                O que mais aparece em TV {brand.marca}
              </h2>
              <p className="mt-5 text-lg text-cream/70">
                Reconheceu algum? A maioria tem solução — e costuma custar bem menos que uma TV nova.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {brand.defeitos.map((d, i) => {
                const Icone = ICONES[d.icone];
                return (
                  <Reveal key={d.titulo} delay={i * 50} as="article" className="card card-hover group p-7">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500/20 to-forest-800/10 text-forest-500 transition-all group-hover:shadow-glow">
                      <Icone className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-cream">{d.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">{d.desc}</p>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-12 text-center">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary group text-base">
                <MessageCircle className="h-5 w-5" />
                Descrever meu problema
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ───────── FAIXA VISUAL DA OFICINA ───────── */}
        <section className="section relative overflow-hidden border-y border-white/5 bg-ink-900/40">
          <div className="container-max container-px">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 lg:col-span-7">
                <Picture
                  base={brand.fotoSecao}
                  widths={brand.fotoLarguras}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  alt={brand.fotoAlt}
                  width={1024}
                  height={573}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
                <span className="eyebrow mb-4">Onde sua TV fica</span>
                <h2 className="h-display text-3xl text-cream sm:text-4xl">
                  {brand.tituloSecaoFoto}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-cream/70">
                  {brand.textoSecaoFoto}
                </p>
                <a
                  href={site.address.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 hover:text-forest-400"
                >
                  {site.address.street} — ver no mapa
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Differentials />
        <Testimonials />

        {/* ───────── FAQ ───────── */}
        <section className="section relative">
          <div className="container-max container-px">
            <Reveal className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="eyebrow mb-4">Perguntas frequentes</span>
                <h2 className="h-display text-4xl text-cream sm:text-5xl">
                  Dúvidas sobre TV {brand.marca}
                </h2>
                <p className="mt-5 text-base text-cream/70">
                  Não achou sua dúvida? Manda no WhatsApp — respondemos em minutos.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                  {brand.faq.map((item, i) => (
                    <details key={item.q} className="group" open={i === 0}>
                      <summary className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                        <span className="font-display text-base font-semibold text-cream sm:text-lg">{item.q}</span>
                        <Plus className="h-5 w-5 shrink-0 text-forest-500 transition-transform duration-300 group-open:rotate-45" />
                      </summary>
                      <p className="px-6 pb-6 text-sm leading-relaxed text-cream/70 sm:text-base">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
