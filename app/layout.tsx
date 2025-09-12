"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

// Font Configurations
const myFontRegular = localFont({
  src: "./fonts/OldschoolGrotesk_W-Regular.otf",
  weight: "400",
  variable: "--font-regular",
});

const myFontLight = localFont({
  src: "./fonts/OldschoolGrotesk_W-Light.woff2",
  weight: "300",
  variable: "--font-light",
});

const myFontMedium = localFont({
  src: "./fonts/OldschoolGrotesk_W-Book.woff2",
  weight: "500",
  variable: "--font-medium",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    sessionStorage.setItem("previousPath", pathname);
  }, [pathname]);

  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${myFontRegular.variable} ${myFontLight.variable} ${myFontMedium.variable}`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
