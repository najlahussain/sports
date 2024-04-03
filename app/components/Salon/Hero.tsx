import React from 'react'
import Image from 'next/image'
import { goblin } from '@/app/css/fonts'
import { SalonData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const Hero = ({data}:{data:SalonData[]}) => {
  return (
    <div className="">
      <div className="absolute p-16 sm:p-52">
        <h1 className = {`text-white ${goblin.className} font-bold sm:font-extrabold sm:text-7xl text-4xl w-[350px] sm:w-[903px] sm:h-[115px] rounded-full flex items-center justify-center text-center bg-black opacity-80`}>Hair She Goes</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[280px] sm:h-[634px]">
          <Image src={urlForImage(data[0].image)} alt="hero" width={200} height={200} className="w-full h-[280px] sm:h-[634px]"></Image>
        </div>
      </div>
    </div>
  )
}

export default Hero