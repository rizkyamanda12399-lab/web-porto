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
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="relative grid gap-[80px]">
        <HeroSection />
        <div className="grid xl:grid-cols-12 lg:grid-cols-12">
          <div className="xl:col-span-11 lg:col-span-11">
            <div className="relative container grid xl:gap-[200px] lg:gap-[200px] gap-[100px]">
              <Introduce />
              <About />
              <Resume />
              <SelftProject />
              <Portfolio />
              <Skills />
              <WorkTogether />
              <Footer />
            </div>
          </div>
          <div className="relative col-span-1">
            <NavSidebar />
          </div>
        </div>
      </main>
    </Provider>
  );
}
