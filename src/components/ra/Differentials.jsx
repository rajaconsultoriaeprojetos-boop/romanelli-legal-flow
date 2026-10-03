import React from "react";
import { motion } from "framer-motion";
import { UserSquare2, Compass, Search, MessageSquareText } from "lucide-react";

const items = [
  {
    icon: UserSquare2,
    title: "Atendimento personalizado",
    text: "Cada caso é analisado de forma individual, considerando suas particularidades e objetivos.",
  },
  {
    icon: Compass,
    title: "Visão estratégica",
    text: "A orientação jurídica considera o processo e os impactos das decisões no patrimônio, nos negócios e no futuro do cliente.",
  },
  {
    icon: Search,
    title: "Análise cuidadosa",
    text: "A equipe busca compreender o contexto completo antes de definir os caminhos jurídicos mais adequados.",
  },
  {
    icon: MessageSquareText,
    title: "Proximidade e clareza",
    text: "Informação jurídica apresentada de forma clara, responsável e acessível.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-brand-ivory pb-24 lg:pb-32">
      <div className="site-container">
        <div className="grid overflow-hidden rounded-2xl bg-brand-copper/20 ring-1 ring-brand-copper/20 sm:grid-cols-2 xl:grid-cols-4 gap-px">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-brand-ivory p-8 lg:p-10 hover:bg-white transition-colors duration-300"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-copper/40 text-brand-copper transition-colors duration-300 group-hover:bg-brand-copper group-hover:text-brand-navy">
                <it.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-brand-navy">{it.title}</h3>
              <p className="mt-3 font-body text-base text-brand-slate leading-relaxed">{it.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}