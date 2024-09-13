import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContactData } from '@/app/constants'
import { circle_icon } from '@/assets/img'
import { poppins } from '@/app/css/fonts'
import { urlForImage } from '@/sanity/lib/image'

const Visit = ({data}:{data:ContactData[]}) => {
  return (
    <div className='bg-white w-full h-auto lg:h-[668px] flex flex-col lg:flex-row gap-20'>
        <Image src={urlForImage(data[0].sideImage)} alt='visit image' width={200} height={200} className='w-full h-auto lg:h-[668px]'></Image>
        <div className='flex flex-col mx-10 mb-10 lg:m-40'>
            <h1 className={`${poppins.className} text-3xl`}>VISIT US</h1>
            <p className={`${poppins.className} text-lg text-justify mt-10`}>Visit us for a time of lifetime have fun and avail all our services to have a relaxing end of the day.</p>
            <ul className='mt-10'>
                <li className='flex flex-row gap-10 items-center'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA==" className={`${poppins.className} hover:text-slate-700`}>Check our Instagram</Link>
                </li>
                <li className='flex flex-row gap-10 items-center mt-5'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.facebook.com/citywalkfoodpark?mibextid=dGKdO6" className={`hover:text-slate-700 ${poppins.className}`}>Check our Facebook</Link>
                </li>
                <li className='flex flex-row gap-10 items-center mt-5'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.linkedin.com/company/sports-pavilion-rawalpindi/" className={`${poppins.className} hover:text-slate-700`}>Check our LinkedIn</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Visit