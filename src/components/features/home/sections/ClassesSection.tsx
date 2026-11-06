import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ClassCard } from "@/components/features/home/cards/ClassCard";
import { classes } from "@/components/features/home/data/classes";

export function ClassesSection() {
  return (
    <section id="turmas" className="bg-muted/35 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Turmas"
          title="Conheça as turmas participantes"
          description="Cada turma apresenta um cuidado especial em seu aprendizado, criatividade e participação na proposta da Mostra."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((classItem, index) => (
            <Reveal key={classItem.id} delay={index * 0.06}>
              <ClassCard classInfo={classItem} onSelect={() => undefined} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
