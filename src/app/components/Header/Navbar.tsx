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
    link: "/Resume",
    icon: "/icons/resume.svg",
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
      className=" hidden lg:block flex-1 absolute lg:relative top-full lg:top-0 right-0 z-20 bg-black lg:bg-inherit lg:border-none border-[0.5px] border-[rgba(225,225,225,0.2)]"
    >
      <ul className=" block lg:flex justify-center items-center h-full">
        {menuItems.map((item) => (
          <li key={item.name} className="h-full font-medium  ">
            <Link
              className={`flex justify-start lg:justify-between items-center hover:bg-[#1E1E1E] h-full px-4 py-2 ${
                pathname === item.link ? "bg-[#1E1E1E]" : ""
              }`}
              href={item.link}
            >
              <Image
                src={item.icon}
                width={18}
                height={18}
                alt={item.name}
                className="cursor-pointer mr-4"
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
