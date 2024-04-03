import React from "react";
import Image from "next/image";
import { goblin } from '@/app/css/fonts'
import { urlForImage } from "@/sanity/lib/image";
import { AboutData } from "@/app/constants";

const AboutHero = ({data}:{data:AboutData[]}) => {
  return (
    <div className="">
      <div className="absolute flex flex-row">
        <h1 className={`text-white ${goblin.className} font-bold sm:font-extrabold text-4xl sm:text-7xl sm:text-[105px] absolute bg-black p-2 opacity-70 top-20 sm:top-44 sm:ml-20 ml-5`}>About</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[300px] sm:h-[634px]">
          <Image src={urlForImage(data[0].image)} alt='about image' width={300} height={300} className="w-full h-[300px] sm:h-[634px]"></Image>
        </div>
      </div>
  </div>
  )
}

export default AboutHero;