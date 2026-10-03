import React from "react";
import { Image } from "@/components/ui/image";

/**
 * Slot para fotos profissionais enviadas pela cliente.
 * - Usa o arquivo original sem alterar rosto ou identidade.
 * - Enquanto a URL não for preenchida, exibe um marcador elegante
 *   (sem gerar retrato por IA) que preserva o enquadramento do layout.
 */
export default function PhotoSlot({ url, alt, className = "", fittingType = "fill", focalPointX = 0.5, focalPointY }) {
  if (url) {
    return (
      <Image
        src={url}
        alt={alt}
        className={className}
        fittingType={fittingType}
        focalPointX={focalPointX}
        focalPointY={focalPointY}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center bg-brand-navy-soft text-brand-ivory/40 ${className}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-10 w-10 mb-2 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="9" r="3.5" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" strokeLinecap="round" />
      </svg>
      <span className="font-body text-xs tracking-[0.2em] uppercase">Foto profissional</span>
    </div>
  );
}