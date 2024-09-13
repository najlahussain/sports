"use client"

import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { archivo, revalia } from "../css/fonts";
import { SanityData } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Facilities = ({data}:{data:SanityData[]}) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="text-white mt-20 px-10">
      <div className="flex items-center justify-center text-center flex-col">
        <div className={archivo.className}>
          <h1 className="text-[44px] sm:text-[64px]">FACILITIES</h1>
        </div>
        <div className={revalia.className}>
          <p className="text-[#42FB14] text-[14px] sm:text-[16px]">
            AVAIL ALL OF THEM
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="">
        <Slider {...settings}>
          {data.map((facility) => (
            <div key={facility.title}>
              <Card id={facility.title} title={facility.title} text={facility.description} image={facility.image} />
        </div>
          ))}
        </Slider>
        </div>
        {/* <div className="hidden sm:flex items-center justify-center">
        <Slider {...settings}>
          {data.map((facility) => (
            <div key={facility.title}>
              <Card id={facility.title} title={facility.title} text={facility.description} image={facility.image} />
            </div>
          ))}
        </Slider>
        </div> */}
      </div>
    </div>
  );
};

export default Facilities;
