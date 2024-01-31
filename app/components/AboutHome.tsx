'use client';

import React from 'react'
import Image from 'next/image'
import { about } from "@/assets/img/index"
import { useRouter } from 'next/navigation';

const AboutHome = () => {
  const router = useRouter();
  return (
    <div className='text-white flex gap-16 mt-40'>
      <div className='flex flex-col'>
        <div>
          <div className='border-4 border-[#42FB14] rounded-full w-[600px] h-[600px] flex-shrink-0'></div>
          <div>
            <Image src={about} alt='about image' className='rounded-full w-[600px] h-[600px] flex-shrink-0 -mt-[600px] ml-10'></Image>
          </div>
        </div>
        <div className='bg-[#42FB14] w-[56px] h-[56px] rounded-full'></div>
      </div>
      <div className='flex flex-col py-20'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <p className='text-[20px] font-[500] leading-normal mt-5'>ABOUT SPORTS PAVILLION</p>
        <h2 className='text-[45px] font-[800] leading-normal'>We&apos;re Top Notch & Best</h2>
        <h2 className='text-[45px] text-[#42FB14] font-[800] leading-normal'>FITNESS AND RECREATIONAL</h2>
        <h2 className='text-[45px] font-[800] leading-normal'>CENTER</h2>
        <p className='text-[16px] font-[500] leading-normal'>The Sports Pavilion is a cutting-edge fitness and recreational center that offers something for everyone. It is a destination that combines relaxation, fitness, and entertainment, making it an all-in-one hub for recreation. The Sports Pavilion offers a vast array of facilities, including a gym, salon and spa, skating rink, volleyball area, basketball court, indoor PC and PS4 gaming, soft play area, snooker area, and a bowling alley. Whether you&apos;re looking to unwind, exercise, or have fun, the Sports Pavilion has it all.</p>
        <button type = 'button' 
          onClick={() => router.push('/about')}
          className='w-[187px] h-[57px] text-black font-bold bg-[#42FB14] mt-5 rounded-md'>Discover More</button>
      </div>
    </div>
  )
}

export default AboutHome