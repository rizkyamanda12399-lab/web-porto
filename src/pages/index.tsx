import Located from "@/components/fragments/Located";
import NavSidebar from "@/components/fragments/NavSidebar";
import About from "@/components/layouts/About";
import Footer from "@/components/layouts/Footer";
import HeroSection from "@/components/layouts/HeroSection";
import Introduce from "@/components/layouts/Introduce";
import Portfolio from "@/components/layouts/Portfolio";
import Resume from "@/components/layouts/Resume";
import SelftProject from "@/components/layouts/SelfProject";
import Skills from "@/components/layouts/Skills";
import WorkTogether from "@/components/layouts/WorkTogether";
import { useRef } from "react";

export default function Home() {
  const introduceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  return (
    <main className="relative container grid gap-[80px]">
      <Located />
      <HeroSection />
      <div className="relative grid xl:gap-[200px] lg:gap-[200px] gap-[100px]">
        <NavSidebar
          introduceRef={introduceRef}
          aboutRef={aboutRef}
          resumeRef={resumeRef}
          skillsRef={skillsRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
        />
        <div ref={introduceRef}>
          <Introduce />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <SelftProject />
        <WorkTogether />
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
