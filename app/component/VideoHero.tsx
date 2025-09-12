"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function VideoHero({
  videoSrc,
}: {
  videoSrc: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null); // Container ref for ScrollTrigger

  useEffect(() => {
    const video = videoRef.current;
    const videoContainer = videoContainerRef.current;
    if (!video || !videoContainer) return;

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger animation for the video container
    gsap.to(videoContainer, {
      scrollTrigger: {
        trigger: videoContainer,
        start: "top+=50% bottom", // Start a bit earlier when the top of the container hits 20% before the bottom of the viewport
        end: "bottom top", // When the bottom of the container hits the top of the viewport
        scrub: true, // Smooth animation linked to scroll
        markers: false, // Optionally enable markers for debugging
      },
      scale: 0.9, // Scale from 100% to 90%
    });

    // ScrollTrigger animation for the video itself to change border radius
    gsap.to(video, {
      scrollTrigger: {
        trigger: videoContainer,
        start: "top+=50% bottom", // Start a bit earlier when the top of the container hits 20% before the bottom of the viewport
        end: "bottom top", // When the bottom of the container hits the top of the viewport
        scrub: true, // Smooth animation linked to scroll
        markers: false, // Optionally enable markers for debugging
      },
      borderRadius: "4rem", // Border radius from 0 to 3rem on the video element itself
    });

    // return () => {
    //   ScrollTrigger.kill(); // Clean up ScrollTrigger on unmount
    // };
  }, []);

  return (
    <div className="relative pt-10 mb-8" ref={videoContainerRef}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        className="w-full h-full max-h-[700px] object-cover"
      />
    </div>
  );
}
