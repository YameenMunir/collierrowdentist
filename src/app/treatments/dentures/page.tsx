import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dentures in Collier Row | Collier Row Dental Practice",
  description: "Full and partial dentures at Collier Row Dental Practice: the stages of having a denture made, getting used to it, and the NHS cost (Band 3).",
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
            <ArticleAside
              facts={[
                {
                  label: "NHS cost",
                  value: (
                    <>
                      Band 3, £332.10{" "}
                      <Link className="sub" href={ROUTES.prices.path}>
                        See all charges
                      </Link>
                    </>
                  ),
                },
                { label: "Types", value: "Full or partial, removable" },
                { label: "Visits", value: "Up to five stages, fewer for small dentures" },
              ]}
            />
            <div className="prose">
              <section id="what-happens">
                <h2 data-reveal="">
                  What happens
                </h2>
                <p data-reveal="">
                  Some stages may not be needed, depending on how many teeth are missing.
                </p>
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
                  Getting used to it
                </h2>
                <p data-reveal="">
                  A new denture will feel strange at first. Eating, drinking and speaking may be a little tricky, but this improves as your mouth adapts. If any areas become sore, which is not uncommon, your dentist can adjust the denture to make it more comfortable.
                </p>
              </section>
            </div>
          </div>
        </section>
        <RelatedTreatments items={["implants", "crowns"]} />
      </main>
    </>
  );
}
