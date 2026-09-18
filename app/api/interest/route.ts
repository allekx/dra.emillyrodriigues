import { NextResponse } from "next/server";
import { getInterestFieldsForService, getServiceBySlug } from "@/data/services";
import type { InterestLeadPayload } from "@/data/types";

/**
 * Endpoint de captura de interesse.
 * Hoje valida e aceita o lead; a integração com CRM/sistema interno
 * será plugada aqui sem mudar o formulário do site.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const payload = body as Partial<InterestLeadPayload>;

  if (
    !payload ||
    typeof payload.serviceSlug !== "string" ||
    typeof payload.serviceName !== "string" ||
    typeof payload.answers !== "object" ||
    payload.answers === null ||
    payload.source !== "servicos"
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  const service = getServiceBySlug(payload.serviceSlug);

  if (!service || service.name !== payload.serviceName) {
    return NextResponse.json(
      { ok: false, error: "unknown_service" },
      { status: 404 },
    );
  }

  const fields = getInterestFieldsForService(service);
  const answers = payload.answers as Record<string, string>;

  for (const field of fields) {
    const value = String(answers[field.id] ?? "").trim();

    if (field.required && !value) {
      return NextResponse.json(
        { ok: false, error: "missing_field", field: field.id },
        { status: 400 },
      );
    }

    if (field.type === "select" && value && field.options && !field.options.includes(value)) {
      return NextResponse.json(
        { ok: false, error: "invalid_option", field: field.id },
        { status: 400 },
      );
    }
  }

  const lead: InterestLeadPayload = {
    serviceSlug: service.slug,
    serviceName: service.name,
    category: service.category,
    kind: service.kind,
    answers: Object.fromEntries(
      fields.map((field) => [field.id, String(answers[field.id] ?? "").trim()]),
    ),
    submittedAt:
      typeof payload.submittedAt === "string"
        ? payload.submittedAt
        : new Date().toISOString(),
    source: "servicos",
  };

  // Ponto de integração futura (CRM, WhatsApp Business API, e-mail, webhook…).
  // Ex.: await forwardInterestLead(lead)
  if (process.env.NODE_ENV !== "production") {
    console.info("[interest-lead]", JSON.stringify(lead));
  }

  return NextResponse.json(
    {
      ok: true,
      queued: true,
      integration: "pending",
      serviceSlug: lead.serviceSlug,
    },
    { status: 202 },
  );
}
