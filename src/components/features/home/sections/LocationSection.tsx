import { CalendarDays, Clock, Church, MapPin, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { eventInfo, mapsUrl } from "@/components/features/home/data/event";

const details = [
  { icon: Church, label: "Igreja", value: eventInfo.church },
  { icon: MapPin, label: "Endereço", value: eventInfo.address },
  { icon: CalendarDays, label: "Data", value: eventInfo.date },
  { icon: Clock, label: "Horário", value: eventInfo.time },
];

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Localização"
          title="Onde será a Mostra?"
          description="Estamos preparando tudo para receber você, sua família e seus convidados."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Card className="h-full rounded-3xl border-border/70 shadow-soft">
              <CardContent className="p-7">
                <ul className="space-y-5">
                  {details.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <item.icon className="size-4" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                          {item.label}
                        </span>
                        <span className="block text-sm font-semibold text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-6" />

                <Button
                  asChild
                  className="w-full rounded-full transition-transform hover:-translate-y-0.5"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="mr-1 size-4" aria-hidden="true" />
                    Como chegar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden rounded-3xl border border-border/70 bg-primary-soft p-8 text-center">
              <span
                aria-hidden="true"
                className="absolute -top-12 -left-12 size-40 rounded-full bg-background/60 blur-2xl"
              />
              <span
                aria-hidden="true"
                className="absolute -right-10 -bottom-14 size-44 rounded-full bg-gold-soft/70 blur-3xl"
              />
              <div className="relative">
                <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-background text-primary shadow-soft">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-5 text-base font-semibold text-foreground">
                  {eventInfo.church}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {eventInfo.address}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-6 rounded-full bg-background"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    Abrir no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
