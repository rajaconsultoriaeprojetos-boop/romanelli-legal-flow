import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { NAV_LINKS, INSTAGRAM_URL, INSTAGRAM_HANDLE, PHONE_DISPLAY, WHATSAPP_AGENDAR, FIRM_NAME, FIRM_ADDRESS, FIRM_EMAIL } from "./constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy-soft text-brand-ivory">
      <div className="site-container py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Marca */}
          <div className="md:col-span-5">
            <p className="max-w-sm font-heading text-2xl italic text-brand-ivory/85">
              Estratégia e orientação jurídica para decisões que importam.
            </p>
          </div>

          {/* Navegação */}
          <nav className="md:col-span-3" aria-label="Navegação do rodapé">
            <h3 className="font-body text-xs tracking-[0.25em] uppercase text-brand-copper mb-4">Navegação</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-body text-sm text-brand-ivory/75 hover:text-brand-copper transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="md:col-span-4">
            <h3 className="font-body text-xs tracking-[0.25em] uppercase text-brand-copper mb-4">Contato</h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href={WHATSAPP_AGENDAR} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-ivory/75 hover:text-brand-copper transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp / Telefone
                </a>
              </li>
              <li className="text-brand-ivory/75 pl-6">{PHONE_DISPLAY}</li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-ivory/75 hover:text-brand-copper transition-colors">
                  <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <a href={`mailto:${FIRM_EMAIL}`} className="inline-flex items-center gap-2 text-brand-ivory/75 hover:text-brand-copper transition-colors">
                  <Mail className="h-4 w-4 shrink-0" /> {FIRM_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-ivory/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {FIRM_ADDRESS}, Juiz de Fora
              </li>
              <li className="text-brand-ivory/75">
                Encarregado pelo Tratamento de Dados (DPO): <a href={`mailto:${FIRM_EMAIL}`} className="hover:text-brand-copper">{FIRM_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-brand-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-ivory/50">
            © {year} {FIRM_NAME}. Todos os direitos reservados.
          </p>
          <div className="ml-auto flex flex-wrap items-center justify-end gap-5 pr-6">
            <Link to="/politica-de-privacidade" className="font-body text-xs text-brand-ivory/50 transition-colors hover:text-brand-copper">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="font-body text-xs text-brand-ivory/50 transition-colors hover:text-brand-copper">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}