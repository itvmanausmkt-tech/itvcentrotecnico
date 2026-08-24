export type Defeito = { titulo: string; desc: string };
export type Brand = {
  slug: string;
  marca: string;
  h1: string;
  eyebrow: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  linhas: string[];
  defeitos: Defeito[];
  faq: { q: string; a: string }[];
};

export const brands: Brand[] = [
  {
    slug: 'conserto-tv-samsung',
    marca: 'Samsung',
    h1: 'Conserto de TV Samsung em Manaus',
    eyebrow: 'Assistência técnica Samsung',
    lead: 'Centro técnico especializado em TV Samsung em Manaus. Troca de display, reparo de barras de LED, placa principal e fonte — com coleta grátis em casa, garantia de até 6 meses e diagnóstico em até 48h.',
    metaTitle: 'Conserto de TV Samsung em Manaus | Assistência Técnica',
    metaDescription:
      'Conserto de TV Samsung em Manaus com coleta grátis, garantia de até 6 meses e diagnóstico em 48h. Troca de display, LED e placa. Orçamento grátis no WhatsApp.',
    keywords: [
      'conserto tv samsung manaus',
      'assistência técnica samsung tv',
      'troca de display samsung',
      'reparo de led tv samsung',
    ],
    linhas: ['Crystal UHD', 'QLED', 'Neo QLED', 'The Frame', 'OLED', 'Series 4 a 9'],
    defeitos: [
      { titulo: 'Tela preta com som normal', desc: 'Na Samsung costuma ser barra de LED queimada ou falha na placa T-CON. O áudio continua funcionando porque só a imagem é afetada.' },
      { titulo: 'Listras verticais ou horizontais', desc: 'Linhas coloridas fixas na tela indicam problema no cabo flat ou no próprio painel. Avaliamos se compensa a troca de display.' },
      { titulo: 'TV não liga, LED piscando', desc: 'Piscar em sequência é código de erro da fonte. Normalmente capacitores estufados — reparo relativamente simples e barato.' },
      { titulo: 'Travada no logo Samsung', desc: 'Firmware corrompido após atualização interrompida. Reinstalamos o software oficial sem perder as configurações.' },
      { titulo: 'Manchas ou áreas escuras', desc: 'Comum em Crystal UHD e QLED. Costuma ser difusor deslocado ou LED com queda de intensidade em parte do painel.' },
      { titulo: 'One Connect sem sinal', desc: 'Nas linhas premium, a caixa One Connect pode falhar sozinha. Testamos o módulo antes de mexer na TV.' },
    ],
    faq: [
      { q: 'Vocês trocam display de TV Samsung?', a: 'Sim. Trabalhamos com display para Samsung de 32" a 85". Antes da troca fazemos o diagnóstico completo, porque em boa parte dos casos o defeito é na barra de LED ou na T-CON — bem mais barato que o painel.' },
      { q: 'Quanto tempo leva o conserto de uma Samsung?', a: 'A maioria fica pronta em até 48h após a aprovação do orçamento. Reparos que dependem de display específico podem levar alguns dias a mais, e avisamos antes.' },
      { q: 'A garantia vale para TV Samsung?', a: 'Vale para todas as marcas. Todo serviço executado tem garantia de até 6 meses; se o mesmo defeito voltar no prazo, resolvemos sem cobrar de novo.' },
    ],
  },
  {
    slug: 'conserto-tv-lg',
    marca: 'LG',
    h1: 'Conserto de TV LG em Manaus',
    eyebrow: 'Assistência técnica LG',
    lead: 'Especialistas em TV LG em Manaus: NanoCell, OLED, QNED e Smart TV webOS. Reparo de placa, troca de display e barras de LED, com coleta grátis, garantia de até 6 meses e orçamento sem compromisso.',
    metaTitle: 'Conserto de TV LG em Manaus | Assistência Técnica',
    metaDescription:
      'Conserto de TV LG em Manaus: NanoCell, OLED, QNED e webOS. Coleta grátis, garantia de até 6 meses e diagnóstico em 48h. Orçamento grátis no WhatsApp.',
    keywords: [
      'conserto tv lg manaus',
      'assistência técnica tv lg',
      'especialista em tv lg',
      'troca de display lg',
    ],
    linhas: ['NanoCell', 'OLED', 'QNED', 'UHD 4K', 'Smart TV webOS', 'Série UN / UP / UQ'],
    defeitos: [
      { titulo: 'Travada no logo LG', desc: 'Um dos defeitos mais comuns da marca. O webOS trava no boot depois de atualização ou queda de energia. Reinstalamos o firmware oficial.' },
      { titulo: 'Tela preta com som', desc: 'Backlight sem alimentação ou T-CON com falha. Fazemos o teste de lanterna para confirmar antes de qualquer orçamento.' },
      { titulo: 'Sombra fixa na imagem (OLED)', desc: 'Retenção ou burn-in em painéis OLED. Avaliamos o grau e explicamos com honestidade quando tem e quando não tem solução.' },
      { titulo: 'Listras ou faixas coloridas', desc: 'Geralmente cabo flat mal contactado ou painel com defeito. O diagnóstico define se é reparo simples ou troca.' },
      { titulo: 'TV não liga', desc: 'Fonte com capacitores estufados é a causa mais frequente. Reparo rápido e com bom custo-benefício.' },
      { titulo: 'Wi-Fi não conecta', desc: 'Módulo de rede ou firmware. Muitas vezes resolve com reinstalação de software, sem troca de peça.' },
    ],
    faq: [
      { q: 'Vocês consertam TV LG OLED?', a: 'Sim, atendemos OLED, NanoCell, QNED e as linhas UHD. Em OLED avaliamos com cuidado casos de burn-in e explicamos com clareza quando o reparo compensa.' },
      { q: 'Minha LG travou no logo, tem conserto?', a: 'Na maioria das vezes sim. É firmware corrompido e resolvemos com reinstalação do software oficial, sem trocar peça. É um dos serviços mais comuns que fazemos em LG.' },
      { q: 'Vocês buscam a TV em casa?', a: 'Buscamos e devolvemos sem custo em qualquer bairro de Manaus. Você não precisa transportar a TV.' },
    ],
  },
  {
    slug: 'conserto-tv-tcl',
    marca: 'TCL e Semp Toshiba',
    h1: 'Conserto de TV TCL e Semp em Manaus',
    eyebrow: 'Assistência técnica TCL · Semp',
    lead: 'Centro técnico especializado em TV TCL e Semp Toshiba em Manaus. Android TV travando, som sem imagem, LED queimado e reparo de placa — com coleta grátis, garantia de até 6 meses e diagnóstico rápido.',
    metaTitle: 'Conserto de TV TCL e Semp em Manaus | Assistência Técnica',
    metaDescription:
      'Conserto de TV TCL e Semp Toshiba em Manaus. Som sem imagem, logo travado, troca de LED. Coleta grátis, garantia de até 6 meses e orçamento no WhatsApp.',
    keywords: [
      'assistência técnica tcl',
      'conserto tv tcl manaus',
      'assistência semp tcl',
      'conserto tv semp',
    ],
    linhas: ['Android TV', 'Google TV', 'Roku TV', 'QLED', 'Semp Toshiba', 'Série P / C / S'],
    defeitos: [
      { titulo: 'Som normal e imagem apagada', desc: 'O defeito clássico da TCL. Quase sempre são as barras de LED, que nessa linha têm vida útil menor. Trocamos com peça de qualidade.' },
      { titulo: 'Travada no logo TCL', desc: 'Android TV com sistema corrompido. Reinstalamos o firmware e a TV volta a iniciar normalmente.' },
      { titulo: 'Android TV lenta ou travando', desc: 'Apps fechando sozinhos e demora para abrir. Fazemos limpeza de sistema e atualização, quando o hardware está íntegro.' },
      { titulo: 'TV não liga', desc: 'Fonte ou placa principal. Testamos os dois antes de orçar, para você não pagar por peça que não precisa.' },
      { titulo: 'Controle não responde', desc: 'Receptor infravermelho ou pareamento Bluetooth. Muitas vezes é solução simples, sem custo de peça.' },
      { titulo: 'Manchas na tela', desc: 'Difusor deslocado ou LED com intensidade irregular. Abrimos, avaliamos e explicamos o que dá para resolver.' },
    ],
    faq: [
      { q: 'Vocês são autorizada TCL em Manaus?', a: 'Somos um centro técnico independente especializado em TCL e Semp Toshiba. Não somos assistência autorizada da fabricante, mas trabalhamos com peças de qualidade e damos garantia de até 6 meses no serviço.' },
      { q: 'Minha TCL tem som mas não tem imagem. Tem conserto?', a: 'Tem, e é um dos reparos que mais fazemos. Normalmente são as barras de LED. O diagnóstico é gratuito e a troca costuma ficar bem abaixo do valor de uma TV nova.' },
      { q: 'Atendem Semp Toshiba também?', a: 'Sim. TCL e Semp Toshiba compartilham boa parte da plataforma, e atendemos as duas marcas no mesmo padrão.' },
    ],
  },
  {
    slug: 'conserto-tv-grande',
    marca: 'TVs Grandes',
    h1: 'Conserto de TV Grande em Manaus — 50" a 85"',
    eyebrow: 'Especialista em telas grandes',
    lead: 'Conserto de TV de 50, 55, 65, 70 e até 85 polegadas em Manaus. Transporte especializado, coleta grátis em casa, troca de display e barras de LED com garantia de até 6 meses.',
    metaTitle: 'Conserto de TV Grande em Manaus | 50" a 85" Polegadas',
    metaDescription:
      'Conserto de TV 50, 55, 65, 70 e 85 polegadas em Manaus. Coleta grátis com transporte especializado, troca de display e LED, garantia de até 6 meses.',
    keywords: [
      'conserto tv 65 polegadas',
      'conserto tv 50 polegadas',
      'arrumar tv 55 polegadas',
      'conserto tv 70 polegadas',
    ],
    linhas: ['50 polegadas', '55 polegadas', '65 polegadas', '70 polegadas', '75 polegadas', '85 polegadas'],
    defeitos: [
      { titulo: 'Barras de LED queimadas', desc: 'Quanto maior a tela, mais barras de LED — e maior a chance de uma falhar. É o defeito mais comum em telas grandes.' },
      { titulo: 'Display trincado', desc: 'Avaliamos se a troca de painel compensa. Em telas muito grandes nem sempre vale, e falamos isso com honestidade.' },
      { titulo: 'Manchas ou nuvens na imagem', desc: 'Difusor deslocado pelo peso do próprio painel. Comum em TVs grandes que foram transportadas de forma inadequada.' },
      { titulo: 'Imagem escura mesmo no máximo', desc: 'Perda de intensidade das barras de LED. A troca devolve o brilho original da TV.' },
      { titulo: 'Placa T-CON com falha', desc: 'Em telas grandes a T-CON trabalha mais. Falha gera listras, imagem dupla ou tela branca.' },
      { titulo: 'Fonte não sustenta a TV', desc: 'Telas grandes exigem mais da fonte. Capacitores estufados fazem a TV desligar sozinha depois de alguns minutos.' },
    ],
    faq: [
      { q: 'Vocês buscam TV de 65 ou 75 polegadas em casa?', a: 'Buscamos sim, sem custo, com transporte apropriado para telas grandes. É justamente nesses tamanhos que o transporte por conta própria mais causa dano.' },
      { q: 'Vale a pena consertar uma TV grande?', a: 'Na maioria dos casos sim. A regra prática: se o reparo ficar abaixo da metade do valor de uma TV nova equivalente, compensa. Fazemos o diagnóstico gratuito e você decide com o número na mão.' },
      { q: 'Qual o maior tamanho que vocês atendem?', a: 'Atendemos até 85 polegadas, incluindo QLED, OLED e Crystal UHD de todas as marcas.' },
    ],
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
