import React from 'react'
import EventCard from './EventCard';
import { archivo } from '@/app/css/fonts'
import { EventsData } from '@/app/constants';
import { urlForImage } from '@/sanity/lib/image';

const EventsTestimonials = ({data}:{data:EventsData[]}) => {
  return (
    <div className='flex flex-col  sm:my-40'>
        <h1 className={`${archivo} text-[#42FB14] text-4xl sm:text-7xl font-extrabold text-center`}>TESTIMONIALS</h1>
        <div className='m-20 flex flex-col items-center sm:flex-row gap-10'>
            <EventCard key = {data[0].test1Name} name = {data[0].test1Name} image={urlForImage(data[0].test1Image)} text={data[0].test1desc}/>
            <EventCard key = {data[0].test2Name} name = {data[0].test2Name} image={urlForImage(data[0].test2Image)} text={data[0].test2desc}/>
            <EventCard key = {data[0].test3Name} name = {data[0].test3Name} image={urlForImage(data[0].test3Image)} text={data[0].test3desc}/>
        </div>
    </div>
  )
}

export default EventsTestimonials