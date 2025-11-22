// src/pages/FAQ.tsx
import { useState } from "react";

type FAQItem = {
  pergunta: string;
  resposta: string;
};

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      pergunta: "O que é o Synapse?",
      resposta:
        "O Synapse é uma plataforma de aprendizado contínuo impulsionada por inteligência artificial, focada em trilhas de requalificação profissional e desenvolvimento de novas competências.",
    },
    {
      pergunta: "As trilhas são gratuitas?",
      resposta:
        "O acesso às trilhas básicas é gratuito. Trilhas premium podem ser oferecidas em parceria com empresas e instituições que utilizam o Synapse para capacitação dos seus times.",
    },
    {
      pergunta: "Como funcionam as trilhas de aprendizado?",
      resposta:
        "Cada trilha é composta por módulos curtos com vídeos, leituras guiadas, quizzes e desafios práticos. A IA do Synapse recomenda o próximo passo com base na sua evolução e nos seus objetivos.",
    },
    {
      pergunta: "Preciso ter experiência prévia na área?",
      resposta:
        "Não. O Synapse foi pensado tanto para iniciantes quanto para profissionais em transição de carreira, oferecendo trajetórias em diferentes níveis de profundidade.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-violet-900 text-center mb-3">
        Perguntas Frequentes
      </h1>
      <p className="text-slate-600 text-center mb-10">
        Aqui você encontra respostas sobre o uso do Synapse, as trilhas de
        aprendizado e como a plataforma pode apoiar sua jornada profissional.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={index}
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left border rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-semibold text-lg text-violet-800">
                  {faq.pergunta}
                </h2>
                <span className="text-violet-600 text-xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              {isOpen && (
                <p className="text-slate-700 mt-2 text-sm md:text-base">
                  {faq.resposta}
                </p>
              )}
            </button>
          );
        })}
      </div>
    </main>
  );
}
