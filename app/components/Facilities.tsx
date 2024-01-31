import React from "react";
import Card from "./Card";
const Facilities = () => {
  
  return (
    <div  className='text-white mt-20 px-10'>
      <div className="flex items-center justify-center text-center flex-col">
        <h1 className="text-[64px] font-[800]">FACILITIES</h1>
        <p className="text-[#F92B50] text-[16px] font-[800]">AVAIL ALL OF THEM</p>
      </div>
      <div className="flex gap-5 items-center justify-center mt-20">
        <Card title="GAMING GARAGE" text="Gaming garage facilities explained!!"/>
        <Card title="BADMINTON COURT" text="Badminton Court facilities explained!!"/>
        <Card title="TENNIS" text="Tennis facilities explained!!"/>        
      </div>
      
    </div>
  );
};

export default Facilities;
