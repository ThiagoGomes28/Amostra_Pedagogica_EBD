import mp01 from "@/assets/mps/capas MP01.webp";
import mp02 from "@/assets/mps/capas MP02.webp";
import mp03 from "@/assets/mps/capas MP03.webp";
import mp04 from "@/assets/mps/capas MP04.webp";
import mp05 from "@/assets/mps/capas MP05.webp";
import mp06 from "@/assets/mps/capas MP06.webp";
import mp07 from "@/assets/mps/capas MP07.webp";
import mp08 from "@/assets/mps/capas MP08.webp";
import onePageMp01 from "@/assets/onePages/Mp001.webp";
import onePageMp02 from "@/assets/onePages/Mp002.webp";
import onePageMp03 from "@/assets/onePages/Mp003.webp";
import onePageMp04 from "@/assets/onePages/Mp004.webp";
import onePageMp05 from "@/assets/onePages/Mp005.webp";
import onePageMp06 from "@/assets/onePages/Mp006.webp";
import onePageMp07 from "@/assets/onePages/Mp007.webp";
import onePageMp08 from "@/assets/onePages/Mp008.webp";

export type Exhibition = {
  id: string;
  code: string;
  number: string;
  title: string;
  className: string;
  subtitle: string;
  preview: string;
  introduction: string;
  image: string;
  imageAlt: string;
  points: string[];
  ctaLabel?: string;
  ctaHref?: string;
  onePageUrl?: string;
  note?: string;
};

