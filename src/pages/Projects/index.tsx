import { ProjectCard } from "../../components/ProjectCard/Card";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black-primary/50 py-20 px-5">
      <div className="max-w-5xl mx-auto">

        {/* título */}
        <div className="flex gap-1 mb-3 justify-center lg:justify-start">
          <span className="text-2xl font-bold text-white">projects</span>
          <span className="text-2xl font-bold text-pink-primary">.</span>
        </div>
        <p className="text-grey-primary/50 text-sm mb-14 text-center lg:text-left">
          Projetos desenvolvidos 
        </p>

        {/* grade de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* rodapé da seção */}
        <p className="text-center text-xs text-grey-primary/30 mt-10">
          Mais projetos em{" "}
          <a
            href="https://github.com/barbaragrinop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary/60 hover:text-pink-primary transition-colors underline underline-offset-2"
          >
            github.com/barbaragrinop
          </a>
        </p>

      </div>
    </section>
  );
}
