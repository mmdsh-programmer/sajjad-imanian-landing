import React from "react";
import Image from "next/image";
import { BallIcon, SmileIcon } from "@/assets/svg";

const Hero = () => {
  return (
    <section className="hero bg-yellow overflow-hidden">
      <div className="container">
        <h1 className="flex justify-between text-white font-black text-[calc((clamp(2rem,11.8vw,172px)-10px))] uppercase w-full text-center pt-12 leading-[100%]">
          <span className="z-[1]">Sajad</span>
          <span className="z-10">Imanian</span>
        </h1>

        <div className="grid grid-cols-2 mt-14">
          <div className="hero__image flex justify-end">
            <figure className="image-wrapper relative -top-[124px] z-[2]">
              <Image
                src="/hero-main-image.jpg"
                alt="hero main image"
                width={556}
                height={556}
                className="object-cover ml-[116px]"
                priority
              />
            </figure>
          </div>
          <div className="hero__context">
            <div className="context-wrapper flex flex-col items-center ml-24">
              <SmileIcon className="w-12 h-12 fill-blue" />
              <span className="block font-instrument-serif text-[44px] leading-[46px] text-white text-center mt-14">
                social media manager
              </span>
              <span className="block font-instrument-serif text-[44px] leading-[46px] text-white text-center">
                content creator & photographer
              </span>
              <span className="block font-instrument-serif text-[44px] leading-[46px] text-white text-center border-b-2 pb-[1px] italic mb-[67px]">
                currently works at AFC
              </span>
              <BallIcon />
            </div>
          </div>
        </div>

        <div>
          <span className="block text-white text-center font-instrument-serif text-[58px] leading-[60px] italic tracking-[-0.04em]">
            Photographed & content created
          </span>
          <span className="block text-white text-center font-instrument-serif text-[58px] leading-[60px] tracking-[-0.04em] mix-blend-difference relative z-50">
            in over 16 tournaments through 2018-2025
          </span>
        </div>

        <div className="grid grid-cols-3 place-content-center justify-center mt-12">
          <div className="relative w-[328px] h-[418px]">
            <Image
              src="/hero-image-3.jpg"
              alt="hero image 3"
              fill
              className="object-cover"
              priority={false}
              sizes="328px"
            />
          </div>
          <div className="justify-self-center -top-28 relative w-[442px] h-[638px]">
            <Image
              src="/hero-image-4.jpg"
              alt="hero image 4"
              fill
              className="object-cover"
              priority={true}
              sizes="442px"
            />
          </div>
          <div className="justify-self-end relative w-[328px] h-[253px]">
            <Image
              src="/hero-image-2.jpg"
              alt="hero image 2"
              fill
              className="object-cover"
              priority={false}
              sizes="328px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
