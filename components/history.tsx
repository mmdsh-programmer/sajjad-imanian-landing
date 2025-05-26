import React from "react";
import Image from "next/image";

const History = () => {
  return (
    <section className="mt-[104px]">
      <div className="flex flex-col gap-4 md:flex-row md:items-end justify-between font-instrument-serif text-[32px] leading-[34px] lg:text-[42px] lg:leading-[44px] tracking-[-4%]">
        <div className="container">
          <p className="max-w-[500px] md:max-w-[888px]">
            Participated in 30 countries as
            <span className="italic"> photographer & content creator</span>
          </p>
          <p>in over 16 tournaments through 2017-2025</p>
        </div>

        <div className="container overflow-hidden !pr-0 xs:!px-4 order-first md:order-last md:grid justify-end">
          <Image
            src="/sajjad_imanian_7.jpg"
            alt="history"
            width={442}
            height={295}
            className="object-cover w-full lg:w-[442px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
