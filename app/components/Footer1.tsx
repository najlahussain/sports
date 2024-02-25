import Image from 'next/image'
import Link from 'next/link'

import { bg_footer, logo, Twitter, Facebook, LinkedIn, Instagram } from '@/assets/img'

const Footer1 = () => {
  return (
    <div className='mt-20 w-full h-[251px] bottom-0'>
      <div className=' flex justify-between'>
        <Image src={logo} alt="logo" className='mt-5 ml-12 w-[130px] sm:w-[230px] h-[100px] sm:h-[131px]'/>
        <div className='flex sm:w-[388px] sm:h-[64px] mt-20 mr-20'>
            <input type="text" placeholder='Enter your email to subscribe' className='rounded-l-[10px] w-full text-center'/>
            <button className='bg-[#42FB14] text-black font-bold rounded-r-[10px] p-[12px] sm:p-[22px]'>Subscribe</button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
      <div className="flex flex-row gap-2 ml-10 mt-3">
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.twitter.com"><Image src = {Twitter} alt='twitter'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.facebook.com"><Image src = {Facebook} alt='facebook'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.linkedin.com"><Image src = {LinkedIn} alt='linkedin'></Image></Link></div>
            <div className='w-[56px] h-[56px] bg-black rounded-full flex items-center justify-center'><Link href="https://www.instagram.com"><Image src = {Instagram} alt='instagram'></Image></Link></div>
        </div>  
        <div className='text-[#5D5D5D] text-[12px] sm:text-[16px] font-[400] leading-normal whitespace-nowrap'>
          <ul className='flex list-disc gap-20'>
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">Sports Pavilion</Link></li>
            <li><Link href="/">Terms & Conditions</Link></li>
          </ul>
        </div>
        <p className='text-[#5D5D5D] text-[12px] sm:text-[16px] font-[400] leading-normal whitespace-nowrap mr-20'>&copy;Copyrights 2024 Sports Pavillion</p>
      </div>
    </div>
  )
}
export default Footer1