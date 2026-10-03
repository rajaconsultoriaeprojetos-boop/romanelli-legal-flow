import React from "react";
import { Image } from "@/components/ui/image";
import HeroCopy from "./HeroCopy";
import HeroPillars from "./HeroPillars";
import { HERO_CINEMATIC_URL } from "./assets";

export default function Hero() {
  return (
    <section id="topo" className="bg-brand-navy pt-20 sm:pt-24">
      <div className="md:hidden">
        <div className="site-container py-10 sm:py-14"><HeroCopy /></div>
        <Image src={HERO_CINEMATIC_URL} alt="Retrato profissional da advogada no escritório" className="h-[300px] w-full sm:h-[420px]" fittingType="fill" focalPointX={0.72} focalPointY={0.48} />
      </div>
      <div className="relative hidden min-h-[620px] md:flex lg:min-h-[680px] 2xl:min-h-[760px]">
        <Image src={HERO_CINEMATIC_URL} alt="Retrato profissional da advogada no escritório" className="absolute inset-0 h-full w-full" fittingType="fill" focalPointX={0.68} focalPointY={0.15} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-navy from-0% via-brand-navy/65 via-22% to-transparent to-34%" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/65 to-transparent" />
        <div className="site-container relative z-10 flex items-center py-16"><HeroCopy /></div>
      </div>
      <HeroPillars />
    </section>
  );
}