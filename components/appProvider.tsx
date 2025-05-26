"use client";

import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default AppProvider;
