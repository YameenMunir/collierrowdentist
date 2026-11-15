import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Implants in Collier Row | Collier Row Dental Practice",
  description: "Dental implants at Collier Row Dental Practice: how referral, placement and healing work, and how long treatment takes to replace a missing tooth.",
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
            <ArticleAside
              facts={[
                { label: "First step", value: "Ask your dentist, who can refer you" },
                { label: "Timescale", value: "A few months, while the bone heals" },
                { label: "Cost", value: "Depends on your case. Ask the practice" },
              ]}
            />
            <div className="prose">
              <section id="what-happens">
                <h2 data-reveal="">
                  What happens
                </h2>
                <p data-reveal="">
                  Procedures vary greatly from case to case, so your dentist will talk you through yours.
                </p>
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
            </div>
          </div>
        </section>
        <RelatedTreatments items={["crowns", "dentures"]} />
      </main>
    </>
  );
}
