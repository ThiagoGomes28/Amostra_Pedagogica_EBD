import { Card, CardContent } from "@/components/ui/card";
import type { ProjectItem } from "@/components/features/home/data/projects";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const Icon = project.icon;

  return (
    <Card className="h-full rounded-3xl border-border/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift">
      <CardContent className="p-7">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-base font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
