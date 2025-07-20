import FeaturedCources from "@/components/FeaturedCources";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";

import Movingcards from "@/components/Movingcards";
import Sticky from "@/components/Sticky";
import { MovingBorder } from "@/components/ui/moving-border";
import { WavyBackground } from "@/components/ui/wavy-background";
import UpcominWebinars from "@/components/UpcominWebinars";
import { main } from "motion/react-client";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCources/>
      <Sticky/>
      <Movingcards/>
      <UpcominWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
