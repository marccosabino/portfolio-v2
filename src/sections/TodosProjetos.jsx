import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function TodosProjetos() {
  return (
    <section className="w-full py-24 px-6 md:px-20 text-white" id="todos-projetos">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Todos os Projetos</h2>
        <div className="h-px w-24 bg-[#FFE300]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
