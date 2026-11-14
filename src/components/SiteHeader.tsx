import Logo from "./Logo";
import NavLink from "./NavLink";
import OpenStatus from "./OpenStatus";
import { MAIN_NAV } from "@/lib/navigation";
import { PRACTICE } from "@/lib/site";

/** Sticky header with the main nav, plus the mobile menu drawer. Interactions live in site-behavior.ts. */
export default function SiteHeader() {
  return (
    <>
      <header className="header on-hero" id="header">
        <div className="wrap">
          <Logo />
          <nav className="nav" aria-label="Main">
            <ul>
              {MAIN_NAV.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hactions">
            <span className="hstatus">
              <OpenStatus className="hs" />
            </span>
            <button className="iconbtn theme" id="theme" type="button" aria-label="Switch to daylight mode">
              <svg className="sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
              </svg>
              <svg className="moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10z" />
              </svg>
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
          <Logo className="small" />
          <button className="iconbtn" type="button" data-close="" aria-label="Close menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <ul>
          {MAIN_NAV.map((item, i) => (
            <li key={item.href}>
              <NavLink style={{ "--i": String(i) }} href={item.href}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="drawer-foot">
          <OpenStatus className="dr" />
          <a className="num big" href={PRACTICE.tel}>
            {PRACTICE.phone}
          </a>
          <span>{PRACTICE.address.full}</span>
        </div>
      </div>
    </>
  );
}
