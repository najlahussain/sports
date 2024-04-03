import React from 'react'
import Image from 'next/image'
import { goblin } from '@/app/css/fonts'
import { EventsData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const EventsHero = ({data}:{data:EventsData[]}) => {
  return (
    <div className="">
      <div className="absolute flex flex-row">
        <h1 className={`text-white ${goblin.className} font-bold sm:font-extrabold text-[70px] sm:text-[105px] absolute top-48 sm:ml-[430px] ml-5`}>Events</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[380px] sm:h-[634px]">
          <Image src={urlForImage(data[0].image)} alt="hero" width={200} height={200} className='w-full h-[380px] sm:h-[634px]'></Image>
        </div>
      </div>
  </div>
  )
}

export default EventsHero