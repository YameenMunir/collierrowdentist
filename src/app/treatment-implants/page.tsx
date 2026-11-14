import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Dental Implants in Collier Row | Collier Row Dental Practice" },
  description: "Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth.",
  openGraph: { title: "Dental Implants in Collier Row | Collier Row Dental Practice", description: "Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth.", images: ["/img/hero.webp"] },
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
        "name": "Treatments",
        "item": "https://www.collierrowdentist.co.uk/treatments.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Dental implants"
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
            <img decoding="async" src="/img/xray.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                <li>
                  <Link href="/treatments">
                    Treatments
                  </Link>
                </li>
                <li aria-current="page">
                  Dental implants
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Treatment
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Dental implants
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap article">
            <aside className="toc" aria-label="On this page">
              <p className="label">
                On this page
              </p>
              <a href="#overview">
                Overview
              </a>
              <a href="#what-happens">
                What happens
              </a>
              <a href="#cost">
                Cost
              </a>
            </aside>
            <div className="prose">
              <section id="overview">
                <h2 data-reveal="">
                  Overview
                </h2>
                <p data-reveal="">
                  Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth.
                </p>
                <p className="callout" data-reveal="">
                  <span>
                    If you are keen to pursue this option, discuss it with your dentist, who can refer you to someone trained in implants. Procedures vary greatly from case to case.
                  </span>
                </p>
              </section>
              <section id="what-happens">
                <h2 data-reveal="">
                  What happens
                </h2>
                <ol className="steps">
                  <li data-reveal="">
                    <div>
                      <h3>
                        Assessment and referral
                      </h3>
                      <p>
                        Your dentist discusses whether implants suit you and refers you to a clinician trained in implant dentistry.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Placing the implant
                      </h3>
                      <p>
                        A surgical procedure fits the implant into the bone.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Healing
                      </h3>
                      <p>
                        The implant is left for a period of time so the bone can heal around it.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Fitting the new tooth
                      </h3>
                      <p>
                        After a few months the top of the implant is exposed, and work begins over a few visits to place the crown or bridge.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>
              <section id="cost">
                <h2 data-reveal="">
                  Cost
                </h2>
                <p data-reveal="">
                  Ask the practice about the cost of implant treatment for your case.
                  {" "}
                  <Link className="tlink" href="/prices">
                    See NHS charges
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </section>
        <section className="section tint" style={{ paddingBlock: "clamp(3rem,6vw,5rem)" }}>
          <div className="wrap">
            <p className="label brand" data-reveal="" style={{ marginBottom: "1.5rem" }}>
              Related
            </p>
            <div className="related">
              <Link href="/treatment-crowns" data-reveal="">
                <b>
                  Dental crowns
                </b>
                <span>
                  A crown is a metal or porcelain cap which sits over the tooth to either change the way it…
                </span>
              </Link>
              <Link href="/treatment-dentures" data-reveal="">
                <b>
                  Dentures
                </b>
                <span>
                  There are many options for replacing missing teeth. The most common is a denture (plate)…
                </span>
              </Link>
              <Link href="/treatments" data-reveal="">
                <b>
                  All treatments
                </b>
                <span>
                  General, restorative, cosmetic and specialist care.
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="scene-no" data-reveal="">
              Next scene
            </p>
            <h2 data-reveal="">
              Ready when
              {" "}
              <em>
                you are.
              </em>
            </h2>
            <p data-reveal="">
              Call the practice and the reception team will find a time that suits you.
            </p>
            <div className="btns" data-reveal="">
              <a className="btn btn-solid" href="tel:+441708728715">
                Call 01708 728715
                {" "}
                <span className="arr" aria-hidden="true"></span>
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
