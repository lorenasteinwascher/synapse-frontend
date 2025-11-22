// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-0 lg:py-20">
      {/* Seção principal */}
      <section className="rounded-3xl bg-gradient-to-br from-violet-50 to-white p-10 shadow-sm border border-violet-100 text-center">
        <div className="mb-6 flex justify-center gap-3 flex-wrap">
          <span className="rounded-full bg-pink-50 px-4 py-1 text-sm font-medium text-pink-700 border border-pink-200">
            💡 Inovação em aprendizado
          </span>
          <span className="rounded-full bg-yellow-50 px-4 py-1 text-sm font-medium text-yellow-700 border border-yellow-200">
            ⚡ Tecnologia e conhecimento
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl leading-tight mb-4">
          Synapse: conectando ideias e aprendizado inteligente
        </h1>

        <p className="mx-auto max-w-3xl text-slate-600 text-lg mb-8 leading-relaxed">
          O <strong>Synapse</strong> é uma plataforma inteligente de trilhas de aprendizado que integra
          conhecimento, tecnologia e evolução contínua. Criada para apoiar estudantes e profissionais
          na requalificação e no desenvolvimento de novas habilidades para o futuro do trabalho.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/sobre"
            className="rounded-full bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 font-semibold shadow-md transition"
          >
            Conhecer a plataforma →
          </Link>
          <Link
            to="/trilhas"
            className="rounded-full border border-violet-300 px-6 py-3 font-semibold text-violet-700 hover:bg-violet-50 transition"
          >
            Entender como funciona
          </Link>
        </div>
      </section>

      {/* Seção explicativa */}
      <section className="mt-16 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-violet-800">Por que o Synapse existe?</h2>
          <p className="text-slate-700 leading-relaxed">
            O mercado de trabalho está em constante transformação, e a busca por requalificação se tornou essencial.
            O Synapse nasceu com o propósito de facilitar esse processo, oferecendo trilhas de aprendizado guiadas,
            acessíveis e personalizadas, para ajudar pessoas a se adaptarem às novas demandas da era digital.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Nossa missão é aproximar tecnologia e educação, promovendo uma aprendizagem prática, inteligente e centrada
            no usuário — unindo design, usabilidade e inteligência artificial.
          </p>
        </div>
        <div className="rounded-2xl bg-violet-50 p-8 border border-violet-100">
          <h3 className="text-lg font-semibold text-violet-700 mb-3">
            🌐 O que o Synapse oferece:
          </h3>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li>✅ Trilhas de aprendizado organizadas por temas e níveis de conhecimento</li>
            <li>✅ Recomendações personalizadas baseadas no perfil do usuário</li>
            <li>✅ Integração entre teoria, prática e aplicação real</li>
            <li>✅ Painel de progresso e acompanhamento de desempenho</li>
            <li>✅ Acessibilidade e design responsivo em qualquer dispositivo</li>
          </ul>
        </div>
      </section>

      {/* Seção de diferencial */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold text-violet-800 mb-4">
          Um novo jeito de aprender e evoluir
        </h2>
        <p className="max-w-3xl mx-auto text-slate-700 leading-relaxed mb-8">
          Diferente de plataformas tradicionais, o Synapse é centrado no usuário. Ele combina tecnologia, IA e design
          educacional para criar uma experiência de aprendizado envolvente, com foco em resultados reais e aplicáveis.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/trilhas"
            className="rounded-full bg-violet-700 hover:bg-violet-800 text-white px-6 py-3 font-semibold shadow-md transition"
          >
            Explorar trilhas →
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-violet-300 px-6 py-3 font-semibold text-violet-700 hover:bg-violet-50 transition"
          >
            Dúvidas frequentes
          </Link>
        </div>
      </section>
    </main>
  );
}
