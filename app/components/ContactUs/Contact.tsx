import React from 'react'
import { archivo, poppins } from '@/app/css/fonts'
import { Facebook, insta_green, tiktok, contact_img } from '@/assets/img'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='flex flex-col mt-48'>
      <div className='text-center'>
          <h1 className={`${archivo} font-bold text-6xl text-white`}>Contact us</h1>
          <p className={`${poppins} text-xl text-white`}>Home&nbsp;
          <span className='text-[#42FB14]'>&#92;&nbsp;Contact Us</span></p>
      </div>
      <div className='flex flex-row m-44 gap-40'>
        <div className='flex flex-col items-start'>
            <div className=''>
                <h1 className={`${archivo} font-bold text-6xl text-white`}>Let&apos;s discuss <br />on something&nbsp;
                <span className='text-[#42FB14]'>cool&nbsp;</span><br />together</h1>
            </div>
            <div className='flex flex-row items-center mt-10 justify-center gap-5'>
                <Link href="https://www.facebook.com/citywalkfoodpark?mibextid=dGKdO6"><Image src={Facebook} alt='facebook' className='w-[37px] h-[42px]'></Image></Link>
                <Link href="https://www.instagram.com/sportspavilion_rwp?igsh=MWIycjQ0MnYzbWM2aA=="><Image src={insta_green} alt='instagram' className='w-[48px] h-[46px]'></Image></Link>
                <Link href="https://www.tiktok.com/@hsg_ladiessalon?_t=8jiBTFsMK4g&_r=1"><Image src={tiktok} alt='tiktok' className='w-[37px] h-[42px] invert'></Image></Link>
            </div>
        </div>
        <div className='flex flex-row gap-10'>
            <Image src={contact_img} alt='contact image' className='w-[35px] h-[192px]'></Image>
            <div className={`${poppins} text-white flex flex-col gap-14`}>
                <p>sportspavillionrwp@gmail.com</p>
                <p>0348-0161623</p>
                <div>
                    <p>Lane&nbsp;09&comma;&nbsp;Gulistan Colony</p>    
                    <p>National Park Road&nbsp;09&comma;</p>    
                    <p>Inside Joyland Rawalpindi</p>    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact