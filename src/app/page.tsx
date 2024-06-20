import Link from "next/link";
import InfiniteAutoCarousel from "../components/InfiniteAutoCarousel";
import Image from "next/image";
import { filterLogos } from "../helps/constants";
import { Metadata } from "next";

const links = [
  {
    title: "Github",
    url: "https://github.com/hoangdinh2411",
    icon: "/icons/github.svg",
  },
  {
    title: "Gitlab",
    url: "https://gitlab.com/hoangdinh2411",
    icon: "/icons/gitlab.svg",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/williamdinh2411/",
    icon: "/icons/linkedin.svg",
  },
];
export default function Home() {
  return (
    <section className="flex h-full flex-wrap  items-center justify-center overflow-hidden lg:justify-between">
      <article className="lg:mr-auto  ">
        <h1 className="typewriter mb-10 text-6xl uppercase">William Dinh</h1>
        <p className="w-full text-lg   md:w-[500px]  ">
          I&apos;m
          <b className="text-xl uppercase  text-orange-400 ">
            a software engineer
          </b>
          who loves to build web applications. I have experience building modern
          , scalable and maintainable web applications using ReactJs, NextJs and
          building RESTful APIs using NestJs , ExpressJs and MongoDB.
        </p>
        <div className="mt-4 flex ">
          {links.map((link, index) => (
            <Link
              key={link.title}
              href={link.url}
              title={link.title}
              target="_blank"
              className="mx-2"
            >
              <Image
                src={link.icon}
                width={24}
                height={24}
                alt={link.title}
                key={index}
              />
            </Link>
          ))}
        </div>
      </article>
      <aside className="w-full overflow-hidden  rounded-sm lg:w-fit">
        <InfiniteAutoCarousel options={filterLogos()} width={350} />
      </aside>
    </section>
  );
}

export const metadata: Metadata = {
  title: "William Dinh Software Engineer",
  description:
    "This is the homepage of William Dinh who is a software engineer.",
};
