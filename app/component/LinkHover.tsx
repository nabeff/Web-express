"use client";

import Link from "next/link";

type LinkHoverProps = {
  href: string;
  label: string;
  badgeNumber?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default function LinkHover({
  href,
  label,
  badgeNumber,
  className = "",
  onClick,
}: LinkHoverProps) {
  return (
    <div className="relative inline-block"> {/* New parent container */}
      <Link
        href={href}
        className={`relative overflow-hidden inline-block ${className}`}
        onClick={onClick}
      >
        <span className="block relative transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.2,1)] hover:-translate-y-full">
          <span className="block">{label}</span>
          <span className="block absolute top-full left-0 underline">{label}</span>
        </span>
      </Link>

      {badgeNumber !== undefined && (
        <span className="absolute -top-[10px] -right-3 secondary-color text-black text-[10px] rounded-full h-3 w-5 flex items-center justify-center">
          {badgeNumber}
        </span>
      )}
    </div>
  );
}
