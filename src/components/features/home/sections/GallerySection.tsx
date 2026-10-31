import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { gallery } from "@/components/features/home/data/gallery";

export function GallerySection() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = open ? gallery[index] : null;

  const go = (step: number) =>
    setIndex((prev) =>
      prev === null ? prev : (prev + step + gallery.length) % gallery.length,
    );

  return (
    <section id="galeria" className="bg-secondary py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos que ficam na memória"
          description="Confira alguns registros da nossa caminhada e das atividades desenvolvidas."
        />

        <div className="mt-14 grid auto-rows-45 grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-47.5 lg:auto-rows-55">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 0.06}
              className={`${item.span ?? ""} h-full`}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-shadow hover:shadow-lift"
                aria-label={`Ampliar foto: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent className="max-w-3xl overflow-hidden rounded-3xl p-0">
          {current ? (
            <>
              <DialogTitle className="sr-only">{current.alt}</DialogTitle>
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[70vh] w-full bg-secondary object-contain"
              />
              <div className="flex items-center justify-between gap-4 border-t border-border p-4">
                <p className="text-sm text-muted-foreground">{current.alt}</p>
                <div className="flex shrink-0 gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => go(-1)}
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="size-4" aria-hidden="true" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => go(1)}
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="size-4" aria-hidden="true" />
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
