// Tipos usados somente no front
export interface TeamMember {
  id: string;     // gerado a partir do nome (slug)
  nome: string;
  rm: string;
  foto?: string;  // caminho relativo (ex.: /img/foto1.jpeg)
  bio?: string;
  gh?: string;    // GitHub
  li?: string;    // LinkedIn
}
