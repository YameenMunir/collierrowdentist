import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Dental Prices | Collier Row Dental Practice" },
  description: "NHS dental charges from April 2026 at Collier Row Dental Practice: Band 1, Band 2, Band 3 and urgent care, plus independent treatment.",
  openGraph: { title: "Dental Prices | Collier Row Dental Practice", description: "NHS dental charges from April 2026 at Collier Row Dental Practice: Band 1, Band 2, Band 3 and urgent care, plus independent treatment.", images: ["/img/hero.webp"] },
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
        "name": "Prices"
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
            <img decoding="async" src="/img/implant.webp" alt="" style={{ objectPosition: "50% 45%" }} fetchPriority="high" />
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
                  Prices
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Prices
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Dental
              {" "}
              <em>
                prices
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              NHS dental charges from April 2026, and how independent treatment is priced.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap prices">
            <div className="left">
              <h2 className="h2" data-reveal="">
                NHS
                {" "}
                <em>
                  charges
                </em>
              </h2>
              <p data-reveal="">
                You pay one charge for each course of treatment, even if it needs more than one visit.
              </p>
            </div>
            <div data-reveal="">
              <table className="ptable">
                <thead>
                  <tr>
                    <th scope="col">
                      Band
                    </th>
                    <th scope="col">
                      What it covers
                    </th>
                    <th scope="col">
                      Charge
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="band">
                        Band 1
                      </span>
                      <span className="sub">
                        Also urgent care
                      </span>
                    </td>
                    <td className="cov">
                      Check-up, examination and X-rays, or urgent and unscheduled care.
                    </td>
                    <td>
                      <span className="amt">
                        £27.90
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="band">
                        Band 2
                      </span>
                      <span className="sub">
                        Includes Band 1
                      </span>
                    </td>
                    <td className="cov">
                      Everything in Band 1, plus fillings, extractions and deep scaling.
                    </td>
                    <td>
                      <span className="amt">
                        £76.60
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="band">
                        Band 3
                      </span>
                      <span className="sub">
                        Lab work
                      </span>
                    </td>
                    <td className="cov">
                      Treatment that needs lab work, such as crowns and dentures.
                    </td>
                    <td>
                      <span className="amt">
                        £332.10
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pnotes">
                <p>
                  <b>
                    Free NHS treatment
                  </b>
                  You may be exempt from paying NHS charges if you receive certain benefits, are under 18, are 18 and in full-time education, or are pregnant or have had a baby in the last 12 months. Call the practice for details.
                </p>
                <p>
                  <b>
                    Independent treatment
                  </b>
                  Not all treatments are available on the NHS, for example cosmetic treatments. These prices are available on request.
                </p>
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
              Questions about
              {" "}
              <em>
                cost?
              </em>
            </h2>
            <p data-reveal="">
              Your dentist explains the cost of any treatment before it begins. Call us if you have questions.
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
