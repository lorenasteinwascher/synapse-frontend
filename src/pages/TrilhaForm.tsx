import { useEffect, useState, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EntityAPI, type Trilha } from "@/services/entityApi";
import Input from "@/components/Input";
import Alert from "@/components/Alert";
import Card from "@/components/Card";

export default function TrilhaForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<Trilha>({
    nome: "",
    descricao: "",
    categoria: "",
    duracao: "",
  });
  const [error, setError] = useState<string | null>(null);

  const editing = Boolean(id);

  useEffect(() => {
    if (editing) {
      EntityAPI.get(Number(id))
        .then((data) => setForm(data))
        .catch(() => setError("Erro ao carregar trilha."));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editing) {
        await EntityAPI.update(Number(id), form);
      } else {
        await EntityAPI.create(form);
      }
      navigate("/trilhas");
    } catch {
      setError("Erro ao salvar trilha.");
    }
  };

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold text-violet-900 mb-4">
        {editing ? "Editar Trilha" : "Nova Trilha"}
      </h1>

      {error && <Alert message={error} type="error" />}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <Input
          label="Descrição"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
        />
        <Input
          label="Categoria"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
        />
        <Input
          label="Duração"
          name="duracao"
          value={form.duracao}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-violet-900 text-white px-6 py-2 rounded-xl font-semibold hover:bg-violet-800"
        >
          {editing ? "Salvar alterações" : "Cadastrar"}
        </button>
      </form>
    </Card>
  );
}
