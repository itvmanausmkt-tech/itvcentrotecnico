import { defaultWhatsapp } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

// Botão flutuante da página LG: só o ícone redondo também no computador (o texto
// "Fale conosco" cobria cards). Mesmo link do site. WhatsAppFAB (home) não mudou.
export function LgFAB() {
  return (
    <a
      href={defaultWhatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      style={{ animationDelay: '1s' }}
      className="anim-fade-scale group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 blur-md animate-pulse-slow" />
      <span aria-hidden="true" className="anel-zap absolute inset-0 -z-10 rounded-full border-2 border-[#25D366]" />
      <span aria-hidden="true" className="anel-zap atraso absolute inset-0 -z-10 rounded-full border-2 border-[#25D366]" />
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
