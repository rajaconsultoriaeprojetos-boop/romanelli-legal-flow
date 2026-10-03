import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "O cliente entra em contato pelo WhatsApp e apresenta brevemente sua situação.",
  },
  {
    n: "02",
    title: "Análise inicial",
    text: "A equipe compreende o contexto e identifica os principais pontos jurídicos envolvidos.",
  },
  {
    n: "03",
    title: "Orientação adequada",
    text: "O escritório orienta o cliente sobre os caminhos possíveis para o caso.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand-ivory py-24 lg:py-32">
      <div className="site-container">
        <div className="max-w-3xl">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand-copper">Atendimento</span>
          <h2 className="section-title mt-5 max-w-[22ch] font-heading font-semibold text-brand-navy">
            Um atendimento pensado para compreender o seu momento.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-heading text-5xl font-semibold text-brand-copper/40">{s.n}</span>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-3 font-body text-base text-brand-slate leading-relaxed">{s.text}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-7 -right-5 h-px w-10 bg-brand-copper/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}