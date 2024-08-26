"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`flex justify-between items-center w-full h-20 px-4 text-white bg-white dark:bg-black fixed nav ${
        visible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300`}
    >
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-3xl font-signature ml-2 text-black dark:text-white">
          <a
            className="link-underline link-underline-black dark:link-underline-white"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>

      <ul className="md:flex-row flex-row flex items-center">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-700 dark:text-gray-300 hover:scale-105 hover:text-black dark:hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
        <li className="pl-4 dark:text-white text-black">
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
