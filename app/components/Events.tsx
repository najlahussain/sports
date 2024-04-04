'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { poppins, jakarta, archivo } from '../css/fonts';
import { urlForImage } from "@/sanity/lib/image";
import { SanityData } from '@/app/constants'

export default function Events({ image, description } : SanityData) {
  const router = useRouter();
  return (
    <div className='text-white flex sm:flex-row flex-col sm:gap-16 mt-20 sm:mt-60'>
      <div className='flex flex-col items-center sm:items-start justify-center'>
        <div>
          <div className='border-8 border-white w-[300px] sm:w-[668px] h-[300px] sm:h-[704px] rotate-12 ml-12 absolute'></div>
          <div className='border-8 border-white w-[300px] sm:w-[670px] h-[300px] sm:h-[700px] flex-shrink-0 ml-8'></div>
          <div>
            <Image src={urlForImage(image)} alt='events image' width={200} height={200} className='w-[300px] sm:w-[636px] h-[300px] sm:h-[636px] flex-shrink-0 ml-14 -mt-[280px] sm:-mt-[670px] z-10'></Image>
          </div>
        </div>
        {/* <div className='hidden sm:flex bg-[#42FB14] w-[56px] h-[56px] rounded-full'></div> */}
      </div>
      <div className='flex flex-col sm:px-0 px-10 sm:py-20 mt-20 sm:mt-72'>
        <div className='flex items-center gap-3'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <div className={jakarta.className}>
          <p className='text-[15px] sm:text-[20px] leading-normal'>WHAT WE&apos;RE OFFERING</p>
        </div>
        </div>
        <div className={archivo.className}>
          <h2 className='text-[35px] sm:text-[45px] text-[#42FB14] font-[800] leading-normal'>EVENTS
          <span className='text-white'>&nbsp;ORGANIZED</span></h2>
        </div>
        <div className={poppins.className}>
          <p className='text-lg sm:text-[16px] leading-normal text-justify'>
            {description}
          </p>
        </div>
        <button type = 'button' 
          onClick={() => router.push('/events1')}
          className='w-[140px] sm:w-[187px] h-[40px] text-sm sm:text-lg sm:h-[57px] text-black font-bold bg-[#42FB14] mt-5 rounded-md'>Discover More</button>
      </div>
    </div>
  )
}
