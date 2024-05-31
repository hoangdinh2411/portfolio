import { educations } from "@/helps/constants";
import Card from "./Card";

export default function Education() {
  return (
    <section className="flex h-full w-full flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Education</h1>
      <article className="cards grid grid-cols-1 gap-10">
        {educations.map((edu) => (
          <Card edu={edu} />
        ))}
      </article>
    </section>
  );
}
