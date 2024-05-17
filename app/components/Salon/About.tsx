import React from 'react'
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { SalonData } from '@/app/constants';

const About = ({data}:{data:SalonData[]}) => {
  return (
    <div className='flex flex-col lg:flex-row mt-20 items-center justify-around'>
      <Image src={urlForImage(data[0].sideImage)} alt='about' width={200} height={200} className='w-[648px] h-[496px] p-10'></Image>
      <div className='p-10'>
        <div className='bg-[#42FB14] w-[8px] h-[8px] rounded-full'></div>
        <h2 className={`${archivo.className} text-white text-sm font-thin leading-normal ml-5`}>WHAT WE&apos;RE OFFERING</h2>
        <h2 className={`${archivo.className} text-[35px] sm:text-[45px] text-[#42FB14] font-[800] leading-normal ml-5`}>ABOUT US</h2>          
        <p className={`${poppins.className} text-white text-[12px] sm:text-[16px] leading-normal text-justify my-10 mr-10`}>{data[0].description}
        </p>
        <div className='flex justify-start'>
        <a href="/salon.pdf" download="price list" className='bg-[#42FB14] w-[250px] h-[50px] text-black rounded-full font-bold px-20 py-4 text-md'>Price List</a>
          {/* <button className='bg-[#42FB14] w-[250px] h-[50px] text-black rounded-full font-bold text-md'>Price List</button> */}
        </div>
      </div> 
    </div>
  )
}

export default About