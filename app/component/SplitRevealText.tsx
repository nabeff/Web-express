"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function SplitRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    const previousPath = sessionStorage.getItem("previousPath");

    if (previousPath && previousPath !== pathname) {
      setDelay(3); // Navigated from another page
    } else {
      setDelay(0); // Same page or initial load
    }
  }, [pathname]);

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
        duration: 0.8,
        stagger: 0.3,
        ease: "expo.out",
        delay: delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: "bottom bottom",
          toggleActions: "play none none none",
        },
      });

      return () => {
        split.revert();
      };
    });
  }, [delay]);

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
