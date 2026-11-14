import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Contact Collier Row Dental Practice | 01708 728715" },
  description: "Contact Collier Row Dental Practice at 21 Collier Row Road, Romford RM5 3NR. Telephone 01708 728715. Parking, buses and directions.",
  openGraph: { title: "Contact Collier Row Dental Practice | 01708 728715", description: "Contact Collier Row Dental Practice at 21 Collier Row Road, Romford RM5 3NR. Telephone 01708 728715. Parking, buses and directions.", images: ["/img/hero.webp"] },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.collierrowdentist.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Collier Row Dental Practice",
    "url": "https://www.collierrowdentist.co.uk/",
    "telephone": "+44 1708 728715",
    "email": "collierrowdental@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 Collier Row Road",
      "addressLocality": "Romford",
      "addressRegion": "Essex",
      "postalCode": "RM5 3NR",
      "addressCountry": "GB"
    },
    "areaServed": "Collier Row, Romford",
    "medicalSpecialty": [
      "Orthodontic",
      "Endodontic"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <section className="scene-hero" aria-labelledby="ptitle">
          <div className="bg" aria-hidden="true">
            <img decoding="async" src="/img/treatment.webp" alt="" style={{ objectPosition: "50% 35%" }} fetchPriority="high" />
          </div>
          <div className="letterbox top" aria-hidden="true"></div>
          <div className="letterbox bot" aria-hidden="true"></div>
          <div className="grain" aria-hidden="true"></div>
          <div className="vignette" aria-hidden="true"></div>
          <div className="wrap">
            <nav aria-label="Breadcrumb" style={{ "--i": "0" }}>
              <ol className="crumbs">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Contact
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Contact
              {" "}
              <em>
                the practice
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              Call, email or visit us at 21 Collier Row Road. For anything urgent, please call.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="contact-grid">
              <div className="frame zoom" data-reveal="">
                <img decoding="async" src="/img/surgery.webp" width="1000" height="667" alt="A bright, modern dental treatment room with a blue dental chair" loading="lazy" />
              </div>
              <div data-reveal="">
                <div className="details">
                  <div className="drow">
                    <span className="label">
                      Address
                    </span>
                    <address className="big">
                      21 Collier Row Road
                      <br />
                      Collier Row
                      <br />
                      Romford RM5 3NR
                    </address>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Telephone
                    </span>
                    <div>
                      <span className="big num">
                        01708 728715
                      </span>
                      <button className="copybtn" type="button" data-copy="01708 728715">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Email
                    </span>
                    <div>
                      <span className="big" style={{ fontSize: "1.1rem" }}>
                        collierrowdental@gmail.com
                      </span>
                      <button className="copybtn" type="button" data-copy="collierrowdental@gmail.com">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Hours
                    </span>
                    <div>
                      <p className="open-status in-list" data-open-status="">
                        <span className="sdot" aria-hidden="true"></span>
                        <span className="stext">
                          Monday to Friday, 9am–5pm
                        </span>
                      </p>
                      <ul className="hours">
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
                  </div>
                  <div className="drow">
                    <span className="label">
                      Parking
                    </span>
                    <div>
                      Free off-street parking nearby, and a paid car park near Tesco.
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Buses
                    </span>
                    <div>
                      Stop ET (Collier Row Library): 247 from Barkingside, 252 from Collier Row, 294 from Noak Hill
                      <br />
                      Stop WF (Collier Row / Clockhouse Lane): 247 from Romford, 252 from Hornchurch, 294 from Havering
                    </div>
                  </div>
                </div>
                <div className="vbtns">
                  <a className="btn btn-solid" href="tel:+441708728715">
                    Call the practice
                    {" "}
                    <span className="arr" aria-hidden="true"></span>
                  </a>
                  <a className="btn btn-line" href={"https://www.google.com/maps/dir/?api=1&destination=21+Collier+Row+Road+Romford+RM5+3NR"} target="_blank" rel="noopener">
                    Get directions
                  </a>
                </div>
              </div>
            </div>
            <div className="enquire">
              <div className="left">
                <h2 className="h2" style={{ fontSize: "clamp(1.7rem,1.6vw + 1rem,2.4rem)" }} data-reveal="">
                  Send an
                  {" "}
                  <em>
                    enquiry
                  </em>
                </h2>
                <p data-reveal="">
                  For general questions. An enquiry does not book an appointment, so please do not include medical details. For anything urgent, call us.
                </p>
              </div>
              <form className="form" id="enquiry" noValidate data-reveal="">
                <div className="row">
                  <div className="field">
                    <label htmlFor="f-name">
                      Full name
                    </label>
                    <input id="f-name" autoComplete="name" required />
                    <span className="err" id="e-name"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">
                      Phone
                    </label>
                    <input id="f-phone" type="tel" autoComplete="tel" />
                    <span className="err" id="e-phone"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="f-email">
                      Email
                    </label>
                    <input id="f-email" type="email" autoComplete="email" required />
                    <span className="err" id="e-email"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="f-reason">
                      Reason
                    </label>
                    <select id="f-reason" required>
                      <option value="">
                        Choose one
                      </option>
                      <option>
                        Registering as a patient
                      </option>
                      <option>
                        Appointment question
                      </option>
                      <option>
                        Orthodontics
                      </option>
                      <option>
                        Root canal referral
                      </option>
                      <option>
                        Prices
                      </option>
                      <option>
                        Something else
                      </option>
                    </select>
                    <span className="err" id="e-reason"></span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-msg">
                    Message
                  </label>
                  <textarea id="f-msg" required></textarea>
                  <span className="err" id="e-msg"></span>
                </div>
                <label className="check" htmlFor="f-privacy">
                  <input id="f-privacy" type="checkbox" />
                  <span>
                    I agree to the practice using these details to reply to my enquiry, as described in the
                    {" "}
                    <Link href="/privacy">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
                <span className="err" id="e-privacy"></span>
                <div>
                  <button className="btn btn-solid" type="submit">
                    Send enquiry
                    {" "}
                    <span className="arr" aria-hidden="true"></span>
                  </button>
                </div>
                <p className="status" id="status" role="status" hidden></p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
