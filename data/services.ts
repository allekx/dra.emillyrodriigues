import type {
  Service,
  ServiceCategory,
  ServiceFaq,
  ServiceProcessStep,
} from "./types";

export const categoryLabels: Record<ServiceCategory, string> = {
  facial: "Facial",
  corporal: "Corporal",
  estetica: "Estética",
  outros: "Outros",
};

export const categoryOrder: ServiceCategory[] = [
  "facial",
  "corporal",
  "estetica",
  "outros",
];

export const servicesPage = {
  title: "Nossos Serviços",
  subtitle:
    "Conheça nossos tratamentos e encontre a opção ideal para você.",
  ctaTitle: "Ainda ficou com dúvidas?",
  ctaAction: "Fale pelo WhatsApp",
};

export const servicePageCopy = {
  notesPlaceholder:
    "As orientações específicas deste procedimento serão informadas pela clínica, conforme avaliação individual.",
  interestCta: "Tenho interesse neste procedimento",
};

const defaultProcess: ServiceProcessStep[] = [
  {
    title: "Avaliação",
    description:
      "A equipe conversa com você para compreender o objetivo estético e avaliar a indicação do procedimento.",
  },
  {
    title: "Atendimento",
    description:
      "O procedimento é conduzido conforme o protocolo da clínica, de forma reservada e personalizada.",
  },
  {
    title: "Orientações",
    description:
      "Após o atendimento, a clínica apresenta os cuidados adequados ao seu caso.",
  },
];

const defaultBenefits = [
  "Atendimento personalizado",
  "Avaliação individual",
  "Acompanhamento da equipe",
  "Cuidado em ambiente reservado",
];

const defaultIndicatedFor = [
  "Pessoas que desejam conhecer este cuidado estético com orientação da equipe.",
  "A indicação definitiva é definida após avaliação individual na clínica.",
];

function defaultFaq(name: string): ServiceFaq[] {
  return [
    {
      question: "Como saber se este procedimento é indicado para mim?",
      answer:
        "A indicação é definida após avaliação com a equipe da clínica, de acordo com o seu caso.",
    },
    {
      question: `Quais informações a clínica considera na avaliação de ${name}?`,
      answer:
        "A equipe analisa o objetivo estético e as características individuais. Os detalhes do protocolo são apresentados na consulta.",
    },
    {
      question: "Como posso tirar mais dúvidas?",
      answer:
        "Fale com a equipe pelo WhatsApp. É o caminho mais direto para esclarecer este procedimento com a clínica.",
    },
  ];
}

/**
 * Catálogo de serviços da clínica.
 * Preencha os campos abaixo com o conteúdo oficial.
 * Não utilize este arquivo para afirmações médicas não validadas pela clínica.
 */
export const services: Service[] = [
  {
    name: "Harmonização Facial",
    slug: "harmonizacao-facial",
    category: "facial",
    shortDescription:
      "Equilíbrio das proporções do rosto, pensado de forma individual e discreta.",
    description:
      "A harmonização facial é um cuidado estético oferecido pela clínica, pensado para equilibrar as proporções do rosto de forma individual.",
    objective:
      "Acolher o objetivo estético de cada pessoa e conduzir o atendimento conforme o protocolo adotado pela equipe.",
    howItWorks:
      "O caminho começa com uma avaliação. A partir dela, a equipe define a conduta adequada e apresenta as orientações do procedimento.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/harmonizacao-facial.svg",
    featured: true,
    benefits: defaultBenefits,
    faq: defaultFaq("Harmonização Facial"),
  },
  {
    name: "Botox",
    slug: "botox",
    category: "facial",
    shortDescription:
      "Tratamento estético facial voltado para suavização de linhas e expressão.",
    description:
      "O Botox é um procedimento estético facial oferecido pela clínica, voltado à suavização de linhas e da expressão.",
    objective:
      "Oferecer um atendimento estético facial alinhado ao objetivo de cada pessoa, após avaliação da equipe.",
    howItWorks:
      "A indicação, a condução e os cuidados são definidos pela clínica no momento da avaliação, de acordo com o caso.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/botox.svg",
    featured: true,
    benefits: defaultBenefits,
    faq: defaultFaq("Botox"),
  },
  {
    name: "Tratamentos Faciais",
    slug: "tratamentos-faciais",
    category: "facial",
    shortDescription:
      "Cuidado da pele com protocolos pensados para luminosidade, textura e vitalidade.",
    description:
      "Os tratamentos faciais reúnem cuidados estéticos para a pele, conduzidos pela equipe conforme o protocolo da clínica.",
    objective:
      "Cuidar da pele com um atendimento reservado e personalizado, de acordo com a avaliação individual.",
    howItWorks:
      "Após a avaliação, a equipe indica o protocolo mais adequado e explica como o atendimento será conduzido.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/tratamentos-faciais.svg",
    featured: true,
    benefits: defaultBenefits,
    faq: defaultFaq("Tratamentos Faciais"),
  },
  {
    name: "Limpeza de Pele",
    slug: "limpeza-de-pele",
    category: "facial",
    shortDescription:
      "Cuidado facial para higienização e bem-estar da pele, com protocolo da clínica.",
    description:
      "A limpeza de pele é um cuidado estético facial oferecido pela clínica, voltado à higienização e ao bem-estar da pele.",
    objective:
      "Proporcionar um atendimento facial reservado, definido após avaliação da equipe.",
    howItWorks:
      "A equipe avalia a pele e conduz o protocolo da clínica, apresentando as orientações adequadas ao seu caso.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/limpeza-de-pele.svg",
    featured: false,
    benefits: defaultBenefits,
    faq: defaultFaq("Limpeza de Pele"),
  },
  {
    name: "Tratamentos Corporais",
    slug: "tratamentos-corporais",
    category: "corporal",
    shortDescription:
      "Protocolos para contorno, firmeza e bem-estar, com acompanhamento individual.",
    description:
      "Os tratamentos corporais são cuidados estéticos conduzidos pela clínica, com acompanhamento individual.",
    objective:
      "Oferecer um atendimento corporal alinhado ao objetivo estético de cada pessoa, após avaliação.",
    howItWorks:
      "A equipe avalia o caso, indica o protocolo da clínica e apresenta as orientações do atendimento.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/tratamentos-corporais.svg",
    featured: true,
    benefits: defaultBenefits,
    faq: defaultFaq("Tratamentos Corporais"),
  },
  {
    name: "Procedimentos Estéticos",
    slug: "procedimentos-esteticos",
    category: "estetica",
    shortDescription:
      "Procedimentos selecionados para realçar a beleza com precisão e discrição.",
    description:
      "A clínica oferece procedimentos estéticos selecionados, sempre a partir de avaliação e de um atendimento reservado.",
    objective:
      "Conduzir o cuidado estético com precisão e discrição, de acordo com o protocolo da equipe.",
    howItWorks:
      "Após a avaliação, a equipe explica a conduta prevista e as orientações relacionadas ao procedimento.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [],
    image: "/images/services/procedimentos-esteticos.svg",
    featured: false,
    benefits: defaultBenefits,
    faq: defaultFaq("Procedimentos Estéticos"),
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs() {
  return services.map((service) => service.slug);
}

export function getFeaturedServices() {
  return services.filter((service) => service.featured);
}

export function getServiceGroups() {
  return categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: services.filter((service) => service.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
