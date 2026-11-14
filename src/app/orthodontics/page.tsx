import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Orthodontist in Collier Row | Collier Row Dental Practice" },
  description: "Braces, aligners and lingual braces at Collier Row Dental Practice. Information for NHS orthodontic patients, eligibility and independent treatment.",
  openGraph: { title: "Orthodontist in Collier Row | Collier Row Dental Practice", description: "Braces, aligners and lingual braces at Collier Row Dental Practice. Information for NHS orthodontic patients, eligibility and independent treatment.", images: ["/img/hero.webp"] },
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
        "name": "Orthodontics"
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
            <img decoding="async" src="/img/scanner.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                  Orthodontics
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Specialist care
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Orthodontics in
              {" "}
              <em>
                Collier Row
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              Orthodontics (braces) are used to straighten crooked teeth. We offer aesthetic braces, near-invisible aligners and lingual braces, on the NHS where eligible and independently.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap article">
            <aside className="toc" aria-label="On this page">
              <p className="label">
                On this page
              </p>
              <a href="#braces">
                About braces
              </a>
              <a href="#treatment">
                During treatment
              </a>
              <a href="#nhs">
                NHS orthodontic patients
              </a>
              <a href="#eligibility">
                Eligibility
              </a>
              <a href="#not-eligible">
                If you do not qualify
              </a>
              <a href="#questions">
                Questions
              </a>
            </aside>
            <div className="prose">
              <section id="braces">
                <h2 data-reveal="">
                  About braces
                </h2>
                <p data-reveal="">
                  We offer a wide range of braces, including aesthetic braces, near-invisible aligners and lingual braces, which are fixed to the back of your teeth. If you are interested, talk to your dentist, who will refer you to an appropriate dentist for an assessment and a discussion of your options.
                </p>
                <p data-reveal="">
                  Dr Amish Patel is on the specialist register for orthodontics and has an interest in clear braces.
                  {" "}
                  <Link className="tlink" href="/team#amish-patel">
                    Meet Dr Amish Patel
                  </Link>
                </p>
              </section>
              <section id="treatment">
                <h2 data-reveal="">
                  During and after treatment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      Keep your mouth very clean. Food and plaque are trapped more easily on a brace.
                    </li>
                    <li>
                      Attend regular appointments to adjust the brace, approximately every six weeks.
                    </li>
                    <li>
                      The length of treatment depends on how your teeth need to move. This is discussed at your assessment.
                    </li>
                    <li>
                      Afterwards, your teeth must be held in position to stop them relapsing. This is done with a small wire behind the front teeth, which cannot be seen, or a clear plastic biteguard worn at night.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="nhs">
                <h2 data-reveal="">
                  NHS orthodontic patients
                </h2>
                <p data-reveal="">
                  If your dentist has referred you for an orthodontic assessment under the NHS, this is what happens next.
                </p>
                <ol className="steps">
                  <li data-reveal="">
                    <div>
                      <h3>
                        Referral and waiting list
                      </h3>
                      <p>
                        There is currently a long waiting list for treatment under the NHS.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        We contact you
                      </h3>
                      <p>
                        Once you come off the waiting list, you will be contacted for an assessment appointment.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Assessment
                      </h3>
                      <p>
                        It is unlikely any active treatment will be provided at this appointment. If you are accepted, details of the treatment plan are discussed at later appointments following further investigations.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Treatment
                      </h3>
                      <p>
                        If you go ahead, you need to commit to attending frequent appointments, including during work or school time.
                      </p>
                    </div>
                  </li>
                </ol>
                <p className="callout warn" data-reveal="">
                  <b>
                    Please attend your assessment.
                  </b>
                  <span>
                    If you miss this appointment you will be discharged back to your dentist.
                  </span>
                </p>
              </section>
              <section id="eligibility">
                <h2 data-reveal="">
                  Eligibility for NHS treatment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      The NHS has very strict criteria on the patients we can accept for NHS-funded orthodontics.
                    </li>
                    <li>
                      Not all patients referred qualify and are accepted for NHS orthodontic treatment.
                    </li>
                    <li>
                      Cases such as spaces between the teeth or slightly crooked teeth usually do not qualify.
                    </li>
                    <li>
                      Patients with poor oral hygiene or poor oral health (for example cavities, poor plaque control or gingivitis) will not be accepted for treatment.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="not-eligible">
                <h2 data-reveal="">
                  If you do not qualify
                </h2>
                <p data-reveal="">
                  If you would still like orthodontic treatment, you can choose to self-fund it on an independent basis. We cannot provide orthodontic treatment for patients with poor oral hygiene or poor dental health.
                </p>
              </section>
              <section id="questions">
                <h2 data-reveal="">
                  Questions
                </h2>
                <div className="qlist">
                  <div className="qa" data-reveal="" style={{ "--d": "0.00s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-0">
                        Will I qualify for NHS orthodontic treatment?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-0">
                      <div>
                        <p>
                          The NHS has very strict criteria. Spaces between the teeth or slightly crooked teeth usually do not qualify, and patients with poor oral hygiene or poor oral health will not be accepted. If you do not qualify, you can choose to self-fund treatment on an independent basis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.04s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-1">
                        What happens if I miss a specialist appointment?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-1">
                      <div>
                        <p>
                          Specialist appointments are extremely limited. If you miss an orthodontic assessment or an endodontic appointment, you will be discharged back to your referring dentist.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="wrap">
            <p className="scene-no" data-reveal="">
              Next scene
            </p>
            <h2 data-reveal="">
              Interested in
              {" "}
              <em>
                braces?
              </em>
            </h2>
            <p data-reveal="">
              Talk to your dentist about a referral, or call us to ask about independent orthodontic treatment.
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
