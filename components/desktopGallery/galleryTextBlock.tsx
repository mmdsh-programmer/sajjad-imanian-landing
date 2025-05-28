import React from "react";
import Image from "next/image";

const GalleryTextBlock = () => {
  return (
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
  );
};

export default GalleryTextBlock;
