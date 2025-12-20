import { motion as Motion } from "framer-motion";
import { TAG_COLORS, tagStyle } from "../data/tagColors";

export default function FeaturedCard({ title, description, techs, link }) {
  return (
    <Motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group block p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <svg className="w-6 h-6 opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="#FFE300" strokeWidth="2" strokeLinecap="round"/><path d="M9 7H17V15" stroke="#FFE300" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
      <p className="mt-3 text-white/85 text-sm md:text-base">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {techs?.map((t) => (
          <span key={t} style={tagStyle(TAG_COLORS[t] || "#FFE300")} className="px-3 py-1 text-xs rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#FFE300] to-transparent opacity-0 group-hover:opacity-100 transition" />
      <style>{`.group:hover{border-color:#FFE300;box-shadow:0 0 24px rgba(255,227,0,0.35)}`}</style>
    </Motion.a>
  );
}
