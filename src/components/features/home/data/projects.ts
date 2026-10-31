import { LayoutPanelLeft, Puzzle, Palette, Mic2, type LucideIcon } from "lucide-react";

export type ProjectItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const projects: ProjectItem[] = [
  {
    title: "Espaços Temáticos",
    description: "Ambientes preparados para apresentar cada tema estudado.",
    icon: LayoutPanelLeft,
  },
  {
    title: "Atividades Interativas",
    description: "Experiências educativas para crianças e visitantes.",
    icon: Puzzle,
  },
  {
    title: "Trabalhos das Turmas",
    description: "Materiais desenvolvidos durante as aulas ao longo do ano.",
    icon: Palette,
  },
  {
    title: "Apresentações",
    description: "Momentos especiais preparados pelos alunos.",
    icon: Mic2,
  },
];
