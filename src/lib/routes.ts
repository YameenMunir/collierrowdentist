/**
 * Site map: every page's URL, its breadcrumb label and where it sits in the
 * hierarchy. Breadcrumbs (visible and structured data) are derived from this,
 * so a page only has to say which route it is.
 */

interface RouteDef {
  path: string;
  /** Label used for this page in breadcrumbs. */
  crumb: string;
  /** Key of the parent page in ROUTES. */
  parent?: string;
}

export const ROUTES = {
  home: { path: "/", crumb: "Home" },

  treatments: { path: "/treatments", crumb: "Treatments", parent: "home" },
  crowns: { path: "/treatments/crowns", crumb: "Dental crowns", parent: "treatments" },
  dentures: { path: "/treatments/dentures", crumb: "Dentures", parent: "treatments" },
  extractions: { path: "/treatments/extractions", crumb: "Dental extractions", parent: "treatments" },
  implants: { path: "/treatments/implants", crumb: "Dental implants", parent: "treatments" },
  rootCanal: { path: "/treatments/root-canal", crumb: "Root canal treatment", parent: "treatments" },
  orthodontics: { path: "/orthodontics", crumb: "Orthodontics", parent: "home" },

  team: { path: "/team", crumb: "Our team", parent: "home" },
  prices: { path: "/prices", crumb: "Prices", parent: "home" },
  referrals: { path: "/referrals", crumb: "Referrals", parent: "home" },
  patientInfo: { path: "/patient-information", crumb: "Patient information", parent: "home" },
  location: { path: "/location", crumb: "Location", parent: "home" },
  contact: { path: "/contact", crumb: "Contact", parent: "home" },
  privacy: { path: "/privacy", crumb: "Privacy", parent: "home" },
} as const satisfies Record<string, RouteDef>;

export type RouteKey = keyof typeof ROUTES;

export interface Crumb {
  name: string;
  path: string;
}

/** Breadcrumb trail from Home down to (and including) the given page. */
export function trailFor(key: RouteKey): Crumb[] {
  const trail: Crumb[] = [];
  for (let k: RouteKey | undefined = key; k; k = (ROUTES[k] as RouteDef).parent as RouteKey | undefined) {
    trail.unshift({ name: ROUTES[k].crumb, path: ROUTES[k].path });
  }
  return trail;
}

/**
 * Old flat URLs from the first build, permanently redirected to their new place
 * under /treatments (wired up in next.config.ts).
 */
export const LEGACY_REDIRECTS: [from: string, to: string][] = [
  ["/treatment-crowns", ROUTES.crowns.path],
  ["/treatment-dentures", ROUTES.dentures.path],
  ["/treatment-extractions", ROUTES.extractions.path],
  ["/treatment-implants", ROUTES.implants.path],
  ["/root-canal", ROUTES.rootCanal.path],
];
