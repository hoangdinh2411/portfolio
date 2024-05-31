import { projects } from "@/helps/constants";
import Card from "./Card";
import { Metadata } from "next";

export default function Projects() {
  return (
    <section className="flex size-full flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Projects</h1>
      <article className=" cards grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} project={p} />
        ))}
      </article>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "This is the experiences I have did in the past.",
};
