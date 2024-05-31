import { Metadata } from "next";
import Link from "next/link";

function NotFound() {
  return (
    <section className="flex size-full flex-col  items-center justify-center ">
      <h1 className="mb-20 text-center text-6xl">404 - Page Not Found</h1>
      <Link href={"/"} className="text-3xl text-orange-400 underline">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;

export const metadata: Metadata = {
  title: "Not Found 404",
  description: "Not Found page",
};
