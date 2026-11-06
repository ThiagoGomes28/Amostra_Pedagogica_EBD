import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/features/home/cards/ProjectCard";
import { projects } from "@/components/features/home/data/projects";

export function ProjectsSection() {
  return (
    <section aria-labelledby="projetos" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experiências"
          title="O que você vai encontrar"
          description="A Mostra é organizada em experiências para percorrer, observar e participar."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="group h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
