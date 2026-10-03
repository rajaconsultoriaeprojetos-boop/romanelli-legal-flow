import React from "react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_LOGO_URL } from "./assets";
import { WHATSAPP_AGENDAR } from "./constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_AGENDAR}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Romanelli Abdalla Advocacia pelo WhatsApp"
      className="fixed bottom-24 right-5 z-50 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-background p-0.5 shadow-[0_12px_32px_-8px_rgba(10,30,41,0.45)] ring-2 ring-brand-copper/70 ring-offset-2 ring-offset-brand-ivory transition-transform duration-200 hover:scale-105 sm:bottom-28 sm:right-6 sm:h-[72px] sm:w-[72px] animate-wa-pulse"
    >
      <Image
        src={WHATSAPP_LOGO_URL}
        alt="WhatsApp"
        fittingType="fill"
        focalPointX={0.5}
        focalPointY={0.5}
        className="h-full w-full rounded-full"
      />
    </a>
  );
}