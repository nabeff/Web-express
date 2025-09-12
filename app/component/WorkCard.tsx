"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useGsapFadeIn } from "./useGsapFadeIn";
import TagPill from "./TagPill";

export type WorkItem = {
  slug: string;
  title: string;
  description: string;
  cover: string;     // public path or remote URL
  tags: string[];
  date?: string;     // optional
};

export default function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const ref = useGsapFadeIn<HTMLAnchorElement>({ delay: index * 0.04 });

  const onEnter = (el: HTMLAnchorElement) => {
    gsap.to(el.querySelector(".img-wrap"), { scale: 1.03, duration: 0.4, ease: "power2.out" });
    gsap.to(el.querySelector(".arrow"), { x: 4, duration: 0.3, ease: "power2.out" });
  };
  const onLeave = (el: HTMLAnchorElement) => {
    gsap.to(el.querySelector(".img-wrap"), { scale: 1.0, duration: 0.4, ease: "power2.out" });
    gsap.to(el.querySelector(".arrow"), { x: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <Link
      ref={ref}
      href={`/work/${item.slug}`}
      className="group block  overflow-hidden focus:outline-none focus:ring-2 focus:ring-black"
      onMouseEnter={(e) => onEnter(e.currentTarget)}
      onMouseLeave={(e) => onLeave(e.currentTarget)}
    >
      <div className="relative img-wrap aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          priority={index < 3}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl tracking-tight">{item.title}</h3>
          <span className="arrow inline-flex translate-x-0 transition-transform">↗</span>
        </div>

        <p className="text-sm md:text-base opacity-80 leading-relaxed">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {item.tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>
    </Link>
  );
}
