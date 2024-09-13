import React from 'react'
import { EventsHero, EventsText, EventsGallery, EventsTestimonials, EventsAppointment, EventSlider} from '../components/Events/index';
import { client } from '@/sanity/lib/client';
import { EventsData, PicturesData } from '../constants';
export const revalidate = 60


async function Page () {

  const query = `*[_type=='eventspage']{
    image, description, galleryImage, test1Image, test1Name, test1desc,
      test2Image, test2Name, test2desc,
      test3Image, test3Name, test3desc,
  }`;

  const query1 = `*[_type=='pictures']{
    image, title, slug
  }`;

  const eventsdata:EventsData[] = await client.fetch(query);
  const pictures:PicturesData[] = await client.fetch(query1);
  // console.log(pictures);
  return (
   <div>
      <EventsHero data = {eventsdata}/>
      <EventsText data = {eventsdata}/>
      <EventSlider data = {pictures}/>
      <EventsGallery data = {eventsdata}/>
      <EventsTestimonials data = {eventsdata}/>
      <EventsAppointment />
   </div>
  )
}

export default Page