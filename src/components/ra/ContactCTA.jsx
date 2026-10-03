import React from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import GeometricMotif from "./GeometricMotif";
import { WHATSAPP_AGENDAR, PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "./constants";

export default function ContactCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-r from-brand-copper-soft to-brand-copper py-20 lg:py-24">
      <GeometricMotif className="pointer-events-none absolute -right-16 -top-16 h-72 w-72" opacity={0.12} color="#0A1E29" />
      <div className="site-container relative text-center">
        <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="section-title font-heading font-semibold text-brand-navy"
        >
          Vamos conversar sobre o que realmente importa para você.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-body text-lg text-brand-navy/75 leading-relaxed"
        >
          Envie uma mensagem para a Romanelli Abdalla Advocacia e solicite um
          primeiro contato.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_AGENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-md bg-brand-navy px-8 font-body text-[15px] font-semibold text-brand-ivory transition-colors duration-200 hover:bg-brand-navy-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar uma conversa
          </a>
          <a
            href="tel:+5532988844684"
            className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-md bg-brand-navy px-7 font-body text-[15px] font-semibold text-brand-white transition-colors duration-200 hover:bg-brand-navy-soft"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </motion.div>

        <p className="mt-8 flex items-center justify-center gap-2 font-body text-sm text-brand-navy/60">
          <Instagram className="h-4 w-4 text-brand-navy" />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-navy underline-offset-2 hover:underline">
            {INSTAGRAM_HANDLE}
          </a>
        </p>
        </div>
      </div>
    </section>
  );
}