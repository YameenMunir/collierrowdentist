import Link from "next/link";
import { HOURS } from "@/lib/hours";

const TREATMENTS = [
  ["/treatments", "All treatments"],
  ["/orthodontics", "Orthodontics"],
  ["/root-canal", "Root canal treatment"],
  ["/treatment-implants", "Dental implants"],
  ["/treatment-crowns", "Crowns & bridges"],
  ["/treatment-dentures", "Dentures"],
  ["/treatment-extractions", "Extractions"],
] as const;

const PATIENTS = [
  ["/prices", "Prices"],
  ["/orthodontics#nhs", "NHS orthodontics"],
  ["/referrals", "Referrals"],
  ["/patient-information", "Patient information"],
  ["/patient-information#emergencies", "Emergencies"],
  ["/team", "Our team"],
  ["/location", "Location & map"],
  ["/contact", "Contact"],
] as const;

const fmt = (t: string) => {
  const [h0, m] = t.split(":").map(Number);
  return `${h0 % 12 || 12}${m ? ":" + String(m).padStart(2, "0") : ""}${h0 < 12 ? "am" : "pm"}`;
};

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="urgent">
        <div className="wrap">
          <div>
            <p className="scene-no">Urgent care</p>
            <h2>
              In dental <em>pain?</em>
            </h2>
            <p>
              Call <span className="num">01708 728715</span> for an emergency appointment. Out of hours, call NHS 111.
            </p>
          </div>
          <a className="btn" href="tel:+441708728715">
            Call 01708 728715 <span className="arr" aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand" data-reveal>
            <Link className="logo on-navy" href="/" aria-label="Collier Row Dental Practice, home">
              <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
                <circle cx="24" cy="24" r="24" />
                <g transform="translate(10.2 10.6) scale(1.15)">
                  <path d="M7.2 3C5 3 3.3 4.8 3.3 7.1c0 2 .8 3.4 1.4 5 .6 1.7.8 3.6 1.3 5.6.4 1.6.9 3.3 2 3.3 1.3 0 1.4-2 1.7-3.6.3-1.4.8-2.6 2.3-2.6s2 1.2 2.3 2.6c.3 1.6.4 3.6 1.7 3.6 1.1 0 1.6-1.7 2-3.3.5-2 .7-3.9 1.3-5.6.6-1.6 1.4-3 1.4-5C20.7 4.8 19 3 16.8 3c-1.8 0-2.8 1-4.8 1S9 3 7.2 3z" />
                </g>
              </svg>
              <span className="logo-word">
                <span className="l1">Collier Row</span>
                <span className="l2">Dental Practice</span>
              </span>
            </Link>
            <p className="ftag">Family dentistry with specialist orthodontic and root canal care, on Collier Row Road.</p>
            <a className="fphone num" href="tel:+441708728715">
              01708 728715
            </a>
            <address>
              21 Collier Row Road
              <br />
              Collier Row, Romford RM5 3NR
            </address>
            <a className="femail" href="mailto:collierrowdental@gmail.com">
              collierrowdental@gmail.com
            </a>
            <p className="open-status" data-open-status>
              <span className="sdot" aria-hidden="true"></span>
              <span className="stext">Monday to Friday, 9am–5pm</span>
            </p>
            <Link className="tlink fdir" href="/location">
              View map &amp; directions
            </Link>
          </div>

          <nav className="fcol" aria-label="Treatments" data-reveal style={{ "--d": "0.08s" }}>
            <h4>Treatments</h4>
            <ul>
              {TREATMENTS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="fcol" aria-label="Patients" data-reveal style={{ "--d": "0.16s" }}>
            <h4>Patients</h4>
            <ul>
              {PATIENTS.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="fcol fhours" data-reveal style={{ "--d": "0.24s" }}>
            <h4>Opening hours</h4>
            <ul className="hours compact">
              {HOURS.hours.map(([day, opens, closes], i) => (
                <li key={day} data-day={i}>
                  <span>{day}</span>
                  <span className="num">{opens && closes ? `${fmt(opens)}–${fmt(closes)}` : "Closed"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="fbase">
          <p className="fcopy">
            <span>
              © <span id="year">2026</span> Collier Row Dental Practice
            </span>
            <span className="fcredit">
              Concept design by{" "}
              <a href="https://yameenmunir.com" target="_blank" rel="noopener">
                Yameen Munir
              </a>
            </span>
          </p>
          <ul>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/privacy#cookies">Cookies</Link>
            </li>
            <li>
              <Link href="/privacy#accessibility">Accessibility</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
