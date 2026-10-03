import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/ra/BrandLogo";
import { FIRM_EMAIL } from "@/components/ra/constants";

export default function LegalPageLayout({ title, updatedAt, children }) {
  return (
    <div className="min-h-screen bg-brand-ivory text-brand-charcoal">
      <header className="border-b border-brand-navy/10 bg-background">
        <div className="site-container flex min-h-24 items-center justify-between gap-6">
          <Link to="/" aria-label="Voltar ao início"><BrandLogo className="h-16 w-48 sm:h-20 sm:w-60" /></Link>
          <Link to="/" className="font-body text-sm font-semibold text-brand-navy hover:text-brand-copper">Voltar ao site</Link>
        </div>
      </header>
      <main className="site-container py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-copper">Informações legais</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-brand-navy sm:text-5xl">{title}</h1>
          <p className="mt-3 font-body text-sm text-brand-slate">Última atualização: {updatedAt}</p>
          <div className="mt-12 space-y-10">{children}</div>
        </div>
      </main>
      <footer className="bg-brand-navy-soft py-8 text-brand-ivory">
        <div className="site-container flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${FIRM_EMAIL}`} className="hover:text-brand-copper">{FIRM_EMAIL}</a>
          <div className="flex flex-wrap gap-5"><Link to="/politica-de-privacidade">Política de Privacidade</Link><Link to="/termos-de-uso">Termos de Uso</Link></div>
        </div>
      </footer>
    </div>
  );
}