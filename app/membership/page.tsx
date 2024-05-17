"use client";

import React from 'react'
import { archivo, poppins, goblin } from '@/app/css/fonts'

import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { FormData } from '@/app/constants';

// export const getYear = (year:string) => {
//   console.log("Year: ",year);
// }
const Page = () => {
  const { register, handleSubmit, reset, formState:{isSubmitting, errors} } = useForm<FormData>();
  
  const onSubmit : SubmitHandler<FormData> = async (data: FormData) => {
    
    await new Promise(()=>sendEmail(data));
    reset();
  }

  return (
    <div className='text-white flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-20 mt-10 sm:m-40'>
      <div className='text-start gap-10'>
        <p className={`${goblin.className} text-lg sm:text-xl text-[#42FB14]`}>BE OUR MEMBER
        </p>
        <h1 className={`${archivo.className} font-bold text-4xl sm:text-6xl text-white`}>MEMBERSHIP</h1>
        <h1 className={`${archivo.className} font-bold text-4xl sm:text-6xl text-[#42FB14]`}>PLAN</h1>
        <div className='flex justify-start'>
        <a href="/membership.jpeg" download="membership tariff" className='bg-[#42FB14] w-[250px] h-[50px] text-black rounded-full font-bold px-10 py-3 text-md mt-10'>Membership Tariff</a>
          {/* <button className='bg-[#42FB14] w-[250px] h-[50px] text-black rounded-full font-bold text-md'>Price List</button> */}
        </div>
      </div>
      <div className='bg-white p-10 sm:p-0 sm:w-[665px] sm:h-[855px] flex flex-col items-center justify-center rounded-3xl'>
        <p className={`${poppins.className} mb-10 font-bold text-2xl text-black`}>I&apos;m interested in....</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-10'>
            {/* <Example/> */}
            <select className={`${poppins.className} text-[#717171] w-[350px] border-b-2 h-10`}
            {...register('year', { required: true })}>
              <option value="1 year membership">1 year Membership</option>
              <option value="2 years membership">2 years Membership</option>
              <option value="3 years membership">3 years Membership</option>
            </select>
            <input type="text" placeholder='Name' className={`${poppins.className} text-[#717171] w-[350px] border-b-2 h-10`} 
            {...register('name', { required: true, minLength: {value : 3 ,message : "Minimum length should be 3"} })}/>
            <input type="email" placeholder='Email' className={`${poppins.className} text-[#717171] w-[350px] border-b-2 h-10`}
            {...register('email', { required: true })}/>
            <input type="text" placeholder='Phone' className={`${poppins.className} text-[#717171] w-[350px] border-b-2 h-10`}
            {...register('phone', { required: true })}/>
            <input type="text" placeholder='Address' className={`${poppins.className} text-[#717171] w-[350px] border-b-2 h-10`}
            {...register('address', { required: true })}/>
            <textarea placeholder=' Message...' className={`${poppins.className} text-[#717171] w-[350px] border-2 h-32`}
            {...register('message', { required: true })}/>
            <input
              type='text'
              className='hidden'
              value='Membership'
              {...register('title')}
            />
          <div className='flex justify-center'>
            <button className='bg-[#42FB14] text-black w-[173px] h-[50px] rounded-full font-bold text-md'>Send</button>
          </div>
        </div>
        </form>
    </div>
    </div>
  )
}

export default Page