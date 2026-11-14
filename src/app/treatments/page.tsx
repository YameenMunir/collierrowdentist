import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Treatments in Collier Row | Collier Row Dental Practice",
  description: "General, restorative, cosmetic and specialist dental treatments at Collier Row Dental Practice, including fillings, crowns, implants, dentures, braces and root canal treatment.",
});

const jsonLd = [breadcrumbJsonLd("treatments")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="treatments"
          image="/img/consult.webp"
          eyebrow="Treatments"
          title={<>Dental treatments in <em>Collier Row</em></>}
          lead="We offer a wide range of treatments, from general dental services to more complex care. If the treatment you need is not listed, contact us and we will advise you on how to proceed."
        />
        <section className="section">
          <div className="wrap">
            <section id="general" className="tgroup">
              <h2 className="h3" data-reveal="">
                General and preventive
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/contact" aria-label="Tooth-coloured fillings: ask the practice">
                  <b>
                    Tooth-coloured fillings
                  </b>
                  <span>
                    Fillings that match your natural teeth
                  </span>
                </Link>
                <Link href="/contact" aria-label="Preventive dentistry: ask the practice">
                  <b>
                    Preventive dentistry
                  </b>
                  <span>
                    Care that stops problems before they start
                  </span>
                </Link>
                <Link href="/contact" aria-label="Hygienist services: ask the practice">
                  <b>
                    Hygienist services
                  </b>
                  <span>
                    Professional cleaning and gum care
                  </span>
                </Link>
                <Link href={ROUTES.extractions.path}>
                  <b>
                    Extractions
                  </b>
                  <span>
                    Careful removal when it is the right option
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href="/contact" aria-label="Sedation: ask the practice">
                  <b>
                    Sedation
                  </b>
                  <span>
                    Support for nervous patients
                  </span>
                </Link>
              </div>
            </section>
            <section id="restorative" className="tgroup">
              <h2 className="h3" data-reveal="">
                Restoring and replacing teeth
              </h2>
              <div className="index one" data-reveal="">
                <Link href={ROUTES.crowns.path}>
                  <b>
                    Crowns &amp; bridges
                  </b>
                  <span>
                    Strengthen damaged teeth or fill gaps
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href={ROUTES.implants.path}>
                  <b>
                    Dental implants
                  </b>
                  <span>
                    A fixed, long-term replacement for missing teeth
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
                <Link href={ROUTES.dentures.path}>
                  <b>
                    Dentures
                  </b>
                  <span>
                    Full and partial dentures, fitted for comfort
                  </span>
                  <em className="go" aria-hidden="true"></em>
                </Link>
              </div>
            </section>
            <section id="cosmetic" className="tgroup">
              <h2 className="h3" data-reveal="">
                Cosmetic
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/contact" aria-label="Cosmetic dentistry: ask the practice">
                  <b>
                    Cosmetic dentistry
                  </b>
                  <span>
                    Improve the look of your smile
                  </span>
                </Link>
                <Link href="/contact" aria-label="Teeth whitening: ask the practice">
                  <b>
                    Teeth whitening
                  </b>
                  <span>
                    Professionally supervised whitening
                  </span>
                </Link>
              </div>
            </section>
            <section id="specialist" className="tgroup">
              <h2 className="h3" data-reveal="">
                Specialist care
              </h2>
              <div className="index one" data-reveal="">
                <Link href="/orthodontics">
                  <b>
                    Orthodontics
                  </b>
                  <span>
                    Braces, aligners and lingual braces
                  </span>
                  <i>
                    Specialist
                  </i>
                </Link>
                <Link href={ROUTES.rootCanal.path}>
                  <b>
                    Root canal treatment
                  </b>
                  <span>
                    Including complex cases with our endodontists
                  </span>
                  <i>
                    Specialist
                  </i>
                </Link>
              </div>
            </section>
            <p className="callout" data-reveal="" style={{ marginTop: "2.5rem" }}>
              <b>
                Not sure which treatment you need?
              </b>
              <span>
                Start with a check-up. Your dentist will explain your options and costs before any treatment begins.
              </span>
            </p>
          </div>
        </section>
        <CtaBand />
      </main>
    </>
  );
}
