import React from 'react'
import {archivo, goblin, poppins, jakarta} from "@/app/css/fonts"
import Image from 'next/image'
import { testimonial, testimonial_bg } from "@/assets/img/index";

const AboutReviews = () => {
  return (
    <div>
      <div className='text-center mt-40'>
        <h1 className={`${archivo.className} font-bold text-6xl text-white`}>REVIEWS</h1>
        <p className={`${goblin.className} font-bold text-3xl text-[#42FB14] mt-5`}>WHAT YOU THINK ABOUT US</p>
      </div>
      <div style={{background: `url(${testimonial_bg})`}} className='w-full h-[502px] bg-cover bg-no-repeat'>
      <div className='flex flex-row items-center gap-20 m-40'>
        <Image src={testimonial} alt='testimonial' className='w-[256px] h-[256px]'></Image>
        <div className=''>
          <p className={`${poppins.className} text-white font-light text-2xl`}>Good place for indoor sports like bowling, table tennis,boxing, badminton and board games. An arm band is usually required however do check with the ticket counter which games are included in the band</p>
          <div className='mt-10 flex gap-10'>
            <p className={`${jakarta.className} font-bold text-xl text-white`}>ANAM FATIMA</p>
            <p className={`${goblin.className} font-bold text-xl text-[#42FB14]`}>CUSTOMER</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AboutReviews