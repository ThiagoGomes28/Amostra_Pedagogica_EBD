import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ScheduleCard } from "@/components/features/home/cards/ScheduleCard";
import { schedule } from "@/components/features/home/data/schedule";

export function ScheduleSection() {
  return (
    <section id="programacao" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Programação"
          title="Programação do Evento"
          description="Um roteiro pensado para que cada visitante aproveite todos os momentos da Mostra."
        />

        <ol className="relative mx-auto mt-14 max-w-3xl space-y-5 sm:pl-8">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-0 hidden w-px bg-border sm:block"
          />
          {schedule.map((item, index) => (
            <li key={item.time} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-8 -left-8 hidden size-3 rounded-full border-2 border-background bg-primary sm:block"
              />
              <Reveal delay={index * 0.06}>
                <ScheduleCard item={item} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
