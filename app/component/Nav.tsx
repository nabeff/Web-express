"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import AnimatedLine from "./AnimatedLine";
import LinkHover from "./LinkHover";
import Image from "next/image";
import SplitButton from "./SplitButton";

const Nav = () => {
  const router = useTransitionRouter();

  const routes = [
    { label: "Services", url: "/services", badgeNumber: 13 },  // Add badgeNumber here
    { label: "Work", url: "/work" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" },
  ];
  

  const handleClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

  return (
    <nav className="flex justify-between p-8  items-center">
      
      <div className="flex gap-10 items-end">
        <Link href="/" className="text-3xl body-medium">
        WebExpress.
        </Link>

      </div>

      <div className="flex gap-[100px] items-center">
      <div className="flex gap-6  text-[16px] ">
      {routes.map((route) => (
          <LinkHover
            key={route.label}
            href={route.url}
            label={route.label}
            badgeNumber={route.badgeNumber}  // Pass it here
            className="body-light"
            onClick={handleClick(route.url)}
          />
        ))}
      </div>

      <SplitButton   text="Start a Project" imgSrc="/compass.svg" href="/about"  color="secondary" iconClassName="w-8 h-8" />

      </div>
    </nav>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Nav;
