import React from 'react'
import { archivo, poppins } from '@/app/css/fonts';
import Image from 'next/image';
import { SalonData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const Spa = ({data}:{data:SalonData[]}) => {
  return (
    <div className='flex flex-col sm:mt-20 items-center justify-around mb-40'>
      <div className='p-10'>
        <h2 className={`${archivo.className} text-[35px] sm:text-[45px] text-[#42FB14] font-[800] leading-normal`}>BEAUTY<span className='text-white'>&nbsp;AND&nbsp;</span>SPA CENTER</h2>          
        <p className={`${poppins.className} text-white text-[12px] sm:text-[16px] leading-normal text-justify mt-10 sm:mr-40`}>{data[0].spaText}</p>
      </div> 
      <div className='flex flex-col sm:flex-row gap-10'>
        <Image src={urlForImage(data[0].spaImage1)} alt='about' width = {200} height={200} className='w-[425px] sm:h-[490px]'></Image>
        <Image src={urlForImage(data[0].spaImage2)} alt='about' width = {200} height={200} className='w-[425px] h-[490px]'></Image>
        <Image src={urlForImage(data[0].spaImage3)} alt='about' width = {200} height={200} className='w-[425px] h-[490px]'></Image>
        </div>
    </div>
  )
}

export default Spa