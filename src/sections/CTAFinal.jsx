export default function CTAFinal() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white text-center" id="cta-final">
      <h2 className="text-3xl md:text-4xl font-bold">Vamos conversar</h2>
      <p className="mt-3 text-white/80">Aberto a oportunidades em Back-end, Dados e IA. Projetos reais, foco em impacto.</p>
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a href="mailto:marco.sabinosr@gmail.com" className="px-6 py-3 rounded-xl bg-[#FFE300] text-[#0B0B0B] font-semibold hover:shadow-[0_0_22px_rgba(255,227,0,0.55)] transition">Contato</a>
        <a href="/curriculo.pdf" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFE300] hover:shadow-[0_0_18px_rgba(255,227,0,0.35)] transition">Download Currículo</a>
        <a href="https://www.linkedin.com/in/marccosabino/" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFE300] hover:shadow-[0_0_18px_rgba(255,227,0,0.35)] transition">LinkedIn</a>
      </div>
    </section>
  );
}
