"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { createSite } from "@/lib/site-behavior";

/** Mounts the shared interactive behaviour once, and re-wires each page after navigation. */
export default function SiteBehavior() {
  const pathname = usePathname();
  const site = useRef<ReturnType<typeof createSite> | null>(null);

  useEffect(() => {
    site.current = createSite();
    return () => {
      site.current?.destroy();
      site.current = null;
    };
  }, []);

  useEffect(() => {
    site.current?.initPage();
  }, [pathname]);

  return null;
}
