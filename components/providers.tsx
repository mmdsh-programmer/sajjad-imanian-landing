"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const Providers = ({ children }: { children: React.ReactNode }) => {

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

  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default Providers;
