import React from "react";
import Card from "./Card";
import { facilities_data } from "../constants";
import { archivo, revalia } from "../css/fonts";

const Facilities = () => {
  const settings = {
    dots : true,
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidesToScroll : 1,
  }
  return (
    <div  className='text-white mt-20 px-10'>
      <div className="flex items-center justify-center text-center flex-col">
        <div className={archivo.className}><h1 className="text-[44px] sm:text-[64px]">FACILITIES</h1></div>
        <div className={revalia.className}><p className="text-[#42FB14] text-[14px] sm:text-[16px]">AVAIL ALL OF THEM</p></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-20">
        {/* <Slider {...settings}> */}
        {facilities_data.map(
          (facility)=>(<Card key = {facility.id} id = {facility.id} title={facility.title} text={facility.text}/>))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Facilities;
