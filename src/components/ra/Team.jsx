import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhotoSlot from "./PhotoSlot";
import GeometricMotif from "./GeometricMotif";
import { LAIS_PHOTO_URL, ASSOCIATE_PHOTO_URL, ASSOCIATE_NAME, ASSOCIATE_ROLE } from "./assets";
import { WHATSAPP_AGENDAR } from "./constants";

function TeamCard({ photo, name, role, paragraphs, alt, delay, justifyDesktop = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7, delay }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white ring-1 ring-brand-navy/10 shadow-sm hover:shadow-xl transition-shadow duration-500">
      
      <div className="team-photo-container relative w-full">
        <PhotoSlot url={photo} alt={alt} fittingType="fill" className="h-full w-full" />
      </div>
      <div className="w-full max-w-[65ch] mx-auto p-8 lg:p-10 flex flex-col flex-1">
        <h3 className="font-heading text-3xl font-semibold text-brand-navy">{name}</h3>
        <p className="mt-1 font-body text-sm tracking-[0.12em] uppercase text-brand-copper">{role}</p>
        <div className="mt-5 space-y-4">
          {paragraphs.map((p, i) =>
          <p key={i} lang="pt-BR" className={`font-body text-base text-brand-charcoal/80 leading-relaxed italic ${justifyDesktop ? "lg:text-justify lg:[text-align-last:left] lg:[hyphens:auto]" : "min-[1700px]:text-justify min-[1700px]:[text-align-last:left] min-[1700px]:[hyphens:auto]"}`}>{p}</p>
          )}
        </div>
        <a
          href={WHATSAPP_AGENDAR}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-7 inline-flex items-center gap-2 font-body text-sm font-medium text-brand-navy hover:text-brand-copper transition-colors w-fit">
          
          Conheça a trajetória
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>);

}

export default function Team() {
  return (
    <section id="equipe" className="relative bg-brand-ivory py-24 lg:py-32 overflow-hidden">
      <GeometricMotif className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80" opacity={0.04} color="#0A1E29" />
      <div className="site-container relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand-copper">A Equipe</span>
          <h2 className="section-title mt-5 font-heading font-semibold text-brand-navy">Uma equipe capacitada e preparada para encontrar a resolução dos seus problemas jurídicos.

          </h2>
        </div>

        <div className="relative mt-14 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <TeamCard
            photo={LAIS_PHOTO_URL}
            name="Laís Romanelli Abdalla"
            role="Sócia-fundadora"
            alt="Retrato profissional da sócia-fundadora Laís Romanelli Abdalla"
            delay={0}
            justifyDesktop
            paragraphs={[
            "Sócia-fundadora e responsável pela estratégia jurídica do escritório. Pós-graduada em Direito Empresarial pela PUC Minas, possui mais de 10 anos de experiência na advocacia.",
            "Conduz a orientação técnica da equipe e a definição das estratégias jurídicas, considerando não apenas o processo, mas também os impactos de cada decisão no patrimônio, nos negócios e nos objetivos do cliente."]
            } />
          
          <TeamCard
            photo={ASSOCIATE_PHOTO_URL}
            name={ASSOCIATE_NAME}
            role={ASSOCIATE_ROLE}
            alt="Retrato profissional da advogada associada Karla Risolo Barbosa Martins"
            delay={0.1}
            paragraphs={[
            "Advogada associada, formada pela Unicsum, e também com formação em Segurança do Trabalho, experiência que contribui para uma visão ainda mais ampla e prática na atuação jurídica.",
            "Integra o setor jurídico nas áreas trabalhista, previdenciária e cível, com dedicação à análise de cada caso e à busca por soluções jurídicas estratégicas e adequadas às necessidades de cada cliente."]
            } />
          

        </div>
      </div>
    </section>);

}