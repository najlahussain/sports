"use client"

import React from 'react'
import Image from 'next/image'
import { poppins } from '@/app/css/fonts'
import { salon_app } from "@/assets/img/index";

import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { FormData } from '@/app/constants';

const Appointment = () => {
  const { register, handleSubmit, reset, formState:{isSubmitting, errors} } = useForm<FormData>();

  const onSubmit : SubmitHandler<FormData> = async (data: FormData) => {  
    await new Promise(()=>sendEmail(data));
    reset();
  }

  return (
    <div className='max-w-full'>
      <div className="absolute flex flex-col sm:py-32 px-0 sm:px-72 gap-2 sm:gap-10 sm:mt-0 mt-5">
        <div className='gap-3 flex flex-col sm:text-center sm:ml-0 ml-5'>
          <h1 className={`text-white ${poppins.className} font-extrabold text-3xl`}>Make an Appointment</h1>
          <p className={`text-white ${poppins.className} font-thin text-md `}>Make an appointment to get stress free services&#33;</p>
          </div>
          <div className='bg-white sm:w-[814px] h-[250px] sm:h-[278px] p-8 flex items-center justify-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-6 mt-10'>
              <div className='flex gap-10'> 
                <input
                  type='text'
                  placeholder='*Name'
                  className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('name', { required: true })}
                />
                {/* {errors.name && (<p className='text-red-500 text-xs'>{errors.name.message}</p>)} */}
                <input
                  type='email'
                  placeholder='*Email'
                  className='w-full rounded-md border border-gray-300 bg-whitepy-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('email', { required: true })}
                />
              </div>
                <div className='flex gap-10'>
                <input
                  type='text'
                  placeholder='*Phone'
                  className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                  {...register('phone', { required: true })}
                />
                <input
                  type='text'
                  placeholder='*Service'
                  className='w-full rounded-md border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md py-3'
                  {...register('events', { required: true })}
                />
                <input
                  type='text'
                  className='hidden'
                  value='Salon Appointment'
                  {...register('title')}
                />
            </div>
            <div className='flex justify-end'>
              <button 
              disabled={isSubmitting}
              className={`bg-[#42FB14] text-black w-[120px] h-[40px] sm:w-[173px] sm:h-[50px] rounded-full font-botext-md ${isSubmitting ? 'opacity-50 cursor-none':'opacity-100'}`}>Send</button>
            </div>
          </div>
        </form>
      </div>
      </div>
        <div className="flex justify-end">
        <div className="flex w-full h-[380px] sm:h-[634px]">
          <Image src={salon_app} alt="appointment"></Image>
        </div>
      </div>
    </div>
  )
}

export default Appointment