"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine({
  from = "left", 
  className = "",
}: {
  from?: "left" | "right";
  className?: string;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const previousPath = sessionStorage.getItem("previousPath");

    if (previousPath && previousPath !== pathname) {
      setDelay(3);
    } else {
      setDelay(0);
    }
  }, [pathname]);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.set(lineRef.current, {
      xPercent: from === "right" ? -100 : 100,
    });

    gsap.to(lineRef.current, {
      xPercent: 0,
      duration: 2,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: lineRef.current,
        start: "bottom bottom",
        toggleActions: "play none none none",
      },
    });
  }, [from, delay]);

  return (
    <div
      ref={lineRef}
      className={`h-[1px] w-full bg-black ${className}`}
    ></div>
  );
}
