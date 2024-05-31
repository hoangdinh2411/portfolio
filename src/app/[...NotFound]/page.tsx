import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-full w-full flex-col  items-center justify-center ">
      <h1 className="mb-20 text-center text-6xl">404 - Page Not Found</h1>
      <Link href={"/"} className="text-3xl text-orange-400 underline">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
