"use client";
import React, { useEffect, useRef } from "react";

type ScrollProviderProps = {
  children: React.ReactNode;
};

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<any>(null);

  useEffect(() => {
    let scrollInstance: any;
    const startLoco = async () => {
      if (scrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        scrollInstance = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.1,
        });
        locoScrollRef.current = scrollInstance;
      }
    };
    startLoco();
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default ScrollProvider; 