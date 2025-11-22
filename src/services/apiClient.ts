// src/services/apiClient.ts
const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const DEFAULT_TIMEOUT_MS = Number(import.meta.env.VITE_API_TIMEOUT_MS || 10000);

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type FetchOpts = { timeoutMs?: number; headers?: Record<string, string> };

async function doFetch<T>(
  url: string,
  method: HttpMethod,
  data?: any,
  opts: FetchOpts = {}
): Promise<T> {
  const timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(opts.headers ?? {}),
  };

  try {
    const res = await fetch(
      `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`,
      {
        method,
        headers,
        body: data !== undefined ? JSON.stringify(data) : undefined,
        signal: controller.signal,
      }
    );
    clearTimeout(id);

    const ct = res.headers.get("content-type") || "";
    const isJson = ct.includes("application/json");

    if (!res.ok) {
      const errorBody = isJson
        ? await res.json().catch(() => ({}))
        : await res.text().catch(() => "");
      const err: any = new Error(`HTTP ${res.status}`);
      err.status = res.status;
      err.body = errorBody;
      throw err;
    }

    if (method === "DELETE" || res.status === 204) {
      return undefined as unknown as T;
    }

    return (isJson ? await res.json() : (await res.text())) as T;
  } catch (e: any) {
    clearTimeout(id);
    if (e?.name === "AbortError") {
      const err: any = new Error("Timeout: API demorou a responder.");
      err.status = 0;
      throw err;
    }
    throw e;
  }
}

export const api = {
  get:  <T>(path: string, opts?: FetchOpts) => doFetch<T>(path, "GET", undefined, opts),
  post: <T>(path: string, data: any, opts?: FetchOpts) => doFetch<T>(path, "POST", data, opts),
  put:  <T>(path: string, data: any, opts?: FetchOpts) => doFetch<T>(path, "PUT", data, opts),
  del:  <T>(path: string, opts?: FetchOpts) => doFetch<T>(path, "DELETE", undefined, opts),
};

/** Ping rápido no backend para “acordar” containers free-tier */
export async function warmup() {
  try {
    await doFetch<string>("/", "GET", undefined, { timeoutMs: 3000 });
  } catch {
    // Ignora — é só tentativa de wake-up
  }
}
