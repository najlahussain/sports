'use client';

import React from 'react'
import Image from 'next/image'
import { about } from "@/assets/img/index"
import { useRouter } from 'next/navigation';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Archivo_Black } from 'next/font/google';
import { Poppins } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  weight : "500",
  subsets : ["latin"]
})

const archivo = Archivo_Black({
  weight : "400",
  subsets : ["latin"]
})

const poppins = Poppins({
  weight : "500",
  subsets : ["latin"]
})

const AboutHome = () => {
  const router = useRouter();
  return (
    <div className='text-white flex sm:flex-row flex-col gap-16 mt-40'>
      <div className='flex flex-col items-center sm:items-start justify-center'>
        <div>
          <div className='border-4 border-white rounded-full w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] flex-shrink-0'></div>
          <div>
            <Image src={about} alt='about image' className='rounded-full w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] flex-shrink-0 -mt-[400px] sm:-mt-[600px] ml-10'></Image>
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
          <p className='text-[12px] sm:text-[16px] leading-normal text-justify'>The Sports Pavilion is a cutting-edge fitness and recreational center that offers something for everyone. It is a destination that combines relaxation, fitness, and entertainment, making it an all-in-one hub for recreation. The Sports Pavilion offers a vast array of facilities, including a gym, salon and spa, skating rink, volleyball area, basketball court, indoor PC and PS4 gaming, soft play area, snooker area, and a bowling alley. Whether you&apos;re looking to unwind, exercise, or have fun, the Sports Pavilion has it all.</p>
        </div>
        <button type = 'button' 
          onClick={() => router.push('/about')}
          className='w-[140px] sm:w-[187px] h-[30px] text-sm sm:text-lg sm:h-[57px] text-black font-bold bg-[#42FB14] mt-5 rounded-md'>Discover More</button>
      </div>
    </div>
  )
}

export default AboutHome