import { event_bg } from "@/assets/img";
import Image from "next/image";

type cardData = {
    date: string,
    title : string
}
const EventsCard = (data:cardData) => {
  return (
    <div className="w-[400px] h-[522px] relative flex flex-col">
        <div className="w-full h-[340px]">
            <Image src = {event_bg} alt="background" className="grayscale w-full h-max"></Image>
            <div className="w-[69px] h-[33px] absolute top-[287px] right-[20px] bg-white flex items-center justify-center">
                <p className=" text-[#05374F] text-[12px] font-[600] leading-normal">{data.date}</p>
            </div>
        </div>
        <div className="flex flex-col bg-[#101010] w-full h-full">
            <div className="flex items-center justify-start gap-5 mt-10">
                <div className="w-[40px] h-[1px] bg-[#42FB14]"></div>
                <p className="text-[14px] font-[500]">EVENTS&nbsp;&nbsp;&nbsp;.</p>
            </div>
            <h2 className="text-[36px] font-[800] text-center mt-5">{data.title}</h2>
            <div className="w-full h-[1px] bg-[#42FB14] mt-5"></div>
        </div>
  </div>
  )
}

export default EventsCard