import React from "react";

export default function LegalSection({ title, children }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-semibold text-brand-navy sm:text-3xl">{title}</h2>
      <div className="mt-3 space-y-3 font-body text-base leading-relaxed text-brand-charcoal/80">{children}</div>
    </section>
  );
}