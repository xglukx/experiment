import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import WhatMakesYouSection from "@/components/WhatMakesYouSection";
import ProductCards from "@/components/ProductCards";
import JourneySection from "@/components/JourneySection";
import YouAreWorthSection from "@/components/YouAreWorthSection";
import ChooseJourneySection from "@/components/ChooseJourneySection";
import PreservingPlanetSection from "@/components/PreservingPlanetSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <WhatMakesYouSection />
      <CategoryNav />
      <ProductCards />
      <YouAreWorthSection />
      <ChooseJourneySection />
      <PreservingPlanetSection />
      <Footer />
    </main>
  );
}
