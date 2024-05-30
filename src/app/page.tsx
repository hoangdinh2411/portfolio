import Link from "next/link";
import InfiniteAutoCarousel from "./components/InfiniteAutoCarousel";
import Image from "next/image";
import { filterLogos, logos } from "./helps/constants";



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
    <section className="h-full flex items-center  lg:justify-between justify-center overflow-hidden flex-wrap">
      <article className="lg:mr-auto  ">
        <h1 className="text-6xl uppercase mb-10 typewriter">William Dinh</h1>
        <p className="text-lg md:w-[500px]   w-full  ">
          I'm{" "}
          <b className="uppercase text-xl  text-orange-400 ">
            {" "}
            a software engineer
          </b>{" "}
          who loves to build web applications. I have experience building modern
          , scalable and maintainable web applications using ReactJs, NextJs and
          building RESTful APIs using NestJs , ExpressJs and MongoDB.
        </p>
        <div className="flex mt-4 ">
          {links.map((link, index) => (
            <Link
              href={link.url}
              title={link.title}
              target="_self"
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
      <aside className="overflow-hidden rounded-sm  w-full lg:w-fit">
        <InfiniteAutoCarousel options={filterLogos()} width={350} />
      </aside>
    </section>
  );
}
