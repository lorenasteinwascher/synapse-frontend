// src/data/team.ts
import type { TeamMember } from "@/types/domain";

function slugify(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW: Omit<TeamMember, "id">[] = [
  {
    nome: "Lorena Steinwascher",
    rm: "561712",
    foto: "/img/foto1.jpeg",
    bio:
      "Responsável pela liderança técnica e pela arquitetura da solução Synapse, com foco em usabilidade e integração entre trilhas de conhecimento.",
    gh: "https://github.com/lorenasteinwascher",
    li: "https://linkedin.com/in/lorenasteinwascher/",
  },
  {
    nome: "Laura Elvira",
    rm: "562204",
    foto: "/img/foto2.jpeg",
    bio:
      "Atua na modelagem das trilhas de aprendizado, documentação e testes da plataforma, garantindo a coerência entre negócio e tecnologia.",
    gh: "https://github.com/lauraelviraa",
    li: "https://www.linkedin.com/in/laura-elviraa-879351365/",
  },
  {
    nome: "Isabelly Romano",
    rm: "564217",
    foto: "/img/foto3.jpeg",
    bio:
      "Responsável por identidade visual, comunicação e experiência do usuário, alinhando a narrativa do Synapse com os objetivos da Global Solution.",
    gh: "https://github.com/isaromano",
    li: "https://www.linkedin.com/in/isabelly-romano-tempesta-85843b2b7/",
  },
];

export const TEAM: TeamMember[] = RAW.map((m) => ({ id: slugify(m.nome), ...m }));
