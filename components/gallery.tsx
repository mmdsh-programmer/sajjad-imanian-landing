import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section>
      <div className="flex gap-10 overflow-hidden items-end">
        <Image
          src="/sajjad_imanian_14.jpg"
          alt="gallery image"
          width={672}
          height={448}
          className="object-cover w-[672px] h-[448px]"
          priority
        />
        <Image
          src="/sajjad_imanian_15.jpg"
          alt="gallery image"
          width={213}
          height={298}
          className="object-cover w-[213px] h-[298px]"
          priority
        />
        <Image
          src="/sajjad_imanian_12.jpg"
          alt="gallery image"
          width={443}
          height={332}
          className="object-cover w-[443px] h-[332px]"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={216}
          height={384}
          className="object-cover w-[216px] h-[384px]"
          priority
        />
      </div>
      <div className="flex gap-10 overflow-hidden mt-10">
        <Image
          src="/sajjad_imanian_16.jpg"
          alt="gallery image"
          width={443}
          height={332}
          className="object-cover w-[443px] h-[332px]"
          priority
        />
        <Image
          src="/sajjad_imanian_3.jpg"
          alt="gallery image"
          width={279}
          height={418}
          className="object-cover w-[279px] h-[418px]"
          priority
        />
        <Image
          src="/sajjad_imanian_11.jpg"
          alt="gallery image"
          width={537}
          height={358}
          className="object-cover w-[537px] h-[358px]"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={299}
          height={298}
          className="object-cover w-[299px] h-[298px]"
          priority
        />
      </div>

      <div className="container flex items-center gap-3 font-bold text-[28px] leading-[30px] mt-[104px]">
        <p>Football</p>
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={210}
          height={176}
          className="object-cover w-[210px] h-[176px]"
        />
        <p>
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
