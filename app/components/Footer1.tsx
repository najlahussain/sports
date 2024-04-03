'use client';

import Image from 'next/image'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

import { logo, Twitter, Facebook, LinkedIn, Instagram } from '@/assets/img'

import { FormData } from '@/app/constants';

const Footer1 = () => {
  const { register, handleSubmit, reset, formState:{isSubmitting, errors} } = useForm<FormData>();

  const onSubmit : SubmitHandler<FormData> = async (data: FormData) => {
    
    await new Promise(()=>sendEmail(data));
    reset();
  }
  return (
    <div className='mt-20 w-full h-[251px] bottom-0'>
      <div className=' flex justify-between'>
        <Image src={logo} alt="logo" className='mt-5 sm:ml-12 w-[130px] sm:w-[230px] h-[80px] sm:h-[131px]'/>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='flex w-[330px] sm:w-[388px] h-[40px] sm:h-[64px] mt-10 sm:mt-20 sm:mr-20 mr-2'>
            <input type="text" placeholder='Enter your email to subscribe' className='rounded-l-lg w-full p-[12px]'
            {...register('email', {required:true})}/>
            <input type='text' className='hidden'  value='Email Subscription' {...register('title')}/>
            <button className='bg-[#42FB14] text-black font-bold rounded-r-lg p-[12px] sm:p-[22px]'>Subscribe</button>
          </div>
          </form>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
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
        <p className='text-[#5D5D5D] text-[12px] sm:text-[16px] font-[400] leading-normal whitespace-nowrap sm:mr-20 sm:mt-0 mt-5'>&copy;Copyrights 2024 Sports Pavillion</p>
      </div>
    </div>
  )
}
export default Footer1