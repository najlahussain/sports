'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { archivo, jakarta, poppins } from '@/app/css/fonts';
import { SanityData } from "../constants";
import { urlForImage } from "@/sanity/lib/image";

const AboutHome = ({data}:{data:SanityData[]}) => {
  const router = useRouter();
  return (
    <div className='text-white flex lg:flex-row flex-col gap-16 mt-20 lg:mt-40'>
      <div className='flex flex-col items-center lg:items-start justify-center'>
        <div>
          <div className='border-4 border-white rounded-full size-72 sm:size-[32rem] flex-shrink-0'></div>
          <div>
            <Image src={urlForImage(data[0].image)} alt='about image' width={200} height={200} className='rounded-full  flex-shrink-0 size-72 sm:size-[32rem] -mt-72 sm:-mt-[32rem] ml-10'></Image>
          </div>
        </div>
        <div className='hidden lg:flex bg-[#42FB14] size-12 rounded-full'></div>
      </div>
      <div className='flex flex-col sm:py-20 justify-center'>
        <div className='bg-[#42FB14] size-2 rounded-full'></div>
        <div className={jakarta.className}>
          <p className='text-lg sm:text-xl leading-normal mt-2 sm:mt-5'>ABOUT SPORTS PAVILION</p>
        </div>
        <div className={archivo.className}>
          <h2 className='text-2xl sm:text-4xl leading-normal'>We&apos;re Top Notch & Best</h2>
          <h2 className='text-2xl sm:text-4xl text-[#42FB14] font-[800] leading-normal'>FITNESS AND RECREATIONAL</h2>
          <h2 className='text-2xl sm:text-4xl leading-normal'>CENTER</h2>
        </div>
        <div className={poppins.className}>
          <p className='text-md sm:text-xl leading-normal text-justify'>
            {data[0].description}</p>
        </div>
        <button type = 'button' 
          onClick={() => router.push('/about')}
          className='w-[140px] sm:w-[187px] h-[40px] text-sm sm:text-lg sm:h-[57px] text-black font-bold bg-[#42FB14] mt-5 rounded-md'>Discover More</button>
      </div>
    </div>
  )
}

export default AboutHome