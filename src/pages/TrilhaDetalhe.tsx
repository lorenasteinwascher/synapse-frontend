import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EntityAPI, type Trilha } from "@/services/entityApi";
import Alert from "@/components/Alert";
import Card from "@/components/Card";

export default function TrilhaDetalhe() {
  const { id } = useParams();
  const [trilha, setTrilha] = useState<Trilha | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrilha() {
      try {
        const response = await EntityAPI.get(Number(id));
        setTrilha(response);
      } catch {
        setError("Erro ao carregar trilha.");
      }
    }
    fetchTrilha();
  }, [id]);

  if (error) return <Alert message={error} type="error" />;
  if (!trilha) return <p>Carregando...</p>;

  return (
    <Card className="p-6 space-y-3">
      <h1 className="text-2xl font-bold text-violet-900">{trilha.nome}</h1>
      <p className="text-slate-700">{trilha.descricao}</p>
      <p className="text-sm text-slate-500">Categoria: {trilha.categoria}</p>
      <p className="text-sm text-slate-500">Duração: {trilha.duracao}</p>

      <div className="flex gap-4 mt-6">
        <Link
          to={`/trilhas/${trilha.id}/editar`}
          className="bg-violet-900 text-white px-4 py-2 rounded-xl font-semibold hover:bg-violet-800"
        >
          Editar
        </Link>
        <Link
          to="/trilhas"
          className="bg-white text-violet-900 px-4 py-2 rounded-xl font-semibold border border-violet-900 hover:bg-violet-50"
        >
          Voltar
        </Link>
      </div>
    </Card>
  );
}
