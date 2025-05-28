import React from "react";
import { GalleryImage } from "@/interface/app.interface";
import Image from "next/image";

interface IProps {
  images: GalleryImage[];
  rowRef: React.RefObject<HTMLDivElement | null>;
  className: string;
}

const GalleryImageRow = ({ images, rowRef, className }: IProps) => {
  return (
    <div ref={rowRef} className={className} style={{ willChange: "transform" }}>
      {images.map((img, idx) => (
        <Image
          key={img.src + idx}
          src={img.src}
          alt="gallery image"
          width={img.width}
          height={img.height}
          className={img.className}
          priority={false}
        />
      ))}
    </div>
  );
};

export default GalleryImageRow;
