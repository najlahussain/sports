import React from 'react'
import Image from 'next/image'
import { archivo, poppins } from '@/app/css/fonts'
import { down_arrow } from "@/assets/img/index";
import { EventsData } from '@/app/constants';

const EventsText = ({data}:{data:EventsData[]}) => {
  return (
    <div className='mt-60 mb-60 ml-40 mr-40 flex sm:flex-row flex-col gap-20 justify-center items-center'>
        <h1 className={`${archivo} text-[#42FB14] text-7xl font-extrabold`}>OUR&nbsp;<br/>EVENTS</h1>
        <Image src={down_arrow} alt="down arrow" className='h-40 top-20'></Image>
        <p className={`${poppins} text-[#E3E3E3] text-xl`}>{data[0].description}</p>
    </div>
  )
}

export default EventsText