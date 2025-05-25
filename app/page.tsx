import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import History from "@/components/history";
import Customers from "@/components/customers";
import Cv from "@/components/cv";
import Footer from "@/components/footer";
import MobileGallery from "@/components/mobileGallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MobileGallery />
        <History />
        <Customers />
        <Cv />
      </main>
      <Footer />
    </>
  );
}
