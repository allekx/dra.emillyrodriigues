"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import {
  getInterestFieldsForService,
  servicePageCopy,
} from "@/data/services";
import type { InterestLeadPayload, Service } from "@/data/types";
import { cn } from "@/lib/cn";

type InterestFormProps = {
  service: Service;
  className?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function InterestForm({ service, className }: InterestFormProps) {
  const fields = getInterestFieldsForService(service);
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.id, ""])),
  );
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function updateField(id: string, value: string) {
    setValues((current) => ({ ...current, [id]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const payload: InterestLeadPayload = {
      serviceSlug: service.slug,
      serviceName: service.name,
      category: service.category,
      kind: service.kind,
      answers: values,
      submittedAt: new Date().toISOString(),
      source: "servicos",
    };

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setStatus("success");
      setMessage(servicePageCopy.interestSuccess);
      setValues(Object.fromEntries(fields.map((field) => [field.id, ""])));
    } catch {
      setStatus("error");
      setMessage(servicePageCopy.interestError);
    }
  }

  if (status === "success") {
    return (
      <div
        id="interesse"
        className={cn(
          "rounded-lg border border-border bg-surface px-5 py-8 text-center sm:px-8",
          className,
        )}
        role="status"
      >
        <p className="font-serif text-2xl text-ink">{servicePageCopy.interestFormTitle}</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 font-light text-taupe">
          {message}
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-8"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Enviar outro interesse
        </Button>
      </div>
    );
  }

  return (
    <section
      id="interesse"
      className={cn("scroll-mt-24 border-t border-border pt-14 pb-4 sm:pt-16", className)}
      aria-labelledby="interesse-titulo"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2
          id="interesse-titulo"
          className="text-[1.65rem] leading-tight sm:text-3xl"
        >
          {servicePageCopy.interestFormTitle}
        </h2>
        <p className="mt-4 text-sm leading-6 font-light text-muted">
          {servicePageCopy.interestFormLead}
        </p>
        <p className="mt-2 text-[0.68rem] font-medium tracking-[0.14em] text-gold uppercase">
          {service.name}
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mx-auto mt-10 flex max-w-lg flex-col gap-5"
        noValidate
      >
        {fields.map((field) => {
          const inputId = `interest-${service.slug}-${field.id}`;
          const sharedClass =
            "mt-2 w-full rounded-md border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold-soft";

          return (
            <label key={field.id} htmlFor={inputId} className="block text-left">
              <span className="text-[0.68rem] font-medium tracking-[0.12em] text-taupe uppercase">
                {field.label}
                {field.required ? (
                  <span className="text-gold" aria-hidden="true">
                    {" "}
                    *
                  </span>
                ) : null}
              </span>

              {field.type === "textarea" ? (
                <textarea
                  id={inputId}
                  name={field.id}
                  required={field.required}
                  rows={4}
                  placeholder={field.placeholder}
                  value={values[field.id] ?? ""}
                  onChange={(event) => updateField(field.id, event.target.value)}
                  className={cn(sharedClass, "resize-y min-h-[6.5rem]")}
                />
              ) : field.type === "select" ? (
                <select
                  id={inputId}
                  name={field.id}
                  required={field.required}
                  value={values[field.id] ?? ""}
                  onChange={(event) => updateField(field.id, event.target.value)}
                  className={sharedClass}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {(field.options ?? []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  name={field.id}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.id] ?? ""}
                  onChange={(event) => updateField(field.id, event.target.value)}
                  className={sharedClass}
                  autoComplete={
                    field.id === "nome"
                      ? "name"
                      : field.id === "email"
                        ? "email"
                        : field.id === "whatsapp"
                          ? "tel"
                          : undefined
                  }
                />
              )}
            </label>
          );
        })}

        {status === "error" && message ? (
          <p className="text-center text-sm text-taupe" role="alert">
            {message}
          </p>
        ) : null}

        <Button
          type="submit"
          variant="accent"
          className="mt-2 min-h-14 w-full"
          disabled={status === "submitting"}
          aria-label={`${servicePageCopy.interestCta}: ${service.name}`}
        >
          {status === "submitting" ? "Enviando…" : servicePageCopy.interestCta}
        </Button>

        <p className="text-center text-[0.72rem] leading-5 font-light text-muted">
          Os dados serão usados apenas para retorno da clínica sobre este
          atendimento. Integração com o sistema interno em preparação.
        </p>
      </form>
    </section>
  );
}
