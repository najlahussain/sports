import React from 'react'
import { about1} from "@/assets/img/index";
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';

const AboutText = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-20 items-center justify-around'>
      <Image src={about1} alt='about' className='w-[570px] h-[496px] p-10'></Image>
      <div className='p-10'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <h2 className={`${archivo.className} text-white text-[35px] sm:text-[45px] leading-normal`}>Get to know about</h2>
        <h2 className={`${archivo.className} text-[35px] sm:text-[45px] text-[#42FB14] font-[800] leading-normal`}>SPORTS PAVILION</h2>          
        <p className={`${poppins.className} text-white text-[12px] sm:text-[16px] leading-normal text-justify mt-10`}>The Sports Pavilion is a cutting-edge fitness and recreational center that offers something for everyone. It is a destination that combines relaxation, fitness, and entertainment, making it an all-in-one hub for recreation. The Sports Pavilion offers a vast array of facilities, including a gym, salon and spa, skating rink, volleyball area, basketball court, indoor PC and PS4 gaming, soft play area, snooker area, and a bowling alley. Whether you&apos;re looking to unwind, exercise, or have fun, the Sports Pavilion has it all.</p>
      </div> 
    </div>
  )
}

export default AboutText