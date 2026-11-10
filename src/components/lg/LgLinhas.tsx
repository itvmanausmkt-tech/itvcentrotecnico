import { brandBySlug } from '@/lib/brands';

// Faixa "Atendemos todas as linhas LG" em etiquetas do mesmo tamanho,
// com borda verde, em vez de texto cinza solto.
const lg = brandBySlug('conserto-tv-lg')!;

export function LgLinhas() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40 py-10 sm:py-14">
      <div className="container-max container-px">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-cream/55">
          Atendemos todas as linhas {lg.marca}
        </p>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {lg.linhas.map((item) => (
            <li
              key={item}
              className="whitespace-nowrap rounded-full border border-forest-500/30 bg-forest-500/[0.07] px-4 py-2 font-display text-sm font-semibold text-cream/85 transition-colors hover:border-forest-500/70 hover:text-forest-400 sm:px-5 sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
