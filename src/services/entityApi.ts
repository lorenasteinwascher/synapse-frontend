// src/services/entityApi.ts
import { api, warmup } from "./apiClient";

/** Identificador aceito pelo backend (número, string, uuid, etc.) */
export type Id = number | string;

/** Modelo base da Trilha (conforme o backend Synapse) */
export interface Trilha {
  id?: Id;
  nome: string;
  descricao?: string;
  categoria?: string;
  duracao?: string;
  [k: string]: any;
}

/* ------------------------------------------------------------------ */
/* Configuração de caminhos                                           */
/* ------------------------------------------------------------------ */

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ENTITY_PATH = import.meta.env.VITE_API_ENTITY_PATH;

if (!BASE_URL || !ENTITY_PATH) {
  throw new Error(
    "Variáveis de ambiente ausentes. Configure no .env: VITE_API_BASE_URL e VITE_API_ENTITY_PATH"
  );
}

/** Caminho final completo da API (ex: http://localhost:8081/trilhas) */
export const PATH = `${BASE_URL}${ENTITY_PATH}`.replace(/\/+$/, "");

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

function qs(params?: Record<string, unknown>) {
  if (!params) return "";
  const entries = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && v !== "");
  if (!entries.length) return "";
  const s = new URLSearchParams();
  for (const [k, v] of entries) s.append(k, String(v));
  return `?${s.toString()}`;
}

function sanitize(data: Trilha): Trilha {
  const out: Trilha = { ...data };
  if (typeof out.nome === "string") out.nome = out.nome.trim();
  if (typeof out.descricao === "string") out.descricao = out.descricao.trim();
  return out;
}

/* ------------------------------------------------------------------ */
/* API (CRUD)                                                         */
/* ------------------------------------------------------------------ */

export const EntityAPI = {
  /** Lista trilhas (aceita filtros) */
  async list(params?: Record<string, unknown>) {
    try {
      await warmup();
      console.log("📡 GET:", `${PATH}${qs(params)}`);
      return await api.get<Trilha[]>(`${PATH}${qs(params)}`, {
        timeoutMs: Number(import.meta.env.VITE_API_TIMEOUT_MS) || 15000,
      });
    } catch (e: any) {
      console.error("❌ Erro ao listar trilhas:", e);
      throw new Error(`Erro ao listar trilhas: ${e?.message ?? e}`);
    }
  },

  /** Busca trilha por ID */
  async get(id: Id) {
    try {
      return await api.get<Trilha>(`${PATH}/${id}`);
    } catch (e: any) {
      throw new Error(`Erro ao buscar trilha #${id}: ${e?.message ?? e}`);
    }
  },

  /** Cria uma nova trilha */
  async create(data: Trilha) {
    try {
      return await api.post<Trilha>(PATH, sanitize(data));
    } catch (e: any) {
      throw new Error(`Erro ao criar trilha: ${e?.message ?? e}`);
    }
  },

  /** Atualiza trilha existente */
  async update(id: Id, data: Partial<Trilha>) {
    try {
      return await api.put<Trilha>(`${PATH}/${id}`, sanitize(data as Trilha));
    } catch (e: any) {
      throw new Error(`Erro ao atualizar trilha #${id}: ${e?.message ?? e}`);
    }
  },

  /** Remove trilha */
  async remove(id: Id) {
    try {
      return await api.del<void>(`${PATH}/${id}`);
    } catch (e: any) {
      throw new Error(`Erro ao excluir trilha #${id}: ${e?.message ?? e}`);
    }
  },

  /** Cria se não tiver ID; senão atualiza */
  async upsert(data: Trilha) {
    return data.id ? this.update(data.id, data) : this.create(data);
  },
};
