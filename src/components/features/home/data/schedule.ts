export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export const schedule: ScheduleItem[] = [
  {
    time: "09:00",
    title: "Abertura Oficial",
    description: "Recepção, oração e boas-vindas.",
  },
  {
    time: "09:30",
    title: "Visitação aos Espaços",
    description: "Conheça os projetos desenvolvidos pelas turmas.",
  },
  {
    time: "10:30",
    title: "Apresentações",
    description: "Momentos especiais preparados pelos alunos.",
  },
  {
    time: "11:30",
    title: "Encerramento",
    description: "Agradecimentos e celebração.",
  },
];
