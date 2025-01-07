"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const ImageAutoSlider = () => {
  const containerRef = useRef(null);
  const [items] = useState([
    "live.png",
    "handCrafted.png",
    "mestonix.png",
    "sunShine.png",
    "pure.png",
  ]);

  useEffect(() => {
    const container = containerRef.current;
    const itemWidth = container.children[0].offsetWidth; // width + margin
    const totalWidth = itemWidth * items.length;

    const animation = container.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${totalWidth}px)` },
      ],
      {
        duration: 12000,
        iterations: Infinity,
        easing: "linear",
      }
    );
    return () => animation.cancel();
  }, [items.length]);

  return (
    <div className="container mx-auto p-4 max-w-[1180px] mt-[150px]">
      <div className="mt-[20px]  w-full relative -z-10 overflow-hidden ">
        <div ref={containerRef} className="flex  ">
          {[...items, ...items].map((item, index) => (
            <Image
              className="flex-shrink-0
            flex items-center justify-center "
              key={index}
              src={`/images/carousel/${item}`}
              width={250}
              height={130}
              alt="Picture of the author"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageAutoSlider;
