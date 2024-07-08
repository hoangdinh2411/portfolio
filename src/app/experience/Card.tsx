"use client";
import { getTech } from "@/helps/constants";
import Image from "next/image";
import * as React from "react";

export interface ICardProps {
  experience: {
    position: string;
    company: string;
    date: string;
    finish: boolean;
    description: string;
    tech: string[];
  };
}

function Card({ experience }: ICardProps) {
  return (
    <aside className="card flex w-full cursor-pointer   flex-col items-start justify-normal overflow-hidden rounded-xl border-[0.5px] border-[rgba(225,225,225,0.2)] p-4 transition-all duration-500  hover:border-2 hover:border-[rgba(225,225,225,1)] lg:mb-0">
      <p className="mb-3 text-2xl uppercase">{experience.position}</p>
      <span className="mb-2 text-sm font-extralight">{experience.company}</span>
      <span className="mb-2 text-sm font-extralight">{experience.date}</span>
      <p className="mb-4 text-sm font-extralight">
        {experience.description.split(". ").map((d) => (
          <span>
            - {d}
            <br />
          </span>
        ))}
      </p>
      <div className=" flex">
        {experience.tech.map((t) => {
          const techInfo = getTech(t);
          if (!techInfo) return null;
          return (
            <Image
              key={t}
              src={techInfo.imageUrl}
              alt={techInfo.title}
              title={techInfo?.title}
              width={32}
              height={32}
              className="mr-4 rounded-sm"
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Card;
