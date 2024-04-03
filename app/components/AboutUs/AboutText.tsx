import React from 'react'
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';
import { AboutData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

async function AboutText ({data}:{data:AboutData[]}) {
  return (
    <div className='flex flex-col lg:flex-row mt-5 sm:mt-20 items-center justify-around'>
      <Image src={urlForImage(data[0].sideImage)} alt='about' width={200} height={200} className='sm:w-[570px] sm:h-[496px] p-10'></Image>
      <div className='p-10'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <h2 className={`${archivo.className} text-white text-4xl sm:text-[45px] leading-normal`}>Get to know about</h2>
        <h2 className={`${archivo.className} text-4xl sm:text-[45px] text-[#42FB14] font-[800] leading-normal`}>SPORTS PAVILION</h2>          
        <p className={`${poppins.className} text-white text-[12px] sm:text-[16px] leading-normal text-justify mt-10`}>{data[0].description}</p>
      </div> 
    </div>
  )
}

export default AboutText