// src/pages/Trilhas.tsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "@/components/Alert";
import Card from "@/components/Card";
import { EntityAPI, type Trilha } from "@/services/entityApi";

export default function Trilhas() {
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await EntityAPI.list();
        setTrilhas(response);
      } catch (err) {
        console.error("Erro ao carregar trilhas:", err);
        setError("Erro ao carregar trilhas.");
      } finally {
        setLoading(false);
      }
    }

    fetchTrilhas();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <p className="text-slate-600">Carregando trilhas...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Alert message={error} type="error" />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-violet-900">
            Trilhas de Aprendizado
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Explore as trilhas disponíveis e aprofunde seus conhecimentos em
            tecnologia, dados e desenvolvimento.
          </p>
        </div>

        <Link
          to="/trilhas/novo"
          className="inline-flex items-center justify-center bg-violet-900 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-violet-800 transition"
        >
          Nova Trilha
        </Link>
      </div>

      {trilhas.length === 0 ? (
        <p className="text-slate-600 text-sm">
          Ainda não há trilhas cadastradas. Clique em{" "}
          <span className="font-semibold">“Nova Trilha”</span> para criar a
          primeira.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {trilhas.map((trilha) => (
            <Card
              key={trilha.id}
              className="p-4 border border-slate-200 hover:shadow-md transition"
            >
              <h2 className="font-bold text-lg text-violet-900 mb-1">
                {trilha.nome}
              </h2>

              {trilha.categoria && (
                <p className="text-xs font-semibold text-violet-700 mb-1">
                  {trilha.categoria}
                </p>
              )}

              <p className="text-slate-600 text-sm mb-3 line-clamp-3">
                {trilha.descricao || "Trilha sem descrição cadastrada."}
              </p>

              {trilha.duracao && (
                <p className="text-xs text-slate-500 mb-2">
                  Duração estimada: {trilha.duracao}
                </p>
              )}

              <Link
                to={`/trilhas/${trilha.id}`}
                className="text-sm font-medium text-violet-700 hover:underline"
              >
                Ver detalhes →
              </Link>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
