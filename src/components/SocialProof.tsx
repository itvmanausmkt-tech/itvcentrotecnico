import type { Brand } from '@/lib/brands';

const brands = ['Samsung', 'LG', 'TCL', 'AOC', 'Philco', 'Sony', 'Philips', 'Hisense'];

export function SocialProof({ brand }: { brand?: Brand }) {
  const itens = brand ? brand.linhas : brands;
  return (
    <section className="relative border-y border-white/5 bg-ink-900/40 py-12 sm:py-16">
      <div className="container-max container-px">
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-cream/50">
            {brand
              ? `Atendemos todas as linhas ${brand.marca}`
              : 'Atendemos todas as marcas — de TVs comuns a Smart TVs e QLED de até 85"'}
          </p>
          <div className={`grid w-full gap-x-6 gap-y-6 sm:gap-x-10 ${brand ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' : 'grid-cols-4 sm:grid-cols-8'}`}>
            {itens.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center text-center font-display text-base font-semibold text-cream/40 transition-colors hover:text-forest-400 sm:text-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
