"use client";

import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import useScreenMatch from "@/hooks/useScreenMatch";

const History = () => {
  const isMobile = useScreenMatch(768);

  return (
    <section className="mt-[104px]">
      <div className="container !px-0 flex flex-col gap-4 md:flex-row md:items-end justify-between font-instrument-serif text-[32px] leading-[34px] lg:text-[42px] lg:leading-[44px] tracking-tight">
        <div className="px-4 md:pr-0">
          <p className="max-w-[500px] md:max-w-[888px]">
            Participated in 30 countries as
            <span className="italic"> photographer & content creator</span>
          </p>
          <p>in over 16 tournaments through 2017-2025</p>
        </div>

        <div className="overflow-hidden order-first md:order-last md:grid justify-end md:pr-4">
          {isMobile ? (
            <Parallax translateX={[10, -5]}>
              <div className="overflow-hidden">
                <Parallax scale={[1, 1.2]}>
                  <Image
                    src="/sajjad_imanian_7.jpg"
                    alt="history"
                    width={442}
                    height={295}
                    className="object-cover w-full lg:w-[442px] h-auto"
                  />
                </Parallax>
              </div>
            </Parallax>
          ) : (
            <Image
              src="/sajjad_imanian_7.jpg"
              alt="history"
              width={442}
              height={295}
              className="object-cover w-full lg:w-[442px] h-auto"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default History;
