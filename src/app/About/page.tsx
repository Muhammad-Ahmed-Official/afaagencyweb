'use client'

import Footer from "@/components/footer";
import Header from "@/components/header";
import CTASpecialist from "@/components/cta-specialist";
import Hero3 from "@/components/hero3";
import Section from "@/components/section";

export default function page() {
  return (
    <>
      <Header />
      <main>
        <Hero3 />
        <Section />
        {/* <HeroBanner /> */}
        {/* <AboutIntro /> */}
        {/* <CeoMessage /> */}
        {/* <Testimonials /> */}
        {/* <ClientsSection /> */}
        <CTASpecialist />
      </main>
      <Footer />
    </>
  )
}
