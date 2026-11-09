// Símbolo da LG (o "rosto": círculo vermelho com olho, "L" do nariz e "G" do contorno),
// desenhado em SVG para ficar nítido em qualquer tamanho.
export function LgLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#A50034" />
      <g fill="none" stroke="#fff" strokeWidth="2.8">
        <path d="M51 8.1A42 42 0 1 0 92 50.5H66" />
        <path d="M50 32V69H63" />
      </g>
      <circle cx="35" cy="34" r="3.8" fill="#fff" />
    </svg>
  );
}
