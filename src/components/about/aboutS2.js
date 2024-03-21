import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";
const AboutS2 = () => {
  const { lists } = useSelector((state) => state.videoList);
  const aboutList = lists && lists.filter((list) => list.type === "about");
  return (
    <div className="about_s2">
      <img src="/images/about_s2_bg.jpg" alt="" />
      <div className="video_box">
        <YouTube
          videoId={aboutList && aboutList.length > 0 && aboutList[0].file_id}
          opts={{
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
              controls: 0,
              mute: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
          style={{}}
        />
      </div>
    </div>
  );
};

export default AboutS2;
