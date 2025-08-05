import React from 'react';

export default function VideoHero({
  videoSrc,
  title,
  description,
}: {
  videoSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative container m-auto overflow-hidden rounded-xl mb-8">
      {/* Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Absolute Info Block */}
      <div className="absolute top-[-2%]  left-[-1%] w-[25%] text-white body-primary bg-opacity-50 p-6 ">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
