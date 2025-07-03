
import NavSidebar from "@/components/fragments/NavSidebar";
import About from "@/components/layouts/About/About";
import HeroSection from "@/components/layouts/HeroSection/HeroSection";
import Introduce from "@/components/layouts/Introduce/Introduce";
import Portfolio from "@/components/layouts/Portfolio/Portfolio";
import Resume from "@/components/layouts/Resume/Resume";
import SelftProject from "@/components/layouts/SelfProject/SelfProject";
import Skills from "@/components/layouts/Skills/Skills";
import WorkTogether from "@/components/layouts/WorkTogether/WorkTogether";
import { Provider } from "react-redux";
import store from "../redux/store";
import React, { useEffect } from "react";
import axios from 'axios'
import FooterNew from "@/components/layouts/Footer/FooterNew";

const Home = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          axios.post('/api/track-visitor', {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          })
        },
        () => {
          axios.post('/api/track-visitor') // fallback
        }
      )
    } else {
      axios.post('/api/track-visitor')
    }
  }, [])

  return (
    <Provider store={store}>
      <main className="relative grid">
        <HeroSection />
        <div className="grid relative xl:grid-cols-12 lg:grid-cols-12">
          <div className="col-span-12">
            <div className="h-[80px] bg-gradient-to-b from-[#000C04] to-transparent "></div>
          </div>
          <div className="xl:col-span-11 lg:col-span-11 overflow-hidden">
            <div className="relative container grid xl:gap-[200px] lg:gap-[200px] gap-[100px]">
              <Introduce />
              <About />
              <Resume />
              <SelftProject />
              <Portfolio />
              <Skills />
              <WorkTogether />
              <FooterNew />
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

export default Home;