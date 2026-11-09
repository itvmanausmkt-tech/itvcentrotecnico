import { VolumeX, ZapOff, RefreshCw } from 'lucide-react';
import { whatsappMessage } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { Picture } from '@/components/ui/Picture';

// Mesmos defeitos e textos da seção "O que resolvemos" do site, adaptados para LG.
// Os três mais buscados no Google Ads ganham foto de uma TV LG com o defeito.
const comFoto = [
  {
    foto: 'lg-tela-preta',
    alt: 'TV LG desligada com a tela preta e o LED de stand-by aceso',
    title: 'TV LG não liga ou fica com a tela preta',
    desc: 'Acende o LED, faz barulho mas a tela não abre? Costuma ser fonte ou placa principal.',
    sintoma: 'minha TV LG não liga / está com a tela preta',
  },
  {
    foto: 'lg-linhas',
    alt: 'TV LG com linhas verticais coloridas atravessando a imagem',
    title: 'Linhas verticais ou defeito na imagem',
    desc: 'Linhas verticais, manchas roxas, áreas mais escuras. Diagnóstico no display.',
    sintoma: 'minha TV LG está com linhas ou defeito na imagem',
  },
  {
    foto: 'lg-iluminacao',
    alt: 'TV LG com a imagem escura e manchada por falha na iluminação de LED',
    title: 'Problema de iluminação',
    desc: 'Som funciona, mas a tela fica preta, escura ou com flicker. Backlight ou T-CON.',
    sintoma: 'minha TV LG está com a imagem escura (iluminação)',
  },
];

const semFoto = [
  {
    icon: VolumeX,
    title: 'Som falhando',
    desc: 'Áudio cortando, com ruído ou mudo total. Reparo de placa de som.',
  },
  {
    icon: ZapOff,
    title: 'Smart TV LG travando ou lenta',
    desc: 'Smart TV travada, apps fechando, demora pra abrir Netflix ou YouTube.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização travada',
    desc: 'Travou na atualização ou no logo LG e não sai mais? Reinstalação de firmware com segurança.',
  },
];

export function LgProblems() {
  return (
    <section className="section relative" id="problemas">
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">O que resolvemos</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            Sua TV LG está com algum desses problemas?
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            70% dos defeitos têm conserto simples e rápido. Antes de jogar fora, deixa
            a iTV avaliar — orçamento sem compromisso.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {comFoto.map((p, i) => (
            <Reveal key={p.foto} delay={i * 50} as="article" className="card card-hover flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
                <Picture
                  base={p.foto}
                  widths={[480, 768]}
                  sizes="(min-width: 768px) 400px, 100vw"
                  alt={p.alt}
                  width={768}
                  height={579}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.desc}</p>
                <a
                  href={whatsappMessage(`Olá! Vim pelo Google: ${p.sintoma}. Podem me ajudar?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-forest-400 underline-offset-4 hover:underline"
                >
                  Descrever esse defeito no WhatsApp
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {semFoto.map((p, i) => (
            <Reveal key={p.title} delay={i * 50} className="card card-hover p-7">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500/20 to-forest-800/10 text-forest-500">
                <p.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
