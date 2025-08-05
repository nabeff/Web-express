import Link from 'next/link';
import React from 'react';

export default function SplitButton({
    text,
    imgSrc,
    href,
    color = "primary",  // default color is primary
    className = "",
    iconClassName  // REQUIRED prop
}: {
    text: string;
    imgSrc: string;
    href: string;
    color?: "primary" | "secondary";
    className?: string;
    iconClassName: string;  // REQUIRED
}) {
    const bgColor = color === "primary" ? "primary-color" : "secondary-color";
    const textColor = color === "primary" ? "text-white" : "text-black";

    return (
        <button className={`flex items-center relative group ${className}`}>
            {/* Bullet + Text */}
            <Link
                href={href}
                className={`flex items-center gap-2 ${bgColor} rounded-[2rem] h-[2.5rem] px-[1.3rem]`}>
                <span className={`${textColor}  text-base`}>{text}</span>
            </Link>

            {/* Circle Icon */}
            <span className={`transform -translate-x-[8px] transition-all duration-300 group-hover:translate-x-[6px] group-hover:rotate-220 h-[2.5rem] w-[2.5rem] ${bgColor} rounded-full flex items-center justify-center`}>
                <img src={imgSrc} alt="icon" className={`${iconClassName}`} />
            </span>
        </button>
    );
}
