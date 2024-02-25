import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { visit_image, circle_icon } from '@/assets/img'
import { poppins } from '@/app/css/fonts'

const Visit = () => {
  return (
    <div className='bg-white w-full h-[668px] flex flex-row gap-20'>
        <Image src={visit_image} alt='visit image'></Image>
        <div className='flex flex-col m-40'>
            <h1 className={`${poppins.className} text-3xl`}>VISIT US</h1>
            <p className={`${poppins.className} text-lg text-justify mt-10`}>Visit us for a time of lifetime have fun and avail all our services to have a relaxing end of the day.</p>
            <ul className='mt-10'>
                <li className='flex flex-row gap-10 items-center'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA==" className={`${poppins.className}`}>Check our Instagram</Link>
                </li>
                <li className='flex flex-row gap-10 items-center mt-5'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.facebook.com/citywalkfoodpark?mibextid=dGKdO6" className={`${poppins.className}`}>Check our Facebook</Link>
                </li>
                <li className='flex flex-row gap-10 items-center mt-5'>
                    <Image src={circle_icon} alt='circle icon' className='w-[50px] h-[40px]'></Image>
                    <Link href="https://www.linkedin.com/company/sports-pavilion-rawalpindi/" className={`${poppins.className}`}>Check our LinkedIn</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Visit