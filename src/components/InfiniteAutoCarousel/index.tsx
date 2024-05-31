import React from "react";
import "./style.css";
import Image from "next/image";
type Option = {
  imageUrl: string;
  title: string;
};
type Props = {
  options: Option[];
  width?: number;
};

export default function InfiniteAutoCarousel({ options, width }: Props) {
  return (
    <div
      className={`slider `}
      style={{
        width: width ? `${width}px` : "100%",
      }}
    >
      <div className="slide-track">
        {options.map((option, index) => (
          <div key={index} className="slide">
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={150}
              height={150}
              title={option.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
