import React from "react";
import Image from "next/image";
import { UnderlineIcon } from "@/assets/svg";

const About = () => (
  <section className="pt-14 lg:pt-[104px] pb-7">
    <div className="container">
      <article>
        <figure className="w-[250px] lg:w-[328px] aspect-square relative md:float-left md:mr-4">
          <Image
            src="/sajjad_imanian_5.jpg"
            alt="About Sajjad Imanian"
            fill
            className="object-cover"
            priority
          />
        </figure>
        <header>
          <h2 className="font-bold text-[#272727] text-[42px] leading-[44px] clear-none pt-4 md:pt-[213px] lg:pt-[246px]">
            My journey in the world of social media and content creation began
            at the age of 16 with one of Iran&apos;s prominent newspapers, and I
            have continued to evolve and thrive in this field over the past
            eight years.
          </h2>
        </header>
        <div className="clear-both" />
      </article>
      <aside className="w-full flex justify-center lg:justify-end mt-20">
        <div className="max-w-[calc(390px+114px+114px)] py-[27px] px-0lg:px-[114px] text-center">
          <p className="font-instrument-serif text-[40px] leading-[42px] text-center text-dark-yellow">
            I have successfully grown the AFC Farsi Instagram account to an
            impressive total of
          </p>
          <mark className="font-instrument-serif text-[40px] leading-[42px] text-center text-dark-yellow italic bg-transparent mt-2 block">
            3.5 million followers
          </mark>
          <UnderlineIcon className="mx-auto" />
        </div>
      </aside>
    </div>
  </section>
);

export default About;
