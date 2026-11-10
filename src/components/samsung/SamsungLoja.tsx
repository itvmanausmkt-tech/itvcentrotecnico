import { Reveal } from '@/components/ui/Reveal';
import { StoreGallery } from '@/components/StoreGallery';
import s from './SamsungLoja.module.css';

// "A loja" da página Samsung: na grade, fotos em pé recortadas para preencher a tela
// (sem as faixas pretas); a foto ampliada continua inteira. Store (home) não mudou.

export function SamsungLoja() {
  return (
    <section
      id="loja"
      className="section relative overflow-hidden border-y border-white/5 bg-ink-900/40"
    >
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">A loja</span>
          <h2 className="h-display text-balance text-4xl text-cream sm:text-5xl">
            Um centro técnico que parece showroom.
          </h2>
          <p className="mt-5 text-balance text-lg text-cream/70">
            Espaço moderno, organizado e pronto pra te receber. Conheça a iTV Centro
            Técnico de pertinho.
          </p>
        </Reveal>

        <div className={s.galeria}>
          <StoreGallery />
        </div>

      </div>
    </section>
  );
}
