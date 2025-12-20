export default function Contato() {
  return (
    <section className="w-full py-20 px-6 md:px-20 text-white" id="contato">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Contato</h2>
        <div className="h-px w-24 bg-[#FFD400]" />
      </div>
      <div className="flex flex-wrap gap-6">
        <a href="https://github.com/marccosabino" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD400] hover:shadow-[0_0_18px_rgba(255,212,0,0.28)] transition flex items-center gap-3">
          <img src="/icons/github.svg" className="w-5 h-5 invert" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/marccosabino/" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD400] hover:shadow-[0_0_18px_rgba(255,212,0,0.28)] transition flex items-center gap-3">
          <img src="/icons/linkedin.svg" className="w-5 h-5 invert" />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:marco.sabinosr@gmail.com" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD400] hover:shadow-[0_0_18px_rgba(255,212,0,0.28)] transition flex items-center gap-3">
          <img src="/icons/mail.svg" className="w-5 h-5 invert" />
          <span>E-mail</span>
        </a>
      </div>
    </section>
  );
}
