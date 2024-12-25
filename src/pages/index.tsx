import Located from "@/components/fragments/Located";
import NavSidebar from "@/components/fragments/NavSidebar";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";
import Introduce from "@/components/layouts/Introduce";
import Portfolio from "@/components/layouts/Portfolio";
import Resume from "@/components/layouts/Resume";
import SelftProject from "@/components/layouts/SelfProject";
import Skills from "@/components/layouts/Skills";
import WorkTogether from "@/components/layouts/WorkTogether";

export default function Home() {
  return (
    <main className="container grid gap-[80px]">
      <Located />
      <HeroSection />
      <div className="relative grid xl:gap-[200px] lg:gap-[200px] gap-[100px]">
        <NavSidebar />
        <Introduce />
        <About />
        <Resume />
        <SelftProject />
        <Skills />
        <Portfolio />
        <WorkTogether />
      </div>
    </main>
  );
}
