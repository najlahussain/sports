import React from 'react'
import { AboutHero, AboutText, AboutReviews } from '../components/AboutUs';
import { AboutData } from "../constants";
import { client } from '@/sanity/lib/client';
export const revalidate = 60

async function Page () {
  const query = `*[_type=='about']{
    image, sideImage, description, reviews, customer
  }`;
  const data: AboutData[] = await client.fetch(query);
  console.log(data)
  return (
    <div>
      <AboutHero data = {data}/>
      <AboutText data = {data}/>
      <AboutReviews data = {data}/>
    </div>
  )
}

export default Page