import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Root Canal Treatment in Collier Row | Collier Row Dental Practice" },
  description: "Root canal treatment and endodontic referrals at Collier Row Dental Practice: what happens, how to prepare and what to expect afterwards.",
  openGraph: { title: "Root Canal Treatment in Collier Row | Collier Row Dental Practice", description: "Root canal treatment and endodontic referrals at Collier Row Dental Practice: what happens, how to prepare and what to expect afterwards.", images: ["/img/hero.webp"] },
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
        "name": "Treatments",
        "item": "https://www.collierrowdentist.co.uk/treatments.html"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Root canal treatment"
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
            <img decoding="async" src="/img/xray.webp" alt="" style={{ objectPosition: "50% 40%" }} fetchPriority="high" />
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
                <li>
                  <Link href="/treatments">
                    Treatments
                  </Link>
                </li>
                <li aria-current="page">
                  Root canal treatment
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Specialist care
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Root canal
              {" "}
              <em>
                treatment
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              When decay reaches the centre of the tooth, where the nerve sits, it can cause pain. Root canal treatment removes the infected nerve to relieve pain and swelling. It does not have to be painful.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap article">
            <aside className="toc" aria-label="On this page">
              <p className="label">
                On this page
              </p>
              <a href="#what">
                What is it?
              </a>
              <a href="#stages">
                What happens
              </a>
              <a href="#referred">
                Referred to us
              </a>
              <a href="#before">
                Before your appointment
              </a>
              <a href="#during">
                During treatment
              </a>
              <a href="#after">
                After treatment
              </a>
              <a href="#questions">
                Questions
              </a>
            </aside>
            <div className="prose">
              <section id="what">
                <h2 data-reveal="">
                  What is root canal treatment?
                </h2>
                <p data-reveal="">
                  A procedure where the infected nerve is taken out of the tooth to relieve pain and swelling. The outline below shows what your dentist is trying to achieve. Aspects may vary depending on the tooth and case.
                </p>
              </section>
              <section id="stages">
                <h2 data-reveal="">
                  What happens
                </h2>
                <ol className="steps">
                  <li data-reveal="">
                    <div>
                      <h3>
                        Pain free
                      </h3>
                      <p>
                        Your dentist may numb the tooth with anaesthetic. If the nerve is already dead this may not be needed. If at any stage it becomes uncomfortable, let your dentist know.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Cleaning
                      </h3>
                      <p>
                        The dentist cleans the canals with specially made files that are used only once, so they are sharp and sterile, and a disinfecting fluid. Medicine and a temporary filling may be placed to destroy remaining bacteria and reduce inflammation.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Filling
                      </h3>
                      <p>
                        The cleaned canals are filled with gutta percha, a special sterile form of rubber, placed with a cement.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        And then
                      </h3>
                      <p>
                        The top of the tooth may be filled with a normal filling and monitored. The tooth may also need a crown to protect it.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>
              <section id="referred">
                <h2 data-reveal="">
                  Referred to our endodontists
                </h2>
                <p data-reveal="">
                  You have been referred by your dentist because the treatment is complex. Our endodontists, Dr Simranjit Johal and Dr Carl Agyeman, limit their practice to root canal treatment.
                </p>
                <p className="callout" data-reveal="">
                  <b>
                    Outcomes
                  </b>
                  <span>
                    Root canal treatments are not always successful and can fail soon after treatment or years later. Success can depend on factors outside the endodontist's control, including the condition of the nerve and root canal, bone support, the strength of the tooth and how much tooth remains before treatment begins.
                  </span>
                </p>
              </section>
              <section id="before">
                <h2 data-reveal="">
                  Before your appointment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      Leave plenty of time to arrive, as there will be paperwork to complete. If you are late we will not be able to see you.
                    </li>
                    <li>
                      Bring a list of any regular medications you take.
                    </li>
                    <li>
                      Appointments with the endodontist are extremely limited. If you miss your appointment you will be discharged back to your dentist.
                    </li>
                    <li>
                      If the tooth has a crown or bridge, we may ask your dentist to remove it and fit a temporary restoration first. If the endodontist works through the crown, it may need to be replaced by your dentist.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="during">
                <h2 data-reveal="">
                  During treatment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      You will be given a local anaesthetic.
                    </li>
                    <li>
                      A rubber dam is placed over the tooth to protect the canal from contamination.
                    </li>
                    <li>
                      Treatment takes around 60 to 90 minutes on average and may need more than one visit.
                    </li>
                    <li>
                      In rare cases the endodontist may not be able to perform the root canal after examining the tooth. If this happens, your options will be discussed with you.
                    </li>
                    <li>
                      If the root canal is not successful, extraction may be advised, organised by your referring dentist.
                    </li>
                    <li>
                      The endodontist restores the tooth temporarily. You then return to your dentist for the final restoration, which may be a crown.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="after">
                <h2 data-reveal="">
                  After treatment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      You will probably be numb for a few hours. Take care with hot food and drinks and hard foods.
                    </li>
                    <li>
                      Some discomfort can be expected for up to two weeks. Take painkillers if needed.
                    </li>
                    <li>
                      Occasionally a course of antibiotics may be prescribed. Speak to your endodontist.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="questions">
                <h2 data-reveal="">
                  Questions
                </h2>
                <div className="qlist">
                  <div className="qa" data-reveal="" style={{ "--d": "0.00s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-0">
                        How long does root canal treatment take?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-0">
                      <div>
                        <p>
                          On average around 60 to 90 minutes, and it may need more than one visit. You will have a local anaesthetic, and the endodontist restores the tooth temporarily before you return to your own dentist for the final restoration.
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
              Questions about your
              {" "}
              <em>
                referral?
              </em>
            </h2>
            <p data-reveal="">
              Call the practice and we will help with your appointment.
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
