import React from "react";
import Image from "next/image";
import { FootballIcon } from "@/assets/svg";

const Gallery = () => {
  return (
    <section className="mt-20 lg:mt-28">
      <div className="flex gap-4 lg:gap-10 overflow-hidden items-end">
        <Image
          src="/sajjad_imanian_14.jpg"
          alt="gallery image"
          width={672}
          height={448}
          className="object-cover w-[518px] h-[300px] lg:w-[672px] lg:h-[448px]"
          priority
        />
        <Image
          src="/sajjad_imanian_15.jpg"
          alt="gallery image"
          width={213}
          height={298}
          className="object-cover w-[150px] h-[183px] lg:w-[213px] lg:h-[298px]"
          priority
        />
        <Image
          src="/sajjad_imanian_12.jpg"
          alt="gallery image"
          width={443}
          height={332}
          className="object-cover w-[342px] h-[222px] lg:w-[443px] lg:h-[332px]"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={216}
          height={384}
          className="object-cover w-[167px] h-[257px] lg:w-[216px] lg:h-[384px]"
          priority
        />
      </div>
      <div className="flex gap-4 lg:gap-10 overflow-hidden mt-4 lg:mt-10">
        <Image
          src="/sajjad_imanian_16.jpg"
          alt="gallery image"
          width={443}
          height={332}
          className="object-cover w-[317px] h-[238px] lg:w-[443px] lg:h-[332px]"
          priority
        />
        <Image
          src="/sajjad_imanian_3.jpg"
          alt="gallery image"
          width={279}
          height={418}
          className="object-cover w-[200px] h-[300px] lg:w-[279px] lg:h-[418px]"
          priority
        />
        <Image
          src="/sajjad_imanian_11.jpg"
          alt="gallery image"
          width={537}
          height={358}
          className="object-cover w-[386px] h-[257px] lg:w-[537px] lg:h-[358px]"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={299}
          height={298}
          className="object-cover w-[214px] h-[214px] lg:w-[299px] lg:h-[298px]"
          priority
        />
      </div>

      <div className="container text-grey flex flex-col md:flex-row md:items-center md:gap-3 font-bold text-[28px] leading-[30px] mt-[140px] md:mt-[104px]">
        <div className="flex items-center gap-1 flex-wrap">
          <p>Football</p>
          <FootballIcon className="block md:hidden" />
        </div>
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={210}
          height={176}
          className="object-cover w-[210px] h-[176px] mt-3 lg:mt-0 order-last md:order-none"
        />
        <p className="flex-1 min-w-0 break-words">
          is where my love&amp;passion meets the my expertises &amp; my
          beautiful
          <mark className="mx-1.5 font-bold bg-transparent bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
            Barcelona
          </mark>
          play
        </p>
      </div>
    </section>
  );
};

export default Gallery;
