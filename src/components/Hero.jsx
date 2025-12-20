import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  const fullText = "Desenvolvedor focado em Dados, IA e Back-end.";
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0B0B0B] overflow-hidden" id="home">

      {/* ESFERAS FLUTUANTES */}
      <div className="absolute w-[500px] h-[500px] bg-[#FFD400]/12 blur-[140px] rounded-full animate-float -top-20 -left-24" />
      <div className="absolute w-[400px] h-[400px] bg-[#FFD400]/8 blur-[120px] rounded-full animate-float2 top-40 -right-20" />

      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col items-center">

        {/* NOME */}
        <Motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight hero-name"
        >
          Marco Sabino
        </Motion.h1>

        {/* TEXTO COM TYPING ANIMATION */}
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl glow-text"
        >
          {typingText}
          <span className="typing-cursor">|</span>
        </Motion.p>

        <Motion.a
          href="#projetos"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#FFE300] text-[#0B0B0B] font-semibold hover:shadow-[0_0_22px_rgba(255,227,0,0.55)] transition"
        >
          Ver Projetos
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round"/></svg>
        </Motion.a>

        {/* ÍCONES */}
        <div className="flex gap-6 mt-10">
          <a href="https://github.com/marccosabino" className="hero-icon">
            <img src="/icons/github.svg" className="w-6 h-6 invert opacity-90" />
          </a>
          <a href="https://www.linkedin.com/in/marccosabino/" className="hero-icon">
            <img src="/icons/linkedin.svg" className="w-6 h-6 invert opacity-90" />
          </a>
          <a href="mailto:marco.sabinosr@gmail.com" className="hero-icon">
            <img src="/icons/mail.svg" className="w-6 h-6 invert opacity-90" />
          </a>
        </div>
      </div>

      {/* ESTILOS INLINE */}
      <style>
        {`
          .hero-icon {
            padding: 14px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.18);
            backdrop-filter: blur(10px);
            transition: 0.25s ease;
          }

          .hero-icon:hover {
            background: rgba(255, 212, 0, 0.15);
            border-color: rgba(255, 212, 0, 0.6);
            transform: translateY(-3px);
          }

          .glow-text { text-shadow: 0 0 12px rgba(255,255,255,0.25); }
          .hero-name { color: #FFE300; text-shadow: 0 0 28px rgba(255,227,0,0.35); }

          .typing-cursor {
            display: inline-block;
            width: 6px;
            margin-left: 2px;
            background: #FFE300;
            animation: blink 0.8s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }

          @keyframes float2 {
            0% { transform: translateY(0px); }
            50% { transform: translateY(25px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 7s ease-in-out infinite;
          }

          .animate-float2 {
            animation: float2 8s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
}
