import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dentures in Collier Row | Collier Row Dental Practice",
  description: "There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can ",
});

const jsonLd = [breadcrumbJsonLd("dentures")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="dentures"
          image="/img/surgery.webp"
          eyebrow="Treatment"
          title="Dentures"
          lead="There are many options for replacing missing teeth. The most common is a denture (plate) that can be taken in and out of your mouth. Your dentist can advise you on the best type for you."
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
        <RelatedTreatments items={["crowns", "implants"]} />
        <CtaBand />
      </main>
    </>
  );
}
