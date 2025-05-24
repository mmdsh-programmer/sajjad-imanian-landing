import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="mt-20 lg:mt-28">
      <div className="grid md:flex gap-4 overflow-hidden items-end">
        <Image
          src="/sajjad_imanian_14.jpg"
          alt="gallery image"
          width={338}
          height={210}
          className="object-cover w-[232px] h-[183px] lg:w-[338px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_15.jpg"
          alt="gallery image"
          width={213}
          height={298}
          className="object-cover w-[150px] h-[183px] lg:w-[213px] lg:h-[298px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_12.jpg"
          alt="gallery image"
          width={459}
          height={235}
          className="object-cover w-[342px] h-[222px] lg:w-[459px] lg:h-[235px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={216}
          height={235}
          className="object-cover w-[167px] h-[257px] lg:w-[216px] lg:h-[235px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={338}
          height={210}
          className="object-cover w-[167px] h-[257px] lg:w-[338px] lg:h-[210px] flex-none"
          priority
        />
      </div>
      <div className="flex gap-4 overflow-hidden mt-4">
        <Image
          src="/sajjad_imanian_16.jpg"
          alt="gallery image"
          width={388}
          height={210}
          className="object-cover w-[317px] h-[238px] lg:w-[388px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_3.jpg"
          alt="gallery image"
          width={178}
          height={177}
          className="object-cover w-[200px] h-[300px] lg:w-[178px] lg:h-[177px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_11.jpg"
          alt="gallery image"
          width={328}
          height={245}
          className="object-cover w-[386px] h-[257px] lg:w-[328px] lg:h-[245px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={178}
          height={267}
          className="object-cover w-[214px] h-[214px] lg:w-[178px] lg:h-[267px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={388}
          height={210}
          className="object-cover w-[214px] h-[214px] lg:w-[388px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={178}
          height={177}
          className="object-cover w-[214px] h-[214px] lg:w-[178px] lg:h-[177px] flex-none"
          priority
        />
      </div>

      <div className="container grid gap-4 text-center !max-w-[570px] text-grey font-bold text-[28px] leading-[30px] py-[200px] mt-[104px] -tracking-wider">
        <p>Football</p>
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={210}
          height={176}
          className="object-cover place-self-center w-[210px] h-[176px] mt-3 lg:mt-0 flex-none"
        />
        <p className="flex-1 min-w-0 break-words">
          is where my{" "}
          <span className="font-instrument-serif italic font-normal tracking-tighter">
            love & passion
          </span>{" "}
          meets the my expertises &amp; my beautiful
          <mark className="mx-1.5 font-bold bg-transparent bg-gradient-to-r from-[#A50044] to-[#004D98] text-transparent bg-clip-text">
            Barcelona
          </mark>
          play
        </p>
      </div>
    </section>
  );
};

export default Gallery;
