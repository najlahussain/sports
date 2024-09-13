import React from "react";
import Image from "next/image";
import { goblin } from '@/app/css/fonts'
import { urlForImage } from "@/sanity/lib/image";
import { AboutData } from "@/app/constants";

const AboutHero = ({data}:{data:AboutData[]}) => {
  return (
    <div className="">
      <div className="absolute flex flex-row">
        <h1 className={`text-white ${goblin.className} font-bold lg:font-extrabold text-4xl md:text-5xl lg:text-7xl absolute bg-black p-2 opacity-70 top-20 sm:top-44 sm:ml-20 ml-5`}>About</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[300px] md:h-[28rem] lg:h-[32rem]">
          <Image src={urlForImage(data[0].image)} alt='about image' width={300} height={300} className="w-full h-[300px] md:h-[28rem] lg:h-[32rem]"></Image>
        </div>
      </div>
  </div>
  )
}

export default AboutHero;