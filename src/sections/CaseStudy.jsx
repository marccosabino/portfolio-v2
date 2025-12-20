import { motion as Motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="case-study">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Estudo de Caso</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold">Problema</h3>
          <p className="mt-2 text-white/80">Alto tempo de processamento em relatórios, pouca observabilidade e falhas intermitentes.</p>
        </Motion.div>
        <Motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold">Solução</h3>
          <p className="mt-2 text-white/80">Orquestração de ETL com filas, cache sob demanda e consolidação de KPIs com auditoria completa.</p>
        </Motion.div>
        <Motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold">Resultado</h3>
          <p className="mt-2 text-white/80">Redução de 60% no SLA, zero indisponibilidade em 90 dias e melhoria na governança de dados.</p>
        </Motion.div>
      </div>
    </section>
  );
}
