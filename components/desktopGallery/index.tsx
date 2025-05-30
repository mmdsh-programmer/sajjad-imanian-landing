"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { imagesRow1, imagesRow2 } from "./galleryData";
import GalleryTextBlock from "./galleryTextBlock";
import GalleryImageRow from "./galleryImageRow";

gsap.registerPlugin(ScrollTrigger);

const DesktopGallery = () => {
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
          start: "top 10%",
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
          start: "top 10%",
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
      <GalleryImageRow
        images={imagesRow1}
        rowRef={row1Ref}
        className="gallery-row-1 grid md:flex gap-4 overflow-visible items-end"
      />
      <GalleryImageRow
        images={imagesRow2}
        rowRef={row2Ref}
        className="gallery-row-2 flex gap-4 overflow-visible mt-4"
      />
      <GalleryTextBlock />
    </section>
  );
};

export default DesktopGallery;
