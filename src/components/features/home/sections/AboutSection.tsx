import { Heart, Lightbulb, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import aboutImage from "@/assets/galeria-3.jpg";

const highlights = [
  {
    icon: Lightbulb,
    title: "Aprendizado",
    description: "Conhecimento bíblico desenvolvido de forma significativa.",
    tone: "bg-primary-soft text-primary",
  },
  {
    icon: Sparkles,
    title: "Criatividade",
    description: "Projetos e atividades preparados pelas turmas.",
    tone: "bg-gold-soft text-foreground",
  },
  {
    icon: Heart,
    title: "Comunidade",
    description: "Alunos, professores, famílias e igreja juntos.",
    tone: "bg-mint text-mint-foreground",
  },
];

const purposes = [
  "Valorizar o aprendizado das classes",
  "Estimular a criatividade dos alunos",
  "Aproximar as famílias da EBD",
  "Apresentar os trabalhos desenvolvidos",
  "Celebrar professores e alunos",
  "Fortalecer o ensino bíblico",
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sobre"
          title="Sobre a Mostra Pedagógica"
          description="A Mostra Pedagógica é um momento especial para apresentar à igreja um pouco do que é desenvolvido durante os encontros da Escola Bíblica Dominical."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="group overflow-hidden rounded-3xl border border-border/60 shadow-soft">
              <img
                src={aboutImage}
                alt="Professora ensinando um grupo de crianças durante a aula da Escola Bíblica Dominical"
                loading="lazy"
                width={1000}
                height={1000}
                className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <h3 className="text-xl font-semibold text-foreground">
              Uma exposição preparada com carinho e excelência
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Durante o ano, cada classe estuda, cria e produz. A Mostra abre as
              portas para que toda a igreja veja de perto esse caminho — em
              cartazes, maquetes, apresentações e espaços preparados pelas turmas.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {purposes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="h-full rounded-3xl border-border/70 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <CardContent className="p-7">
                  <span
                    className={`flex size-11 items-center justify-center rounded-2xl ${item.tone}`}
                  >
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
