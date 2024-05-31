"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const menuItems = [
  {
    name: "Skills",
    link: "/skills",
    icon: "/icons/skills.svg",
  },
  {
    name: "Projects",
    link: "/projects",
    icon: "/icons/projects.svg",
  },
  {
    name: "Experience",
    link: "/experience",
    icon: "/icons/experience.svg",
  },
  {
    name: "Education",
    link: "/education",
    icon: "/icons/education.svg",
  },
  {
    name: "Resume",
    link: "/resume",
    icon: "/icons/resume.svg",
  },
  {
    name: "Contact",
    link: "/contact",
    icon: "/icons/contact.svg",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    const menuCheckbox = document.getElementById("menu") as HTMLInputElement;
    if (menuCheckbox.checked) {
      menuCheckbox.checked = false;
    }

    function hideMenuWhenResizePage() {
      if (window.innerWidth < 1000) {
        if (menuCheckbox.checked) {
          menuCheckbox.checked = false;
        }
      }
    }
    window.addEventListener("resize", (e) => {
      hideMenuWhenResizePage();
    });
    return () => {
      window.removeEventListener("resize", (e) => {
        hideMenuWhenResizePage();
      });
    };
  }, [pathname]);
  return (
    <nav
      id="navbar"
      className=" absolute right-0 top-full z-20 hidden flex-1 border-[0.5px] border-[rgba(225,225,225,0.2)] bg-black lg:relative lg:top-0 lg:block lg:border-none lg:bg-inherit"
    >
      <ul className=" block h-full items-center justify-center lg:flex">
        {menuItems.map((item) => (
          <li key={item.name} className="h-full font-medium  ">
            <Link
              className={`flex h-full items-center justify-start px-4 py-2 hover:bg-[#1E1E1E] lg:justify-between ${
                pathname === item.link ? "bg-[#1E1E1E]" : ""
              }`}
              href={item.link}
            >
              <Image
                src={item.icon}
                width={18}
                height={18}
                alt={item.name}
                className="mr-4 cursor-pointer"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
