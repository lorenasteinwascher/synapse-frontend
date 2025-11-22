import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-violet-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight hover:opacity-90 transition"
        >
          Synapse
        </NavLink>

        <ul className="flex gap-6 text-sm font-medium">
          {[
            { to: "/", label: "Início" },
            { to: "/trilhas", label: "Trilhas" },
            { to: "/faq", label: "FAQ" },
            { to: "/contato", label: "Contato" },
            { to: "/integrantes", label: "Integrantes" },
            { to: "/sobre", label: "Sobre" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition hover:text-violet-200 ${
                    isActive
                      ? "font-semibold underline underline-offset-4 text-white"
                      : "text-violet-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
