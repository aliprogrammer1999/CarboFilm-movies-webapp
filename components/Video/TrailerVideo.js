import React, { useEffect, useState } from "react";

function TrailerVideo({ videoData }) {
  console.log(videoData);
  return (
    <div className="w-max h-max p-3 rounded-md bg-black">
      <iframe
        src={`https://youtube.com/embed/${videoData.key}`}
        className="rounded-md w-[550px] h-[400px] md:w-[700px] md:h-[410px] lg:w-[1000px] lg:h-[500px] xl:h-[600px] xl:w-[1400px] "
      >
        alirg
      </iframe>
    </div>
  );
}

export default TrailerVideo;
