import Link from "next/link";
import HoursList from "./HoursList";
import Logo from "./Logo";
import OpenStatus from "./OpenStatus";
import { FOOTER_PATIENTS, FOOTER_TREATMENTS, LEGAL_LINKS, type NavItem } from "@/lib/navigation";
import { ROUTES } from "@/lib/routes";
import { PRACTICE } from "@/lib/site";

function LinkColumn({ title, links, delay }: { title: string; links: NavItem[]; delay: string }) {
  return (
    <nav className="fcol" aria-label={title} data-reveal style={{ "--d": delay }}>
      <h4>{title}</h4>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

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
              Call <span className="num">{PRACTICE.phone}</span> for an emergency appointment. Out of hours, call NHS 111.
            </p>
          </div>
          <a className="btn" href={PRACTICE.tel}>
            Call {PRACTICE.phone} <span className="arr" aria-hidden="true"></span>
          </a>
        </div>
      </div>

      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand" data-reveal>
            <Logo className="on-navy" />
            <p className="ftag">Family dentistry with specialist orthodontic and root canal care, on Collier Row Road.</p>
            <a className="fphone num" href={PRACTICE.tel}>
              {PRACTICE.phone}
            </a>
            <address>
              {PRACTICE.address.street}
              <br />
              {PRACTICE.address.locality}
            </address>
            <a className="femail" href={PRACTICE.mailto}>
              {PRACTICE.email}
            </a>
            <OpenStatus />
            <Link className="tlink fdir" href={ROUTES.location.path}>
              View map &amp; directions
            </Link>
          </div>

          <LinkColumn title="Treatments" links={FOOTER_TREATMENTS} delay="0.08s" />
          <LinkColumn title="Patients" links={FOOTER_PATIENTS} delay="0.16s" />

          <div className="fcol fhours" data-reveal style={{ "--d": "0.24s" }}>
            <h4>Opening hours</h4>
            <HoursList compact />
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="fbase">
          <p className="fcopy">
            <span>
              © <span id="year">2026</span> {PRACTICE.name}
            </span>
            <span className="fcredit">
              Concept design by{" "}
              <a href="https://yameenmunir.com" target="_blank" rel="noopener">
                Yameen Munir
              </a>
            </span>
          </p>
          <ul>
            {LEGAL_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
