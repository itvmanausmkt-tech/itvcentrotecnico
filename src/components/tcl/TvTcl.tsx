import { Picture } from '@/components/ui/Picture';
import s from './TvTcl.module.css';
import { TclTvAnuncio, TclTvBotao } from './TclTvAnuncio';

// Foto de uma sala com TV TCL; a TV da foto liga ao abrir a página.
// Animação só em CSS (TvTcl.module.css); com "reduzir movimento" a TV já aparece ligada.
export function TvTcl() {
  return (
    <div className={s.cena}>
      <div className={s.foto}>
        <Picture
          base="tcl-sala"
          widths={[480, 768, 1168]}
          sizes="(min-width: 1024px) 600px, 100vw"
          alt="TV TCL ligada numa sala clara em Manaus mostrando um anúncio da iTV Centro Técnico"
          width={1168}
          height={880}
          priority
        />
      </div>
      <TclTvAnuncio />
      <div className={s.vidro} aria-hidden="true" />
      <div className={s.tela} aria-hidden="true">
        <div className={s.luz} />
        <div className={s.boot}>
          <span className={s.nome}>TCL</span>
        </div>
      </div>
      <span className={s.led} aria-hidden="true" />
      <TclTvBotao />
    </div>
  );
}
