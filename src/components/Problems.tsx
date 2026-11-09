import {
  PowerOff,
  MonitorOff,
  ZapOff,
  VolumeX,
  AlertTriangle,
  RefreshCw,
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import type { Brand } from '@/lib/brands';

const problems = [
  {
    icon: PowerOff,
    title: 'TV não liga',
    desc: 'Acende o LED, faz barulho mas a tela não abre? Costuma ser fonte ou placa principal.',
  },
  {
    icon: MonitorOff,
    title: 'Sem imagem',
    desc: 'Som funciona, mas a tela fica preta, escura ou com flicker. Backlight ou T-CON.',
  },
  {
    icon: AlertTriangle,
    title: 'Listras na tela',
    desc: 'Linhas verticais, manchas roxas, áreas mais escuras. Diagnóstico no display.',
  },
  {
    icon: VolumeX,
    title: 'Som falhando',
    desc: 'Áudio cortando, com ruído ou mudo total. Reparo de placa de som.',
  },
  {
    icon: ZapOff,
    title: 'Travando ou lenta',
    desc: 'Smart TV travada, apps fechando, demora pra abrir Netflix ou YouTube.',
  },
  {
    icon: RefreshCw,
    title: 'Atualização travada',
    desc: 'Travou na atualização e não sai mais? Reinstalação de firmware com segurança.',
  },
];

export function Problems({ brand }: { brand?: Brand }) {
  return (
    <section className="section relative" id="problemas">
      <div className="container-max container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">O que resolvemos</span>
          <h2 className="h-display text-4xl text-cream sm:text-5xl">
            {brand ? `Sua TV ${brand.marca} está com algum desses problemas?` : 'Sua TV está com algum desses problemas?'}
          </h2>
          <p className="mt-5 text-lg text-cream/70">
            70% dos defeitos têm conserto simples e rápido. Antes de jogar fora, deixa
            a iTV avaliar — orçamento sem compromisso.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
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
