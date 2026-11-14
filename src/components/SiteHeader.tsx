import Link from "next/link";
import NavLink from "./NavLink";

export default function SiteHeader() {
  return (
    <>
    <header className="header on-hero" id="header">
      <div className="wrap">
        <Link className="logo " href="/" aria-label="Collier Row Dental Practice, home">
          <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="24" />
            <g transform="translate(10.2 10.6) scale(1.15)">
              <path d="M7.2 3C5 3 3.3 4.8 3.3 7.1c0 2 .8 3.4 1.4 5 .6 1.7.8 3.6 1.3 5.6.4 1.6.9 3.3 2 3.3 1.3 0 1.4-2 1.7-3.6.3-1.4.8-2.6 2.3-2.6s2 1.2 2.3 2.6c.3 1.6.4 3.6 1.7 3.6 1.1 0 1.6-1.7 2-3.3.5-2 .7-3.9 1.3-5.6.6-1.6 1.4-3 1.4-5C20.7 4.8 19 3 16.8 3c-1.8 0-2.8 1-4.8 1S9 3 7.2 3z" />
            </g>
          </svg>
          <span className="logo-word">
            <span className="l1">
              Collier Row
            </span>
            <span className="l2">
              Dental Practice
            </span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main">
          <ul>
            <li>
              <NavLink href="/treatments">
                Treatments
              </NavLink>
            </li>
            <li>
              <NavLink href="/orthodontics">
                Orthodontics
              </NavLink>
            </li>
            <li>
              <NavLink href="/team">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink href="/prices">
                Prices
              </NavLink>
            </li>
            <li>
              <NavLink href="/referrals">
                Referrals
              </NavLink>
            </li>
            <li>
              <NavLink href="/patient-information">
                Patient Info
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="hactions">
          <span className="hstatus">
            <p className="open-status hs" data-open-status="">
              <span className="sdot" aria-hidden="true"></span>
              <span className="stext">
                Monday to Friday, 9am–5pm
              </span>
            </p>
          </span>
          <button className="iconbtn theme" id="theme" type="button" aria-label="Switch to daylight mode">
            {" "}
            <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
            </svg>
            {" "}
            <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10z" />
            </svg>
            {" "}
          </button>
          <button className="iconbtn menubtn" id="menubtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div className="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden="true">
      <div className="drawer-top">
        <Link className="logo small" href="/" aria-label="Collier Row Dental Practice, home">
          <svg className="logo-mark" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="24" />
            <g transform="translate(10.2 10.6) scale(1.15)">
              <path d="M7.2 3C5 3 3.3 4.8 3.3 7.1c0 2 .8 3.4 1.4 5 .6 1.7.8 3.6 1.3 5.6.4 1.6.9 3.3 2 3.3 1.3 0 1.4-2 1.7-3.6.3-1.4.8-2.6 2.3-2.6s2 1.2 2.3 2.6c.3 1.6.4 3.6 1.7 3.6 1.1 0 1.6-1.7 2-3.3.5-2 .7-3.9 1.3-5.6.6-1.6 1.4-3 1.4-5C20.7 4.8 19 3 16.8 3c-1.8 0-2.8 1-4.8 1S9 3 7.2 3z" />
            </g>
          </svg>
          <span className="logo-word">
            <span className="l1">
              Collier Row
            </span>
            <span className="l2">
              Dental Practice
            </span>
          </span>
        </Link>
        <button className="iconbtn" type="button" data-close="" aria-label="Close menu">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <ul>
        <li>
          <NavLink style={{ "--i": "0" }} href="/treatments">
            Treatments
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "1" }} href="/orthodontics">
            Orthodontics
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "2" }} href="/team">
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "3" }} href="/prices">
            Prices
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "4" }} href="/referrals">
            Referrals
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "5" }} href="/patient-information">
            Patient Info
          </NavLink>
        </li>
        <li>
          <NavLink style={{ "--i": "6" }} href="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="drawer-foot">
        <p className="open-status dr" data-open-status="">
          <span className="sdot" aria-hidden="true"></span>
          <span className="stext">
            Monday to Friday, 9am–5pm
          </span>
        </p>
        <a className="num big" href="tel:+441708728715">
          01708 728715
        </a>
        <span>
          21 Collier Row Road, Collier Row, Romford RM5 3NR
        </span>
      </div>
    </div>
    </>
  );
}
