import React from "react";
import Header from "@/components/ra/Header";
import Hero from "@/components/ra/Hero";
import About from "@/components/ra/About";
import Differentials from "@/components/ra/Differentials";
import Team from "@/components/ra/Team";
import PracticeAreas from "@/components/ra/PracticeAreas";
import Process from "@/components/ra/Process";
import ContactCTA from "@/components/ra/ContactCTA";
import Footer from "@/components/ra/Footer";
import WhatsAppFloat from "@/components/ra/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-brand-ivory">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Team />
        <PracticeAreas />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}