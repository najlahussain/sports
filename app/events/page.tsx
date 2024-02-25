'use client';

import React from 'react'
import Image from 'next/image'
import { event_image } from "@/assets/img/index"
import { useRouter } from 'next/navigation';
import { Plus_Jakarta_Sans, Archivo_Black, Poppins } from 'next/font/google';

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

const Events = () => {
  const router = useRouter();
  return (
    <div className='text-white flex sm:flex-row flex-col gap-16 mt-60'>
      <div className='flex flex-col items-center sm:items-start justify-center'>
        <div>
          <div className='border-8 border-white w-[400px] sm:w-[668px] h-[400px] sm:h-[704px] rotate-12 ml-12 absolute'></div>
          <div className='border-8 border-white w-[400px] sm:w-[670px] h-[400px] sm:h-[700px] flex-shrink-0 ml-8'></div>
          <div>
            <Image src={event_image} alt='about image' className='w-[300px] sm:w-[636px] h-[300px] sm:h-[636px] flex-shrink-0 ml-24 -mt-[670px] z-10'></Image>
          </div>
        </div>
        {/* <div className='hidden sm:flex bg-[#42FB14] w-[56px] h-[56px] rounded-full'></div> */}
      </div>
      <div className='flex flex-col sm:py-20 mt-72'>
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
          <p className='text-[12px] sm:text-[16px] leading-normal text-justify'>The Sports Pavilion is a cutting-edge fitness and recreational center that offers something for everyone. It is a destination that combines relaxation, fitness, and entertainment, making it an all-in-one hub for recreation. The Sports Pavilion offers a vast array of facilities, including a gym, salon and spa, skating rink, volleyball area, basketball court, indoor PC and PS4 gaming, soft play area, snooker area, and a bowling alley. Whether you&apos;re looking to unwind, exercise, or have fun, the Sports Pavilion has it all.</p>
        </div>
        <button type = 'button' 
          onClick={() => router.push('/about')}
          className='w-[140px] sm:w-[187px] h-[30px] text-sm sm:text-lg sm:h-[57px] text-black font-bold bg-[#42FB14] mt-5 rounded-md'>Discover More</button>
      </div>
    </div>
  )
}

export default Events