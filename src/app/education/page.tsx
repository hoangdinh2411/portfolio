import { educations } from "@/helps/constants";
import Card from "./Card";
import { Metadata } from "next";

export default function Education() {
  return (
    <section className="flex  flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Education</h1>
      <article className="cards grid grid-cols-1 gap-10">
        {educations.map((edu) => (
          <Card key={edu.education} edu={edu} />
        ))}
      </article>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Education",
  description: "This is the educations I have been through.",
};
