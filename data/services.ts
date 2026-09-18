import type {
  InterestField,
  Service,
  ServiceCategory,
  ServiceFaq,
  ServiceKind,
  ServiceProcessStep,
} from "./types";

export const categoryLabels: Record<ServiceCategory, string> = {
  injetaveis: "Injetáveis",
  obesidade: "Obesidade & Emagrecimento",
  "saude-estetica": "Saúde Estética",
};

export const categoryOrder: ServiceCategory[] = [
  "injetaveis",
  "obesidade",
  "saude-estetica",
];

export const kindLabels: Record<ServiceKind, string> = {
  procedimento: "Procedimento",
  plano: "Plano",
  protocolo: "Protocolo",
};

export const servicesPage = {
  title: "Nossos Serviços",
  subtitle:
    "Conheça planos e procedimentos da clínica. Escolha um item para saber mais e registrar seu interesse.",
  ctaTitle: "Ainda ficou com dúvidas?",
  ctaAction: "Fale pelo WhatsApp",
};

export const servicePageCopy = {
  notesPlaceholder:
    "As orientações específicas deste atendimento serão informadas pela clínica, conforme avaliação individual.",
  interestCta: "Tenho interesse",
  interestFormTitle: "Registrar interesse",
  interestFormLead:
    "Preencha as perguntas abaixo. Seus dados serão encaminhados à clínica para o próximo contato.",
  interestSuccess:
    "Interesse registrado. Em breve a clínica entrará em contato.",
  interestError:
    "Não foi possível enviar agora. Tente novamente em instantes.",
};

