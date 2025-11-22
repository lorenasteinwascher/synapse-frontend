import { Link } from "react-router-dom";
import Card from "@/components/Card";
import { integrantes } from "@/services/integrantes";

export default function Integrantes() {
  return (
    <section className="space-y-8">
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-violet-900">
          Equipe Synapse
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-700">
          Time responsável pela concepção, desenvolvimento e evolução da
          plataforma Synapse - unindo experiência em tecnologia, design e
          aprendizado.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {integrantes.map((integrante) => (
          <Card key={integrante.id} className="flex flex-col items-center text-center">
            {/* foto */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-violet-100 shadow-sm -mt-10 mb-4 bg-slate-100">
              <img
                src={integrante.foto}
                alt={integrante.nome}
                className="w-full h-full object-cover"
              />
            </div>

            {/* nome + rm */}
            <h2 className="font-semibold text-violet-900">{integrante.nome}</h2>
            <p className="text-xs text-slate-500 mb-1">RM: {integrante.rm}</p>

            {/* cargo / foco */}
            <p className="text-xs font-semibold text-violet-700">
              {integrante.cargo}
            </p>
            <p className="mt-2 text-xs text-slate-600 line-clamp-4">
              {integrante.bio}
            </p>

            {/* botões */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <a
                href={integrante.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-xs rounded-full border border-violet-200 text-violet-700 hover:bg-violet-50 transition"
              >
                LinkedIn
              </a>
              <a
                href={integrante.github}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-xs rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              >
                GitHub
              </a>

              {/* ESTE É O LINK QUE ABRE A PÁGINA DE DETALHE */}
              <Link
                to={`/integrantes/${integrante.id}`}
                className="px-3 py-1 text-xs rounded-full bg-violet-600 text-white hover:bg-violet-700 transition"
              >
                Ver perfil
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
