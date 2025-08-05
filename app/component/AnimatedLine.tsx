"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine({
  from = "left", // or "right"
  className = "",
}: {
  from?: "left" | "right";
  className?: string;
}) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.set(lineRef.current, {
      xPercent: from === "right" ? -100 : 100,
    });

    gsap.to(lineRef.current, {
      xPercent: 0,
      duration: 2,
      delay: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top center+=100",
        toggleActions: "play none none none",
      },
    });
  }, [from]);

  return (
    <div
      ref={lineRef}
      className={`h-[1px] w-full bg-white ${className}`}
    ></div>
  );
}