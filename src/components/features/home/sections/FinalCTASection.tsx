import { ArrowRight, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { mapsUrl } from "@/components/features/home/data/event";

export function FinalCTASection() {
  return (
    <section aria-labelledby="cta-final" className="pb-20 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-primary px-6 py-16 text-center sm:px-12 sm:py-20">
            <span
              aria-hidden="true"
              className="absolute -top-16 -left-10 size-56 rounded-full bg-primary-light/30 blur-2xl"
            />
            <span
              aria-hidden="true"
              className="absolute -right-12 -bottom-20 size-64 rounded-full bg-gold/20 blur-3xl"
            />

            <div className="relative mx-auto max-w-2xl">
              <h2
                id="cta-final"
                className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl"
              >
                Venha celebrar conosco!
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">
                Prepare-se para conhecer, aprender e celebrar tudo aquilo que Deus
                tem feito através da Escola Bíblica Dominical.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="group rounded-full transition-transform hover:-translate-y-0.5"
                >
                  <a href="#programacao">
                    Ver programação
                    <ArrowRight
                      className="ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-1 size-4" aria-hidden="true" />
                    Como chegar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
