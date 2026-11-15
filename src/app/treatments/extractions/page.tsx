import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tooth Extractions in Collier Row | Collier Row Dental Practice",
  description: "Tooth extractions at Collier Row Dental Practice: what to expect, aftercare, when you may be referred to hospital, and the NHS cost (Band 2).",
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
            <ArticleAside
              facts={[
                {
                  label: "NHS cost",
                  value: (
                    <>
                      Band 2, £76.60{" "}
                      <Link className="sub" href={ROUTES.prices.path}>
                        See all charges
                      </Link>
                    </>
                  ),
                },
                { label: "What you feel", value: "Pressure, but no pain" },
                {
                  label: "Complex cases",
                  value: "Difficult teeth, or a medical risk, may mean referral to hospital specialists",
                },
              ]}
            />
            <div className="prose">
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
            </div>
          </div>
        </section>
        <RelatedTreatments items={["implants", "dentures"]} />
      </main>
    </>
  );
}
