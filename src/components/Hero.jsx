import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Desenvolvedor focado em Back-end, Dados e IA.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center text-center">

      {/* ------ ESFERAS ------ */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-blue-600/40 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/40 blur-3xl rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-cyan-500/30 blur-2xl rounded-full" />

      {/* ------ CONTEÚDO ------ */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Nome com leve glow */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">
          Marco Sabino
        </h1>

        {/* Texto animado + glow */}
        <p className="text-lg sm:text-xl text-gray-200 max-w-xl mt-2
          drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse" />
        </p>

        {/* ------ BOTÕES (MANTIDOS) ------ */}
        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition"
          >
            Ver Projetos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-medium bg-blue-600/70 backdrop-blur-lg text-white hover:bg-blue-600 transition"
          >
            Contato
          </a>
        </div>

      </div>
    </section>
  );
}
