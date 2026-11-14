import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Orthodontic and Endodontic Referrals | Collier Row Dental Practice" },
  description: "NHS and private orthodontic and endodontic referrals to Collier Row Dental Practice, including the Level 2 endodontic referral pathway.",
  openGraph: { title: "Orthodontic and Endodontic Referrals | Collier Row Dental Practice", description: "NHS and private orthodontic and endodontic referrals to Collier Row Dental Practice, including the Level 2 endodontic referral pathway.", images: ["/img/hero.webp"] },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.collierrowdentist.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Referrals"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <section className="scene-hero" aria-labelledby="ptitle">
          <div className="bg" aria-hidden="true">
            <img decoding="async" src="/img/xray.webp" alt="" style={{ objectPosition: "60% 50%" }} fetchPriority="high" />
          </div>
          <div className="letterbox top" aria-hidden="true"></div>
          <div className="letterbox bot" aria-hidden="true"></div>
          <div className="grain" aria-hidden="true"></div>
          <div className="vignette" aria-hidden="true"></div>
          <div className="wrap">
            <nav aria-label="Breadcrumb" style={{ "--i": "0" }}>
              <ol className="crumbs">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  Referrals
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              For dental professionals
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Referrals
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              We are happy to take NHS and private referrals from dentists for orthodontic and endodontic treatment.
            </p>
          </div>
        </section>
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
                <Link className="tlink" href="/root-canal#referred">
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
                    <span className="num">
                      01708 728715
                    </span>
                    {" "}
                    or email collierrowdental@gmail.com for referral details.
                    <span className="verify">
                      Referral form to be supplied
                    </span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="scene-no" data-reveal="">
              Next scene
            </p>
            <h2 data-reveal="">
              Refer a
              {" "}
              <em>
                patient
              </em>
            </h2>
            <p data-reveal="">
              Contact the practice for referral details.
            </p>
            <div className="btns" data-reveal="">
              <a className="btn btn-solid" href="tel:+441708728715">
                Call 01708 728715
                {" "}
                <span className="arr" aria-hidden="true"></span>
              </a>
              <Link className="btn btn-line" href="/contact">
                Send an enquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
