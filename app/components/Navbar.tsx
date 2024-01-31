import React from "react";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/assets/img/index";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between">
      <ul className="flex list-disc gap-20 items-center pl-10">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/events">Events</Link></li>
      </ul>
      <div className="w-[230px] h-[131px]">
        <Image src={logo} alt="logo"></Image>
      </div>
      <ul className="flex list-disc gap-20 items-center pr-10">
        <li><Link href="/membership">Membership</Link></li>
        <li><Link href="/salon">Salon</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
