import { motion as Motion } from "framer-motion";
import { TAG_COLORS, tagStyle } from "../data/tagColors";

export default function ProjectCard({ title, description, techs, link }) {
  return (
    <Motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.02 }}
      className="group block p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-200"
   >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 17L17 7" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 7H17V15" stroke="#FFD400" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <p className="mt-2 text-sm text-white/80">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {techs?.map((t) => {
          const color = TAG_COLORS[t] || "#FFD400";
          return (
            <span
              key={t}
              style={tagStyle(color)}
              className="px-3 py-1 text-xs rounded-full"
            >
              {t}
            </span>
          );
        })}
      </div>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition" />
      <style>{`
        .group:hover { border-color: #FFD400; box-shadow: 0 0 22px rgba(255,212,0,0.25); }
      `}</style>
    </Motion.a>
  );
}
