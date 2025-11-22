import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-indigo-600 mb-2">404</h1>
      <p className="text-gray-700 mb-4">Página não encontrada</p>
      <Link to="/" className="text-indigo-500 hover:underline">
        Voltar ao início
      </Link>
    </div>
  );
}
