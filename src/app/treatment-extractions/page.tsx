import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Tooth Extractions in Collier Row | Collier Row Dental Practice" },
  description: "Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out.",
  openGraph: { title: "Tooth Extractions in Collier Row | Collier Row Dental Practice", description: "Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out.", images: ["/img/hero.webp"] },
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
        "name": "Dental extractions"
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
            <img decoding="async" src="/img/treatment.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                  Dental extractions
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Treatment
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Dental extractions
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out.
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
                  Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out.
                </p>
                <p className="callout" data-reveal="">
                  <span>
                    If the tooth is complicated to remove, or your medical history carries another risk, your dentist may refer you to hospital to have it removed by specialists.
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
                        Discussing your options
                      </h3>
                      <p>
                        Your dentist explains any options that may save the tooth, how the space could be filled afterwards, and the risks after removal, including bleeding, bruising, swelling, discomfort and infection of the socket.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Numbing the area
                      </h3>
                      <p>
                        Your dentist makes sure you are numb. You will feel pushing, pulling and pressure, but there should be no pain. If it does hurt, say so and your dentist will help.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Aftercare
                      </h3>
                      <p>
                        Your dentist makes sure the bleeding has stopped and explains how to look after the area. Following this carefully helps it heal faster. If you have any concerns afterwards, contact the practice.
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
                  Extractions are Band 2 treatment on the NHS.
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
