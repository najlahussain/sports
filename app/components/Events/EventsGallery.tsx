import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { archivo, poppins } from '@/app/css/fonts'
import { EventsData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const EventsGallery = ({data}:{data:EventsData[]}) => {
  return (
    <div className='flex flex-col my-40'>
        <h1 className={`${archivo} text-[#42FB14] text-4xl sm:text-7xl font-extrabold text-right sm:mr-32`}>GALLERY</h1>
        <ul className={`${poppins} flex flex-row justify-end sm:mr-32 text-[#898D92] text-3xl font-semiboldbold my-10`}>
            <li className='hover:text-white '><Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA==">Check out more here....</Link></li>
        </ul>
        <Image src={urlForImage(data[0].galleryImage)} alt="down arrow" width={300} height={300} className='w-full h-[300px] sm:h-[634px] top-20'></Image>
    </div>
  )
}

export default EventsGallery;