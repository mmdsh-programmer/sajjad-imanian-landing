import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import History from "@/components/history";
import Customers from "@/components/customers";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <History />
      <Customers />
    </main>
  );
}
