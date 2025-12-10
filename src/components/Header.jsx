export default function Header() {
  return (
    <header className="
      fixed top-4 left-1/2 -translate-x-1/2
      w-[92%] max-w-4xl
      px-8 py-4

      rounded-3xl
      backdrop-blur-2xl
      bg-white/10

      border border-white/20
      shadow-[0_0_40px_rgba(255,255,255,0.05)]
      shadow-inner

      relative overflow-hidden
    ">
      
      {/* Glow interno */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/40 blur-md" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 blur-xl" />
      </div>

      {/* Reflexo líquido */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-br from-white/10 to-transparent
        opacity-40 blur-2xl
      " />

      {/* Highlight circular sutil */}
      <div className="
        absolute -top-10 right-10 w-32 h-32 
        bg-white/10 rounded-full blur-3xl opacity-20
      " />

      {/* Conteúdo real */}
      <nav className="relative z-10 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-wide select-none">
          Marco Sabino
        </h1>

        <ul className="flex gap-8 text-sm font-medium opacity-90">
          <li className="cursor-pointer hover:opacity-100 transition">Home</li>
          <li className="cursor-pointer hover:opacity-100 transition">Projetos</li>
          <li className="cursor-pointer hover:opacity-100 transition">Contato</li>
        </ul>
      </nav>
    </header>
  );
}
