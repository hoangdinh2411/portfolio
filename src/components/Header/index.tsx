import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 z-20  h-[50px] w-full border-b-[0.5px] border-[rgba(225,225,225,0.2)] bg-black px-2 text-[#E1E1E1] lg:px-0">
      <div className="mx-auto flex  max-w-[1000px] justify-between">
        <article className=" h-full ">
          <Link href="/" title="Home Page" className="flex items-center">
            <Image
              src="/icons/code.svg"
              width={32}
              height={32}
              alt="code icon"
            />
            <h6 className="ml-2 h-full text-lg leading-[50px]">William Dinh</h6>
          </Link>
        </article>
        <input type="checkbox" name="" id="menu" className="lg:hidden" hidden />
        <Navbar />
        <section className="flex h-full w-[60px] items-center justify-end lg:hidden">
          <label htmlFor="menu">
            <Image
              src="/icons/menu.svg"
              width={24}
              height={24}
              alt="menu icon"
              className="cursor-pointer"
            />
          </label>
        </section>
      </div>
    </header>
  );
}
