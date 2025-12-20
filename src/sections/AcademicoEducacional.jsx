import { motion as Motion } from "framer-motion";

const itens = [
  { titulo: "Bacharelado em Sistemas de Informação", desc: "Formação com foco em engenharia de software e dados." },
  { titulo: "Hackathon DataOps", desc: "Time vencedor com pipeline observável e autoscaling." },
  { titulo: "Projeto Educacional — IA aplicada", desc: "RAG com embeddings e avaliação objetiva de respostas." },
];

export default function AcademicoEducacional() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="academico">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Experiência Acadêmica & Projetos</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {itens.map((i) => (
          <Motion.div key={i.titulo} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold">{i.titulo}</h3>
            <p className="mt-2 text-white/80">{i.desc}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
