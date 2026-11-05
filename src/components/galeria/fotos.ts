// Tipo das fotos da galeria "A loja" (usado pela galeria e pela foto ampliada).

export type Ambiente = 'Fachada' | 'Atendimento' | 'Laboratório' | 'Loja';

export type Foto = {
  id: string;
  ambiente: Ambiente;
  legenda: string;
  grid: string; // caminho sem extensão (miniatura)
  full: string; // caminho sem extensão (ampliada)
  w: number;
  h: number;
};
