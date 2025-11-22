// src/pages/Solucoes.tsx
import { Link } from "react-router-dom";

export default function Solucoes() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-12">
      <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 md:p-12 ring-1 ring-slate-200 shadow-sm">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
            🧭 Jornada segura
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
            🔒 Privacidade do usuário
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
            ♿ Acessibilidade
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          CuidaBot - o que a solução entrega
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
          Um assistente digital que atua como guia na jornada do paciente: linguagem clara, passos
          simples e recursos de acessibilidade para tornar o cuidado em saúde mais humano e acessível.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-900 px-6 py-3 font-semibold text-white shadow hover:bg-sky-800"
          >
            Falar com a equipe
          </Link>
          <Link
            to="/integrantes"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            Ver integrantes
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-sky-900">Acesso facilitado</h3>
            <p className="mt-2 text-slate-700">
              Passo a passo claro para agendar consultas, realizar exames e tirar dúvidas rapidamente.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-sky-900">Inclusivo por design</h3>
            <p className="mt-2 text-slate-700">
              Alto contraste, fontes legíveis, leitura por voz e componentes pensados para todos.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-sky-900">Confiável</h3>
            <p className="mt-2 text-slate-700">
              Conteúdo direto e sem distrações — foco total na experiência do paciente.
            </p>
          </article>
        </div>
      </section>

      <section>
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Como funciona na prática</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            A solução acompanha o usuário em momentos críticos e também no dia a dia,
            reduzindo dúvidas e fricções com orientações curtas e acionáveis.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-bold text-sky-900">1) Agendamento assistido</h3>
            <p className="mt-2 text-slate-700">
              Orienta o paciente passo a passo para marcar consultas e exames — linguagem simples,
              confirmação ao final e instruções do que levar.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-bold text-sky-900">2) Pré-consulta simplificada</h3>
            <p className="mt-2 text-slate-700">
              Lembra de documentos, preparo necessário e como chegar, evitando atrasos e remarcações.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-bold text-sky-900">3) Orientações pós-alta</h3>
            <p className="mt-2 text-slate-700">
              Reforça cuidados, receitas e sinais de alerta de forma clara, com lembretes opcionais.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="font-bold text-sky-900">4) Dúvidas rápidas</h3>
            <p className="mt-2 text-slate-700">
              Conteúdo curto e direto para perguntas comuns, com acessibilidade total.
            </p>
          </div>
        </div>
      </section>

      <section>
        <header className="mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Recursos técnicos</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Construído com foco em desempenho, manutenção e boas práticas — garantindo
            uma base sólida para evoluir.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>React + Vite + TypeScript (SPA com rotas via <code>react-router</code>).</li>
              <li>Estilização com TailwindCSS, sem frameworks extras.</li>
              <li>Componentes reutilizáveis, tipagem e organização semântica.</li>
              <li>Formulário com validação simples e feedback ao usuário.</li>
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Responsividade real (mobile, tablet e desktop).</li>
              <li>HTML semântico e acessível.</li>
              <li>Imagens otimizadas sempre que aplicável.</li>
              <li>Arquitetura clara para evolução por sprints.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-b from-sky-50 to-white p-8 ring-1 ring-slate-200 shadow-sm">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
              Quer ver de perto ou dar feedback?
            </h3>
            <p className="mt-1 text-slate-700">
              Fale com a equipe e conheça os próximos passos da solução.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-900 px-6 py-3 font-semibold text-white shadow hover:bg-sky-800"
            >
              Entrar em contato
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
