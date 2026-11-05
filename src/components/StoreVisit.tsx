'use client';

// Cartão "Visite a loja": endereço, horário com status ao vivo (aberto/fechado
// no horário de Manaus), contato e mapa. Segue a seção "Localização & Contato"
// da skill site-institucional: endereço + mapa + WhatsApp com mensagem pronta + horário.

import { useEffect, useState } from 'react';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';
import { site, whatsappMessage } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

// Horário de funcionamento (0 = domingo). Mantém o mesmo texto de site.hours.
const horarios: Record<number, [number, number] | null> = {
  0: null,
  1: [8, 18],
  2: [8, 18],
  3: [8, 18],
  4: [8, 18],
  5: [8, 18],
  6: [8, 13],
};

const linhas = [
  { dias: [1, 2, 3, 4, 5], rotulo: 'Segunda a sexta', horas: '8h às 18h' },
  { dias: [6], rotulo: 'Sábado', horas: '8h às 13h' },
  { dias: [0], rotulo: 'Domingo', horas: 'Fechado' },
];

const rotaUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`,
)}`;

const zapVisita = whatsappMessage('Olá! Vi o site e quero levar minha TV na loja. Qual o melhor horário?');

type Status = { dia: number; aberto: boolean; texto: string };

function statusAgora(): Status {
  // hora atual em Manaus, independente do fuso do aparelho
  const partes = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Manaus',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t: string) => partes.find((p) => p.type === t)?.value ?? '';
  const dia = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  const hora = Number(get('hour')) + Number(get('minute')) / 60;
  const hoje = horarios[dia];

  if (hoje && hora >= hoje[0] && hora < hoje[1]) {
    return { dia, aberto: true, texto: `Aberto agora, fecha às ${hoje[1]}h` };
  }
  if (hoje && hora < hoje[0]) {
    return { dia, aberto: false, texto: `Fechado agora, abre hoje às ${hoje[0]}h` };
  }
  // procura o próximo dia com expediente
  for (let i = 1; i <= 7; i++) {
    const d = (dia + i) % 7;
    const h = horarios[d];
    if (h) {
      const quando = i === 1 ? 'amanhã' : ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'][d];
      return { dia, aberto: false, texto: `Fechado agora, abre ${quando} às ${h[0]}h` };
    }
  }
  return { dia, aberto: false, texto: 'Fechado agora' };
}

// Cartão em coluna (fica ao lado dos depoimentos): mapa em cima, dados embaixo,
// endereço e horário em faixas separadas por réguas finas.
export function StoreVisit() {
  // calculado só no navegador (evita divergência entre o HTML gerado e o horário real)
  const [status, setStatus] = useState<Status | null>(null);
  useEffect(() => {
    setStatus(statusAgora());
    const t = setInterval(() => setStatus(statusAgora()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
      <div className="relative h-56 border-b border-white/10 bg-ink-900 sm:h-64 lg:h-[13.75rem]">
        <iframe
          title="Mapa com a localização da iTV Centro Técnico"
          src={site.address.mapsEmbed}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg)' }}
        />
      </div>

      <div className="p-7 sm:p-8">
        <h3 className="text-balance font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl lg:text-[1.625rem]">
          Traga sua TV ou peça a coleta grátis.
        </h3>

        <div className="mt-6 border-t border-white/[0.08]">
          <div className="flex items-start gap-3.5 border-b border-white/[0.08] py-[1.125rem]">
            <MapPin className="mt-px h-5 w-5 shrink-0 text-forest-500" />
            <div>
              <div className="text-base font-semibold text-cream">{site.address.street}</div>
              <div className="text-sm text-cream/60">
                {site.address.city}/{site.address.state}, CEP {site.address.zip}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3.5 border-b border-white/[0.08] py-[1.125rem]">
            <Clock className="mt-px h-5 w-5 shrink-0 text-forest-500" />
            <div className="flex-1">
              <div className="min-h-[1.75rem]" aria-live="polite">
                {status && (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      status.aberto ? 'bg-forest-500/15 text-forest-400' : 'bg-white/5 text-cream/70'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${status.aberto ? 'bg-forest-500 shadow-glow' : 'bg-cream/40'}`}
                    />
                    {status.texto}
                  </span>
                )}
              </div>
              <ul className="mt-3.5 space-y-1.5 text-sm tabular-nums">
                {linhas.map((l) => {
                  const hoje = status ? l.dias.includes(status.dia) : false;
                  return (
                    <li
                      key={l.rotulo}
                      className={`flex justify-between gap-4 ${hoje ? 'font-semibold text-cream' : 'text-cream/65'}`}
                    >
                      <span>
                        {l.rotulo}
                        {hoje && <span className="ml-2 text-xs font-medium text-forest-500">hoje</span>}
                      </span>
                      <span>{l.horas}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href={zapVisita} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center whitespace-nowrap">
            <WhatsAppIcon className="h-5 w-5" />
            Combinar visita
          </a>
          <a href={rotaUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost justify-center whitespace-nowrap">
            <Navigation className="h-4 w-4" />
            Como chegar
          </a>
        </div>
        <a
          href={`tel:+${site.phones.primary}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-cream"
        >
          <Phone className="h-4 w-4" />
          Prefere ligar? (92) 99237-3523
        </a>
      </div>
    </div>
  );
}
