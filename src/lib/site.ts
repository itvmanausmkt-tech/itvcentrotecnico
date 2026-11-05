export const site = {
  name: 'iTV Centro Técnico',
  city: 'Manaus',
  state: 'AM',
  fullName: 'iTV Centro Técnico — Manaus',
  tagline: 'Sua TV merece um centro técnico de verdade.',
  description:
    'Assistência técnica especializada em TVs em Manaus. Coleta grátis em domicílio, garantia de até 6 meses e atendimento em até 48h. Mais de 1.250 avaliações 5★ no Google.',
  phones: {
    primary: '5592992373523',
    secondary: '5592993347933',
  },
  whatsappPrimary: 'https://wa.me/5592992373523',
  whatsappSecondary: 'https://wa.me/5592993347933',
  instagram: 'https://www.instagram.com/itvcentrotecnico/',
  facebook: 'https://www.facebook.com/itvmanausam/',
  email: 'contato@itvmanaus.com',
  address: {
    street: 'Rua Visconde de Utinga, 628',
    city: 'Manaus',
    state: 'AM',
    zip: '69058-810',
    full: 'Rua Visconde de Utinga, 628 — Manaus/AM, 69058-810',
    mapsQuery:
      'https://www.google.com/maps/search/?api=1&query=Rua+Visconde+de+Utinga+628+Manaus+AM',
    mapsEmbed:
      'https://www.google.com/maps?q=Rua+Visconde+de+Utinga+628+Manaus+AM+69058-810&output=embed',
  },
  hours: {
    weekdays: 'Seg a Sex · 8h às 18h',
    saturday: 'Sábado · 8h às 13h',
    sunday: 'Domingo · Fechado',
  },
  reviewsCount: '1.250',
  rating: 5.0,
};

/**
 * Link de WhatsApp dos CTAs.
 *
 * O rastreamento pelo Gyrehub (gyrehub.com.br/r/tl1xch) está PAUSADO: o número
 * cadastrado lá tem 12 dígitos (+55 92 9237-3523), sem o nono dígito do celular.
 * Um `wa.me` com 12 dígitos não abre a conversa, então todo lead morreria.
 *
 * Para religar assim que o número for corrigido no painel do Gyrehub:
 *   1. `whatsappTracked = 'https://gyrehub.com.br/r/tl1xch'`
 *   2. `whatsappMessage = (_msg?: string) => whatsappTracked`
 *   3. `defaultWhatsapp = whatsappTracked`
 * Atenção: o redirecionador ignora `?text=`, então a mensagem por marca passa a
 * vir do painel do Gyrehub e a personalização abaixo deixa de valer.
 *
 * O pixel do Meta e o do Gyrehub seguem ativos — medem visita e lead
 * independentemente de qual link o botão usa.
 */
export const whatsappTracked = site.whatsappPrimary;

export const whatsappMessage = (msg: string) =>
  `${site.whatsappPrimary}?text=${encodeURIComponent(msg)}`;

export const defaultWhatsapp = whatsappMessage(
  'Olá! Vim pelo site e quero um orçamento para minha TV.',
);
