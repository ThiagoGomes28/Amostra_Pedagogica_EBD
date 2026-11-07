export const eventInfo = {
  name: "Mostra Pedagógica",
  organization: "Escola Bíblica Dominical",
  tagline: "Fé que ensina. Conhecimento que transforma.",
  subtitle: "Um encontro de fé, conhecimento e criatividade.",
  description:
    "Uma celebração do aprendizado desenvolvido nas classes da Escola Bíblica Dominical, reunindo alunos, professores e toda a igreja em uma experiência especial.",
  date: "06/12",
  time: "09hs",
  church: "AD Queimadas",
  address: "R. Odilon Almeida Barreto, 220",
  theme: "Fé, conhecimento e criatividade",
  mapsQuery: "R. Odilon Almeida Barreto, 220",
  instagram: "#",
  whatsapp: "#",
} as const;

export const verse = {
  text: "Ensina a criança no caminho em que deve andar, e ainda quando for velho não se desviará dele.",
  reference: "Provérbios 22:6",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  eventInfo.mapsQuery,
)}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Programação", href: "#programacao" },
  { label: "Turmas", href: "#turmas" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
] as const;
