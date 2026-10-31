import { BookOpen, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { verse } from "@/components/features/home/data/event";

export function VerseSection() {
  return (
    <section aria-labelledby="versiculo-tema" className="bg-primary-soft py-20 sm:py-24">
      <div className="section-shell">
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <span
            aria-hidden="true"
            className="absolute -top-6 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-primary/25 sm:block"
          />
          <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-background text-primary shadow-soft">
            <BookOpen className="size-5" aria-hidden="true" />
          </span>

          <h2 id="versiculo-tema" className="eyebrow mt-6">
            Versículo-tema
          </h2>

          <Quote className="mx-auto mt-6 size-7 text-gold" aria-hidden="true" />

          <blockquote className="mt-4">
            <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl lg:text-4xl">
              “{verse.text}”
            </p>
            <footer className="mt-6 text-sm font-semibold tracking-wide text-primary">
              {verse.reference}
            </footer>
          </blockquote>

          <span
            aria-hidden="true"
            className="mx-auto mt-8 block h-px w-24 bg-primary/25"
          />
        </Reveal>
      </div>
    </section>
  );
}
