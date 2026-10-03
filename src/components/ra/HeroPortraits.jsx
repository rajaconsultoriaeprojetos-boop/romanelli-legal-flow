import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { LAIS_PHOTO_URL, ASSOCIATE_PHOTO_URL } from "./assets";

/**
 * Composição do hero com as FOTOS REAIS enviadas pela cliente.
 * - Não gera, funde ou altera rostos, fisionomia, cabelo, óculos, pele ou
 *   características individuais. Usa recortes reais lado a lado, em molduras
 *   idênticas, para uma leitura harmônica de "duas profissionais juntas".
 * - Enquadramento de busto/meio-cor, sem zoom excessivo no rosto.
 */
function Portrait({ src, alt, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative rounded-xl bg-brand-ivory p-2 border border-brand-copper/30 shadow-[0_26px_60px_-22px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="overflow-hidden rounded-lg aspect-[4/5]">
        <Image
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          fittingType="fill"
        />
      </div>
    </motion.div>
  );
}

export default function HeroPortraits({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Luz quente aconchegante atrás do par de retratos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(194,155,109,0.22),transparent_68%)]"
      />
      <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
        <Portrait
          src={LAIS_PHOTO_URL}
          alt="Laís Romanelli, sócia-fundadora da Romanelli Abdalla Advocacia"
          delay={0.12}
          className="sm:-translate-y-5"
        />
        <Portrait
          src={ASSOCIATE_PHOTO_URL}
          alt="Advogada associada da Romanelli Abdalla Advocacia"
          delay={0.26}
          className="sm:translate-y-5"
        />
      </div>
    </div>
  );
}