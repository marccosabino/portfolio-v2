export default function Projetos() {
  const projetos = [
    {
      titulo: "Pipeline de Dados",
      desc: "ETL completo com automações, APIs e machine learning."
    },
    {
      titulo: "Modelo de IA Empresarial",
      desc: "LLM treinado para respostas corporativas e análise de contexto."
    },
    {
      titulo: "Dashboard Analítico",
      desc: "Visualização interativa de KPIs e dados em tempo real."
    },
  ];

  return (
    <section className="w-full py-32 px-6 md:px-20 text-white" id="projetos">
      <h2 className="text-4xl font-bold mb-10">Projetos</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projetos.map((p, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.titulo}</h3>
            <p className="opacity-80">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
