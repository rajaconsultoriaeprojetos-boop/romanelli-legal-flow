import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WHATSAPP_AGENDAR } from "./constants";

const fade = { hidden: { opacity: 0, y: 18 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" } }) };

export default function HeroCopy() {
  return (
    <div className="max-w-[46rem]">
      <motion.h1 custom={0} variants={fade} initial="hidden" animate="show" className="max-w-[15ch] font-heading text-[clamp(2.25rem,4.3vw,4.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-brand-ivory">
        Decisões importantes exigem <span className="italic text-brand-copper">estratégia</span>.
      </motion.h1>
      <motion.p custom={1} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-[42ch] font-body text-[clamp(1.0625rem,1.25vw,1.375rem)] font-medium leading-[1.58] text-brand-ivory">
        Advocacia personalizada para proteger seus interesses, seu patrimônio e seus objetivos.
      </motion.p>
      <motion.div custom={2} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a href={WHATSAPP_AGENDAR} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-brand-copper px-8 font-body text-[15px] font-semibold text-brand-navy transition-colors duration-200 hover:bg-brand-copper-soft">Agendar uma conversa</a>
        <a href="#escritorio" className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-brand-ivory/60 bg-brand-navy/35 px-7 font-body text-[15px] font-semibold text-brand-ivory transition-colors duration-200 hover:border-brand-copper hover:text-brand-copper">Conheça o escritório <ChevronDown className="h-4 w-4" /></a>
      </motion.div>
    </div>
  );
}