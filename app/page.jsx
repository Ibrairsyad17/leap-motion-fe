import React from "react";
import NavigationBar from "./components/NavigationBar";
import { HeroSection } from "@/app/components/hero-section";
import DeviceInfoSection from "@/app/components/DeviceInfoSection";
import MoreSection from "./components/MoreSection";
import { PubSection } from "./components/PubSection";
import ProvoksBanner from "./components/ProvoksBanner";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <DeviceInfoSection />
      <MoreSection />
      <PubSection />
      <ProvoksBanner />
      <Footer />
    </div>
  );
};

export default HomePage;
