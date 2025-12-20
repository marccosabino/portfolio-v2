import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projetos() {
  return (
    <section className="w-full py-28 px-6 md:px-20 text-white" id="projetos">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Projetos</h2>
        <div className="h-px w-24 bg-[#FFD400]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
