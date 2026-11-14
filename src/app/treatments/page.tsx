import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Dental Treatments in Collier Row | Collier Row Dental Practice" },
  description: "General, restorative, cosmetic and specialist dental treatments at Collier Row Dental Practice, including fillings, crowns, implants, dentures, braces and root canal treatment.",
  openGraph: { title: "Dental Treatments in Collier Row | Collier Row Dental Practice", description: "General, restorative, cosmetic and specialist dental treatments at Collier Row Dental Practice, including fillings, crowns, implants, dentures, braces and root canal treatment.", images: ["/img/hero.webp"] },
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
        "name": "Treatments"
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
            <img decoding="async" src="/img/consult.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                  Treatments
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Treatments
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Dental treatments in
              {" "}
              <em>
                Collier Row
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              We offer a wide range of treatments, from general dental services to more complex care. If the treatment you need is not listed, contact us and we will advise you on how to proceed.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <section id="general" className="tgroup">
              <h2 className="h3" data-reveal="">
                General and preventive
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/contact" aria-label="Tooth-coloured fillings: ask the practice">
                  <b>
                    Tooth-coloured fillings
                  </b>
                  <span>
                    Fillings that match your natural teeth
                  </span>
                </Link>
                <Link href="/contact" aria-label="Preventive dentistry: ask the practice">
                  <b>
                    Preventive dentistry
                  </b>
                  <span>
                    Care that stops problems before they start
                  </span>
                </Link>
                <Link href="/contact" aria-label="Hygienist services: ask the practice">
                  <b>
                    Hygienist services
                  </b>
                  <span>
                    Professional cleaning and gum care
                  </span>
                </Link>
                <Link href="/treatment-extractions">
                  <b>
                    Extractions
                  </b>
                  <span>
                    Careful removal when it is the right option
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href="/contact" aria-label="Sedation: ask the practice">
                  <b>
                    Sedation
                  </b>
                  <span>
                    Support for nervous patients
                  </span>
                </Link>
              </div>
            </section>
            <section id="restorative" className="tgroup">
              <h2 className="h3" data-reveal="">
                Restoring and replacing teeth
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/treatment-crowns">
                  <b>
                    Crowns &amp; bridges
                  </b>
                  <span>
                    Strengthen damaged teeth or fill gaps
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href="/treatment-implants">
                  <b>
                    Dental implants
                  </b>
                  <span>
                    A fixed, long-term replacement for missing teeth
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href="/treatment-dentures">
                  <b>
                    Dentures
                  </b>
                  <span>
                    Full and partial dentures, fitted for comfort
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
              </div>
            </section>
            <section id="cosmetic" className="tgroup">
              <h2 className="h3" data-reveal="">
                Cosmetic
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/contact" aria-label="Cosmetic dentistry: ask the practice">
                  <b>
                    Cosmetic dentistry
                  </b>
                  <span>
                    Improve the look of your smile
                  </span>
                </Link>
                <Link href="/contact" aria-label="Teeth whitening: ask the practice">
                  <b>
                    Teeth whitening
                  </b>
                  <span>
                    Professionally supervised whitening
                  </span>
                </Link>
              </div>
            </section>
            <section id="specialist" className="tgroup">
              <h2 className="h3" data-reveal="">
                Specialist care
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/orthodontics">
                  <b>
                    Orthodontics
                  </b>
                  <span>
                    Braces, aligners and lingual braces
                  </span>
                  <i>
                    Specialist
                  </i>
                </Link>
                <Link href="/root-canal">
                  <b>
                    Root canal treatment
                  </b>
                  <span>
                    Including complex cases with our endodontists
                  </span>
                  <i>
                    Specialist
                  </i>
                </Link>
              </div>
            </section>
            <p className="callout" data-reveal="" style={{ marginTop: "2.5rem" }}>
              <b>
                Not sure which treatment you need?
              </b>
              <span>
                Start with a check-up. Your dentist will explain your options and costs before any treatment begins.
              </span>
            </p>
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
