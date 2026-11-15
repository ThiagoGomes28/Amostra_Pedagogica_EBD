import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { exhibitions } from "@/components/features/home/data/exhibitions";

export function ExhibitionsSection() {
  return (
    <section id="exposicoes" className="relative bg-[#f9f7f2] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Exposições"
          title="A 2ª Mostra Pedagógica em 8 exposições"
          description="Uma galeria editorial da EBD em Queimadas-PB, organizada para guiar o visitante por histórias, temas bíblicos e experiências de ensino com profundidade e cuidado visual."
          align="center"
        />

        <div className="mt-8 overflow-x-auto pb-2 lg:hidden">
          <nav
            aria-label="Navegação das exposições"
            className="flex min-w-max gap-2"
          >
            {exhibitions.map((exhibition) => (
              <a
                key={exhibition.id}
                href={`#${exhibition.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <span>{exhibition.number}</span>
                <span className="hidden sm:inline">—</span>
                <span className="max-w-28 truncate">{exhibition.title}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="hidden lg:block">
            <nav
              aria-label="Lista das exposições"
              className="sticky top-24 space-y-2"
            >
              {exhibitions.map((exhibition) => (
                <a
                  key={exhibition.id}
                  href={`#${exhibition.id}`}
                  className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-left transition-all hover:border-border hover:bg-background/80"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-[11px] font-bold text-primary">
                    {exhibition.number}
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                    {exhibition.title}
                  </span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            {exhibitions.map((exhibition, index) => (
              <motion.article
                key={exhibition.id}
                id={exhibition.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
                className="scroll-mt-28 rounded-[2rem] border border-[#d9e4d2] bg-background/90 p-5 shadow-soft sm:p-7 lg:p-8"
              >
                <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.3em] text-primary/80 uppercase">
                      {exhibition.id}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                      {exhibition.className}
                    </p>
                  </div>
                  <span className="text-4xl font-black leading-none tracking-[-0.06em] text-[#dfe9d8] sm:text-5xl">
                    {exhibition.number}
                  </span>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="order-2 lg:order-1">
                    <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                      {exhibition.subtitle}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.5rem]">
                      {exhibition.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {exhibition.preview}
                    </p>

                    {exhibition.ctaLabel ? (
                      <div className="mt-6">
                        <Button asChild className="rounded-full bg-primary px-5 text-[11px] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-soft">
                          <a href={exhibition.ctaHref ?? "#exposicoes"}>
                            {exhibition.ctaLabel}
                            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                          </a>
                        </Button>
                      </div>
                    ) : null}
                  </div>

                  <figure className="group order-1 overflow-hidden rounded-[1.75rem] border border-[#d9e4d2] bg-[#f4f1ea] p-2 shadow-soft lg:order-2">
                    <img
                      src={exhibition.image}
                      alt={exhibition.imageAlt}
                      loading="lazy"
                      className="h-full min-h-[250px] w-full rounded-[1.3rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </figure>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
