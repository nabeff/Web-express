// components/OvertakerMarquee.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  text?: string;
  travelVW?: number; // tune how far the lines travel (in vw). Higher = faster.
  className?: string;
};

export default function OvertakerMarquee({
  text = "Overtake Time With Us",
  travelVW = 25,
  className = "",
}: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Progress for this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xTop = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${travelVW}vw`, `${travelVW}vw`]
  );

  const xBottom = useTransform(
    scrollYProgress,
    [0, 1],
    [`${travelVW}vw`, `-${travelVW}vw`]
  );

  // Row with circle between each text
  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-[5rem] px-4 md:px-8"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <React.Fragment key={i}>
          <span className="whitespace-nowrap">{text}</span>
          <div className="h-[30px] w-[30px] rounded-full bg-black" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className=" text-black">
      <div className="flex justify-between items-center p-10">
        <p>modern</p>
        <p>high quality</p>
        <p>creative</p>
      </div>

      <div
        ref={sectionRef}
        className={`relative w-full overflow-hidden ${className}`}
      >
        {/* TOP LINE */}
        <div className="relative">
          <motion.h1
            style={{ x: xTop }}
            className="flex text-3xl md:text-6xl lg:text-9xl font-bold tracking-tight"
          >
            <Row />
            <Row ariaHidden />
          </motion.h1>
        </div>

        {/* BOTTOM LINE */}
        <div className="relative mt-8 md:mt-12">
          <motion.h1
            style={{ x: xBottom }}
            className="flex text-3xl md:text-6xl lg:text-9xl font-bold tracking-tight"
          >
            <Row />
            <Row ariaHidden />
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
