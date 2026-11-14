import Link from "next/link";
import type { ReactNode } from "react";
import { trailFor, type RouteKey } from "@/lib/routes";

interface PageHeroProps {
  /** Which page this is; drives the breadcrumb trail. */
  route: RouteKey;
  /** Background photo, e.g. "/img/xray.webp". */
  image: string;
  /** CSS object-position for the photo. */
  position?: string;
  /** Small label above the title. */
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
}

/** The cinematic page header shared by every inner page: photo, letterbox, breadcrumbs, title and lead. */
export default function PageHero({ route, image, position = "50% 40%", eyebrow, title, lead }: PageHeroProps) {
  const trail = trailFor(route);
  const current = trail[trail.length - 1];
  return (
    <section className="scene-hero" aria-labelledby="ptitle">
      <div className="bg" aria-hidden="true">
        <img decoding="async" src={image} alt="" style={{ objectPosition: position }} fetchPriority="high" />
      </div>
      <div className="letterbox top" aria-hidden="true"></div>
      <div className="letterbox bot" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <div className="vignette" aria-hidden="true"></div>
      <div className="wrap">
        <nav aria-label="Breadcrumb" style={{ "--i": "0" }}>
          <ol className="crumbs">
            {trail.slice(0, -1).map((c) => (
              <li key={c.path}>
                <Link href={c.path}>{c.name}</Link>
              </li>
            ))}
            <li aria-current="page">{current.name}</li>
          </ol>
        </nav>
        <p className="scene-no" style={{ "--i": "1" }}>
          {eyebrow}
        </p>
        <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
          {title}
        </h1>
        <p className="lead" style={{ "--i": "3" }}>
          {lead}
        </p>
      </div>
    </section>
  );
}
