import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tooth Extractions in Collier Row | Collier Row Dental Practice",
  description: "Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out.",
});

const jsonLd = [breadcrumbJsonLd("extractions")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="extractions"
          image="/img/treatment.webp"
          eyebrow="Treatment"
          title="Dental extractions"
          lead="Sometimes, despite every best effort, a tooth cannot be saved. Especially if it is causing pain or discomfort, it is best to have it taken out."
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
        <RelatedTreatments items={["crowns", "implants"]} />
        <CtaBand />
      </main>
    </>
  );
}
