import { Phone, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { CtaLuzes } from '@/components/CtaLuzes';
import { Reveal } from '@/components/ui/Reveal';
import { SamsungCtaTela } from './SamsungCtaTela';
import { waSamsung } from './SamsungHero';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

// Chamada final da página Samsung: igual à do site, mas com a TV Samsung mostrando a fachada
// da loja e o WhatsApp com a mensagem padrão do site.
export function SamsungCta() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-max container-px">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-forest-radial p-10 sm:p-14 lg:p-20">
          <CtaLuzes />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-5">Vamos consertar isso?</span>
              <h2 className="h-display text-balance text-4xl text-cream sm:text-5xl lg:text-6xl">
                Sua TV de volta funcionando, com a tranquilidade de quem acertou na escolha.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-cream/70">
                Manda uma mensagem agora. Em poucos minutos você recebe um pré-orçamento
                e marcamos a coleta grátis.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waSamsung}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group text-base"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Quero consertar minha TV
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={`tel:+${site.phones.primary}`} className="btn-ghost text-base">
                  <Phone className="h-4 w-4" />
                  (92) 99237-3523
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
              <SamsungCtaTela />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
