'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Rastreamento de lead via WhatsApp — Google Ads + Meta.
 *
 * Dispara o evento `conversion` em todo clique em link de WhatsApp — direto
 * (wa.me / api.whatsapp.com) ou via redirecionador rastreado do Gyrehub
 * (gyrehub.com.br/r/) — e em qualquer elemento marcado com
 * `data-track="whatsapp-lead"`.
 *
 * O evento dispara no clique, antes da navegação sair da página, então o
 * redirecionador intermediário do Gyrehub não interfere na medição.
 *
 * Dedupe em duas camadas:
 *   1. Client-side: lock de 1.5s entre dispatches (previne double-click do
 *      mesmo botão / event bubble).
 *   2. Server-side (Google Ads): `transaction_id` estável por sessão
 *      (sessionStorage). Cliques múltiplos do mesmo usuário compartilham o
 *      mesmo transaction_id → Google reconhece como a mesma conversão.
 *      Nova sessão = novo transaction_id = nova conversão.
 */

const CONVERSION_ID = 'AW-11137737450';
const META_PIXEL_ID = '540295974836790';
const CONVERSION_LABEL = 'ms7UCLGDv78aEOrF8b4p';
const DEDUP_WINDOW_MS = 1500;
const SESSION_KEY = 'itv_lead_sid';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown };
  }
}

export function LeadTracker() {
  useEffect(() => {
    let lastFire = 0;

    const handler = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;

      const link = target.closest<HTMLAnchorElement>(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"], ' +
          'a[href*="gyrehub.com.br/r/"], a[data-track="whatsapp-lead"]',
      );
      if (!link) return;

      const now = Date.now();
      if (now - lastFire < DEDUP_WINDOW_MS) return;
      lastFire = now;

      let sid: string | null = null;
      try {
        sid = sessionStorage.getItem(SESSION_KEY);
        if (!sid) {
          sid = `wa_${now}_${Math.random().toString(36).slice(2, 8)}`;
          sessionStorage.setItem(SESSION_KEY, sid);
        }
      } catch {
        // sessionStorage pode estar bloqueado (private mode, etc.)
        sid = `wa_${now}_${Math.random().toString(36).slice(2, 8)}`;
      }

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
          transaction_id: sid,
        });
      }

      // Meta: mesmo lock de dedupe; eventID igual ao transaction_id permite
      // deduplicar com a Conversions API, se ela for ligada no futuro.
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: 'WhatsApp' }, { eventID: sid });
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return (
    <>
      <Script
        id="gtag-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${CONVERSION_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${CONVERSION_ID}');
        `}
      </Script>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          alt=""
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
