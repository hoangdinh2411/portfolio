import Stepper from "@/components/Stepper";
import Card from "./Card";
import { experiences } from "@/helps/constants";

export default function Experience() {
  const steppers = experiences.map((experience) => ({
    card: <Card experience={experience} />,
    active: experience.finish,
  }));

  return (
    <section className="flex h-full w-full flex-col  justify-start ">
      <h1 className="mb-20 text-center text-6xl">Experience</h1>
      <article className="  ">
        <Stepper steppers={steppers} />
      </article>
    </section>
  );
}
