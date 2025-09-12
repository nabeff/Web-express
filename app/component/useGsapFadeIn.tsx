"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fade+lift on first reveal. Use on any container. */
export function useGsapFadeIn<T extends HTMLElement>(
  opts: { y?: number; duration?: number; delay?: number } = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: opts.y ?? 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: opts.duration ?? 0.8,
          delay: opts.delay ?? 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [opts.y, opts.duration, opts.delay]);

  return ref;
}
