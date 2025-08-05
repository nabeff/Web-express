// hooks/useScrollTriggerSync.ts
"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function useScrollTriggerSync() {
  const pathname = usePathname();

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true); // Full re-measurement of triggers
    }, 200); // Slight delay after route change

    return () => clearTimeout(refreshTimeout);
  }, [pathname]);
}
