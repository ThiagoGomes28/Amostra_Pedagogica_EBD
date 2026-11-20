import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/ui/section-heading";
import { exhibitions } from "@/components/features/home/data/exhibitions";

export function ExhibitionsSection() {
  const [selectedExhibition, setSelectedExhibition] = useState<
    (typeof exhibitions)[number] | null
  >(null);
  const [zoom, setZoom] = useState(1);

  return (
    <section id="exposicoes" className="relative bg-[#f9f7f2] py-20 sm:py-24 lg:py-28 xl:py-32">
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

        <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-12">
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
                className="scroll-mt-28 rounded-[2rem] border border-[#d9e4d2] bg-background/90 p-5 shadow-soft sm:p-7 lg:p-8 xl:p-10"
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

                <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8 xl:gap-12">
                  <div className="order-2 lg:order-1">
                    <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">
                      {exhibition.subtitle}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[2.5rem] xl:text-5xl">
                      {exhibition.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-lg xl:text-lg">
                      {exhibition.preview}
                    </p>

                    {exhibition.ctaLabel ? (
                      <div className="mt-6">
                        <Button
                          type="button"
                          onClick={() => {
                            setZoom(1);
                            setSelectedExhibition(exhibition);
                          }}
                          className="rounded-full bg-primary px-5 text-[11px] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-soft"
                        >
                          {exhibition.ctaLabel}
                          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                        </Button>
                      </div>
                    ) : null}
                  </div>

                  <figure className="group order-1 overflow-hidden rounded-[1.75rem] border border-[#d9e4d2] bg-[#f4f1ea] p-2 shadow-soft lg:order-2">
                    <img
                      src={exhibition.image}
                      alt={exhibition.imageAlt}
                      loading="lazy"
                      className="h-auto w-full rounded-[1.3rem] object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                  </figure>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={Boolean(selectedExhibition)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedExhibition(null);
            setZoom(1);
          }
        }}
      >
        <DialogContent className="max-w-[92vw] overflow-hidden rounded-[1.5rem] border-0 bg-[#f4f1ea] p-0 shadow-[0_30px_80px_rgba(18,39,24,0.28)] sm:max-w-[75vw] lg:max-w-[68vw] xl:max-w-[60vw]">
          {selectedExhibition ? (
            <>
              <DialogTitle className="sr-only">
                {selectedExhibition.title}
              </DialogTitle>
              <div className="relative">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full border border-border/60 bg-background text-foreground shadow-soft hover:bg-background/90"
                  onClick={() => {
                    setSelectedExhibition(null);
                    setZoom(1);
                  }}
                  aria-label="Fechar visualização"
                >
                  <X className="size-4" aria-hidden="true" />
                </Button>

                <div className="max-h-[82vh] overflow-auto bg-[#f4f1ea]">
                  <img
                    src={selectedExhibition.ctaHref ?? selectedExhibition.image}
                    alt={selectedExhibition.imageAlt}
                    className="block bg-[#f4f1ea] object-contain transition-transform duration-200"
                    style={{
                      width: `${zoom * 100}%`,
                      minWidth: "100%",
                      transform: `scale(${zoom})`,
                      transformOrigin: "top center",
                    }}
                  />
                </div>

                <div className="absolute bottom-4 right-4 hidden gap-2 rounded-full border border-border/60 bg-background/85 p-1.5 shadow-soft backdrop-blur-sm lg:flex xl:gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-background text-foreground"
                    onClick={() => setZoom((current) => Number(Math.max(1, current - 0.1).toFixed(1)))}
                    aria-label="Diminuir zoom"
                  >
                    <Minus className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-background text-foreground"
                    onClick={() => setZoom((current) => Number(Math.min(2, current + 0.1).toFixed(1)))}
                    aria-label="Aumentar zoom"
                  >
                    <Plus className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
