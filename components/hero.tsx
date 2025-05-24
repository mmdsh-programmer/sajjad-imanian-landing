import React from "react";
import Image from "next/image";
import { SmileIcon } from "@/assets/svg";

const Hero = () => {
  return (
    <section className="hero bg-yellow overflow-hidden">
      <div className="container !px-0 lg:!px-10">
        <h1 className="flex flex-col lg:flex-row lg:justify-between text-white font-black text-[calc((clamp(78px,11.8vw,172px)-10px))] xs:text-[calc((clamp(96px,11.8vw,172px)-10px))] uppercase w-full text-center pt-12 leading-[80%] lg:leading-[100%] -tracking-wider">
          <span className="z-[1]">Sajad</span>
          <span className="z-10">Imanian</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[34px] lg:mt-14">
          <div className="hero__image flex justify-center lg:justify-end">
            <figure className="image-wrapper relative -top-[124px] z-[2]">
              <Image
                src="/sajjad_imanian_1.jpg"
                alt="hero main image"
                width={556}
                height={556}
                className="object-cover lg:ml-[116px]"
                priority
              />
            </figure>
          </div>

          <div className="hero__context">
            <div className="context-wrapper text-black flex flex-col items-center lg:ml-24 font-instrument-serif text-[32px] leading-[34px] text-center -tracking-[1px]">
              <SmileIcon className="w-12 h-12 fill-black" />
              <span className="block mt-14">
                social media manager
              </span>
              <span className="block">
                content creator & photographer
              </span>
              <span className="block underline decoration-2 underline-offset-8 italic mb-[67px]">
                currently works at AFC
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[104px] lg:mt-0 -tracking-[2px]">
          <span className="block text-black font-bold text-center text-[42px] leading-[44px]">
            Photographed & content created
          </span>
          <span className="block text-white text-center font-instrument-serif text-[42px] leading-[44px] mix-blend-difference relative z-50 italic">
            in over 16 tournaments through 2018-2025
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center justify-center mt-12">
          <figure className="justify-self-center lg:justify-self-start relative max-w-[442px] w-full lg:w-[328px] h-[649px] lg:h-[418px] order-2 lg:order-1">
            <Image
              src="/sajjad_imanian_3.jpg"
              alt="hero image 3"
              fill
              className="object-cover"
              priority={false}
              sizes="328px"
            />
          </figure>

          <figure className="justify-self-center lg:-top-28 relative max-w-[442px] w-full lg:w-[442px] h-[638px] order-1 lg:order-2">
            <Image
              src="/sajjad_imanian_4.jpg"
              alt="hero image 4"
              fill
              className="object-cover"
              priority={true}
              sizes="442px"
            />
          </figure>

          <figure className="justify-self-center lg:justify-self-end relative max-w-[442px] w-full lg:w-[328px] h-[253px] order-3 lg:order-3">
            <Image
              src="/sajjad_imanian_2.jpg"
              alt="hero image 2"
              fill
              className="object-cover"
              priority={false}
              sizes="328px"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
