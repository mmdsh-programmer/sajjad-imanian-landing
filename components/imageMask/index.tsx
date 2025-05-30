"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
  ease?: string;
}

const ImageMask = ({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  duration = 1.2,
  delay = 0,
  ease = "expo.inOut",
}: IProps) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealRef.current) return;
    gsap.set(revealRef.current, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
    ScrollTrigger.create({
      trigger: revealRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(revealRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration,
          delay,
          ease,
        });
        const img = revealRef.current?.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration,
            delay,
            ease,
          });
        }
      },
    });
  }, [duration, delay, ease]);

  return (
    <div
      ref={revealRef}
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", willChange: "clip-path", ...style }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority
        style={{ transform: "scale(1.2)", willChange: "transform" }}
      />
    </div>
  );
};

export default ImageMask; 