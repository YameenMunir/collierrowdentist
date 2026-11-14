import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Prices | Collier Row Dental Practice",
  description: "NHS dental charges from April 2026 at Collier Row Dental Practice: Band 1, Band 2, Band 3 and urgent care, plus independent treatment.",
});

const jsonLd = [breadcrumbJsonLd("prices")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="prices"
          image="/img/implant.webp"
          position="50% 45%"
          eyebrow="Prices"
          title={<>Dental <em>prices</em></>}
          lead="NHS dental charges from April 2026, and how independent treatment is priced."
        />
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
        <CtaBand
          title={<>Questions about <em>cost?</em></>}
          text="Your dentist explains the cost of any treatment before it begins. Call us if you have questions."
        />
      </main>
    </>
  );
}
