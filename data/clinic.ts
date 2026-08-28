import type { Clinic } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Fonte única das informações da clínica.
 * Altere este arquivo para atualizar nome, logo, textos e canais.
 */
export const clinic: Clinic = {
  name: "Dra. Emilly Rodrigues",
  tagline: "Estética Avançada e Performance",
  credential: "Enfermeira Esteta · COREN 981310",
  description:
    "Estética avançada e performance com a Dra. Emilly Rodrigues. Harmonização orofacial, emagrecimento e avaliações.",
  presentation:
    "Estética avançada e performance. Harmonização orofacial, emagrecimento e avaliações com atendimento personalizado.",
  logo: "/images/brand/logo.svg",
  photo: "/images/clinic/perfil.jpg",
  siteUrl,
  contact: {
    whatsapp: "5500000000000",
    whatsappDisplay: "(00) 00000-0000",
    whatsappUrl: "https://wa.me/qr/HDHATZBA2PFQL1",
    instagram: "dra.emillyrodriigues",
    instagramUrl: "https://www.instagram.com/dra.emillyrodriigues",
    email: "",
    instagramConfirmed: true,
  },
  address: {
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    zip: "",
    mapsUrl: "",
    /**
     * true somente com o endereço oficial da clínica.
     * Enquanto for false, cidade e endereço não entram em title, Schema.org nem no rodapé.
     */
    confirmed: false,
  },
};

/**
 * Mensagens de WhatsApp por contexto.
 * O número usado em todos os botões é somente clinic.contact.whatsapp,
 * salvo quando houver um link oficial em contact.whatsappUrl.
 */
export const whatsappMessages = {
  bio: "Olá! Vim pelo Instagram e gostaria de conhecer os serviços da Dra. Emilly Rodrigues.",
  services: "Olá! Gostaria de saber mais sobre os serviços da Dra. Emilly Rodrigues.",
} as const;

export function getServiceWhatsAppMessage(name: string) {
  return `Olá! Tenho interesse no procedimento ${name}. Gostaria de saber mais.`;
}

function getWhatsAppNumber() {
  return clinic.contact.whatsapp.replace(/\D/g, "");
}

function buildWhatsAppUrl(message: string) {
  if (clinic.contact.whatsappUrl) {
    return clinic.contact.whatsappUrl;
  }

  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppHref(source: keyof typeof whatsappMessages) {
  return buildWhatsAppUrl(whatsappMessages[source]);
}

export function getServiceWhatsAppHref(name: string) {
  return buildWhatsAppUrl(getServiceWhatsAppMessage(name));
}

export function getMapsUrl() {
  if (clinic.address.mapsUrl) {
    return clinic.address.mapsUrl;
  }

  const query = [
    clinic.address.street,
    clinic.address.neighborhood,
    clinic.address.city,
    clinic.address.state,
    clinic.address.zip,
  ]
    .filter(Boolean)
    .join(", ");

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getAddressLabel() {
  const { street, neighborhood, city, state } = clinic.address;
  const locality = [city, state].filter(Boolean).join(" — ");

  return [street, neighborhood, locality].filter(Boolean).join(", ");
}
