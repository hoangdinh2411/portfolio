import * as React from "react";
import "./style.css";

interface StepperProps {
  steppers: {
    card: React.ReactNode;
    active: boolean;
  }[];
}

function Stepper({ steppers }: StepperProps) {
  return (
    <ol className="stepper cards">
      {steppers.map(({ card, active }) => (
        <li className={`${active ? "active" : ""} card`}>{card}</li>
      ))}
    </ol>
  );
}

export default Stepper;
