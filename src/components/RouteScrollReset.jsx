"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // force top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
