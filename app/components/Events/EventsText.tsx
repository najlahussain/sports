import React from 'react'
import Image from 'next/image'
import { archivo, poppins } from '@/app/css/fonts'
import { down_arrow } from "@/assets/img/index";
import { EventsData } from '@/app/constants';

const EventsText = ({data}:{data:EventsData[]}) => {
  return (
    <div className='m-10 sm:my-60 sm:mx-40 flex sm:flex-row flex-col gap-5 sm:gap-20 justify-center items-center'>
        <h1 className={`${archivo} text-[#42FB14] text-4xl sm:text-7xl font-extrabold`}>OUR&nbsp;EVENTS</h1>
        <Image src={down_arrow} alt="down arrow" className='hidden sm:flex h-40 top-20'></Image>
        <p className={`${poppins} text-[#E3E3E3] text-md sm:text-xl text-justify`}>{data[0].description}</p>
    </div>
  )
}

export default EventsText