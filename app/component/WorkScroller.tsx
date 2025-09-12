"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div, section } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

export type WorkItem = {
  slug: string;
  title: string;
  description: string;
  cover: string;   // /public path or remote URL
  tags: string[];
};

export default function WorkScroller({ items }: { items: WorkItem[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const mm = ScrollTrigger.matchMedia({
      // Desktop/tablet: horizontal pinned scroll
      "(min-width: 768px)": () => {
        const update = () => {
          const totalScroll = track.scrollWidth - window.innerWidth;
          // guard
          if (totalScroll <= 0) return;

          // kill previous
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === container) st.kill();
          });

          gsap.set(track, { x: 0 });
          gsap.to(track, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${totalScroll}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        };

        // run + on resize
        update();
        const ro = new ResizeObserver(() => ScrollTrigger.refresh());
        ro.observe(track);
        window.addEventListener("resize", update);

        return () => {
          window.removeEventListener("resize", update);
          ro.disconnect();
        };
      },

      // Mobile: no pin, vertical flow
      "(max-width: 767px)": () => {
        // nothing — natural vertical layout
        return () => {};
      },
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (

    <div >
     

<div className="flex flex-col gap-10 items-start">
     <div className=" gap-4 p-10">
        <h1 className="text-7xl font-bold">Our Work</h1>
        </div>

      <div className=" mx-auto p-10 flex items-end gap-6 justify-between w-full">


        <div className="flex items-end gap-10">

          <div className="flex items-end gap-2">
          <h1 className="text-7xl font-bold">16</h1>
          <p className="text-sm">verified reviews</p>
          </div>

          <div className="flex items-end gap-2">
            <h1 className="text-7xl font-bold">50</h1>
            <p className="text-sm">completed projects</p>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-4xl w-[80%] ml-auto">Our works are a blend of innovative thinking and practical solutions.</p>
        </div>

        </div>

        </div>

        <section ref={containerRef} className="relative w-full">
          {/* Track that moves horizontally */}
          <div ref={trackRef} className="flex h-screen">
          {items.map((item) => (
      <article
        key={item.slug}
        className="work-slide relative w-[90vw] h-screen flex-shrink-0"
      >
        {/* Image area: 70% width, full height */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />


          <Link
            href={`/work/${item.slug}`}
            className="absolute bottom-0 right-0  max-w-[28rem] z-20
                          px-10 py-20 text-white flex flex-col gap-6"
                        >
                         
                          <div className="mt-3 flex flex-wrap gap-4">
                            {item.tags.map((t) => (
                              <span
                                key={t}
                                className=" items-center rounded-full border px-6 py-2 text-base"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
          </Link>

          <Link
            href={`/work/${item.slug}`}
            className="absolute left-0 bottom-0  z-20
                           px-10 py-20 text-white flex flex-col gap-6"
                        >
                          <h1 className="text-6xl font-medium tracking-tight">{item.title}</h1>
                          <p className=" text-lg w-[80%] ">
                            {item.description}
                          </p>                         
          </Link>
                
              </div>
            </article>
          ))}

          </div>
        </section>
    </div>
  );
}
