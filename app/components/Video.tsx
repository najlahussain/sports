import React from "react";
import { goblin } from "../css/fonts";

const Video = () => {
  return ( 
    <div>
      {/* sports separator */}
      <div className="sm:w-[1440px] text-white">
        <h1 className="text-[120px] sm:text-[247px] animated-text font-bold">SPORTS
        <span className="text-[#42FB14]">&ndash;</span>
        SPORTS PAVILION</h1>
      </div>
      {/* video */}
      <div className="flex justify-center">
      <div className="w-full sm:w-2/3 h-auto">
        <video width="100%" height="auto" controls>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </div>

    )
};

export default Video;
