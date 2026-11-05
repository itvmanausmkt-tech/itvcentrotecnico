'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { defaultWhatsapp } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'A loja', href: '#loja' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max container-px flex h-20 items-center justify-between">
        <Link href="/" className="relative flex items-center" aria-label="iTV Centro Técnico">
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
              fetchPriority="high"
              decoding="sync"
              className="h-12 w-auto sm:h-14"
            />
          </picture>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/70 transition-colors hover:text-forest-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={defaultWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/10 p-2.5 text-cream lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="container-max container-px flex flex-col gap-2 py-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-cream/80 hover:bg-white/5 hover:text-forest-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href={defaultWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-3 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
