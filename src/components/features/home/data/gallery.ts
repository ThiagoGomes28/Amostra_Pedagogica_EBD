import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/turma-maternal.jpg";

export type GalleryItem = {
  src: string;
  alt: string;
  /** Tailwind classes used to compose the editorial grid */
  span?: string;
};

export const gallery: GalleryItem[] = [
  {
    src: g1,
    alt: "Salão da igreja preparado com os espaços temáticos da Mostra Pedagógica",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: g2, alt: "Crianças montando um trabalho manual sobre a mesa" },
  { src: g3, alt: "Professora ensinando um grupo de crianças na classe" },
  {
    src: g4,
    alt: "Bíblia aberta ao lado de materiais usados nas atividades",
    span: "sm:col-span-2",
  },
  { src: g5, alt: "Igreja reunida celebrando a apresentação das turmas" },
  { src: g6, alt: "Turma do maternal pintando um mural colorido" },
];
