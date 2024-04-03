import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { poppins, cormorant } from '@/app/css/fonts'

type Test = {
    name : string,
    image : string,
    text : string,
}

const EventCard = (data:Test) => {
  console.log(data)
  return (
    <div className='bg-white w-[388px] h-[396px] flex flex-col p-10'>
        <div className='flex flex-row gap-5 items-center justify-start'>
            <Image src={data.image} alt='icon' width={200} height={200} className='w-[66px] h-[66px]'></Image>
            <p className={`${cormorant} text-black text-xl font-semibold`}>{data.name}</p>
        </div>
        <div className='border-black border-t my-5'></div>
        <p className={`${poppins} text-black text-xl font-light p-5 leading-loose`}>{data.text}</p>
    </div>
  )
}

export default EventCard

