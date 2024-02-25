import Image from 'next/image'
import Link from 'next/link'

import { bg_footer, logo, Twitter, Facebook, LinkedIn, Instagram } from '@/assets/img'

const Footer = () => {
  return (
    <div className='text-white mt-10 sm:mt-20 w-full h-[692px] flex-shrink-0 relative'>
      <Image src={bg_footer} alt="background"></Image>
      {/* div for logo and social links */}
      <div className='top-[30px] flex flex-row absolute sm:gap-[700px] left-[20px] sm:left-[52px]'>
        <Image src={logo} alt="logo" className='w-[130px] sm:w-[300px] h-[100px] sm:h-[162px]'/>
        <div className="flex flex-row gap-2 pl-12 pt-10">
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.twitter.com"><Image src = {Twitter} alt='twitter'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.facebook.com"><Image src = {Facebook} alt='facebook'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.linkedin.com"><Image src = {LinkedIn} alt='linkedin'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.instagram.com"><Image src = {Instagram} alt='instagram'></Image></Link></div>
        </div>
      </div>
      {/* center div */}
      <div className='absolute top-[276px] left-[52px] flex sm:flex-row flex-col-reverse gap-20 sm:gap-80'>
        <div className='mt-0'>
          <h3 className='text-[#5D5D5D] text-[14px] sm:text-[24px] font-[400] leading-normal'>Fitness and recreational center</h3>
          <h1 className='text-white text-[44px] sm:text-[60px] font-[800] leading-normal' >Sportspavilionrwp</h1>
          <p className='mt-[20px] sm:mt-[93px] text-[#5D5D5D] text-[16px] font-[400] leading-normal'>&copy;Copyrights 2024 by Sports pavilion</p>
        </div>
        <div className=''>
          <div className='flex justify-around text-[#5D5D5D] text-[14px] sm:text-[15px] font-[400] leading-normal'>
            <div className='flex flex-col gap-2'>
              <Link href="/contact">Contact Us</Link>
              <Link href="/about">About Us</Link>
              <Link href="/">Services</Link>
              <Link href="/">Hiring</Link>
              <Link href="/">Our Blog</Link>
            </div>
            <div className='flex flex-col gap-2'>
              <Link href="/about">ABOUT</Link>
              <Link href="/">FACILITIES</Link>
              <Link href="/">EVENTS</Link>
              <Link href="/">VIDEO</Link>
              <Link href="/">LOCATION</Link>
            </div>
          </div>
          <div className='flex sm:w-[388px] mt-10'>
            <input type="text" placeholder='Enter your email to subscribe' className='rounded-l-[10px] w-full text-center'/>
            <button className='bg-[#0050E5] text-black rounded-r-[10px] p-[12px] sm:p-[22px] font-semibold sm:font-bold'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='absolute top-[750px] sm:top-[632px] left-[30px] sm:left-[450px] text-[#5D5D5D] text-[12px] sm:text-[16px] font-[400] leading-normal whitespace-nowrap'>
        <ul className='flex list-disc gap-20'>
          <li><Link href="/">Privacy Policy</Link></li>
          <li><Link href="/">Sports Pavilion</Link></li>
          <li><Link href="/">Terms & Conditions</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer