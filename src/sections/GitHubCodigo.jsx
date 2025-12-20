export default function GitHubCodigo() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="github-codigo">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">GitHub & Código</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="flex flex-wrap gap-6">
        <a href="https://github.com/marccosabino" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFE300] hover:shadow-[0_0_18px_rgba(255,227,0,0.35)] transition flex items-center gap-3">
          <img src="/icons/github.svg" className="w-5 h-5 invert" />
          <span>Perfil GitHub</span>
        </a>
        <a href="https://github.com/marccosabino?tab=repositories" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFE300] hover:shadow-[0_0_18px_rgba(255,227,0,0.35)] transition flex items-center gap-3">
          <img src="/icons/github.svg" className="w-5 h-5 invert" />
          <span>Repositórios</span>
        </a>
      </div>
    </section>
  );
}
