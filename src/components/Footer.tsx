import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { site, whatsappTracked } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950 pt-20">
      <div className="container-max container-px">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <picture>
              <source
                type="image/avif"
                srcSet="/logo/itv-horizontal-white-280w.avif 1x, /logo/itv-horizontal-white-560w.avif 2x"
              />
              <source
                type="image/webp"
                srcSet="/logo/itv-horizontal-white-280w.webp 1x, /logo/itv-horizontal-white-560w.webp 2x"
              />
              <img
                src="/logo/itv-horizontal-white-280w.webp"
                alt="iTV Centro Técnico"
                width={280}
                height={112}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </picture>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/60">
              Centro técnico especializado em TVs em Manaus. Mais de 5 anos consertando o
              que parece perdido — com garantia, transparência e atendimento humano.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-forest-500/40 hover:text-forest-500"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-forest-500/40 hover:text-forest-500"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={whatsappTracked}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70 transition-colors hover:border-forest-500/40 hover:text-forest-500"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-forest-500">
                Navegação
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-cream/70">
                <li><a href="#servicos" className="hover:text-cream">Serviços</a></li>
                <li><a href="#como-funciona" className="hover:text-cream">Como funciona</a></li>
                <li><a href="#loja" className="hover:text-cream">A loja</a></li>
                <li><a href="#depoimentos" className="hover:text-cream">Depoimentos</a></li>
                <li><a href="#faq" className="hover:text-cream">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-forest-500">
                Contato
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-cream/70">
                <li>
                  <a href={site.whatsappPrimary} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cream">
                    <WhatsAppIcon className="h-4 w-4" />
                    (92) 99237-3523
                  </a>
                </li>
                <li>
                  <a href={site.whatsappSecondary} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cream">
                    <Phone className="h-4 w-4" />
                    (92) 99334-7933
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-forest-500">
                Endereço
              </h3>
              <a
                href={site.address.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-start gap-2 text-sm text-cream/70 hover:text-cream"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                <span>
                  {site.address.street}<br />
                  {site.address.city}/{site.address.state}<br />
                  CEP {site.address.zip}
                </span>
              </a>
              <ul className="mt-5 space-y-1 text-xs text-cream/50">
                <li>{site.hours.weekdays}</li>
                <li>{site.hours.saturday}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 py-8 text-xs text-cream/65 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} iTV Centro Técnico. Todos os direitos reservados.
          </div>
          <div>
            Feito com cuidado em Manaus · Engenheiro de Marketing por{' '}
            <Link href="https://edrodrigues.mkt.br" className="text-cream underline underline-offset-4 hover:text-forest-500">
              Ed Rodrigues
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
