"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "1000",
    heigth: "250",
  };

  return (
    <div className="flex justify-center items-center pt-5">
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        
        opts={option}
      />
    </div>
  );
};

export default VideoPlayer;
