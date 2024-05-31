import { Metadata } from "next";
import * as React from "react";

function Contact() {
  return (
    <section className="flex size-full flex-col  items-center justify-start">
      <h1 className="mb-20 text-center text-6xl">Contact</h1>
      <p className="mb-4 text-center text-3xl">You can reach out to me at </p>
      <article className="grid grid-cols-2">
        <div>
          <p className="text-orange-400">Email:</p>
          <p className="text-orange-400"> Phone: </p>
        </div>
        <div>
          <p>hoangdinh2411@gmail.com</p>
          <p>+46729154846</p>
        </div>
      </article>
    </section>
  );
}

export default Contact;

export const metadata: Metadata = {
  title: "Contact",
  description: "This is the contact page where you can reach out to me.",
};
