import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HoverLinkIcon({
  href,
  label,
  imgSrc,
  width,
  height,
  className = "",
}: {
  href: string;
  label: string;
  imgSrc: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <li className="link__content group flex items-center gap-2">
      <span className="link__text">
        <Link href={href} className={`${className}`}>{label}</Link>
      </span>

      <span className="link__icon">
        <span className="link__arrow group-hover:animate-arrow-hover">
          <Image src={imgSrc} alt="icon" className="arrow-right" width={width} height={height}/>
        </span>

        <span className="link__arrow link__arrow_clone group-hover:animate-arrow-hover">
          <Image src={imgSrc} alt="icon" className="arrow-right" width={width} height={height}/>
        </span>
      </span>
    </li>
  );
}
