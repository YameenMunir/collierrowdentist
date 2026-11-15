import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Root Canal Treatment in Collier Row | Collier Row Dental Practice",
  description: "Root canal treatment and endodontic referrals at Collier Row Dental Practice: what happens, how to prepare and what to expect afterwards.",
});

const jsonLd = [breadcrumbJsonLd("rootCanal")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="rootCanal"
          image="/img/xray.webp"
          eyebrow="Specialist care"
          title={<>Root canal <em>treatment</em></>}
          lead="When decay reaches the centre of the tooth, where the nerve sits, it can cause pain. Root canal treatment removes the infected nerve to relieve pain and swelling. It does not have to be painful."
        />
        <section className="section">
          <div className="wrap article">
            <ArticleAside
              facts={[
                { label: "Appointment", value: "60 to 90 minutes, sometimes more than one visit" },
                { label: "Anaesthetic", value: "Local, so the tooth is numb" },
                {
                  label: "Endodontists",
                  value: (
                    <>
                      <Link href={`${ROUTES.team.path}#simranjit-johal`}>Dr Simranjit Johal</Link>
                      <br />
                      <Link href={`${ROUTES.team.path}#carl-agyeman`}>Dr Carl Agyeman</Link>
                    </>
                  ),
                },
              ]}
              toc={[
                { href: "#stages", label: "What happens" },
                { href: "#referred", label: "If you’ve been referred" },
                { href: "#after", label: "After treatment" },
              ]}
            />
            <div className="prose">
              <section id="stages">
                <h2 data-reveal="">
                  What happens
                </h2>
                <p data-reveal="">
                  An outline of what your dentist is trying to achieve. Details vary with the tooth and the case.
                </p>
                <ol className="steps">
                  <li data-reveal="">
                    <div>
                      <h3>
                        Pain free
                      </h3>
                      <p>
                        The tooth is numbed with local anaesthetic. If the nerve is already dead this may not be needed. If at any stage it becomes uncomfortable, let your dentist know.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Cleaning
                      </h3>
                      <p>
                        A rubber dam is placed over the tooth to keep the canal clean. The canals are cleaned with single-use files, so they are sharp and sterile, and a disinfecting fluid. Medicine and a temporary filling may be placed to destroy remaining bacteria and reduce inflammation.
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
                        Restoring the tooth
                      </h3>
                      <p>
                        The top of the tooth may be filled with a normal filling and monitored. It may also need a crown to protect it.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>
              <section id="referred">
                <h2 data-reveal="">
                  If you’ve been referred to us
                </h2>
                <p data-reveal="">
                  Your dentist has referred you because the treatment is complex. Our endodontists limit their practice to root canal treatment.
                </p>
                <p className="callout warn" data-reveal="">
                  <b>
                    Please don’t miss your appointment.
                  </b>
                  <span>
                    Endodontist appointments are extremely limited. If you miss yours you will be discharged back to your dentist, and if you are late we will not be able to see you.
                  </span>
                </p>
                <div data-reveal="">
                  <ul>
                    <li>
                      Arrive early, as there will be paperwork to complete, and bring a list of any regular medications.
                    </li>
                    <li>
                      If the tooth has a crown or bridge, we may ask your dentist to remove it and fit a temporary one first. If the endodontist works through the crown, your dentist may need to replace it.
                    </li>
                    <li>
                      The endodontist restores the tooth temporarily. You then go back to your own dentist for the final restoration, which may be a crown.
                    </li>
                  </ul>
                </div>
                <p className="callout" data-reveal="">
                  <b>
                    It doesn’t always work
                  </b>
                  <span>
                    Root canal treatment can fail soon after treatment or years later, depending on things outside the endodontist’s control, such as the condition of the root canal, bone support and how much tooth remains. Occasionally, once the tooth has been examined, it can’t be treated at all. Your options will be discussed with you, and if extraction is advised your dentist will arrange it.
                  </span>
                </p>
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
            </div>
          </div>
        </section>
        <CtaBand
          title={<>Questions about your <em>referral?</em></>}
          text="Call the practice and we will help with your appointment."
        />
      </main>
    </>
  );
}
