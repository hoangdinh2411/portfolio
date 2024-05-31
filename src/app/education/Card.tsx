"use client";
import { getTech } from "@/helps/constants";
import Image from "next/image";
import * as React from "react";

export interface ICardProps {
  edu: {
    education: string;
    land: string;
    time: string;
    finish: boolean;
    tech: string[];
  };
}

function Card({ edu }: ICardProps) {
  return (
    <aside className=" card hover:border-1 hover:scale-[1.1, 1.1] mb-10 flex   w-full cursor-pointer flex-col items-start justify-normal overflow-hidden rounded-xl border-[0.5px] border-[rgba(225,225,225,0.2)] p-4 transition-all duration-500 hover:border-[rgba(225,225,225,1)] lg:mb-0">
      <p className="mb-3 text-2xl uppercase text-orange-500">{edu.education}</p>
      <span className="mb-2 text-sm font-extralight">{edu.land}</span>
      <span className="mb-4 text-sm font-extralight">{edu.time}</span>
      <div className=" flex flex-wrap gap-2">
        {edu.tech.map((t) => (
          <span className=" flex items-center justify-center  rounded-full border-[0.5px] border-[rgba(225,225,225,0.2)] px-4 py-2 text-sm font-extralight">
            {t}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default Card;
