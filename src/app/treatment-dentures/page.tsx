import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Dentures in Collier Row | Collier Row Dental Practice" },
  description: "There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can ",
  openGraph: { title: "Dentures in Collier Row | Collier Row Dental Practice", description: "There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can ", images: ["/img/hero.webp"] },
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
        "name": "Dentures"
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
            <img decoding="async" src="/img/surgery.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                  Dentures
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Treatment
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Dentures
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can advise you on the best type for you.
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
              <a href="#after">
                After treatment
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
                  There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can advise you on the best type for you.
                </p>
                <p className="callout" data-reveal="">
                  <span>
                    These are the usual stages in making a denture. They vary between patients, and some may not be needed depending on how many teeth are missing.
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
                        First moulds
                      </h3>
                      <p>
                        Your dentist takes moulds of your teeth and gums with a material called alginate. Our denture laboratory turns these into stone models, and may make a wax block to record your bite and a custom tray for more accurate impressions.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Second moulds
                      </h3>
                      <p>
                        The custom tray is used to take a more accurate mould, in a similar way to the first appointment.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Recording your bite
                      </h3>
                      <p>
                        The wax blocks are adjusted so your teeth bite together comfortably. Your dentist also chooses the colour of the teeth with you.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Trying the teeth
                      </h3>
                      <p>
                        The teeth are set on a wax base and tried in your mouth. Your dentist checks the fit and bite, and you can check the colour and position. Further changes may mean a second try-in.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Fitting
                      </h3>
                      <p>
                        You take your denture home. Your dentist checks the fit, bite and appearance, and explains how to look after the denture and your remaining teeth.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>
              <section id="after">
                <h2 data-reveal="">
                  After treatment
                </h2>
                <p data-reveal="">
                  A new denture will feel strange at first. Eating, drinking and speaking may be a little tricky, but this improves as your mouth adapts. If any areas become sore, which is not uncommon, your dentist can adjust the denture to make it more comfortable.
                </p>
              </section>
              <section id="cost">
                <h2 data-reveal="">
                  Cost
                </h2>
                <p data-reveal="">
                  Dentures are Band 3 treatment on the NHS, as they need lab work.
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
              <Link href="/treatment-implants" data-reveal="">
                <b>
                  Dental implants
                </b>
                <span>
                  Implants are screws placed in the bone, on which crowns or dentures can be fitted to…
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
