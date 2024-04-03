import React, { useState, useRef } from "react";
import { bulb } from "@/assets/img";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type cardData = {
    id?: string,
    title?: string,
    text?: string,
    image: any
}

const Card = (data: cardData) => {
  const [showDescription, setShowDescription] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleDescription = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents the event from propagating to parent elements
    setShowDescription(!showDescription);
  };

  return (
    <div className="w-[400px] h-[300px] bg-white relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className={`box bg-[#101010] opacity-90 z-10 w-[360px] absolute bottom-0 ${showDescription ? 'top-[10px] text-center' : 'pl-2 top-[80%] transform -translate-y-1/2'}`} ref={cardRef}>
          <h1 className="text-white pt-5 font-extrabold cursor-pointer" onClick={toggleDescription}>
            {data.title}
          </h1>
          {showDescription && (
            <div className="bg-[#101010] opacity-90 z-10 w-[360px] flex items-center">
              <p>{data.text}</p>
            </div>
          )}
        </div>
        <Image src={bulb} alt="bulb" className="z-10 w-[56px] h-[56px] absolute top-[176px] right-10" />
      </div>
      <Image src={urlForImage(data.image)} alt="background" width={100} height={100} className="cover z-[-1] grayscale bg-cover w-full h-full" />
    </div>
  );
}

export default Card;
