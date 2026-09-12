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
  instagram: 'https://www.instagram.com/itvmanaus/',
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
 * Link de WhatsApp rastreado pelo Gyrehub (atribuição de origem do lead).
 *
 * O redirecionador NÃO repassa `?text=` — a mensagem pré-preenchida é definida
 * no painel do Gyrehub e já carrega o marcador `[REF:tl1xch]`, que é o que
 * permite a atribuição. Por isso `whatsappMessage()` devolve o mesmo link em
 * todos os contextos: a personalização por marca passou a ser responsabilidade
 * do painel, não do site.
 *
 * Para voltar ao link direto, basta apontar `whatsappTracked` para
 * `site.whatsappPrimary`.
 */
export const whatsappTracked = 'https://gyrehub.com.br/r/tl1xch';

export const whatsappMessage = (_msg?: string) => whatsappTracked;

export const defaultWhatsapp = whatsappTracked;
