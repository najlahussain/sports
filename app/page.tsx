import { Hero, Video, Facilities, AboutHome, Events } from "./components/index";
import { SanityData } from "./constants";
import { client } from '@/sanity/lib/client';
export const revalidate = 60

export  default async function Home() {
  const query1 = `*[_type=='home']{
    image
  }`;
  const query2 = `*[_type=='abouthome']{
    description, image
  }`;
  const query3 = `*[_type=='facilities']{
    description, image, title
  }`;
  const query4 = `*[_type=='eventshome']{
    description, image
  }`;
  const herodata: SanityData[] = await client.fetch(query1);
  const aboutdata: SanityData[] = await client.fetch(query2);
  const facilitiesdata: SanityData[] = await client.fetch(query3);
  const eventsdata: SanityData[] = await client.fetch(query4);
 
  return (
    <div className="bg-black relative">
      <Hero data={herodata} />
      <div className="mx-5">
        <AboutHome data = {aboutdata}/>
        <Video />
        <Facilities data = {facilitiesdata}/>
        <Events image = {eventsdata[0].image} description={eventsdata[0].description}/>
      </div>
    </div>
  );
}
