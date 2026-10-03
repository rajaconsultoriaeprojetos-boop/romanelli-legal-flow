import React from "react";
import { Compass, Users, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Compass, label: "Estratégia" },
  { icon: Users, label: "Proximidade" },
  { icon: ShieldCheck, label: "Segurança" },
];

export default function HeroPillars() {
  return (
    <div className="relative bg-brand-navy-soft border-t border-brand-copper/20">
      <div className="site-container grid gap-px bg-brand-copper/15 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, label }) => (
          <div key={label} className="flex min-h-24 items-center justify-center gap-4 bg-brand-navy-soft px-6 py-6 sm:min-h-32">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-copper/60 text-brand-copper">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <span className="font-heading text-2xl font-semibold text-brand-ivory">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}