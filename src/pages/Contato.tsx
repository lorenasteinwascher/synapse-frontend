// src/pages/Contato.tsx
export default function Contato() {
  return (
    <main className="flex flex-col items-center py-16 px-6">
      <h1 className="text-3xl font-bold text-violet-900 mb-3">Entre em contato</h1>
      <p className="text-slate-600 mb-8 text-center max-w-xl">
        Fale conosco para dúvidas, parcerias, demonstrações da plataforma ou
        contato institucional. Retornaremos o mais breve possível.
      </p>

      <section className="grid gap-8 w-full max-w-5xl md:grid-cols-[2fr,1fr]">
        <form className="bg-white p-8 rounded-2xl shadow-md w-full space-y-4 border border-violet-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Assunto
            </label>
            <input
              type="text"
              placeholder="Motivo do contato"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Mensagem
            </label>
            <textarea
              rows={4}
              placeholder="Descreva sua dúvida, proposta ou sugestão..."
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-700 text-white font-semibold py-2.5 rounded-lg hover:bg-violet-800 transition"
          >
            Enviar mensagem
          </button>
        </form>

        <aside className="space-y-4 text-sm text-slate-700">
          <div className="bg-white rounded-2xl shadow-md border border-violet-100 p-5">
            <h2 className="font-semibold text-violet-900 mb-2">Contato direto</h2>
            <p>
              E-mail:{" "}
              <a
                href="mailto:contato@synapse.com.br"
                className="text-violet-700 font-medium hover:underline"
              >
                contato@synapse.com.br
              </a>
            </p>
            <p className="mt-1">
              Suporte:{" "}
              <a
                href="mailto:suporte@synapse.com.br"
                className="text-violet-700 font-medium hover:underline"
              >
                suporte@synapse.com.br
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-violet-100 p-5">
            <h2 className="font-semibold text-violet-900 mb-2">Atendimento</h2>
            <p>Segunda a sexta, das 9h às 18h (horário de Brasília).</p>
            <p className="mt-2 text-xs text-slate-500">
              * Este formulário é ilustrativo para a Global Solution FIAP.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
