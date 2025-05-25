"use client";

import React, { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import History from "@/components/history";
import Customers from "@/components/customers";
import Cv from "@/components/cv";
import Footer from "@/components/footer";
import MobileGallery from "@/components/mobileGallery";
import Lenis from "lenis";
import StickyFooterWrapper from "./stickyFooterWrapper";

const MainPage = () => {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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

export default MainPage;
