import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
    <footer className="footer">
      <div className="urgent">
        <div className="wrap">
          <div>
            <h2>
              In dental
              {" "}
              <em>
                pain?
              </em>
            </h2>
            <p>
              Call
              {" "}
              <span className="num">
                01708 728715
              </span>
              {" "}
              for an emergency appointment. Out of hours, call NHS 111.
            </p>
          </div>
          <a className="btn" href="tel:+441708728715">
            Call 01708 728715
            {" "}
            <span className="arr" aria-hidden="true"></span>
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Link className="logo on-navy" href="/">
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
            <p>
              Family dentistry with specialist orthodontic and root canal care, on Collier Row Road.
            </p>
          </div>
          <div>
            <h4>
              Treatments
            </h4>
            <ul>
              <li>
                <Link href="/treatments">
                  All treatments
                </Link>
              </li>
              <li>
                <Link href="/orthodontics">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/root-canal">
                  Root canal treatment
                </Link>
              </li>
              <li>
                <Link href="/treatment-implants">
                  Dental implants
                </Link>
              </li>
              <li>
                <Link href="/treatment-dentures">
                  Dentures
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>
              Opening hours
            </h4>
            <ul className="hours compact">
              <li data-day="0">
                <span>
                  Monday
                </span>
                <span className="num">
                  9am–5pm
                </span>
              </li>
              <li data-day="1">
                <span>
                  Tuesday
                </span>
                <span className="num">
                  9am–5pm
                </span>
              </li>
              <li data-day="2">
                <span>
                  Wednesday
                </span>
                <span className="num">
                  9am–5pm
                </span>
              </li>
              <li data-day="3">
                <span>
                  Thursday
                </span>
                <span className="num">
                  9am–5pm
                </span>
              </li>
              <li data-day="4">
                <span>
                  Friday
                </span>
                <span className="num">
                  9am–5pm
                </span>
              </li>
              <li data-day="5">
                <span>
                  Saturday
                </span>
                <span className="num">
                  Closed
                </span>
              </li>
              <li data-day="6">
                <span>
                  Sunday
                </span>
                <span className="num">
                  Closed
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4>
              Patients
            </h4>
            <ul>
              <li>
                <Link href="/prices">
                  Prices
                </Link>
              </li>
              <li>
                <Link href="/orthodontics#nhs">
                  NHS orthodontics
                </Link>
              </li>
              <li>
                <Link href="/referrals">
                  Referrals
                </Link>
              </li>
              <li>
                <Link href="/patient-information">
                  Patient information
                </Link>
              </li>
              <li>
                <Link href="/team">
                  Our team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>
              Contact
            </h4>
            <ul>
              <li>
                21 Collier Row Road
                <br />
                Collier Row, Romford RM5 3NR
              </li>
              <li className="num">
                <a href="tel:+441708728715">
                  01708 728715
                </a>
              </li>
              <li>
                collierrowdental@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="endmark" aria-hidden="true">
        Collier Row
      </div>
      <div className="wrap">
        <div className="fbase">
          <span>
            ©
            {" "}
            <span id="year">
              2026
            </span>
            {" "}
            Collier Row Dental Practice
            {" · "}
            Concept design by
            {" "}
            <a href="https://yameenmunir.com" target="_blank" rel="noopener">
              Yameen Munir
            </a>
          </span>
          <ul>
            <li>
              <Link href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/privacy#cookies">
                Cookies
              </Link>
            </li>
            <li>
              <Link href="/privacy#accessibility">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
