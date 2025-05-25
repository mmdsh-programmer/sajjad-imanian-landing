import Image from "next/image";
import React from "react";

const MobileGallery = () => {
  return (
    <section className="grid gap-4 lg:hidden mt-20">
      <div className="container grid gap-4 grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] grid-rows-[183px_222px]">
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_14.jpg"
            alt="gallery image"
            width={338}
            height={210}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_15.jpg"
            alt="gallery image"
            width={213}
            height={298}
            className="object-cover w-full h-full flex-none"
            priority
          />
        </div>
        <div className="overflow-hidden col-span-2">
          <Image
            src="/sajjad_imanian_12.jpg"
            alt="gallery image"
            width={459}
            height={235}
            className="object-cover w-full h-full col-span-2 flex-none"
            priority
          />
        </div>
      </div>
      <div className="container grid gap-4 grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] grid-rows-[183px_222px]">
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_6.jpg"
            alt="gallery image"
            width={338}
            height={210}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_14.jpg"
            alt="gallery image"
            width={213}
            height={298}
            className="object-cover w-full h-full flex-none"
            priority
          />
        </div>
        <div className="overflow-hidden col-span-2">
          <Image
            src="/sajjad_imanian_11.jpg"
            alt="gallery image"
            width={459}
            height={235}
            className="object-cover w-full h-full col-span-2 flex-none"
            priority
          />
        </div>
      </div>
      <div className="container grid gap-4 grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] grid-rows-[183px]">
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_16.jpg"
            alt="gallery image"
            width={338}
            height={210}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_3.jpg"
            alt="gallery image"
            width={213}
            height={298}
            className="object-cover w-full h-full flex-none"
            priority
          />
        </div>
      </div>
      <div className="container grid gap-4 grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] grid-rows-[231px]">
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_10.jpg"
            alt="gallery image"
            width={338}
            height={210}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/sajjad_imanian_8.jpg"
            alt="gallery image"
            width={213}
            height={298}
            className="object-cover w-full h-full flex-none"
            priority
          />
        </div>
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

export default MobileGallery;
