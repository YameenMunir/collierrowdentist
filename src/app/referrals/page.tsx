import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { PRACTICE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Orthodontic and Endodontic Referrals | Collier Row Dental Practice",
  description: "NHS and private orthodontic and endodontic referrals to Collier Row Dental Practice, including the Level 2 endodontic referral pathway.",
});

const jsonLd = [breadcrumbJsonLd("referrals")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="referrals"
          image="/img/xray.webp"
          position="60% 50%"
          eyebrow="For dental professionals"
          title="Referrals"
          lead="We are happy to take NHS and private referrals from dentists for orthodontic and endodontic treatment."
        />
        <section className="section">
          <div className="wrap">
            <div className="cards2">
              <article className="panel" data-reveal="">
                <p className="label brand">
                  Orthodontics
                </p>
                <h3>
                  Orthodontic referrals
                </h3>
                <p>
                  NHS and private referrals for orthodontic assessment and treatment. NHS patients join the waiting list and are contacted for an assessment appointment.
                </p>
                <Link className="tlink" href="/orthodontics#nhs">
                  What your patient can expect
                </Link>
              </article>
              <article className="panel" data-reveal="" style={{ "--d": ".08s" }}>
                <p className="label brand">
                  Endodontics
                </p>
                <h3>
                  Endodontic referrals
                </h3>
                <p>
                  NHS and private referrals for root canal treatment. Referrals for treatment under the NHS must be made through the Level 2 endodontic referral pathway.
                </p>
                <Link className="tlink" href={`${ROUTES.rootCanal.path}#referred`}>
                  What your patient can expect
                </Link>
              </article>
            </div>
            <div className="article" style={{ marginTop: "clamp(3rem,6vw,5rem)" }}>
              <div></div>
              <div className="prose">
                <section>
                  <h2 data-reveal="">
                    Please tell your patient
                  </h2>
                  <div data-reveal="">
                    <ul>
                      <li>
                        Specialist appointments are extremely limited. Patients who miss an appointment are discharged back to the referring dentist.
                      </li>
                      <li>
                        Patients should arrive early, as there will be paperwork to complete, and bring a list of their regular medications.
                      </li>
                      <li>
                        For endodontic referrals, we may ask you to remove a crown or bridge and place a temporary restoration before the appointment.
                      </li>
                      <li>
                        After root canal treatment the tooth is restored temporarily. The patient returns to you for the definitive restoration.
                      </li>
                    </ul>
                  </div>
                </section>
                <section>
                  <h2 data-reveal="">
                    Making a referral
                  </h2>
                  <p data-reveal="">
                    Call the practice on
                    {" "}
                    <a className="num" href={PRACTICE.tel}>
                      {PRACTICE.phone}
                    </a>
                    {" "}
                    or email
                    {" "}
                    <a href={PRACTICE.mailto}>{PRACTICE.email}</a>
                    {" "}
                    for referral details.
                    <span className="verify">
                      Referral form to be supplied
                    </span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
