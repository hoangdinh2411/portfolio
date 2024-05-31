import { Metadata } from "next";
import Link from "next/link";
import * as React from "react";

function Resume() {
  return (
    <section className="flex size-full flex-col  items-center justify-start">
      <h1 className="mb-20 text-center text-6xl">My Resume</h1>
      <Link
        className="flex items-center justify-center rounded-full border-[0.5px]  border-[rgba(225,225,225,0.2)] px-4 py-2  text-sm font-extralight transition-all duration-300 hover:border-2 hover:border-orange-400 hover:text-orange-400"
        href={"/pdf/Resume-William-Đinh.pdf"}
        target="_blank"
      >
        Download Resume
      </Link>
    </section>
  );
}

export default Resume;

export const metadata: Metadata = {
  title: "Resume",
  description:
    "This is my resume. Download it if you want to know more about me.",
};
