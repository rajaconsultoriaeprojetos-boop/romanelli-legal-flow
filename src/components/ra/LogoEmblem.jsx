import React from "react";
import { motion } from "framer-motion";
import { LOGO_URL } from "./assets";

/**
 * Emblema da logomarca ORIGINAL em destaque, para o hero (superfície navy).
 * Renderiza o arquivo original como um <img> real — sem retoque, filtros ou
 * distorção. object-fit: contain, respiro adequado, sem competir com as fotos.
 */
export default function LogoEmblem({
  className = "",
  height = "h-16 sm:h-20 lg:h-24",
}) {
  if (!LOGO_URL) {
    return (
      <div
        role="img"
        aria-label="Espaço reservado para a logomarca original da Romanelli Abdalla Advocacia — carregar o arquivo nos assets do projeto."
        className={`inline-flex items-center justify-center rounded-xl border border-dashed border-brand-copper/40 bg-brand-ivory px-8 py-5 text-brand-copper/70 ${className}`}
      >
        <span className="font-body text-[0.65rem] tracking-[0.2em] uppercase">
          Logomarca original — carregar arquivo
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 ${className}`}
    >
      <img
        src={LOGO_URL}
        alt="Logomarca Romanelli Abdalla Advocacia"
        className={`${height} w-auto max-w-full object-contain opacity-65 mix-blend-multiply`}
      />
    </motion.div>
  );
}