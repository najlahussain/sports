import React from 'react'
import Image from 'next/image'
import { revalia, archivo, poppins, goblin } from '@/app/css/fonts'
import { salon_icon1, salon_icon2, salon_icon3, salon_icon4, salon_icon5, salon_icon6, pink_arrow } from "@/assets/img/index";
import { SalonData } from '@/app/constants';

const Services = ({data}:{data:SalonData[]}) => {
  return (
    <div className='bg-[#92AD68] w-full sm:h-[1000px] mt-10 sm:mt-40 flex flex-col'>
      <h1 className={`${archivo.className} text-white text-4xl sm:text-7xl text-center mt-10`}>OUR SERVICES</h1>
      <p className={`${revalia.className} text-xl sm:text-2xl text-center text-[#C36BBB]`}>WE HELP YOU OUT</p>
      <p className={`${poppins.className} text-xl sm:text-3xl text-center text-[#5C5B5B] mt-10`}>{data[0].services}</p>
      <div className='flex flex-row sm:m-20 justify justify-between'>
        <div className='absolute sm:ml-10 mt-12 w-[400px] sm:w-[1100px] border-2 border-[#C36BBB]'></div>
        <div className='z-10'>
          <Image src={salon_icon2} alt="services" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] z-10 mt-3 sm:mt-0'></Image>
          <p className={`${poppins.className} text-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Spa</p>
        </div>
        <div className='z-10'>
          <Image src={salon_icon5} alt="services" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] z-10 mt-3 sm:mt-0'></Image>
          <p className={`${poppins.className} text-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Hair</p>
          {/* <p className={`${poppins.className} sm:flex hidden text-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Hair&amp;&nbsp;Makeup</p> */}
        </div>
        <div className='z-10'>
          <Image src={salon_icon3} alt="services" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] z-10 mt-3 sm:mt-0'></Image>
          <p className={`${poppins.className} ttext-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Waxing</p>
        </div>
        <div className='z-10'>
          <Image src={salon_icon4} alt="services" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] z-10 mt-3 sm:mt-0'></Image>
          <p className={`${poppins.className} text-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Facial</p>
        </div>
        <div className='z-10'>
          <Image src={salon_icon1} alt="services" className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] z-10 mt-3 sm:mt-0'></Image>
          <p className={`${poppins.className} text-lg sm:text-3xl text-center text-[#5C5B5B] mt-2 sm:mt-5`}>Massage</p>
        </div>
      </div>
      {/* white part */}
      <div className='my-5 sm:my-0 mx-10 sm:mx-20 w-auto h-1/3 bg-white flex flex-col sm:flex-row justify-between items-center rounded-lg sm:p-0 pt-5'>
        <div className='flex flex-col gap-1'>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Hair cutting</p>
          </div>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Facials</p>
          </div>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Pedicures</p>
          </div>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Manicures</p>
          </div>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Hair treatments</p>
          </div>
          <div className={`w-[252px] h-[45px] bg-[#92AD68] rounded-r-3xl hover:bg-[#C36BBB] hover:text-white transition-transform text-black flex flex-row items-center gap-10 ${poppins.className}`}>
            <Image src={pink_arrow} alt="services" className='w-[36px] h-[45px]'></Image>
            <p>Waxing &amp; Cosmetics</p>
          </div>  
        </div>
        <div>
          <Image src={salon_icon6} alt="services" className='w-[300px] h-[300px] p-1 sm:ml-14 sm:mt-0 mt-5'></Image>
        </div>
        <div className='p-10 ml-10'>
          <h2 className={`${goblin.className} text-4xl text-black`}>HAIR SHE GOES</h2>
          <p className={`${poppins.className} text-sm text-[#555555]`}>We provide all sorts of top services. Because a happy client means happy environment.</p>
          <ul className={`${poppins.className} text-sm text-[#555555] list-disc`}>
            <li>Exclusive Discounts for Members</li>
            <li>Beauty &amp; Hair Services</li>
            <li>Spa Services</li>
            <li>Friendly Trained Staff</li>
            <li>Regular Cleanliness & Maintenance</li>
          </ul>
        </div>
      </div>
        {/* <Image src={salon_services} alt="services" className='w-full h-auto mt-40'></Image> */}
    </div>
  )
}

export default Services