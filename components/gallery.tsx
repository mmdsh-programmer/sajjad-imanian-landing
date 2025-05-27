import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="hidden lg:block mt-20 lg:mt-28 max-w-[1920px] mx-auto">
      <div className="grid md:flex gap-4 overflow-hidden items-end">
        <Image
          src="/sajjad_imanian_14.jpg"
          alt="gallery image"
          width={406}
          height={210}
          className="object-cover w-[278px] h-[183px] lg:w-[406px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_15.jpg"
          alt="gallery image"
          width={256}
          height={298}
          className="object-cover w-[180px] h-[183px] lg:w-[256px] lg:h-[298px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_12.jpg"
          alt="gallery image"
          width={551}
          height={235}
          className="object-cover w-[410px] h-[222px] lg:w-[551px] lg:h-[235px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={259}
          height={235}
          className="object-cover w-[200px] h-[257px] lg:w-[259px] lg:h-[235px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={406}
          height={210}
          className="object-cover w-[200px] h-[257px] lg:w-[406px] lg:h-[210px] flex-none"
          priority
        />
      </div>
      <div className="flex gap-4 overflow-hidden mt-4">
        <Image
          src="/sajjad_imanian_16.jpg"
          alt="gallery image"
          width={466}
          height={210}
          className="object-cover w-[380px] h-[238px] lg:w-[466px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_3.jpg"
          alt="gallery image"
          width={214}
          height={177}
          className="object-cover w-[240px] h-[300px] lg:w-[214px] lg:h-[177px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_11.jpg"
          alt="gallery image"
          width={394}
          height={245}
          className="object-cover w-[463px] h-[257px] lg:w-[394px] lg:h-[245px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={214}
          height={267}
          className="object-cover w-[257px] h-[214px] lg:w-[214px] lg:h-[267px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={466}
          height={210}
          className="object-cover w-[257px] h-[214px] lg:w-[466px] lg:h-[210px] flex-none"
          priority
        />
        <Image
          src="/sajjad_imanian_8.jpg"
          alt="gallery image"
          width={214}
          height={177}
          className="object-cover w-[257px] h-[214px] lg:w-[214px] lg:h-[177px] flex-none"
          priority
        />
      </div>

      <div className="container grid gap-4 text-center !max-w-[570px] text-grey font-bold text-[24px] leading-[30px] py-[200px] mt-[104px] -tracking-wider">
        <p>Football</p>
        <Image
          src="/sajjad_imanian_6.jpg"
          alt="gallery image"
          width={252}
          height={176}
          className="object-cover place-self-center w-[252px] h-[176px] mt-3 lg:mt-0 flex-none"
        />
        <p className="flex-1 min-w-0 break-words">
          is where my{" "}
          <span className="font-instrument-serif italic font-normal tracking-tighter text-3xl">
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
