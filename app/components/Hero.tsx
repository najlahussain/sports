import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { goblin } from '@/app/css/fonts'

import { hero, hero_text, hero_button, arrow, Facebook, tiktok, LinkedIn, Instagram } from "@/assets/img/index";

const Hero = () => {
  return (
    <div className="">
      <div className="absolute flex flex-row h-[634px]">
        {/* social media links and mobile number */}
        <div className="flex flex-col sm:justify-between justify-end bg-black">
          <div className="hidden sm:flex flex-col gap-2 pl-12 pt-10">
            <Link href="https://www.tiktok.com/@hsg_ladiessalon?_t=8jiBTFsMK4g&_r=1" className="w-[20px] h-[20px] invert"><Image src = {tiktok} alt='tiktok'></Image></Link>
            <Link href="https://www.facebook.com/citywalkfoodpark?mibextid=dGKdO6"><Image src = {Facebook} alt='facebook'></Image></Link>
            <Link href="https://www.linkedin.com/company/sports-pavilion-rawalpindi/"><Image src = {LinkedIn} alt='linkedin'></Image></Link>
            <Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA=="><Image src = {Instagram} alt='instagram'></Image></Link>
          </div>
          <p className="text-white text-xs whitespace-nowrap  mb-72 sm:mb-20 -rotate-90">0348-8801548</p>
        </div>
        <div className="">
          {/* text ALL IN ONE */}
          <Image src={hero_text} alt = "hero_text" className="sm:mt-28 -ml-10 sm:ml-10 sm:w-[265px] w-[180px] h-[100px] sm:h-[100px]"></ Image>
          <div className={goblin.className}>
            <h1 className='text-white font-bold sm:font-extrabold text-[70px] sm:text-[105px] sm:ml-20 ml-5'>
            SPORTS</h1>
            <h1 className="text-white font-bold sm:font-extrabold text-[70px] sm:text-[105px] sm:ml-20 ml-5 -mt-7 sm:-mt-14">
            PAVILION</h1>
          </div>
          <div className="ml-[310px] w-20 sm:w-auto">
            <Image src={hero_button} alt="hero button" className="bg-transparent"></Image>
            <Link href='/about'><Image src={arrow} alt="arrow" className="-mt-16  sm:-mt-24 ml-3 sm:ml-8 rotate"></Image></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex w-auto sm:w-[947px] h-[380px] sm:h-[634px]">
          <Image src={hero} alt="hero"></Image>
        </div>
      </div>
  </div>
  )
}

export default Hero;