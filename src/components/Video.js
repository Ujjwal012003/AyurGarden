import React from 'react';
import video1 from './images/bg.mp4';

const Video = () => {
  return (
    <div className="relative w-full">
      {/* Video Section */}
      <video
        className="w-full h-auto vid"
        src={video1}
        autoPlay
        muted
        loop
        style={{
          position: 'relative', // Ensures video stays relative within its container
          top: '-50px',         // Adjust if necessary to overlap with the navbar
          objectFit: 'cover',   // Ensures the video scales properly
          height: '95vh',       // Adjust the height to be responsive
        }}
      ></video>
      <div className="absolute inset-x-0 bottom-0 w-full">
  <svg
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <defs>
      {/* Define the gradient directly in CSS */}
      <linearGradient id="tailwindGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>

    <path
      fill="url(#tailwindGradient)"  
      fillOpacity="1"
      stroke="green"       
      strokeWidth="2"     
      d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,218.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
    ></path>
  </svg>
</div>
    <div className="absolute inset-0 flex items-center justify-center text-customColor text-6xl font-bold ">
        Welcome To The Garden
      </div>    
    </div>
  );
};

export default Video;
