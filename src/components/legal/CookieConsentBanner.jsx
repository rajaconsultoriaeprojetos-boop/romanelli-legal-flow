import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "romanelli-cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (consent) document.documentElement.dataset.cookieConsent = consent;
    else setVisible(true);
  }, []);

  const choose = (status) => {
    window.localStorage.setItem(CONSENT_KEY, status);
    document.documentElement.dataset.cookieConsent = status;
    window.dispatchEvent(new CustomEvent("cookie-consent-changed", { detail: { status } }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside role="dialog" aria-live="polite" aria-label="Preferências de cookies" className="fixed inset-x-0 bottom-0 z-[70] border-t border-brand-copper/40 bg-brand-ivory shadow-[0_-12px_32px_-18px_rgba(10,30,41,0.45)]">
      <div className="site-container flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl font-body text-sm leading-relaxed text-brand-navy/80">
          Utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência em nosso site. Para saber mais, consulte nossa{" "}
          <Link to="/politica-de-privacidade" className="font-semibold text-brand-navy underline underline-offset-2">Política de Privacidade</Link>.
        </p>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => choose("rejected")} className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-navy px-5 font-body text-sm font-semibold text-brand-navy">Rejeitar</button>
          <button type="button" onClick={() => choose("accepted")} className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-5 font-body text-sm font-semibold text-brand-white hover:bg-brand-navy-soft">Aceitar todos</button>
        </div>
      </div>
    </aside>
  );
}