'use client';

import React from 'react'
import Image from 'next/image'
import { poppins } from '@/app/css/fonts'
import { events_app } from "@/assets/img/index";

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import { FormData } from '@/app/constants';

const EventsAppointment : FC = () => {
  const { register, handleSubmit, reset, formState:{isSubmitting, errors} } = useForm<FormData>();

  const onSubmit : SubmitHandler<FormData> = async (data: FormData) => {
    
    await new Promise(()=>sendEmail(data));
    reset();
  }
  return (
    <div>
      <div className="absolute flex flex-col py-32 px-72 gap-10">
        <div className='gap-3 flex flex-col text-center'>
          <h1 className={`text-white ${poppins.className} font-extrabold text-3xl`}>Make an Appointment</h1>
          <p className={`text-white ${poppins.className} font-thin text-md `}>Book us for your special event&#33;&#33;&#33;</p>
          </div>
          <div className='bg-white w-[814px] h-[278px] p-8 flex items-center justify-center '>
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
                    className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
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
                        placeholder='*Event'
                        className='w-full rounded-md border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md py-3'
                        {...register('events', { required: true })}
                      />
                      <input
                        type='text'
                        className='hidden'
                        value='Events Appointment'
                        {...register('title')}
                      />
                  </div>
                  <div className='flex justify-end'>
                    <button 
                    disabled={isSubmitting}
                    className={`bg-[#42FB14] w-[173px] h-[50px] rounded-full font-botext-md ${isSubmitting ? 'opacity-50 cursor-none':'opacity-100'}`}>Send</button>
                  </div>
                </div>
              </form>
            </div>
        </div>
        <div className="flex justify-end">
        <div className="flex w-full h-[380px] sm:h-[634px]">
          <Image src={events_app} alt="bg"></Image>
        </div>
      </div>
    </div>
  )
}

export default EventsAppointment