const defaultProcess: ServiceProcessStep[] = [
  {
    title: "Avaliação",
    description:
      "A equipe conversa com você para compreender o objetivo e avaliar a indicação do atendimento.",
  },
  {
    title: "Atendimento",
    description:
      "O cuidado é conduzido conforme o protocolo da clínica, de forma reservada e personalizada.",
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
  "Pessoas que desejam conhecer este cuidado com orientação da equipe.",
  "A indicação definitiva é definida após avaliação individual na clínica.",
];

function defaultFaq(name: string): ServiceFaq[] {
  return [
    {
      question: "Como saber se este atendimento é indicado para mim?",
      answer:
        "A indicação é definida após avaliação com a equipe da clínica, de acordo com o seu caso.",
    },
    {
      question: `Quais informações a clínica considera na avaliação de ${name}?`,
      answer:
        "A equipe analisa o objetivo estético ou metabólico e as características individuais. Os detalhes do protocolo são apresentados na consulta.",
    },
    {
      question: "Como registro meu interesse?",
      answer:
        "Use o formulário “Tenho interesse” nesta página. A clínica receberá suas respostas para o próximo contato.",
    },
  ];
}

/** Campos comuns a todos os formulários de interesse. */
export const commonInterestFields: InterestField[] = [
  {
    id: "nome",
    label: "Nome completo",
    type: "text",
    required: true,
    placeholder: "Seu nome",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    type: "tel",
    required: true,
    placeholder: "(00) 00000-0000",
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
    required: false,
    placeholder: "opcional",
  },
  {
    id: "melhor_horario",
    label: "Melhor horário para contato",
    type: "select",
    required: true,
    options: ["Manhã", "Tarde", "Noite", "Qualquer horário"],
  },
];

const fieldsInjetaveis: InterestField[] = [
  {
    id: "objetivo",
    label: "Qual é o seu objetivo principal?",
    type: "textarea",
    required: true,
    placeholder: "Ex.: suavizar linhas, volume labial, contorno…",
  },
  {
    id: "regiao",
    label: "Região de interesse",
    type: "text",
    required: true,
    placeholder: "Ex.: lábios, malar, mento…",
  },
  {
    id: "ja_fez",
    label: "Já realizou procedimento semelhante?",
    type: "select",
    required: true,
    options: ["Não", "Sim, há menos de 1 ano", "Sim, há mais de 1 ano"],
  },
];

const fieldsPlanos: InterestField[] = [
  {
    id: "objetivo",
    label: "Qual é o seu objetivo com o plano?",
    type: "textarea",
    required: true,
    placeholder: "Ex.: emagrecimento, definição, controle do apetite…",
  },
  {
    id: "acompanhamento",
    label: "Já faz acompanhamento médico ou nutricional?",
    type: "select",
    required: true,
    options: ["Não", "Sim, médico", "Sim, nutricional", "Sim, ambos"],
  },
  {
    id: "prazo",
    label: "Em quanto tempo gostaria de iniciar?",
    type: "select",
    required: true,
    options: ["Assim que possível", "Em até 30 dias", "Ainda estou pesquisando"],
  },
];

const fieldsProtocolos: InterestField[] = [
  {
    id: "objetivo",
    label: "Qual resultado você busca com o protocolo?",
    type: "textarea",
    required: true,
  },
  {
    id: "uso_atual",
    label: "Já utiliza ou utilizou protocolo semelhante?",
    type: "select",
    required: true,
    options: ["Não", "Sim, atualmente", "Sim, no passado"],
  },
  {
    id: "prazo",
    label: "Em quanto tempo gostaria de iniciar?",
    type: "select",
    required: true,
    options: ["Assim que possível", "Em até 30 dias", "Ainda estou pesquisando"],
  },
];

const fieldsSaudeEstetica: InterestField[] = [
  {
    id: "preocupacao",
    label: "Qual é a sua principal preocupação com a pele?",
    type: "textarea",
    required: true,
    placeholder: "Ex.: oleosidade, acne, textura, luminosidade…",
  },
  {
    id: "tipo_pele",
    label: "Como você descreveria sua pele?",
    type: "select",
    required: true,
    options: ["Oleosa", "Seca", "Mista", "Sensível", "Não sei informar"],
  },
  {
    id: "ja_fez",
    label: "Já fez limpeza ou cuidado facial profissional?",
    type: "select",
    required: true,
    options: ["Nunca", "Sim, ocasionalmente", "Sim, com frequência"],
  },
];

type Draft = {
  name: string;
  slug: string;
  category: ServiceCategory;
  kind: ServiceKind;
  shortDescription: string;
  description?: string;
  objective?: string;
  howItWorks?: string;
  image: string;
  featured?: boolean;
  interestFields: InterestField[];
  benefits?: string[];
};

function buildService(draft: Draft): Service {
  const kindLabel = kindLabels[draft.kind].toLowerCase();

  return {
    name: draft.name,
    slug: draft.slug,
    category: draft.category,
    kind: draft.kind,
    shortDescription: draft.shortDescription,
    description:
      draft.description ??
      `${draft.name} é um ${kindLabel} oferecido pela clínica, conduzido após avaliação individual e conforme o protocolo da equipe.`,
    objective:
      draft.objective ??
      "Acolher o objetivo de cada pessoa e conduzir o atendimento de forma personalizada, com orientação da equipe.",
    howItWorks:
      draft.howItWorks ??
      "O caminho começa com uma avaliação. A partir dela, a equipe define a conduta adequada e apresenta as orientações do atendimento.",
    process: defaultProcess,
    indicatedFor: defaultIndicatedFor,
    importantInfo: [
      "Valores e disponibilidade são confirmados diretamente com a clínica.",
      "A indicação definitiva depende de avaliação individual.",
    ],
    image: draft.image,
    featured: draft.featured ?? false,
    benefits: draft.benefits ?? defaultBenefits,
    faq: defaultFaq(draft.name),
    interestFields: draft.interestFields,
  };
}

const imgFace = "/images/services/harmonizacao-facial-v2.jpg";
const imgBotox = "/images/services/botox-v2.jpg";
const imgBody = "/images/services/tratamentos-corporais.jpg";
const imgSkin = "/images/services/limpeza-de-pele.jpg";
const imgEstetica = "/images/services/procedimentos-esteticos.jpg";

/**
 * Catálogo oficial de planos e procedimentos (sem preços no site).
 * Fonte: listagem Particular da clínica.
 */
export const services: Service[] = [
  // —— Injetáveis ——
  buildService({
    name: "Bioestimulador Face",
    slug: "bioestimulador-face",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Cuidado injetável facial com bioestimulação, definido após avaliação.",
    image: imgFace,
    featured: true,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Bioestimulador Glúteo",
    slug: "bioestimulador-gluteo",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Protocolo injetável para a região glútea, com indicação individual.",
    image: imgBody,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Bioestimulador PRP",
    slug: "bioestimulador-prp",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Bioestimulação com protocolo PRP, conduzida pela equipe da clínica.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Bioimpedância & Antropometria",
    slug: "bioimpedancia-antropometria",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Avaliação corporal complementar para acompanhar medidas e composição.",
    image: imgBody,
    interestFields: [
      {
        id: "objetivo",
        label: "Para que você deseja a avaliação?",
        type: "textarea",
        required: true,
        placeholder: "Ex.: acompanhamento de emagrecimento, baseline…",
      },
      {
        id: "prazo",
        label: "Quando gostaria de realizar?",
        type: "select",
        required: true,
        options: ["Assim que possível", "Em até 30 dias", "Ainda estou pesquisando"],
      },
    ],
  }),
  buildService({
    name: "Glúteo Máximo",
    slug: "gluteo-maximo",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Atendimento injetável voltado à região do glúteo máximo, após avaliação.",
    image: imgBody,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento de Jowls",
    slug: "preenchimento-jowls",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Preenchimento na região dos jowls, com conduta personalizada.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento de Malar",
    slug: "preenchimento-malar",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Preenchimento da região malar para equilíbrio das proporções faciais.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento de Mento",
    slug: "preenchimento-mento",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Preenchimento do mento com indicação definida na avaliação.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento de Olheiras",
    slug: "preenchimento-olheiras",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Cuidado injetável para a região das olheiras, após avaliação individual.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento Glúteo",
    slug: "preenchimento-gluteo",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Preenchimento glúteo conduzido conforme protocolo da clínica.",
    image: imgBody,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento Labial",
    slug: "preenchimento-labial",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Preenchimento labial com abordagem individual e discreta.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento Malar + Olheiras",
    slug: "preenchimento-malar-olheiras",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Combinação malar e olheiras, planejada após avaliação conjunta.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento Mento + Malar",
    slug: "preenchimento-mento-malar",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Combinação mento e malar para equilíbrio do terço médio/inferior.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Preenchimento Mento + Malar + Jowls",
    slug: "preenchimento-mento-malar-jowls",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Protocolo combinado de mento, malar e jowls, após avaliação.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Reposição de Vitaminas",
    slug: "reposicao-de-vitaminas",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Reposição vitamínica conforme orientação e protocolo da clínica.",
    image: imgEstetica,
    interestFields: [
      {
        id: "objetivo",
        label: "Qual é o motivo do seu interesse na reposição?",
        type: "textarea",
        required: true,
      },
      {
        id: "exames",
        label: "Possui exames recentes?",
        type: "select",
        required: true,
        options: ["Sim", "Não", "Não sei informar"],
      },
    ],
  }),
  buildService({
    name: "Rinomodelação",
    slug: "rinomodelacao",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Harmonização do nariz sem cirurgia, com avaliação prévia da equipe.",
    image: imgFace,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Toxina Botulínica — 3 áreas",
    slug: "toxina-botulinica-3-areas",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Aplicação de toxina botulínica em três áreas, após avaliação.",
    image: imgBotox,
    featured: true,
    interestFields: fieldsInjetaveis,
  }),
  buildService({
    name: "Toxina Botulínica Full Face",
    slug: "toxina-botulinica-full-face",
    category: "injetaveis",
    kind: "procedimento",
    shortDescription:
      "Protocolo full face com toxina botulínica, definido individualmente.",
    image: imgBotox,
    interestFields: fieldsInjetaveis,
  }),

  // —— Planos de obesidade / emagrecimento ——
  buildService({
    name: "Plano START 30",
    slug: "plano-start-30",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Adaptação metabólica, controle do apetite e início da perda de peso.",
    image: imgBody,
    featured: true,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano PERFORMANCE",
    slug: "plano-performance",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Aceleração metabólica, redução de medidas e definição corporal.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano PERFORMANCE BODY",
    slug: "plano-performance-body",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Emagrecimento avançado, definição corporal e controle da flacidez.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano EVOLUTION",
    slug: "plano-evolution",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Consolidação dos resultados, controle da compulsão e queima de gordura.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano EVOLUTION ACADEMY",
    slug: "plano-evolution-academy",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Emagrecimento, performance física e preservação muscular.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ADVANCED",
    slug: "plano-advanced",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Alta performance metabólica, preservação muscular e remodelação corporal.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ADVANCED BODY",
    slug: "plano-advanced-body",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Emagrecimento avançado, tecnologias corporais e definição.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ADVANCED TOTAL CARE",
    slug: "plano-advanced-total-care",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Emagrecimento avançado, definição corporal e saúde capilar.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ADVANCED TOTAL CARE PLUS",
    slug: "plano-advanced-total-care-plus",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Refinamento corporal, controle da flacidez e proteção integrada.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ELITE",
    slug: "plano-elite",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Transformação corporal, máxima definição e performance metabólica.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),
  buildService({
    name: "Plano ELITE BLACK",
    slug: "plano-elite-black",
    category: "obesidade",
    kind: "plano",
    shortDescription:
      "Transformação total com foco em corpo, pele e cabelos.",
    image: imgBody,
    interestFields: fieldsPlanos,
  }),

  // —— Protocolos R / T ——
  buildService({
    name: 'Protocolo "R" START',
    slug: "protocolo-r-start",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo R na linha Start.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "R" ESSENCIAL',
    slug: "protocolo-r-essencial",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo R na linha Essencial.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "R" PLUS',
    slug: "protocolo-r-plus",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo R na linha Plus.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "R" AVANÇADO',
    slug: "protocolo-r-avancado",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo R na linha Avançado.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "R" MAX',
    slug: "protocolo-r-max",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo R na linha Max.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" START',
    slug: "protocolo-t-start",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Start.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" ESSENCIAL',
    slug: "protocolo-t-essencial",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Essencial.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" PLUS',
    slug: "protocolo-t-plus",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Plus.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" AVANÇADO',
    slug: "protocolo-t-avancado",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Avançado.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" PRIME',
    slug: "protocolo-t-prime",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Prime.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),
  buildService({
    name: 'Protocolo "T" MAX',
    slug: "protocolo-t-max",
    category: "obesidade",
    kind: "protocolo",
    shortDescription: "Dose individual do protocolo T na linha Max.",
    image: imgBody,
    interestFields: fieldsProtocolos,
  }),

  // —— Saúde estética ——
  buildService({
    name: "Limpeza Facial Simples",
    slug: "limpeza-facial-simples",
    category: "saude-estetica",
    kind: "procedimento",
    shortDescription:
      "Limpeza facial simples para higienização e bem-estar da pele.",
    image: imgSkin,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Limpeza Facial Simples — Protocolo",
    slug: "limpeza-facial-simples-protocolo",
    category: "saude-estetica",
    kind: "protocolo",
    shortDescription:
      "Protocolo de limpeza facial simples com acompanhamento da clínica.",
    image: imgSkin,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Limpeza Facial Profunda",
    slug: "limpeza-facial-profunda",
    category: "saude-estetica",
    kind: "procedimento",
    shortDescription:
      "Limpeza facial profunda com protocolo da clínica.",
    image: imgSkin,
    featured: true,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Limpeza Facial Profunda — Protocolo",
    slug: "limpeza-facial-profunda-protocolo",
    category: "saude-estetica",
    kind: "protocolo",
    shortDescription:
      "Protocolo de limpeza facial profunda com sessões orientadas pela equipe.",
    image: imgSkin,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Limpeza Facial Pele Acneica",
    slug: "limpeza-facial-pele-acneica",
    category: "saude-estetica",
    kind: "procedimento",
    shortDescription:
      "Limpeza facial voltada a peles com tendência acneica, após avaliação.",
    image: imgSkin,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Limpeza Facial Pele Acneica — Protocolo",
    slug: "limpeza-facial-pele-acneica-protocolo",
    category: "saude-estetica",
    kind: "protocolo",
    shortDescription:
      "Protocolo de limpeza para pele acneica com acompanhamento contínuo.",
    image: imgSkin,
    interestFields: fieldsSaudeEstetica,
  }),
  buildService({
    name: "Remoção de Sinais",
    slug: "remocao-de-sinais",
    category: "saude-estetica",
    kind: "procedimento",
    shortDescription:
      "Remoção de sinais conforme avaliação e protocolo da clínica.",
    image: imgEstetica,
    interestFields: [
      {
        id: "localizacao",
        label: "Onde está o sinal de interesse?",
        type: "text",
        required: true,
        placeholder: "Ex.: rosto, pescoço, corpo…",
      },
      {
        id: "quantidade",
        label: "Quantidade aproximada",
        type: "select",
        required: true,
        options: ["1", "2 a 3", "4 ou mais", "Ainda não sei"],
      },
      {
        id: "avaliacao_previa",
        label: "Já passou por avaliação dermatológica?",
        type: "select",
        required: true,
        options: ["Sim", "Não", "Não sei informar"],
      },
    ],
  }),
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

export function getInterestFieldsForService(service: Service): InterestField[] {
  return [...commonInterestFields, ...service.interestFields];
}
