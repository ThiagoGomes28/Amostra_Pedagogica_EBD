import maternal from "@/assets/turma-maternal.jpg";
import juniores from "@/assets/turma-juniores.jpg";
import adolescentes from "@/assets/turma-adolescentes.jpg";
import jovens from "@/assets/turma-jovens.jpg";

export type ClassInfo = {
  id: string;
  name: string;
  ageRange: string;
  teachers: string;
  theme: string;
  description: string;
  objectives: string[];
  activities: string[];
  image: string;
};

export const classes: ClassInfo[] = [
  {
    id: "maternal",
    name: "Maternal",
    ageRange: "2 a 4 anos",
    teachers: "[PROFESSOR(ES)]",
    theme: "A Criação",
    description:
      "Aprendendo sobre Deus e sua criação através de atividades lúdicas.",
    objectives: [
      "Reconhecer Deus como Criador de todas as coisas",
      "Desenvolver coordenação por meio de atividades sensoriais",
      "Cultivar o hábito da oração simples",
    ],
    activities: [
      "Mural coletivo dos dias da criação",
      "Pintura com tinta e carimbos",
      "Cantos e histórias com fantoches",
    ],
    image: maternal,
  },
  {
    id: "juniores",
    name: "Juniores",
    ageRange: "8 a 11 anos",
    teachers: "[PROFESSOR(ES)]",
    theme: "Heróis da Fé",
    description:
      "Personagens bíblicos que confiaram em Deus e inspiram nossa caminhada.",
    objectives: [
      "Conhecer a história dos heróis da fé",
      "Relacionar as histórias bíblicas ao dia a dia",
      "Estimular a pesquisa e a leitura da Bíblia",
    ],
    activities: [
      "Cartazes e linha do tempo bíblica",
      "Maquetes e dioramas das histórias",
      "Dinâmicas de perguntas e respostas",
    ],
    image: juniores,
  },
  {
    id: "adolescentes",
    name: "Adolescentes",
    ageRange: "12 a 15 anos",
    teachers: "[PROFESSOR(ES)]",
    theme: "Vivendo a Palavra",
    description:
      "Como aplicar os princípios bíblicos nas escolhas e relações do dia a dia.",
    objectives: [
      "Compreender a Palavra como guia prático",
      "Discutir temas reais com base bíblica",
      "Fortalecer o senso de identidade cristã",
    ],
    activities: [
      "Rodas de conversa e estudos em grupo",
      "Painel criativo com versículos",
      "Produção de vídeos curtos",
    ],
    image: adolescentes,
  },
  {
    id: "jovens",
    name: "Jovens",
    ageRange: "16 a 24 anos",
    teachers: "[PROFESSOR(ES)]",
    theme: "Fé que Transforma",
    description:
      "Uma fé viva que impacta a família, os estudos, o trabalho e a comunidade.",
    objectives: [
      "Aprofundar o conhecimento doutrinário",
      "Desenvolver liderança e serviço",
      "Aplicar a fé em contextos cotidianos",
    ],
    activities: [
      "Estudos temáticos e debates",
      "Projeto social da classe",
      "Apresentação de painéis e testemunhos",
    ],
    image: jovens,
  },
];
