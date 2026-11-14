/** Page metadata and schema.org helpers, so each page only states what is unique to it. */
import type { Metadata } from "next";
import { trailFor, type RouteKey } from "./routes";
import { HOURS } from "./hours";
import { PRACTICE, SITE_URL } from "./site";

interface PageMeta {
  /** Full document title, used as-is (no template). */
  title: string;
  description: string;
  /** Open Graph image path. */
  image?: string;
}

export function pageMetadata({ title, description, image = "/img/hero.webp" }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    openGraph: { title, description, images: [image] },
  };
}

/** BreadcrumbList for a page, matching the visible breadcrumbs. The current page has no `item`. */
export function breadcrumbJsonLd(route: RouteKey) {
  const trail = trailFor(route);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(i < trail.length - 1 ? { item: new URL(c.path, SITE_URL).href } : {}),
    })),
  };
}

/** schema.org Dentist record for the practice (home and contact pages). Opening hours come from hours.ts. */
export function dentistJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: PRACTICE.name,
    url: PRACTICE.website,
    telephone: PRACTICE.telephone,
    email: PRACTICE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: PRACTICE.address.street,
      addressLocality: PRACTICE.address.town,
      addressRegion: PRACTICE.address.region,
      postalCode: PRACTICE.address.postcode,
      addressCountry: "GB",
    },
    areaServed: "Collier Row, Romford",
    medicalSpecialty: ["Orthodontic", "Endodontic"],
    openingHoursSpecification: HOURS.hours
      .filter(([, opens, closes]) => opens && closes)
      .map(([dayOfWeek, opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek, opens, closes })),
  };
}
