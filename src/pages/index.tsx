import Located from "@/components/fragments/Located";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";
import Introduce from "@/components/layouts/Introduce";
import Resume from "@/components/layouts/Resume";
import SelftProject from "@/components/layouts/SelfProject";

export default function Home() {
  return (
    <main className="xl:container lg:container grid gap-[80px]">
      <Located />
      <HeroSection />
      <div className="grid xl:gap-[200px] gap-[100px]">
        <Introduce />
        <About />
        <Resume />
        <SelftProject />
      </div>
    </main>
  );
}
