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
    <div className='text-white flex sm:flex-row flex-col gap-16 mt-20 sm:mt-40'>
      <div className='flex flex-col items-center sm:items-start justify-center'>
        <div>
          <div className='border-4 border-white rounded-full w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] flex-shrink-0'></div>
          <div>
            <Image src={urlForImage(data[0].image)} alt='about image' width={200} height={200} className='rounded-full w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] flex-shrink-0 -mt-[400px] sm:-mt-[600px] ml-10'></Image>
          </div>
        </div>
        <div className='hidden sm:flex bg-[#42FB14] w-[56px] h-[56px] rounded-full'></div>
      </div>
      <div className='flex flex-col sm:py-20'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <div className={jakarta.className}>
          <p className='text-[15px] sm:text-[20px] leading-normal mt-2 sm:mt-5'>ABOUT SPORTS PAVILION</p>
        </div>
        <div className={archivo.className}>
          <h2 className='text-[35px] sm:text-[45px] leading-normal'>We&apos;re Top Notch & Best</h2>
          <h2 className='text-[35px] sm:text-[45px] text-[#42FB14] font-[800] leading-normal'>FITNESS AND RECREATIONAL</h2>
          <h2 className='text-[35px] sm:text-[45px] leading-normal'>CENTER</h2>
        </div>
        <div className={poppins.className}>
          <p className='text-lg sm:text-[16px] leading-normal text-justify'>
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