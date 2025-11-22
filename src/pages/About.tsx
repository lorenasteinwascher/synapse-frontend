// src/pages/About.tsx
export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-0 lg:py-16">
      <section className="space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Sobre o Synapse
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            O Synapse é uma plataforma de trilhas de aprendizado inteligentes que conecta pessoas,
            conteúdos e oportunidades de desenvolvimento. Por meio de dados, IA e uma experiência
            simples de usar, o Synapse apoia a requalificação profissional, o aprendizado contínuo
            e a construção de novas carreiras em tecnologia.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
            A ideia central é transformar o estudo em uma jornada guiada: o usuário escolhe um
            objetivo, segue uma trilha organizada em etapas e recebe recomendações de conteúdos,
            projetos práticos e avaliações para acompanhar a própria evolução.
          </p>
        </header>

        {/* Cards principais */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Missão */}
          <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-violet-700">Missão</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Democratizar o acesso à educação de qualidade, oferecendo trilhas de aprendizado
              claras e acessíveis que aproximem as pessoas das habilidades mais exigidas pelo
              mercado — especialmente em tecnologia, dados e inovação.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              O foco é reduzir a distância entre “o que eu sei hoje” e “o que o mercado espera de
              mim”, ajudando estudantes e profissionais a darem o próximo passo com segurança.
            </p>
          </article>

          {/* Visão */}
          <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-violet-700">Visão</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Ser referência em plataformas de requalificação profissional com uso de IA, conectando
              trilhas, métricas de progresso e recomendações personalizadas em um único ambiente.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Enxergamos o Synapse como um “mapa de carreira dinâmico”, capaz de sugerir próximos
              passos, indicar lacunas de conhecimento e apoiar decisões ao longo de toda a jornada
              de aprendizado.
            </p>
          </article>

          {/* Valores */}
          <article className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-violet-700">Valores</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">Inovação prática:</span> tecnologia
                a serviço de soluções reais, não apenas de conceitos.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Inclusão e acessibilidade:</span>{' '}
                linguagem clara, navegação simples e foco em diferentes perfis de alunos.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Transparência:</span> trilhas,
                objetivos e critérios de avaliação sempre visíveis para o usuário.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Aprendizado contínuo:</span> a
                plataforma evolui junto com o mercado e com as necessidades dos estudantes.
              </li>
            </ul>
          </article>
        </div>

        {/* Bloco FIAP / Global Solution */}
        <section className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-violet-700">
            Synapse na FIAP – Global Solution 2025
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Esta versão do Synapse foi desenvolvida como parte da Global Solution FIAP 2025, com o
            objetivo de simular uma plataforma real de trilhas de aprendizado. O projeto integra
            conceitos de front-end moderno, desenvolvimento back-end, consumo de APIs e boas
            práticas de UX.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            No front-end, o Synapse utiliza uma SPA construída com React, TypeScript, Vite e
            Tailwind CSS, priorizando componentização, responsividade e consistência visual. No
            back-end, os serviços foram planejados para expor entidades, trilhas e métricas de
            progresso por meio de APIs REST.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Além da parte técnica, o projeto também trabalha habilidades de documentação, divisão de
            responsabilidades em grupo, versionamento com GitHub e organização de entregas — seguindo
            um fluxo muito próximo ao de um produto digital em ambiente profissional.
          </p>
        </section>
      </section>
    </main>
  );
}
