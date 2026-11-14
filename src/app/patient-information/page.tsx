import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Patient Information | Collier Row Dental Practice" },
  description: "What to bring to your appointment, emergency dental care, NHS charges and answers to common questions at Collier Row Dental Practice.",
  openGraph: { title: "Patient Information | Collier Row Dental Practice", description: "What to bring to your appointment, emergency dental care, NHS charges and answers to common questions at Collier Row Dental Practice.", images: ["/img/hero.webp"] },
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
        "name": "Patient information"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What should I bring to my appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Please bring a list of any regular medications you take. Leave plenty of time to arrive, as there will be paperwork to complete. If you are late we may not be able to see you."
        }
      },
      {
        "@type": "Question",
        "name": "Will I qualify for NHS orthodontic treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The NHS has very strict criteria. Spaces between the teeth or slightly crooked teeth usually do not qualify, and patients with poor oral hygiene or poor oral health will not be accepted. If you do not qualify, you can choose to self-fund treatment on an independent basis."
        }
      },
      {
        "@type": "Question",
        "name": "How long does root canal treatment take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average around 60 to 90 minutes, and it may need more than one visit. You will have a local anaesthetic, and the endodontist restores the tooth temporarily before you return to your own dentist for the final restoration."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss a specialist appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Specialist appointments are extremely limited. If you miss an orthodontic assessment or an endodontic appointment, you will be discharged back to your referring dentist."
        }
      },
      {
        "@type": "Question",
        "name": "I need urgent help outside opening hours. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call NHS 111 for out-of-hours emergency dental care. During opening hours, call the practice on 01708 728715 for an emergency appointment."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to pay NHS charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You may be exempt if you receive certain benefits, are under 18, are 18 and in full-time education, or are pregnant or have had a baby in the last 12 months. Please call the practice for details."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I park?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is free off-street parking nearby, and a paid car park near Tesco. Buses 247, 252 and 294 stop close to the practice."
        }
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
            <img decoding="async" src="/img/consult.webp" alt="" style={{ objectPosition: "70% 40%" }} fetchPriority="high" />
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
                  Patient information
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Patient information
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Before
              {" "}
              <em>
                your visit
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              Practical information for your appointment, emergencies and NHS charges.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap article">
            <aside className="toc" aria-label="On this page">
              <p className="label">
                On this page
              </p>
              <a href="#appointments">
                Your appointment
              </a>
              <a href="#emergencies">
                Emergencies
              </a>
              <a href="#charges">
                NHS charges
              </a>
              <a href="#access">
                Access
              </a>
              <a href="#faq">
                Questions
              </a>
            </aside>
            <div className="prose">
              <section id="appointments">
                <h2 data-reveal="">
                  Your appointment
                </h2>
                <div data-reveal="">
                  <ul>
                    <li>
                      Leave plenty of time to arrive, as there will be paperwork to complete.
                    </li>
                    <li>
                      If you are late we may not be able to see you.
                    </li>
                    <li>
                      If you take any regular medications, please bring a list of them with you.
                    </li>
                  </ul>
                </div>
              </section>
              <section id="emergencies">
                <h2 data-reveal="">
                  Emergencies
                </h2>
                <p data-reveal="">
                  We understand that tooth pain can have a huge impact on daily life and make nights very difficult. If you need an emergency appointment, call us on
                  {" "}
                  <span className="num">
                    01708 728715
                  </span>
                  . For out-of-hours emergency care, call NHS 111.
                </p>
              </section>
              <section id="charges">
                <h2 data-reveal="">
                  NHS charges
                </h2>
                <p data-reveal="">
                  NHS treatment is charged in bands. You may be exempt if you receive certain benefits, are under 18, are 18 and in full-time education, or are pregnant or have had a baby in the last 12 months.
                  {" "}
                  <Link className="tlink" href="/prices">
                    See current charges
                  </Link>
                </p>
              </section>
              <section id="access">
                <h2 data-reveal="">
                  Access
                </h2>
                <p data-reveal="">
                  The practice is on the ground floor with easy access. Free off-street parking nearby, and a paid car park near Tesco.
                </p>
              </section>
              <section id="faq">
                <h2 data-reveal="">
                  Questions
                </h2>
                <div className="qlist">
                  <div className="qa" data-reveal="" style={{ "--d": "0.00s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-0">
                        What should I bring to my appointment?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-0">
                      <div>
                        <p>
                          Please bring a list of any regular medications you take. Leave plenty of time to arrive, as there will be paperwork to complete. If you are late we may not be able to see you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.04s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-1">
                        Will I qualify for NHS orthodontic treatment?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-1">
                      <div>
                        <p>
                          The NHS has very strict criteria. Spaces between the teeth or slightly crooked teeth usually do not qualify, and patients with poor oral hygiene or poor oral health will not be accepted. If you do not qualify, you can choose to self-fund treatment on an independent basis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.08s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-2">
                        How long does root canal treatment take?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-2">
                      <div>
                        <p>
                          On average around 60 to 90 minutes, and it may need more than one visit. You will have a local anaesthetic, and the endodontist restores the tooth temporarily before you return to your own dentist for the final restoration.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.12s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-3">
                        What happens if I miss a specialist appointment?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-3">
                      <div>
                        <p>
                          Specialist appointments are extremely limited. If you miss an orthodontic assessment or an endodontic appointment, you will be discharged back to your referring dentist.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.16s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-4">
                        I need urgent help outside opening hours. What should I do?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-4">
                      <div>
                        <p>
                          Call NHS 111 for out-of-hours emergency dental care. During opening hours, call the practice on 01708 728715 for an emergency appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.20s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-5">
                        Do I have to pay NHS charges?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-5">
                      <div>
                        <p>
                          You may be exempt if you receive certain benefits, are under 18, are 18 and in full-time education, or are pregnant or have had a baby in the last 12 months. Please call the practice for details.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="qa" data-reveal="" style={{ "--d": "0.20s" }}>
                    <h3 style={{ margin: "0" }}>
                      <button type="button" aria-expanded="false" aria-controls="qa-6">
                        Where can I park?
                        <span className="pm" aria-hidden="true"></span>
                      </button>
                    </h3>
                    <div className="reveal-body" id="qa-6">
                      <div>
                        <p>
                          There is free off-street parking nearby, and a paid car park near Tesco. Buses 247, 252 and 294 stop close to the practice.
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
              Ready when
              {" "}
              <em>
                you are.
              </em>
            </h2>
            <p data-reveal="">
              Call the practice and the reception team will find a time that suits you.
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
