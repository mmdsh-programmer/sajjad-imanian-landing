"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { imagesRow1, imagesRow2 } from "./galleryData";
import { GalleryImage } from "@/interface/app.interface";


gsap.registerPlugin(ScrollTrigger);

interface IProps {
  images: GalleryImage[];
  rowRef: React.RefObject<HTMLDivElement | null>;
  className: string;
}

const GalleryImageRow = ({ images, rowRef, className }: IProps) => (
  <div
    ref={rowRef}
    className={className}
    style={{ willChange: "transform" }}
  >
    {images.map((img, idx) => (
      <Image
        key={img.src + idx}
        src={img.src}
        alt="gallery image"
        width={img.width}
        height={img.height}
        className={img.className}
        priority
      />
    ))}
  </div>
);

const GalleryTextBlock = () => (
  <div className="container grid gap-4 text-center !max-w-[570px] text-grey font-bold text-[24px] leading-[30px] py-[200px] mt-[104px] -tracking-wider">
    <p>Football</p>
    <Image
      src="/sajjad_imanian_6.jpg"
      alt="gallery image"
      width={252}
      height={176}
      className="object-cover place-self-center w-[252px] h-[176px] mt-3 lg:mt-0 flex-none"
    />
    <p className="flex-1 min-w-0 break-words">
      is where my{" "}
      <span className="font-instrument-serif italic font-normal tracking-tighter text-3xl">
        love & passion
      </span>{" "}
      meets the my expertises &amp; my beautiful
      <mark className="mx-1.5 font-bold bg-transparent bg-gradient-to-r from-[#A50044] to-[#004D98] text-transparent bg-clip-text">
        Barcelona
      </mark>
      play
    </p>
  </div>
);

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!section || !row1 || !row2) return;

    const totalWidthRow1 = row1.scrollWidth - row1.clientWidth;
    const totalWidthRow2 = row2.scrollWidth - row2.clientWidth;
    const horizontalScrollLength = Math.max(totalWidthRow1, totalWidthRow2);

    const ctx = gsap.context(() => {
      gsap.to(row1, {
        x: -totalWidthRow1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: () => `+=${horizontalScrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
      gsap.set(row2, { x: -totalWidthRow2 });
      gsap.to(row2, {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: () => `+=${horizontalScrollLength}`,
          scrub: true,
          pin: false,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden lg:block mt-20 lg:mt-28 max-w-[1920px] mx-auto"
      style={{ overflow: "hidden" }}
    >
      <GalleryImageRow images={imagesRow1} rowRef={row1Ref} className="gallery-row-1 grid md:flex gap-4 overflow-visible items-end" />
      <GalleryImageRow images={imagesRow2} rowRef={row2Ref} className="gallery-row-2 flex gap-4 overflow-visible mt-4" />
      <GalleryTextBlock />
    </section>
  );
};

export default Gallery;
