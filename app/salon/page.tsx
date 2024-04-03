import React from 'react'
import Hero from '../components/Salon/Hero'
import About from '../components/Salon/About'
import Services from '../components/Salon/Services'
import Spa from '../components/Salon/Spa'
import Appointment from '../components/Salon/Appointment'
import { client } from '@/sanity/lib/client'
import { SalonData } from '../constants'
export const revalidate = 60

async function Page () {
  const query = `*[_type=='salon']{
    image, description, sideImage, services,
      spaText, spaImage1, spaImage2, spaImage3
  }`;
  const data: SalonData[] = await client.fetch(query);
  return (
    <div className='text-white'>
      <Hero data = {data}/>
      <About data = {data}/>
      <Services data={data}/>
      <Spa data = {data}/>
      <Appointment/>
    </div>
  )
}

export default Page