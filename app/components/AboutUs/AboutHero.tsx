import React, { ReactNode } from "react";
import Image from "next/image";
import { goblin } from '@/app/css/fonts'

import { about_hero } from "@/assets/img/index";

const AboutHero = () => {
  return (
    <div className="">
      <div className="absolute flex flex-row">
        <h1 className={`text-white ${goblin.className} font-bold sm:font-extrabold text-[70px] sm:text-[105px] absolute bg-black p-2 opacity-70 top-44 sm:ml-20 ml-5`}>About</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[380px] sm:h-[634px]">
          <Image src={about_hero} alt="hero"></Image>
        </div>
      </div>
  </div>
  )
}

export default AboutHero;