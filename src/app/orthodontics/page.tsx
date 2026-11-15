import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Orthodontist in Collier Row | Collier Row Dental Practice",
  description: "Braces, aligners and lingual braces at Collier Row Dental Practice. Information for NHS orthodontic patients, eligibility and independent treatment.",
});

const jsonLd = [breadcrumbJsonLd("orthodontics")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="orthodontics"
          image="/img/scanner.webp"
          eyebrow="Specialist care"
          title={<>Orthodontics in <em>Collier Row</em></>}
          lead="Orthodontics (braces) are used to straighten crooked teeth. We offer aesthetic braces, near-invisible aligners and lingual braces, on the NHS where eligible and independently."
        />
        <section className="section">
          <div className="wrap article">
            <ArticleAside
              facts={[
                {
                  label: "Specialist",
                  value: <Link href={`${ROUTES.team.path}#amish-patel`}>Dr Amish Patel</Link>,
                },
                { label: "How to start", value: "Ask your dentist for a referral" },
                { label: "Adjustments", value: "About every six weeks" },
                { label: "On the NHS", value: "Strict criteria and a long waiting list" },
              ]}
              toc={[
                { href: "#braces", label: "Getting started" },
                { href: "#treatment", label: "During treatment" },
                { href: "#nhs", label: "NHS patients" },
                { href: "#eligibility", label: "Who qualifies" },
              ]}
            />
            <div className="prose">
              <section id="braces">
                <h2 data-reveal="">
                  Getting started
                </h2>
                <p data-reveal="">
                  Talk to your dentist, who will refer you to an appropriate clinician for an assessment and a discussion of your options. Lingual braces are fixed to the back of your teeth, so they cannot be seen from the front.
                </p>
                <p data-reveal="">
                  Dr Amish Patel is on the specialist register for orthodontics and has an interest in clear braces.
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
                  If your dentist has referred you for an NHS orthodontic assessment, this is what happens next.
                </p>
                <ol className="steps">
                  <li data-reveal="">
                    <div>
                      <h3>
                        Waiting list
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
                  Who qualifies for NHS treatment
                </h2>
                <p data-reveal="">
                  The NHS has very strict criteria, and not every patient referred is accepted.
                </p>
                <div data-reveal="">
                  <ul>
                    <li>
                      Spaces between the teeth or slightly crooked teeth usually do not qualify.
                    </li>
                    <li>
                      Patients with poor oral hygiene or poor oral health (for example cavities, poor plaque control or gingivitis) will not be accepted, on the NHS or independently.
                    </li>
                  </ul>
                </div>
                <p data-reveal="">
                  <b>If you do not qualify,</b> you can choose to self-fund orthodontic treatment on an independent basis.
                </p>
              </section>
            </div>
          </div>
        </section>
        <CtaBand
          title={<>Interested in <em>braces?</em></>}
          text="Talk to your dentist about a referral, or call us to ask about independent orthodontic treatment."
        />
      </main>
    </>
  );
}
