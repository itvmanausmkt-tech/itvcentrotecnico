import { Picture } from '@/components/ui/Picture';
import s from './TvSamsung.module.css';
import { SamsungTvAnuncio, SamsungTvBotao } from './SamsungTvAnuncio';

// Foto de uma sala com TV Samsung; a TV da foto liga ao abrir a página.
// Animação só em CSS (TvSamsung.module.css); com "reduzir movimento" a TV já aparece ligada.
export function TvSamsung() {
  return (
    <div className={s.cena}>
      <div className={s.foto}>
        <Picture
          base="samsung-sala"
          widths={[480, 768, 1168]}
          sizes="(min-width: 1024px) 600px, 100vw"
          alt="TV Samsung ligada numa sala clara em Manaus mostrando um anúncio da iTV Centro Técnico"
          width={1168}
          height={880}
          priority
        />
      </div>
      <SamsungTvAnuncio />
      <div className={s.vidro} aria-hidden="true" />
      <div className={s.tela} aria-hidden="true">
        <div className={s.luz} />
        <div className={s.boot}>
          <span className={s.nome}>SAMSUNG</span>
        </div>
      </div>
      <span className={s.led} aria-hidden="true" />
      <SamsungTvBotao />
    </div>
  );
}
