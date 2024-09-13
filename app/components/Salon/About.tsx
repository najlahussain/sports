import React from 'react'
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { SalonData } from '@/app/constants';

const About = ({data}:{data:SalonData[]}) => {
  return (
    <div className='flex flex-col lg:flex-row mt-20 items-center justify-center sm:p-10 gap-10'>
      <Image src={urlForImage(data[0].sideImage)} alt='about' width={200} height={200} className='w-80 h-72'></Image>
      <div className='flex flex-col items-center justify-center sm:items-start p-10 sm:gap-5'>
        <div className='bg-[#42FB14] size-2 rounded-full'></div>
        <h2 className={`${archivo.className} text-white text-sm font-thin leading-normal`}>WHAT WE&apos;RE OFFERING</h2>
        <h2 className={`${archivo.className} text-3xl sm:text-6xl text-[#42FB14] font-extrabold leading-normal`}>ABOUT US</h2>          
        <p className={`${poppins.className} text-white text-md sm:text-lg leading-normal text-justify`}>{data[0].description}
        </p>
        <div className='flex justify-start'>
        <a href="/salon.pdf" download="price list" className='bg-[#42FB14] mt-5 w-200 h-50 text-black rounded-full font-bold px-20 py-4 text-md'>Price List</a>
          {/* <button className='bg-[#42FB14] w-[250px] h-[50px] text-black rounded-full font-bold text-md'>Price List</button> */}
        </div>
      </div> 
    </div>
  )
}

export default About