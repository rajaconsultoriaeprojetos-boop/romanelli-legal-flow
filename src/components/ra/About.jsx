import React from "react";
import { motion } from "framer-motion";
import GeometricMotif from "./GeometricMotif";

export default function About() {
  return (
    <section id="escritorio" className="relative bg-brand-ivory py-24 lg:py-32 overflow-hidden">
      <GeometricMotif
        className="pointer-events-none absolute top-10 right-0 h-72 w-72"
        opacity={0.05}
        color="#0A1E29"
      />
      <div className="site-container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 font-body text-base font-semibold uppercase tracking-[0.14em] text-brand-copper-deep sm:text-lg"
            >
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-brand-copper" />
              O Escritório
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }}
              className="section-title mt-5 max-w-[17ch] font-heading font-semibold text-brand-navy"
            >
              Estratégia jurídica para decisões que importam.
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:pt-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-[68ch] font-body text-lg leading-relaxed text-brand-charcoal/80"
            >
              O Romanelli Abdalla Advocacia atua de forma personalizada e estratégica,
              buscando compreender cada situação em profundidade para oferecer
              orientação jurídica adequada aos objetivos, ao patrimônio e à realidade
              de cada cliente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 max-w-[68ch] font-body text-lg leading-relaxed text-black"
            >
              Mais do que analisar processos, o escritório considera o contexto
              completo de cada decisão e seus possíveis impactos na vida pessoal,
              profissional e empresarial do cliente.
            </motion.p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-brand-copper" />
              <span className="font-heading text-xl italic text-black">
                Estratégia. Segurança. Proximidade.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}