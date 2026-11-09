import { Picture } from '@/components/ui/Picture';
import s from './TvLg.module.css';
import { TvVideo } from './TvVideo';
import { LgLogo } from './LgLogo';

// Foto de uma sala com TV LG; a TV da foto liga ao abrir a página.
// Animação só em CSS (TvLg.module.css); com "reduzir movimento" a TV já aparece ligada.
export function TvLg() {
  return (
    <div className={s.cena}>
      <div className={s.foto}>
        <Picture
          base="lg-sala"
          widths={[480, 768, 1168]}
          sizes="(min-width: 1024px) 600px, 100vw"
          alt="TV LG ligada numa sala em Manaus mostrando o Encontro das Águas"
          width={1168}
          height={880}
          priority
        />
      </div>
      <TvVideo />
      <div className={s.vidro} aria-hidden="true" />
      <div className={s.tela} aria-hidden="true">
        <div className={s.luz} />
        <div className={s.boot}>
          <LgLogo className={s.logo} />
          <span>LG</span>
        </div>
      </div>
      <span className={s.led} aria-hidden="true" />
    </div>
  );
}
