import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <div className="fixed left-0 top-0 size-full  overflow-y-auto">
          <Header />
          <main className="mx-auto w-full  max-w-[1000px] px-2 py-[200px] lg:px-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | William Dinh - Software Engineer",
    default: "William Dinh - Software Engineer",
  },
};
