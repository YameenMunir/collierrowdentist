import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { PRACTICE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Patient Information | Collier Row Dental Practice",
  description: "Emergency dental appointments, what to bring to your appointment, NHS charges and access at Collier Row Dental Practice.",
});

const jsonLd = [breadcrumbJsonLd("patientInfo")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="patientInfo"
          image="/img/consult.webp"
          position="70% 40%"
          eyebrow="Patient information"
          title={<>Before <em>your visit</em></>}
          lead="What to do if you are in pain, what to bring, and what you will pay."
        />
        <section className="section">
          <div className="wrap article">
            <ArticleAside
              toc={[
                { href: "#emergencies", label: "In pain?" },
                { href: "#appointments", label: "Your appointment" },
                { href: "#charges", label: "Paying for treatment" },
                { href: "#access", label: "Getting here" },
              ]}
            />
            <div className="prose">
              <section id="emergencies">
                <h2 data-reveal="">
                  In pain?
                </h2>
                <p data-reveal="">
                  We understand that tooth pain can have a huge impact on daily life and make nights very difficult.
                </p>
                <div data-reveal="">
                  <ul>
                    <li>
                      <b>Monday to Friday, 9am–5pm:</b> call{" "}
                      <a className="num" href={PRACTICE.tel}>
                        {PRACTICE.phone}
                      </a>{" "}
                      for an emergency appointment.
                    </li>
                    <li>
                      <b>Evenings, weekends and bank holidays:</b> call NHS 111.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="appointments">
                <h2 data-reveal="">
                  Your appointment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      Leave plenty of time to arrive, as there will be paperwork to complete. If you are late we may not be able to see you.
                    </li>
                    <li>
                      If you take any regular medications, bring a list of them with you.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="charges">
                <h2 data-reveal="">
                  Paying for treatment
                </h2>
                <p data-reveal="">
                  NHS treatment is charged in three bands, from £27.90 for a check-up. You may not have to pay if you receive certain benefits, are under 18, are 18 and in full-time education, or are pregnant or have had a baby in the last 12 months.{" "}
                  <Link className="tlink" href={ROUTES.prices.path}>
                    See all charges
                  </Link>
                </p>
              </section>
              <section id="access">
                <h2 data-reveal="">
                  Getting here
                </h2>
                <p data-reveal="">
                  The practice is on the ground floor with easy access, and there is free off-street parking nearby.{" "}
                  <Link className="tlink" href={ROUTES.location.path}>
                    Map, parking and buses
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
