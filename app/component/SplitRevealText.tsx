"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function SplitRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    document.fonts.ready.then(() => {
      if (!textRef.current) return;

      gsap.set(textRef.current, { opacity: 1 });

      const split = new SplitType(textRef.current, {
        types: "lines,words",
        lineClass: "line-mask",
      });

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        delay: 1.2,
        duration: 0.8,
        stagger: 0.3,
        ease: "expo.out",
      });

      return () => {
        split.revert();
      };
    });
  }, []);

  return (
    <div
      ref={textRef}
      className={`split overflow-hidden text-balance ${className}`}
      style={{ opacity: 0 }}
    >
      {text}
    </div>
  );
}
