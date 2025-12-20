import FeaturedCard from "../components/FeaturedCard";
import { projects } from "../data/projects";

export default function ProjetosDestaque() {
  const destaque = projects.filter(p => p.featured);
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="projetos-destaque">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destaque.map((p) => (
          <FeaturedCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
