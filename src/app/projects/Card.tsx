"use client";
import { getTech } from "@/helps/constants";
import { IProject } from "@/types/project.type";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface ICardProps {
  project: IProject;
}

function Card({ project }: ICardProps) {
  return (
    <aside className="card hover:border-1 hover:scale-[1.1, 1.1] mb-4  flex min-h-[350px] w-full cursor-pointer flex-col items-start justify-normal overflow-hidden rounded-xl border-[0.5px] border-[rgba(225,225,225,0.2)] transition-all duration-500 hover:border-[rgba(225,225,225,1)] lg:mb-0">
      <figure className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          title={project.title}
          alt={project.title}
          fill
          sizes="100%"
        />
      </figure>
      <div className="flex flex-col items-start justify-between p-4">
        <h1 className="my-4 flex w-full items-center justify-between text-xl text-orange-400">
          {project.title}
          <Link
            href={project.link || "#"}
            target="_self"
            title={project.title + "Github"}
            className="flex"
          >
            {!project.link ? (
              <span className="text-white line-through decoration-red-600">
                No link available
              </span>
            ) : (
              <Image
                className="cursor-pointer rounded-full bg-gray-200"
                src="/icons/github.png"
                alt={project.title + "Github"}
                width={24}
                height={24}
              />
            )}
          </Link>
        </h1>
        <p className="text-md mb-4">{project.description}</p>
      </div>
      <div className=" mt-auto flex p-4">
        {project.tech.map((t) => {
          const techInfo = getTech(t);
          if (!techInfo) return null;
          return (
            <Image
              src={techInfo.imageUrl}
              alt={techInfo.title}
              title={techInfo?.title}
              width={50}
              height={50}
              className="mr-4 rounded-sm"
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Card;
