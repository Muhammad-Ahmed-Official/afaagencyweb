'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import CTASpecialist from "@/components/cta-specialist";
import Hero3 from "@/components/hero3";
import Section from "@/components/section";
import Team from "@/components/team";

export default function page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero3 />
        <Section />
        <Team />
        <CTASpecialist />
      </main>
      <Footer />
    </>
  )
}
