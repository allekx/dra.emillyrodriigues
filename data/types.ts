export type ClinicContact = {
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl?: string;
  instagram: string;
  instagramUrl: string;
  twitterUrl?: string;
  email: string;
  instagramConfirmed: boolean;
};

export type ClinicAddress = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  mapsUrl: string;
  confirmed: boolean;
};

export type Clinic = {
  name: string;
  tagline: string;
  credential?: string;
  description: string;
  presentation: string;
  logo: string;
  photo: string;
  siteUrl: string;
  contact: ClinicContact;
  address: ClinicAddress;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCategory = "injetaveis" | "obesidade" | "saude-estetica";

export type ServiceKind = "procedimento" | "plano" | "protocolo";

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type InterestFieldType =
  | "text"
  | "tel"
  | "email"
  | "textarea"
  | "select";

export type InterestField = {
  id: string;
  label: string;
  type: InterestFieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export type Service = {
  name: string;
  slug: string;
  category: ServiceCategory;
  kind: ServiceKind;
  shortDescription: string;
  description: string;
  objective: string;
  howItWorks: string;
  process: ServiceProcessStep[];
  indicatedFor: string[];
  importantInfo: string[];
  image: string;
  featured: boolean;
  benefits: string[];
  faq: ServiceFaq[];
  /** Perguntas específicas exibidas no formulário “Tenho interesse”. */
  interestFields: InterestField[];
};

export type InterestLeadPayload = {
  serviceSlug: string;
  serviceName: string;
  category: ServiceCategory;
  kind: ServiceKind;
  answers: Record<string, string>;
  submittedAt: string;
  source: "servicos";
};
