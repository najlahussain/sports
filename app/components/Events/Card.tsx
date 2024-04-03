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
    <div className="w-[300px] h-[400px] bg-white relative overflow-hidden">
      <Image src={urlForImage(data.image)} alt="background" width={200} height={200} className="cover w-full h-full" />
    </div>
  );
}

export default Card;
