import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { hero, hero_text, hero_button, arrow, Facebook, Twitter, LinkedIn, Instagram } from "@/assets/img/index";

const Hero = () => {
  return (
    <div className="">
      <div className="absolute flex flex-row h-[634px]">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2 pl-12 pt-10">
            <Link href="https://www.twitter.com"><Image src = {Twitter} alt='twitter'></Image></Link>
            <Link href="https://www.facebook.com"><Image src = {Facebook} alt='facebook'></Image></Link>
            <Link href="https://www.linkedin.com"><Image src = {LinkedIn} alt='linkedin'></Image></Link>
            <Link href="https://www.instagram.com"><Image src = {Instagram} alt='instagram'></Image></Link>
          </div>
          <p className="text-white mb-20 -rotate-90">0348-8801548</p>
        </div>
        <div className="">
          <Image src={hero_text} alt = "hero_text" className="mt-28 ml-10 w-[265px] h-[100px]"></ Image>
          <h1 className="text-white font-extrabold text-[105px] ml-20">
          SPORTS</h1>
          <h1 className="text-white font-extrabold text-[105px] ml-20 -mt-14">
          PAVILION</h1>
          <div className="ml-72">
            <Image src={hero_button} alt="hero button" className="bg-transparent"></Image>
            <Link href='/about'><Image src={arrow} alt="arrow" className="-mt-24 ml-8 rotate"></Image></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-[947px] h-[634px]">
          <Image src={hero} alt="hero"></Image>
        </div>
      </div>
  </div>
  )
}

export default Hero;