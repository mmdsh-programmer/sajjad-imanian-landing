import React from "react";
import Image from "next/image";

const History = () => {
  return (
    <section className="mt-[160px] md:mt-[304px]">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end justify-between font-instrument-serif text-[38px] leading-[40px] tracking-[-4%]">
          <div>
            <p className="max-w-[500px] md:max-w-[888px]">
              Participated in 30 countries as
              <span className="italic"> photographer & content creator</span>
            </p>
            <p>in over 16 tournaments through 2017-2025</p>
          </div>

          <Image
            src="/sajjad_imanian_7.jpg"
            alt="history"
            width={442}
            height={295}
            className="object-cover w-[442px] h-[295px] order-first md:order-last"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
