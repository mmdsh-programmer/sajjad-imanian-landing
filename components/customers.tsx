import React from "react";
import Image from "next/image";

const Customers = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, 132px)",
            gridAutoRows: "99px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Array.from({ length: 19 }, (_, i) => (
            <div
              key={i + 1}
              className="flex items-center justify-center relative w-[112px] h-[79px]"
            >
              <Image
                src={`/customer${i + 1}.png`}
                alt={`customer ${i + 1}`}
                fill
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
