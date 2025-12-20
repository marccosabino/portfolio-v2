import { motion as Motion } from "framer-motion";

export default function TechSnapshot() {
  return (
    <section className="w-full py-20 px-6 md:px-20 text-white" id="tech-snapshot">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Resumo Profissional</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <Motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl text-white/80 text-lg">
        Desenvolvedor focado em Back-end, Dados e Inteligência Artificial. Experiência com APIs performáticas, pipelines de dados escaláveis e integração de LLMs com engenharia de contexto. Priorizo código limpo, arquitetura modular e decisões técnicas orientadas a impacto.
      </Motion.p>
    </section>
  );
}
