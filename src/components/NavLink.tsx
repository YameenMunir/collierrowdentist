"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/**
 * Nav link that marks itself as the current section (aria-current="true"),
 * so pages under /treatments/ (crowns, implants, root canal…) highlight "Treatments".
 */
function sectionFor(pathname: string): string {
  const p = pathname.replace(/\/$/, "") || "/";
  if (p.startsWith("/treatments/")) return "/treatments";
  return p;
}

export default function NavLink({ href, ...rest }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href.split("#")[0] : "";
  const current = sectionFor(pathname) === target;
  return <Link href={href} aria-current={current ? "true" : undefined} {...rest} />;
}
