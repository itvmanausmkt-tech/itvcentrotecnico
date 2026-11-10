import type { CSSProperties } from 'react';
import { Star } from 'lucide-react';
import { site, defaultWhatsapp } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import s from './SamsungTvAnuncio.module.css';

// "Comercial" da iTV na tela da TV Samsung do topo. Entra quando a TV termina de
// ligar e roda em loop, em 3 cenas: o problema, a solução e a prova (Google).
// Em cada cena as frases chegam uma de cada vez (ordem dada por --i).
// Só CSS (SamsungTvAnuncio.module.css). Com "reduzir movimento" fica parado na cena 3.
// As cenas são decorativas (aria-hidden): o mesmo conteúdo já está no texto da página.
// O botão do WhatsApp (SamsungTvBotao) fica fixo na gaveta direita do rack, sempre clicável.
const ordem = (i: number) => ({ '--i': i }) as CSSProperties;


export function SamsungTvAnuncio() {
  return (
    <div className={s.anuncio}>
      <div className={s.cenas} aria-hidden="true">
      <div className={`${s.cena} ${s.c1}`}>
        <p className={s.pergunta}>
          <span className={s.p} style={ordem(0)}>Sua TV Samsung está com</span>{' '}
          <span className={s.p} style={ordem(1)}><em>listras</em>,</span>{' '}
          <span className={s.p} style={ordem(2)}><em>tela preta</em></span>{' '}
          <span className={s.p} style={ordem(3)}>ou <em>não liga</em>?</span>
        </p>
      </div>

      <div className={`${s.cena} ${s.c2}`}>
        <p className={`${s.titulo} ${s.p}`} style={ordem(0)}>
          A <strong>iTV</strong> conserta.
        </p>
        <ul className={s.selos}>
          <li className={s.p} style={ordem(1)}>Coleta grátis em casa</li>
          <li className={s.p} style={ordem(2)}>Garantia até 6 meses</li>
          <li className={s.p} style={ordem(3)}>Pronto em até 48h</li>
        </ul>
      </div>

      <div className={`${s.cena} ${s.c3}`}>
        <picture className={s.p} style={ordem(0)}>
          <source type="image/avif" srcSet="/logo/itv-horizontal-white-280w.avif 1x, /logo/itv-horizontal-white-560w.avif 2x" />
          <img
            src="/logo/itv-horizontal-white-280w.webp"
            srcSet="/logo/itv-horizontal-white-280w.webp 1x, /logo/itv-horizontal-white-560w.webp 2x"
            alt=""
            className={s.logo}
            loading="eager"
          />
        </picture>
        <p className={`${s.nota} ${s.p}`} style={ordem(1)}>
          <span className={s.estrelas}>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          {site.rating.toFixed(1).replace('.', ',')} no Google · {site.reviewsCount}+ avaliações
        </p>
        <p className={`${s.aviso} ${s.p}`} style={ordem(2)}>Assistência técnica independente em Manaus</p>
      </div>
      </div>
    </div>
  );
}

// Botão do WhatsApp fixo na gaveta direita do rack (fora da tela da TV).
// Fica na .cena de TvSamsung; entra quando a TV liga e não sai mais.
export function SamsungTvBotao() {
  return (
    <a
      href={defaultWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={s.botao}
      aria-label="Pedir orçamento no WhatsApp"
    >
      <WhatsAppIcon className={s.botaoIcone} />
      Orçamento
    </a>
  );
}
