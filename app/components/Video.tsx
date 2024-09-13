import React from "react";

const Video = () => {
  return ( 
    <div className="sm:mt-0 mt-20">
      {/* sports separator */}
      <div className="w-screen text-white">
        {/* <h1 className="text-7xl sm:text-[247px] animated-text font-bold">SPORTS
        <span className="text-[#42FB14]">&ndash;</span>
        SPORTS PAVILION</h1> */}
      </div>
      {/* video */}
      <div className="flex justify-center">
      <div className="w-full h-auto">
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
