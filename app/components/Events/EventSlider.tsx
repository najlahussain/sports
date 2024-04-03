"use client"

import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { archivo, revalia } from "@/app/css/fonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PicturesData } from "@/app/constants";

const EventSlider = ({data}:{data:PicturesData[]}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="text-white mt-20 px-10">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((facility) => (
            <div key={facility.title}>
              <Card id={facility.title} title={facility.title} text={facility.title} image={facility.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventSlider;
