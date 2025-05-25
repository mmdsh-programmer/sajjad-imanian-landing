import React from "react";
import Image from "next/image";
import { UnderlineIcon } from "@/assets/svg";

const About = () => (
  <section className="pt-14 lg:pt-[104px] pb-7">
    <div className="container">
      <article>
        <figure className="w-[213px] aspect-square relative md:float-left md:mr-4">
          <Image
            src="/sajjad_imanian_5.jpg"
            alt="About Sajjad Imanian"
            fill
            className="object-cover"
            priority
          />
        </figure>
        <header>
          <p className="font-bold text-[#272727] text-[32px] leading-[34px] lg:text-[42px] lg:leading-[44px] clear-none pt-4 md:pt-[230px] lg:pt-[130px] tracking-tighter">
            My journey in the world of social media and content creation began
            at the age of 16 with one of Iran&apos;s prominent newspapers, and I
            have continued to evolve and thrive in this field over the past
            eight years.
          </p>
        </header>
        <div className="clear-both" />
      </article>
      <aside className="w-full flex justify-center lg:justify-end mt-20">
        <div className="w-fit lg:w-[672px] py-[27px] px-0lg:px-[114px] text-center">
          <p className="font-instrument-serif text-[32px] lg:text-[42px] leading-[34px] lg:leading-[44px] text-center text-dark-yellow">
            I have successfully grown the <br /> AFC Farsi Instagram account to
            <br /> an impressive total of
          </p>
          <mark className="font-instrument-serif text-[32px] lg:text-[42px] leading-[34px] lg:leading-[44px] text-center text-dark-yellow italic bg-transparent mt-2 block">
            3.5 million followers
          </mark>
          <UnderlineIcon className="mx-auto" />
        </div>
      </aside>
    </div>
  </section>
);

export default About;
