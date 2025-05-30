"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SmileIcon } from "@/assets/svg";
import { Parallax } from "react-scroll-parallax";
import { TextMask, TextMaskParagraph } from "../textMask";
import { motion } from "framer-motion";
import ImageMask from "../imageMask";

const Hero = () => {
  const [parallaxReady, setParallaxReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setParallaxReady(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero bg-yellow overflow-hidden">
      <div className="container !px-0 lg:!px-10">
        <section className="min-h-screen">
          <div className="flex justify-center w-full">
            <h1 className="flex flex-col lg:flex-row lg:justify-center lg:gap-[64px] text-white font-black text-[calc((clamp(78px,11.8vw,220px)-10px))] xs:text-[calc((clamp(96px,11.8vw,220px)-10px))] uppercase w-full max-w-[1400px] text-center pt-12 leading-[80%] lg:leading-[100%] -tracking-wider">
              <span className="z-[1]">
                <TextMask text="Sajad" delay={0.2} speed={0.03} />
              </span>
              <span className="z-10">
                <TextMask text="Imanian" delay={0.4} speed={0.03} />
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-[34px] lg:mt-14">
            <div className="hero__image flex justify-center lg:justify-end">
              <figure className="image-wrapper -translate-y-12 md:-translate-y-24 relative z-[2]">
                <Parallax speed={15}>
                  <div
                    style={{
                      opacity: parallaxReady ? 1 : 0,
                      transition: "opacity 0.3s",
                    }}
                    className="overflow-hidden w-full h-full md:w-[556px] aspect-square lg:ml-[116px]"
                  >
                    <Parallax scale={[1, 1.3]}>
                      <ImageMask
                        src="/sajjad_imanian_1.jpg"
                        alt="hero main image"
                        width={556}
                        height={556}
                        duration={1.2}
                        delay={0.3}
                        ease="power2.out"
                      />
                    </Parallax>
                  </div>
                </Parallax>
              </figure>
            </div>

            <div className="hero__context">
              <div className="context-wrapper text-black flex flex-col items-center lg:ml-24 font-instrument-serif text-[32px] leading-[34px] text-center -tracking-[1px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <SmileIcon className="w-12 h-12 fill-black" />
                </motion.div>
                <p className="block mt-14">
                  <TextMaskParagraph
                    text={"social media manager\ncontent creator & photographer"}
                    delay={0.4}
                    speed={0.02}
                    lineDelay={0.1}
                  />
                  <TextMask
                    text="currently works at AFC"
                    delay={0.7}
                    speed={0.02}
                    className="block underline decoration-1 underline-offset-[6px] italic mb-[67px]"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-[104px] lg:mt-0 -tracking-[2px]">
            <span className="block text-black font-bold text-center text-[32px] leading-[34px]">
              Photographed & <br className="inline md:hidden" /> content created
            </span>
            <span className="block text-white text-center font-instrument-serif text-[42px] leading-[44px] mix-blend-difference relative z-50 italic">
              in over 16 tournaments <br className="inline md:hidden" /> through
              2018-2025
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center justify-center lg:mt-12 -translate-y-10 lg:translate-y-0">
            <figure className="w-full lg:w-fit max-w-[442px] h-fit justify-self-center lg:justify-self-start order-2 lg:order-1">
              <Parallax speed={7}>
                <div className="overflow-hidden">
                  <Parallax scale={[1, 1.2]}>
                    <Image
                      src="/sajjad_imanian_3.jpg"
                      alt="hero image 3"
                      width={328}
                      height={418}
                      priority={false}
                      className="object-cover w-full lg:w-[328px] h-auto lg:h-[418px]"
                    />
                  </Parallax>
                </div>
              </Parallax>
            </figure>

            <figure className="w-full lg:w-fit max-w-[442px] justify-self-center lg:-translate-y-20 order-1 lg:order-2">
              <Parallax speed={3}>
                <div className="overflow-hidden">
                  <Parallax scale={[1, 1.2]}>
                    <Image
                      src="/sajjad_imanian_4.jpg"
                      alt="hero image 4"
                      width={442}
                      height={638}
                      className="object-cover w-full lg:w-[442px] h-auto lg:h-[638px]"
                      priority={false}
                    />
                  </Parallax>
                </div>
              </Parallax>
            </figure>

            <figure className="w-full lg:w-fit max-w-[442px] justify-self-center lg:justify-self-end relative order-3 lg:order-3">
              <Parallax speed={7}>
                <div className="overflow-hidden">
                  <Parallax scale={[1, 1.2]}>
                    <Image
                      src="/sajjad_imanian_2.jpg"
                      alt="hero image 2"
                      width={328}
                      height={253}
                      className="object-cover w-full lg:w-[328px] h-auto lg:h-[253px]"
                      priority={false}
                    />
                  </Parallax>
                </div>
              </Parallax>
            </figure>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
