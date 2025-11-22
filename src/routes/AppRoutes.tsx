// src/routes/AppRoutes.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/layout/Footer";

import Home from "@/pages/Home";
import FAQ from "@/pages/FAQ";
import Contato from "@/pages/Contato";
import Integrantes from "@/pages/Integrantes";
import IntegranteDetalhe from "@/pages/IntegranteDetalhe";
import Sobre from "@/pages/About";

import Trilhas from "@/pages/Trilhas";
import TrilhaDetalhe from "@/pages/TrilhaDetalhe";
import TrilhaForm from "@/pages/TrilhaForm";
import NotFound from "@/pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Header />

        <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />

            {/* INTEGRANTES */}
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />

            {/* TRILHAS */}
            <Route path="/trilhas" element={<Trilhas />} />
            <Route path="/trilhas/:id" element={<TrilhaDetalhe />} />
            <Route path="/trilhas/:id/editar" element={<TrilhaForm />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
