const eventos = [
  { ano: "2022", titulo: "Início em Back-end", texto: "APIs REST e serviços com autenticação." },
  { ano: "2023", titulo: "Dados & Pipelines", texto: "ETL, orquestração e observabilidade." },
  { ano: "2024", titulo: "IA aplicada", texto: "Integração de LLMs e RAG." },
  { ano: "2025", titulo: "Escala e performance", texto: "Foco em sistemas resilientes e métricas." },
];

export default function LinhaDoTempo() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="linha-do-tempo">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Minha Jornada</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />
        <div className="space-y-8">
          {eventos.map((e, idx) => (
            <div key={e.ano} className={`flex ${idx % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col items-start gap-6`}>
              <div className="w-full md:w-1/2">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <div className="text-[#FFE300] font-semibold">{e.ano}</div>
                  <div className="text-xl font-semibold">{e.titulo}</div>
                  <div className="text-white/80 mt-2">{e.texto}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
