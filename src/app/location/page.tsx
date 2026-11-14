import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { HOURS } from "@/lib/hours";

const TITLE = "Location and Directions | Collier Row Dental Practice";
const DESCRIPTION =
  "Find Collier Row Dental Practice at 21 Collier Row Road, Romford RM5 3NR. Map, directions, parking, bus routes and opening hours.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, images: ["/img/hero.webp"] },
};

const ADDRESS_QUERY = "21 Collier Row Road, Romford RM5 3NR";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&z=16&output=embed`;
const MAP_OPEN = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_QUERY)}`;

const fmt = (t: string) => {
  const [h0, m] = t.split(":").map(Number);
  return `${h0 % 12 || 12}${m ? ":" + String(m).padStart(2, "0") : ""}${h0 < 12 ? "am" : "pm"}`;
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.collierrowdentist.co.uk/" },
      { "@type": "ListItem", position: 2, name: "Location" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <section className="scene-hero" aria-labelledby="ptitle">
          <div className="bg" aria-hidden="true">
            <img decoding="async" src="/img/hero.webp" alt="" style={{ objectPosition: "50% 30%" }} fetchPriority="high" />
          </div>
          <div className="letterbox top" aria-hidden="true"></div>
          <div className="letterbox bot" aria-hidden="true"></div>
          <div className="grain" aria-hidden="true"></div>
          <div className="vignette" aria-hidden="true"></div>
          <div className="wrap">
            <nav aria-label="Breadcrumb" style={{ "--i": "0" }}>
              <ol className="crumbs">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-current="page">Location</li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Location
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Find <em>the practice</em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              We are at 21 Collier Row Road, Romford, with free parking nearby and bus stops close to the door.
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="map-title">
          <div className="wrap">
            <h2 className="sr-only" id="map-title">
              Map and address
            </h2>
            <div className="contact-grid location-grid">
              <div className="map-frame" data-reveal="">
                <iframe
                  title="Map showing Collier Row Dental Practice, 21 Collier Row Road, Romford RM5 3NR"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
              <div data-reveal="">
                <div className="details">
                  <div className="drow">
                    <span className="label">Address</span>
                    <address className="big">
                      21 Collier Row Road
                      <br />
                      Collier Row
                      <br />
                      Romford RM5 3NR
                    </address>
                  </div>
                  <div className="drow">
                    <span className="label">Telephone</span>
                    <div>
                      <a className="big num" href="tel:+441708728715">
                        01708 728715
                      </a>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">Hours</span>
                    <div>
                      <p className="open-status in-list" data-open-status="">
                        <span className="sdot" aria-hidden="true"></span>
                        <span className="stext">Monday to Friday, 9am–5pm</span>
                      </p>
                      <ul className="hours">
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
                <div className="vbtns">
                  <a className="btn btn-solid" href={MAP_DIRECTIONS} target="_blank" rel="noopener">
                    Get directions <span className="arr" aria-hidden="true"></span>
                  </a>
                  <a className="btn btn-line" href={MAP_OPEN} target="_blank" rel="noopener">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section tint" aria-labelledby="getting-title">
          <div className="wrap">
            <div className="head">
              <div className="left">
                <p className="scene-no" data-reveal="">
                  Getting here
                </p>
                <h2 className="h2" id="getting-title">
                  Easy to reach, <em>by car or bus</em>
                </h2>
              </div>
              <p data-reveal="">Everything you need to plan your journey to Collier Row Road.</p>
            </div>
            <div className="pillars">
              <div data-reveal="">
                <span className="label">By car</span>
                <h3>Parking</h3>
                <p>Free off-street parking nearby, and a paid car park near Tesco.</p>
              </div>
              <div data-reveal="" style={{ "--d": ".08s" }}>
                <span className="label">By bus</span>
                <h3>Bus stops</h3>
                <p>
                  Stop ET (Collier Row Library): 247 from Barkingside, 252 from Collier Row, 294 from Noak Hill.
                  <br />
                  Stop WF (Collier Row / Clockhouse Lane): 247 from Romford, 252 from Hornchurch, 294 from Havering.
                </p>
              </div>
              <div data-reveal="" style={{ "--d": ".16s" }}>
                <span className="label">Access</span>
                <h3>Ground floor</h3>
                <p>The practice is on the ground floor.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <p className="scene-no" data-reveal="">
              Next scene
            </p>
            <h2 data-reveal="">
              Ready when <em>you are.</em>
            </h2>
            <p data-reveal="">Call the practice and the reception team will find a time that suits you.</p>
            <div className="btns" data-reveal="">
              <a className="btn btn-solid" href="tel:+441708728715">
                Call 01708 728715 <span className="arr" aria-hidden="true"></span>
              </a>
              <Link className="btn btn-line" href="/contact">
                Send an enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