export const exhibitions: Exhibition[] = [
  {
    id: "MP001",
    code: "01",
    number: "01",
    title: "Conhecendo os Livros da Bíblia",
    className: "Juniores EBD",
    subtitle: "Explorando a Bíblia",
    preview: "Uma jornada pelos 66 livros da Bíblia e sua divisão entre Antigo e Novo Testamento.",
    introduction:
      "A exposição apresenta a Bíblia como uma coleção de 66 livros e como um conjunto de escritos sagrados, ajudando os visitantes a perceberem sua unidade e sua riqueza histórica.",
    image: mp01,
    imageAlt: "Capa da exposição MP001 — Conhecendo os Livros da Bíblia.",
    points: [
      "O que é a Bíblia? A palavra Bíblia vem do grego e significa livros.",
      "Antigo Testamento — 39 livros.",
      "Novo Testamento — 27 livros.",
      "Pentateuco, históricos, poéticos, proféticos e evangelhos.",
      "Curiosidades sobre línguas, capítulos e traduções da Bíblia.",
      "Comparação entre versões católica e evangélica.",
    ],
    ctaLabel: "Explorar conteúdo",
    ctaHref: onePageMp01,
    onePageUrl: onePageMp01,
    note: "Podem ser apresentados 66 livros em forma visual para facilitar a compreensão da divisão entre Antigo e Novo Testamento.",
  },
  {
    id: "MP002",
    code: "02",
    number: "02",
    title: "Da Criação à Consumação",
    className: "Adolescentes EBD",
    subtitle: "Da criação à eternidade: o plano de Deus",
    preview: "Do começo de tudo até a esperança final, em uma narrativa bíblica completa.",
    introduction:
      "A exposição convida o visitante a seguir a narrativa bíblica desde o início até a esperança final, destacando o plano de Deus para a criação, a redenção e a eternidade.",
    image: mp02,
    imageAlt: "Capa da exposição MP002 — Da Criação à Consumação.",
    points: [
      "A criação e a queda — o início de tudo.",
      "Os patriarcas — a promessa de Deus.",
      "Libertação e conquista — a formação de Israel.",
      "O reino, o exílio e a restauração.",
      "Jesus Cristo e a expansão da Igreja.",
      "A consumação — a esperança da eternidade.",
    ],
    ctaLabel: "Ver linha do tempo",
    ctaHref: onePageMp02,
    onePageUrl: onePageMp02,
    note: "Esta exposição pode receber uma linha do tempo bíblica conectando criação, patriarcas, reino, igreja e consumação.",
  },
  {
    id: "MP003",
    code: "03",
    number: "03",
    title: "A História da Escola Bíblica Dominical",
    className: "Sarah EBD",
    subtitle: "Raízes e legado da Escola Bíblica Dominical",
    preview: "Uma viagem pela memória e pelo crescimento da EBD em Queimadas.",
    introduction:
      "A arte apresenta os principais marcos da história da EBD e a formação do ensino bíblico em Queimadas, com uma narrativa que valoriza história, memória e legado espiritual.",
    image: mp03,
    imageAlt: "Capa da exposição MP003 — A História da Escola Bíblica Dominical.",
    points: [
      "Como surgiu a Assembleia de Deus em Queimadas?",
      "Os primeiros pioneiros.",
      "Linha do tempo — 50 anos de fé.",
      "O crescimento da obra.",
      "Líderes que marcaram a história.",
      "Você sabia?",
    ],
    ctaLabel: "Explorar história",
    ctaHref: onePageMp03,
    onePageUrl: onePageMp03,
    note: "A imagem disponível não possui conteúdo textual legível dentro dos blocos; por isso a estrutura foi organizada para receber os textos posteriormente.",
  },
  {
    id: "MP004",
    code: "04",
    number: "04",
    title: "Quiz Bíblico",
    className: "Jovens EBD",
    subtitle: "Desafio Bíblico",
    preview: "Uma dinâmica interativa para revisar os ensinamentos bíblicos com desafio e alegria.",
    introduction:
      "A exposição apresenta a dinâmica interativa do Quiz Bíblico como uma forma educativa de revisar os conhecimentos bíblicos de maneira competitiva, alegre e acessível.",
    image: mp04,
    imageAlt: "Capa da exposição MP004 — Quiz Bíblico.",
    points: [
      "O que é o Quiz Bíblico? Atividade educativa e interativa.",
      "Como funciona a dinâmica? Perguntas projetadas por datashow.",
      "Temas abordados: histórias, personagens, ensinamentos e doutrinas.",
      "Regras da competição em duplas com placas e prioridade de resposta.",
      "Premiação e participação com incentivo bíblico e comunitário.",
      "O que aprendemos com o Quiz Bíblico? Fé, conhecimento e aplicação.",
    ],
    ctaLabel: "Experimentar o Quiz",
    ctaHref: onePageMp04,
    onePageUrl: onePageMp04,
    note: "Quando a funcionalidade de quiz estiver disponível, este bloco pode abrir a experiência interativa completa.",
  },
  {
    id: "MP005",
    code: "05",
    number: "05",
    title: "Cristo em Toda Bíblia",
    className: "Jovens EBD",
    subtitle: "Cristo de Gênesis a Apocalipse",
    preview: "Jesus como centro da história bíblica, da promessa à vitória final.",
    introduction:
      "A exposição destaca Jesus Cristo como centro do plano de Deus, mostrando sua presença desde o início das Escrituras até a vitória final no Apocalipse.",
    image: mp05,
    imageAlt: "Capa da exposição MP005 — Cristo em Toda Bíblia.",
    points: [
      "Quem é Jesus Cristo? Messias, Filho de Deus e Verbo que se fez carne.",
      "Cristo anunciado em Gênesis.",
      "Cristo revelado no Antigo Testamento.",
      "Cristo manifestado nos Evangelhos.",
      "Cristo presente na Igreja.",
      "Cristo Rei e Vencedor no Apocalipse.",
    ],
    ctaLabel: "Visão bíblica",
    ctaHref: onePageMp05,
    onePageUrl: onePageMp05,
    note: "A narrativa pode ser organizada em uma linha visual: Gênesis → Antigo Testamento → Evangelhos → Igreja → Apocalipse.",
  },
  {
    id: "MP006",
    code: "06",
    number: "06",
    title: "A História da Assembleia de Deus no Brasil",
    className: "Abraão EBD",
    subtitle: "Uma história de fé e avivamento",
    preview: "Os marcos do pentecostalismo no Brasil e a fundação da Assembleia de Deus.",
    introduction:
      "A exposição apresenta os marcos do movimento pentecostal no Brasil, desde o avivamento nos Estados Unidos até a fundação da Assembleia de Deus no país.",
    image: mp06,
    imageAlt: "Capa da exposição MP006 — A História da Assembleia de Deus no Brasil.",
    points: [
      "O avivamento pentecostal nos Estados Unidos.",
      "O encontro e a chamada dos missionários.",
      "A viagem missionária ao Brasil.",
      "Os primeiros passos em Belém do Pará.",
      "O surgimento da Assembleia de Deus.",
      "A fundação e expansão da Igreja.",
    ],
    ctaLabel: "Ver linha do tempo",
    ctaHref: onePageMp06,
    onePageUrl: onePageMp06,
    note: "Os principais anos podem ser destacados em sequência: 1901 → 1906 → 1909 → 1910 → 1911.",
  },
  {
    id: "MP007",
    code: "07",
    number: "07",
    title: "A História da Assembleia de Deus em Queimadas-PB",
    className: "Secretaria da EBD",
    subtitle: "Da nossa origem ao crescimento",
    preview: "A trajetória da igreja em Queimadas, desde os primeiros passos até o crescimento atual.",
    introduction:
      "A exposição conta a trajetória da congregação local, desde os primeiros cultos e pioneiros até a expansão e os principais momentos da obra em Queimadas.",
    image: mp07,
    imageAlt: "Capa da exposição MP007 — A História da Assembleia de Deus em Queimadas-PB.",
    points: [
      "Como surgiu a Assembleia de Deus em Queimadas?",
      "Os primeiros pioneiros.",
      "Linha do tempo — 50 anos de fé.",
      "O crescimento da obra.",
      "Líderes que marcaram a história.",
      "Você sabia?",
    ],
    ctaLabel: "Explorar história",
    ctaHref: onePageMp07,
    onePageUrl: onePageMp07,
    note: "Esta deve ser uma das exposições mais visuais e pode receber uma timeline interativa com os principais anos e acontecimentos.",
  },
  {
    id: "MP008",
    code: "08",
    number: "08",
    title: "Os Grandes Milagres de Jesus",
    className: "Jardim Infantil EBD",
    subtitle: "O Autor dos Milagres",
    preview: "Uma apresentação lúdica sobre a obra milagrosa de Jesus para o público infantil.",
    introduction:
      "A exposição foi organizada para destacar a obra milagrosa de Jesus, mantendo a identidade visual da Mostra com uma leitura mais alegre e acessível para o público infantil.",
    image: mp08,
    imageAlt: "Capa da exposição MP008 — Os Grandes Milagres de Jesus.",
    points: [
      "Estrutura preparada para receber os conteúdos corretos dos milagres.",
      "MP008 — Jardim Infantil EBD.",
      "Os Grandes Milagres de Jesus.",
      "O Autor dos Milagres.",
      "A arte apresenta uma linguagem mais lúdica, sem perder a identidade institucional da Mostra.",
      "Conteúdo complementar em atualização.",
    ],
    ctaLabel: "Conhecer a exposição",
    ctaHref: onePageMp08,
    onePageUrl: onePageMp08,
    note: "Os blocos textuais da arte foram preservados apenas como estrutura visual; os textos específicos dos milagres serão inseridos posteriormente.",
  },
];
