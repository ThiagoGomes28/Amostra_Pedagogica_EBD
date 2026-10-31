import { motion } from "motion/react";
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { eventInfo } from "@/components/features/home/data/event";
import heroImage from "@/assets/hero.jpg";

const infoItems = [
  { icon: CalendarDays, label: "Data", value: eventInfo.date },
  { icon: Clock, label: "Horário", value: eventInfo.time },
  { icon: MapPin, label: "Local", value: eventInfo.church },
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-130 bg-primary-soft"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-gold-soft/70 blur-3xl"
      />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge className="rounded-full bg-background px-3 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-primary shadow-soft hover:bg-background">
            {eventInfo.organization.toUpperCase()}
          </Badge>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {eventInfo.name}
          </h1>

          <p className="mt-5 font-serif text-xl text-primary sm:text-2xl">
            {eventInfo.subtitle}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {eventInfo.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {infoItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 shadow-soft"
              >
                <item.icon className="size-4 text-primary" aria-hidden="true" />
                <span className="text-left">
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

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full transition-transform hover:-translate-y-0.5"
            >
              <a href="#programacao">
                Conheça a programação
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
              className="rounded-full bg-background transition-transform hover:-translate-y-0.5"
            >
              <a href="#turmas">
                <Users className="mr-1 size-4" aria-hidden="true" />
                Ver turmas participantes
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lift">
            <img
              src={heroImage}
              alt="Alunos e professores da Escola Bíblica Dominical reunidos em uma classe com a Bíblia aberta e trabalhos coloridos"
              width={1408}
              height={1104}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 hidden rounded-2xl border border-border/60 bg-background px-4 py-3 shadow-lift sm:block">
            <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              Tema
            </p>
            <p className="text-sm font-semibold text-foreground">
              {eventInfo.theme}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
