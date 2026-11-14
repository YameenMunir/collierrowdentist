import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { PRACTICE } from "@/lib/site";

export default function FloatingActions() {
  return (
    <>
    <button type="button" className="totop" id="totop" aria-label="Back to top" tabIndex={-1}>
      <svg className="totop-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22.5" />
        <circle className="ring-fill" cx="24" cy="24" r="22.5" pathLength={100} />
      </svg>
      <svg className="totop-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" />
      </svg>
    </button>
    <nav className="mbar" aria-label="Quick contact">
      <a href={PRACTICE.tel}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4h3.5l2 5-2.4 1.5a11 11 0 0 0 5.4 5.4L15 13.5l5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
        Call
      </a>
      <a href={PRACTICE.maps.directions} target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
        Directions
      </a>
      <Link href={ROUTES.contact.path}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6.5 12 13l8.5-6.5" />
        </svg>
        Enquire
      </Link>
    </nav>
    </>
  );
}
