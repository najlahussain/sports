import React from 'react'
import {archivo, goblin, poppins, jakarta} from "@/app/css/fonts"
import Image from 'next/image'
import { testimonial, testimonial_bg } from "@/assets/img/index";
import { AboutData } from '@/app/constants';

async function AboutReviews ({data}:{data:AboutData[]}) {
  return (
    <div>
      <div className='text-center mt-10 md:mt-20 lg:mt-40'>
        <h1 className={`${archivo.className} font-bold text-4xl sm:text-6xl text-white`}>REVIEWS</h1>
        <p className={`${goblin.className} font-bold text-xl sm:text-3xl text-[#42FB14] mt-5`}>WHAT YOU THINK ABOUT US</p>
      </div>
      <div style={{background: `url(${testimonial_bg})`}} className='w-full h-[502px] bg-cover bg-no-repeat'>
      <div className='flex flex-col sm:flex-row items-center gap-10 sm:gap-20 mt-10 md:m-20 lg:m-40'>
        <Image src={testimonial} alt='testimonial' className='w-[256px] h-[256px]'></Image>
        <div className=''>
          <p className={`${poppins.className} text-white font-light text-lg sm:text-2xl text-justify sm:px-0 px-5`}>{data[0].reviews}</p>
          <div className='mt-10 flex ml-5 sm:ml-0 gap-5 sm:gap-10'>
            <p className={`${jakarta.className} font-bold text-xl text-white`}>{data[0].customer}</p>
            <p className={`${goblin.className} font-bold text-xl text-[#42FB14]`}>CUSTOMER</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutReviews