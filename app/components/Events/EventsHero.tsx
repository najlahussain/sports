import React from 'react'
import Image from 'next/image'
import { goblin } from '@/app/css/fonts'
import { EventsData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const EventsHero = ({data}:{data:EventsData[]}) => {
  return (
    <div className="">
      <div className="absolute flex flex-row">
        <h1 className={`text-white ${goblin.className} font-bold sm:font-extrabold text-4xl sm:text-7xl absolute top-48 sm:ml-20 ml-5`}>Events</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-[300px] sm:h-[634px]">
          <Image src={urlForImage(data[0].image)} alt="hero" width={300} height={300} className='w-full h-[300px] sm:h-[634px]'></Image>
        </div>
      </div>
  </div>
  )
}

export default EventsHero