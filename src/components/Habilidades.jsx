import { motion as Motion } from "framer-motion";
import { TAG_COLORS, tagStyle } from "../data/tagColors";

const categorias = [
  { nome: "Back-end", itens: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"] },
  { nome: "Dados", itens: ["SQL", "NoSQL", "Airflow", "dbt", "Kafka"] },
  { nome: "IA", itens: ["LLMs", "RAG", "LangChain", "OpenAI API", "Vector DB"] },
  { nome: "Front-end", itens: ["React", "Vite", "Tailwind", "Framer Motion", "Vercel"] },
];

export default function Habilidades() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="habilidades">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Habilidades</h2>
        <div className="h-px w-24 bg-[#FFD400]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categorias.map((c) => (
          <Motion.div
            key={c.nome}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold">{c.nome}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.itens.map((t) => {
                const color = TAG_COLORS[t] || "#FFD400";
                return (
                  <span key={t} style={tagStyle(color)} className="px-3 py-1 text-xs rounded-full">
                    {t}
                  </span>
                );
              })}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
