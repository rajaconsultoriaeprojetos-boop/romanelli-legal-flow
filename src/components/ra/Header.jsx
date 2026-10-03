import React, { useEffect, useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { NAV_LINKS, WHATSAPP_AGENDAR, INSTAGRAM_URL } from "./constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-navy/10 bg-background shadow-sm">
      <div className="site-container flex h-20 items-center justify-between gap-6 sm:h-24">
        <a href="#topo" aria-label="Romanelli Abdalla Advocacia — início" className="flex min-h-11 shrink-0 items-center">
          <BrandLogo className="h-16 w-48 sm:h-20 sm:w-60 min-[1120px]:w-72" />
        </a>
        <nav className="hidden items-center justify-end gap-5 min-[1120px]:flex 2xl:gap-9" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="relative flex min-h-11 items-center font-body text-base font-semibold text-brand-navy transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand-copper after:transition-transform after:duration-200 hover:text-brand-copper hover:after:scale-x-100">{link.label}</a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram @romanelliabdalla" className="inline-flex h-11 w-11 items-center justify-center text-brand-navy transition-colors duration-200 hover:text-brand-copper"><Instagram className="h-5 w-5" /></a>
          <a href={WHATSAPP_AGENDAR} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-copper px-6 font-body text-[15px] font-semibold text-brand-navy transition-colors duration-200 hover:bg-brand-copper-soft">Agendar uma conversa</a>
        </nav>
        <button onClick={() => setOpen((value) => !value)} className="inline-flex h-12 w-12 shrink-0 items-center justify-center text-brand-navy min-[1120px]:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {open && (
        <div className="border-t border-brand-navy/10 bg-background min-[1120px]:hidden">
          <nav className="site-container flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto py-5" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-brand-navy/10 font-body text-base font-semibold text-brand-navy">{link.label}</a>)}
            <div className="flex flex-col gap-3 pt-5 sm:flex-row">
              <a href={WHATSAPP_AGENDAR} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-brand-copper px-6 font-body text-[15px] font-semibold text-brand-navy"><MessageCircle className="h-5 w-5" /> Agendar uma conversa</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram @romanelliabdalla" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-navy/30 px-6 font-body text-[15px] font-semibold text-brand-navy"><Instagram className="h-5 w-5" /> Instagram</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}