import Stepper from "@/components/Stepper";
import Card from "./Card";
import { experiences } from "@/helps/constants";
import { Metadata } from "next";

export default function Experience() {
  const steppers = experiences.map((experience) => ({
    card: <Card experience={experience} />,
    active: experience.finish,
  }));

  return (
    <section className="flex  size-full flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Experience</h1>
      <article className="  ">
        <Stepper steppers={steppers} />
      </article>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Experience",
  description: "This is the experiences I have worked through.",
};
