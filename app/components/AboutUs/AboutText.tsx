import React from 'react'
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';
import { AboutData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

async function AboutText ({data}:{data:AboutData[]}) {
  return (
    <div className='flex flex-col lg:flex-row mt-5 sm:mt-20 items-center justify-around'>
      <Image src={urlForImage(data[0].sideImage)} alt='about' width={200} height={200} className='w-80 sm:w-[570px] h-80 sm:h-[496px] p-10'></Image>
      <div className='p-10'>
        <div className='bg-[#42FB14] size-2 rounded-full'></div>
        <h2 className={`${archivo.className} text-white text-2xl sm:text-5xl leading-normal`}>Get to know about</h2>
        <h2 className={`${archivo.className} text-2xl sm:text-5xl text-[#42FB14] font-[800] leading-normal`}>SPORTS PAVILION</h2>          
        <p className={`${poppins.className} text-white text-lg sm:text-xl leading-normal text-justify mt-10`}>{data[0].description}</p>
      </div> 
    </div>
  )
}

export default AboutText