import React from "react";
import About from "@/components/about";
import Customers from "@/components/customers";
import Cv from "@/components/cv";
import Gallery from "@/components/desktopGallery";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import History from "@/components/history";
import MobileGallery from "@/components/mobileGallery";
import StickyFooterWrapper from "@/components/footer/stickyFooterWrapper";

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative z-10 min-h-screen bg-white">
        <Hero />
        <About />
        <Gallery />
        <MobileGallery />
        <History />
        <Customers />
        <Cv />
      </main>
      <StickyFooterWrapper>
        <Footer />
      </StickyFooterWrapper>
    </>
  );
};

export default Home;
