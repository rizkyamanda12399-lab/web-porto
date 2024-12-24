import Located from "@/components/Fragments/Located";
import NavSidebar from "@/components/Fragments/NavSidebar";
import About from "@/components/Layouts/About";
import HeroSection from "@/components/Layouts/HeroSection";
import Introduce from "@/components/Layouts/Introduce";
import Portfolio from "@/components/Layouts/Portfolio";
import Resume from "@/components/Layouts/Resume";
import SelftProject from "@/components/Layouts/SelfProject";
import Skills from "@/components/Layouts/Skills";
import WorkTogether from "@/components/Layouts/WorkTogether";

export default function Home() {
  return (
    <main className="xl:container lg:container grid gap-[80px]">
      <Located />
      <HeroSection />
      <div className="relative grid xl:gap-[200px] gap-[100px]">
        <div className="">
          <NavSidebar />
        </div>
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
