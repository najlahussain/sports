import React from 'react'
import Image from 'next/image'

import {archivo} from '@/app/css/fonts'
import { ContactData } from '@/app/constants'
import { urlForImage } from '@/sanity/lib/image'

const Location = ({data}:{data:ContactData[]}) => {
  return (
    <div className='mt-10 sm:mt-40 w-full sm:h-[867px] bg-black'>
      <div className="sm:absolute">
        <h1 className={`text-white ${archivo.className} font-bold sm:font-extrabold text-3xl sm:text-6xl sm:absolute top-20 sm:top-44 sm:ml-20 ml-0 sm:w-[600px] text-center hidden sm:flex`}>Lane no. 09, Gulistan Colony, National Park Road, Rawalpindi</h1>
        <div className='ml-0 sm:ml-[710px] sm:mt-40'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.656394407508!2d73.08735677534382!3d33.5623027733454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed383ccbc5b3%3A0x91a3ef463041997f!2sSports%20Pavilion%20Rawalpindi!5e0!3m2!1sen!2s!4v1708855905532!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      
      <div className="flex">
        <div className="sm:flex w-full h-full hidden">
          <Image src={urlForImage(data[0].bg)} alt="hero" width={200} height={200} className='w-full h-full'></Image>
        </div>
      </div>        
    </div>
  )
}

export default Location