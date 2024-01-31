import React from 'react'
import EventsCard from '../components/EventsCard';

const page = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center mt-20'>
      <div className='w-[8px] h-[8px] bg-[#F92B50] rounded-full'></div>
      <h3 className="mt-5 text-[14px] font-[500] leading-normal">WHAT WE&apos;RE OFFERING</h3>
      <h1 className='text-[#F92B50] text-[50px] font-[800] leading-normal'>EVENTS<span className='text-white'>&nbsp;ORGANIZED</span></h1>
      <div className='flex gap-[40px]'>
        <EventsCard date = "29 Aug" title = "GAME NIGHT"/>
        <EventsCard date = "29 Aug" title = "MOVIE NIGHT"/>
        <EventsCard date = "29 Aug" title = "CORPORATE EVENTS"/>
      </div>
    </div>
  )
}

export default page;