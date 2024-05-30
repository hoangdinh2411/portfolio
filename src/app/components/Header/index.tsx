import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="text-[#E1E1E1] h-[50px] bg-black  z-20 border-b-[0.5px] border-[rgba(225,225,225,0.2)] fixed top-0 w-full px-2 lg:px-0">
      <div className="max-w-[1000px] ml-auto mr-auto w-full flex justify-between h-full">
        <article className=" h-full ">
          <Link href="/" title="Home Page" className="flex items-center">
            <Image
              src="/icons/code.svg"
              width={32}
              height={32}
              alt="code icon"
            />
            <h6 className="h-full leading-[50px] ml-2 text-lg">William Dinh</h6>
          </Link>
        </article>
        <input type="checkbox" name="" id="menu" className="lg:hidden" hidden />
        <Navbar />
        <section className="h-full flex items-center w-[60px] justify-end">
          <Image
            src="/icons/search.svg"
            width={24}
            height={24}
            alt="search icon"
            className="cursor-pointer"
          />
          <label htmlFor="menu" className="lg:hidden">
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
