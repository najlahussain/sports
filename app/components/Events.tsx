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
    <div className='text-white flex sm:flex-row flex-col sm:gap-16 mt-20 sm:mt-56'>
      <div className='flex flex-col items-center sm:items-start justify-center'>
        <div>
          <div className='border-8 border-white size-72 sm:size-[32rem] rotate-12 ml-8 absolute'></div>
          <div className='border-8 border-white size-72 sm:size-[32rem] flex-shrink-0 ml-4'></div>
          <div>
            <Image src={urlForImage(image)} alt='events image' width={200} height={200} className='size-72 sm:size-[32rem] flex-shrink-0 ml-10 -mt-[280px] sm:-mt-[30rem] z-10'></Image>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:px-0 px-10 sm:py-20 mt-20 sm:mt-72'>
        <div className='flex items-center gap-3'>
        <div className='bg-[#42FB14] size-2 rounded-full'></div>
        <div className={jakarta.className}>
          <p className='text-lg sm:text-xl leading-normal'>WHAT WE&apos;RE OFFERING</p>
        </div>
        </div>
        <div className={archivo.className}>
          <h2 className='text-2xl sm:text-4xl text-[#42FB14] font-[800] leading-normal'>EVENTS
          <span className='text-white'>&nbsp;ORGANIZED</span></h2>
        </div>
        <div className={poppins.className}>
          <p className='text-md sm:xl leading-normal text-justify'>
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
