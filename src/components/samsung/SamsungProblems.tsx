import { VolumeX, ZapOff, RefreshCw } from 'lucide-react';
import { defaultWhatsapp } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { Picture } from '@/components/ui/Picture';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

// Defeitos da página Samsung. Os três mais buscados no Google Ads ganham foto de uma
// TV Samsung com o defeito (a foto também abre o WhatsApp); os outros viram uma linha
// compacta de etiquetas.
const comFoto = [
  {
    foto: 'samsung-tela-preta',
    alt: 'TV Samsung desligada com a tela preta e o LED de stand-by aceso',
    title: 'TV Samsung não liga ou fica com a tela preta',
    desc: 'Acende o LED, faz barulho mas a tela não abre? Costuma ser fonte ou placa principal.',
    sintoma: 'minha TV Samsung não liga / está com a tela preta',
  },
  {
    foto: 'samsung-linhas',
    alt: 'TV Samsung com linhas verticais coloridas atravessando a imagem',
    title: 'Linhas verticais ou defeito na imagem',
    desc: 'Linhas verticais, manchas roxas, áreas mais escuras. Diagnóstico no display.',
    sintoma: 'minha TV Samsung está com linhas ou defeito na imagem',
  },
  {
    foto: 'samsung-iluminacao',
    alt: 'TV Samsung com a imagem escura e manchada por falha na iluminação de LED',
    title: 'Problema de iluminação',
    desc: 'Som funciona, mas a tela fica preta, escura ou com flicker. Backlight ou T-CON.',
    sintoma: 'minha TV Samsung está com a imagem escura (iluminação)',
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
    title: 'Smart TV Samsung travando ou lenta',
    desc: 'Smart TV travada, apps fechando, demora pra abrir Netflix ou YouTube.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização travada',
    desc: 'Travou na atualização ou no logo Samsung e não sai mais? Reinstalação de firmware com segurança.',
  },
];

export function SamsungProblems() {
  return (
    <section className="section relative" id="problemas">
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">O que resolvemos</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            Sua TV Samsung está com algum desses problemas?
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            70% dos defeitos têm conserto simples e rápido. Antes de jogar fora, deixa
            a iTV avaliar — orçamento sem compromisso.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {comFoto.map((p, i) => (
            <Reveal key={p.foto} delay={i * 50} as="article" className="card card-hover flex flex-col">
              {/* A foto também abre o WhatsApp, com a mensagem padrão do site.
                  Fora da ordem do Tab (o link de texto do card já é focável). */}
              <a
                href={defaultWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="group relative block aspect-[4/3] overflow-hidden bg-ink-900"
              >
                <Picture
                  base={p.foto}
                  widths={[480, 768]}
                  sizes="(min-width: 768px) 400px, 100vw"
                  alt={p.alt}
                  width={768}
                  height={579}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-forest-500 px-3 py-1.5 text-xs font-bold text-ink-950 shadow-lg transition-transform group-hover:scale-105">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Orçamento
                </span>
              </a>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">{p.desc}</p>
                <a
                  href={defaultWhatsapp}
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

        <Reveal className="mt-8 flex flex-col items-center gap-4">
          <span className="text-sm text-cream/55">Também resolvemos:</span>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {semFoto.map((p) => (
              <li
                key={p.title}
                title={p.desc}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-cream/85"
              >
                <p.icon className="h-4 w-4 text-forest-500" strokeWidth={2} />
                {p.title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
