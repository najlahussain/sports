'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { AboutHero, AboutText, AboutReviews } from '../components/AboutUs';


const Page : React.FC= () => {
  const router = useRouter();
  return (
    <div>
      <AboutHero />
      <AboutText />
      <AboutReviews />
    </div>
  )
}

export default Page