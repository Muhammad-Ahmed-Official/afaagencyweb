import BrandsLogoSlider from "@/components/brands";
import AboutSection from "../components/about";
import CTASpecialist from "../components/cta-specialist";
import Footer from "../components/footer";
import FunFactsSection from "../components/func-facts";
import Header from "../components/header";
import HeroSection from "../components/hero";
import PortfolioSection from "../components/portfolio";
import ServicesSection from "../components/services";
import Reviews from "@/components/review";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <BrandsLogoSlider />
        <AboutSection />
        <ServicesSection />
        <FunFactsSection />
        <PortfolioSection />
        <Reviews />
        <CTASpecialist />
      </main>
      <Footer />
    </div>
  );
}
