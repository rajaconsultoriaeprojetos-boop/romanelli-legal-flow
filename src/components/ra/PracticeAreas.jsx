import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, FileText, Landmark, PiggyBank } from "lucide-react";

const areas = [
  {
    icon: Building2,
    title: "Direito Imobiliário",
    text: "Orientação em compra, venda, locação, contratos e regularização de imóveis.",
  },
  {
    icon: Landmark,
    title: "Direito Bancário",
    text: "Assessoria em contratos bancários, renegociação de dívidas e relações financeiras.",
  },
  {
    icon: FileText,
    title: "Direito Cível",
    text: "Assessoria e orientação em questões civis, contratos, responsabilidades e relações jurídicas.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    text: "Visão estratégica para decisões que envolvem negócios, patrimônio e objetivos empresariais.",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    text: "Orientação jurídica para relações de trabalho, prevenção de riscos e análise de situações trabalhistas.",
  },
  {
    icon: PiggyBank,
    title: "Direito Previdenciário",
    text: "Orientação para questões relacionadas a benefícios, direitos previdenciários e análise individual de cada situação.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative bg-white py-24 lg:py-32">
      <div className="site-container">
        <div className="max-w-3xl max-sm:px-2">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand-copper">Áreas de Atuação</span>
          <h2 className="section-title mt-5 font-heading font-semibold text-brand-navy">
            Como podemos ajudar
          </h2>
          <p className="mt-5 font-body text-lg text-brand-slate leading-relaxed">
            Conheça as áreas em que a equipe atua, com orientação jurídica
            personalizada e estratégica para cada situação.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group text-center sm:text-left"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-brand-copper/40 text-brand-copper transition-colors duration-300 group-hover:bg-brand-copper group-hover:text-brand-navy">
                <a.icon className="h-6 w-6" strokeWidth={1.4} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-semibold text-brand-navy">{a.title}</h3>
              {a.text && <p className="mt-3 font-body text-base text-brand-slate leading-relaxed">{a.text}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}