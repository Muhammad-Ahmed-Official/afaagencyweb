"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import CTASpecialist from "@/components/cta-specialist";
import ContactCards from "@/components/contact";
import Form from "@/components/form";
import Hero2 from "@/components/hero2";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero2 />
        <ContactCards />
        <Form />
        <CTASpecialist />
      </main>
      <Footer />
    </div>
  );
}