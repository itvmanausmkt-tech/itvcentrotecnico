'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Google Ads conversion tracking — Lead via WhatsApp.
 *
 * Dispara o evento `conversion` em todo clique em link de WhatsApp (wa.me /
 * api.whatsapp.com) ou em qualquer elemento marcado com
 * `data-track="whatsapp-lead"`.
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
const CONVERSION_LABEL = 'ms7UCLGDv78aEOrF8b4p';
const DEDUP_WINDOW_MS = 1500;
const SESSION_KEY = 'itv_lead_sid';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAdsTracker() {
  useEffect(() => {
    let lastFire = 0;

    const handler = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;

      const link = target.closest<HTMLAnchorElement>(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[data-track="whatsapp-lead"]',
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
    </>
  );
}
