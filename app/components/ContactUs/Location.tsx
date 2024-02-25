import React from 'react'
import Image from 'next/image'

import { visit_map_bg } from '@/assets/img'
import {archivo} from '@/app/css/fonts'

const Location = () => {
  return (
    <div className='mt-40 w-full h-[867px] bg-black'>
    <div className="absolute flex flex-row">
        <h1 className={`text-white ${archivo.className} font-bold sm:font-extrabold text-3xl sm:text-6xl absolute top-44 sm:ml-20 ml-5 w-[600px] text-center`}>Lane no. 09, Gulistan Colony, National Park Road, Rawalpindi</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex w-full h-full opacity-30">
          <Image src={visit_map_bg} alt="hero"></Image>
        </div>
      </div>        
    </div>
  )
}

export default Location