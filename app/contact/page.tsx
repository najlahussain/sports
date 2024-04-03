import React from 'react'
import { Visit, Contact, Location } from '../components/ContactUs/index'
import { client } from '@/sanity/lib/client';
import { ContactData } from '../constants';
export const revalidate = 60

async function Page() {
  const query = `*[_type=='contact']{
    email, phone, bg, sideImage
  }`;

  const data : ContactData[] = await client.fetch(query);
  console.log(data[0].bg)
  return (
    <div className=''>
      <Contact data = {data}/>
      <Visit data = {data} />
      <Location data = {data}/>
    </div>
  )
}

export default Page