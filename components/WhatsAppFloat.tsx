"use client";

import { useEffect, useState } from "react";
import { clinic, getWhatsAppHref } from "@/data/clinic";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.78.77 2.15.83 2.92.7.47-.08 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.11-.22-.17-.47-.29Z"
      />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false);
  const href = getWhatsAppHref("booking");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShowPopup(true), reduced ? 0 : 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="wa-float">
      {showPopup ? (
        <div className="wa-float-popup" role="dialog" aria-label="WhatsApp">
          <button
            type="button"
            className="wa-float-close"
            aria-label="Fechar"
            onClick={() => setShowPopup(false)}
          >
            ×
          </button>
          <p className="wa-float-title">{clinic.name}</p>
          <p className="wa-float-text">
            Olá! Posso ajudar a agendar sua avaliação pelo WhatsApp.
          </p>
          <a
            href={href}
            className="wa-float-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar agora
          </a>
        </div>
      ) : null}

      <a
        href={href}
        className="wa-float-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
