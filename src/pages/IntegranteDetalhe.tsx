// src/pages/IntegranteDetalhe.tsx

import { Link, useParams, useNavigate } from "react-router-dom";
import Card from "@/components/Card";
import { getIntegranteById } from "@/services/integrantes";

export default function IntegranteDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const integrante = getIntegranteById(id);

  if (!integrante) {
    return (
      <section className="space-y-4">
        <p className="text-slate-700">Integrante não encontrado.</p>
        <button
          onClick={() => navigate("/integrantes")}
          className="inline-flex items-center px-4 py-2 rounded-full bg-violet-600 text-white text-sm hover:bg-violet-700 transition"
        >
          Voltar para a equipe
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="text-xs text-violet-700 hover:underline"
      >
        ← Voltar
      </button>

      <Card className="flex flex-col md:flex-row gap-6 items-start">
        {/* foto grande */}
        <div className="shrink-0">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-violet-100 shadow-sm bg-slate-100">
            <img
              src={integrante.foto}
              alt={integrante.nome}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* infos */}
        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-2xl font-bold text-violet-900">
              {integrante.nome}
            </h1>
            <p className="text-xs text-slate-500">RM: {integrante.rm}</p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-violet-700">
              {integrante.cargo}
            </p>
            <p className="text-xs text-slate-600">{integrante.foco}</p>
          </div>

          <p className="text-sm text-slate-700">{integrante.bio}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href={integrante.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-xs rounded-full border border-violet-200 text-violet-700 hover:bg-violet-50 transition"
            >
              LinkedIn
            </a>
            <a
              href={integrante.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-xs rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
            >
              GitHub
            </a>
            <Link
              to="/integrantes"
              className="px-4 py-1.5 text-xs rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
            >
              Ver todos os integrantes
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}
