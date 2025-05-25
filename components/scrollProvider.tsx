"use client";

import React, { useEffect, useRef } from "react";

interface LocomotiveScrollInstance {
  destroy: () => void;
};

interface IProps {
  children: React.ReactNode;
};

const ScrollProvider = ({ children }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    let scrollInstance: LocomotiveScrollInstance | null = null;
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