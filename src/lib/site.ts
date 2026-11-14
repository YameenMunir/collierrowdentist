/**
 * Practice details: the single source of truth for the name, phone, email,
 * address and map links used across the header, footer, pages and metadata.
 */

/** Public URL of this build (used for metadata and structured data). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const ADDRESS_QUERY = "21 Collier Row Road, Romford RM5 3NR";

export const PRACTICE = {
  name: "Collier Row Dental Practice",
  /** The practice's real website (this build is a concept redesign of it). */
  website: "https://www.collierrowdentist.co.uk/",
  phone: "01708 728715",
  tel: "tel:+441708728715",
  email: "collierrowdental@gmail.com",
  mailto: "mailto:collierrowdental@gmail.com",
  /** International format, for structured data. */
  telephone: "+44 1708 728715",
  address: {
    street: "21 Collier Row Road",
    locality: "Collier Row, Romford RM5 3NR",
    town: "Romford",
    region: "Essex",
    postcode: "RM5 3NR",
    /** One-line form, as shown in the menu drawer. */
    full: "21 Collier Row Road, Collier Row, Romford RM5 3NR",
  },
  maps: {
    directions: "https://www.google.com/maps/dir/?api=1&destination=21+Collier+Row+Road+Romford+RM5+3NR",
    open: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`,
    embed: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&z=16&output=embed`,
  },
} as const;
