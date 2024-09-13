'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";

import { logo, menu, close} from "@/assets/img/index";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="text-white flex justify-around lg:w-auto">
      <ul className="hidden md:flex list-disc md:gap-16 lg:gap-32 items-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/events">Events</Link></li>
      </ul>
      <div className="w-[130px] lg:w-40 h-[100px] lg:h-[131px]">
        <Image src={logo} alt="logo"></Image>
      </div>
      <ul className="hidden md:flex list-disc md:gap-16 lg:gap-32 items-center">
        <li><Link href="/membership">Membership</Link></li>
        <li><Link href="/salon">Salon</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      {/* burger menu */}
      <div className="md:hidden flex flex-1 justify-end items-center ">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          ></Image>
          
          <div
            className={`${!toggle ? "hidden" : "flex"} 
              p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } font-poppins text-[16px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`/${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          </div>
          </div>
    </div>
  );
};

export default Navbar;
