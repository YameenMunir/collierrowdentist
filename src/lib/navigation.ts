/** Link lists for the header, menu drawer and footer. */
import { ROUTES } from "./routes";

export interface NavItem {
  href: string;
  label: string;
}

/** Main navigation: shown in the header on desktop and in the menu drawer on mobile. */
export const MAIN_NAV: NavItem[] = [
  { href: ROUTES.treatments.path, label: "Treatments" },
  { href: ROUTES.orthodontics.path, label: "Orthodontics" },
  { href: ROUTES.team.path, label: "Our Team" },
  { href: ROUTES.prices.path, label: "Prices" },
  { href: ROUTES.referrals.path, label: "Referrals" },
  { href: ROUTES.patientInfo.path, label: "Patient Info" },
  { href: ROUTES.location.path, label: "Location" },
  { href: ROUTES.contact.path, label: "Contact" },
];

export const FOOTER_TREATMENTS: NavItem[] = [
  { href: ROUTES.treatments.path, label: "All treatments" },
  { href: ROUTES.orthodontics.path, label: "Orthodontics" },
  { href: ROUTES.rootCanal.path, label: "Root canal treatment" },
  { href: ROUTES.implants.path, label: "Dental implants" },
  { href: ROUTES.crowns.path, label: "Crowns & bridges" },
  { href: ROUTES.dentures.path, label: "Dentures" },
  { href: ROUTES.extractions.path, label: "Extractions" },
];

export const FOOTER_PATIENTS: NavItem[] = [
  { href: ROUTES.prices.path, label: "Prices" },
  { href: `${ROUTES.orthodontics.path}#nhs`, label: "NHS orthodontics" },
  { href: ROUTES.referrals.path, label: "Referrals" },
  { href: ROUTES.patientInfo.path, label: "Patient information" },
  { href: `${ROUTES.patientInfo.path}#emergencies`, label: "Emergencies" },
  { href: ROUTES.team.path, label: "Our team" },
  { href: ROUTES.location.path, label: "Location & map" },
  { href: ROUTES.contact.path, label: "Contact" },
];

export const LEGAL_LINKS: NavItem[] = [
  { href: ROUTES.privacy.path, label: "Privacy" },
  { href: `${ROUTES.privacy.path}#cookies`, label: "Cookies" },
  { href: `${ROUTES.privacy.path}#accessibility`, label: "Accessibility" },
];
