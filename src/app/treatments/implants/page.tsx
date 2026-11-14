import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Implants in Collier Row | Collier Row Dental Practice",
  description: "Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth.",
});

const jsonLd = [breadcrumbJsonLd("implants")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="implants"
          image="/img/xray.webp"
          eyebrow="Treatment"
          title="Dental implants"
          lead="Implants are screws placed in the bone, on which crowns or dentures can be fitted to replace missing teeth."
        />
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
        <RelatedTreatments items={["crowns", "dentures"]} />
        <CtaBand />
      </main>
    </>
  );
}
