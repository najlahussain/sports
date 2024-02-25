import { bg_facilities, bulb } from "@/assets/img";
import Image, { StaticImageData } from "next/image";

type cardData = {
    id: string,
    title: string,
    text : string,
    //image : StaticImageData,
}
const Card = (data: cardData) => {
  return (
    <div className="w-[400px] h-[300px] bg-white relative overflow-hidden">
    <div className="flex items-center justify-center">
      <div className="box bg-[#101010] opacity-90 z-10 h-[76px] w-[360px] flex items-center flex-col absolute top-[204px]">
          <h1 className="text-white pt-5 font-extrabold box">{data.title}</h1>
          <div className="hid-box bg-[#101010] opacity-90 z-10 h-[150px] w-fit flex items-center">
            <p>{data.text}</p>
          </div>    
      </div>
      <Image src = {bulb} alt="bulb" className="z-10 w-[56px] h-[56px] absolute top-[176px] right-10"></Image>
    </div>
    <Image src = {bg_facilities} alt="background" className="cover z-[-1] grayscale bg-cover w-full h-full"></Image>
  </div>
  )
}

export default Card