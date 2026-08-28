export type ClinicContact = {
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl?: string;
  instagram: string;
  instagramUrl: string;
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

export type ServiceCategory = "facial" | "corporal" | "estetica" | "outros";

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  name: string;
  slug: string;
  category: ServiceCategory;
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
};
