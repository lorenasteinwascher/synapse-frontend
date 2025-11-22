// src/services/integrantes.ts

export type Integrante = {
  id: string; // vamos usar o RM como id
  nome: string;
  rm: string;
  cargo: string;
  foco: string;
  bio: string;
  foto: string; // caminho no public
  linkedin: string;
  github: string;
};

export const integrantes: Integrante[] = [
  {
    id: "561712",
    nome: "Lorena Steinwascher",
    rm: "561712",
    cargo: "Líder técnica, Front-end & Back-end",
    foco: "Desenvolvimento full stack (React, Java, APIs) e liderança técnica do projeto.",
    bio: "Responsável pela liderança técnica do projeto Synapse, atuando no desenvolvimento completo do front-end em React e do back-end em Java, além da criação e integração das APIs da aplicação. Coordenou as decisões de arquitetura, qualidade de código e alinhamento entre as áreas de tecnologia e design.",
    foto: "/img/foto1.jpeg",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    id: "562204",
    nome: "Laura Elvira",
    rm: "562204",
    cargo: "Banco de dados, Python & Design",
    foco: "Modelagem de banco de dados, scripts em Python e apoio no design de interfaces.",
    bio: "Responsável pela modelagem e administração do banco de dados, garantindo a integridade e consistência das informações do Synapse. Desenvolveu scripts em Python para automações e contribuiu com o design das telas e elementos visuais, unindo dados e usabilidade de forma harmônica.",
    foto: "/img/foto2.jpeg",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    id: "564217",
    nome: "Isabelly Romano",
    rm: "564217",
    cargo: "Documentação & Qualidade",
    foco: "Documentação técnica, organização de entregas e padronização de processos.",
    bio: "Responsável por toda a documentação do projeto Synapse, incluindo requisitos, fluxos da aplicação e decisões técnicas. Organizou os registros de cada sprint e garantiu a padronização e clareza das informações, fortalecendo a comunicação e o controle de qualidade do projeto.",
    foto: "/img/foto3.jpeg",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
];

export function getIntegranteById(id?: string) {
  if (!id) return undefined;
  return integrantes.find((item) => item.id === id);
}
