import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { archivo, poppins } from '@/app/css/fonts'
import { EventsData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const EventsGallery = ({data}:{data:EventsData[]}) => {
  return (
    <div className='flex flex-col my-60'>
        <h1 className={`${archivo} text-[#42FB14] text-7xl font-extrabold text-right mr-40`}>GALLERY</h1>
        <ul className={`${poppins} flex flex-row justify-end gap-5 mr-40 text-[#898D92] text-3xl font-semiboldbold my-10`}>
            <li className='hover:text-white '><Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA==">Check out more here....</Link></li>
        </ul>
        <Image src={urlForImage(data[0].galleryImage)} alt="down arrow" width={200} height={200} className='w-full h-[705px] top-20'></Image>
    </div>
  )
}

export default EventsGallery;