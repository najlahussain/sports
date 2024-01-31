import React from "react";

const Video = () => {
  return ( 
    <div  className='text-white'>
      {/* sports separator */}
      <div>
        <h1 className="text-[247px] animated-text">SPORTS
        <span className="text-[#42FB14]">&ndash;</span>
        SPORTS PAVILION</h1>
      </div>
      {/* video */}
      <video width="100%" height="auto" controls>
          <source src="your_video_url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div></div>
    </div>

    )
};

export default Video;
