import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, dentistJsonLd, pageMetadata } from "@/lib/seo";
import { PRACTICE } from "@/lib/site";
import HoursList from "@/components/HoursList";
import OpenStatus from "@/components/OpenStatus";

export const metadata: Metadata = pageMetadata({
  title: "Contact Collier Row Dental Practice | 01708 728715",
  description: "Contact Collier Row Dental Practice on 01708 728715 or by email, see today's opening hours, or send a general enquiry.",
});

const jsonLd = [breadcrumbJsonLd("contact"), dentistJsonLd()];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="contact"
          image="/img/treatment.webp"
          position="50% 35%"
          eyebrow="Contact"
          title={<>Contact <em>the practice</em></>}
          lead="The quickest way to reach us is by phone. For anything urgent, please call."
        />
        <section className="section">
          <div className="wrap">
            <div className="contact-grid">
              <div className="frame zoom" data-reveal="">
                <img decoding="async" src="/img/surgery.webp" width="1000" height="667" alt="A bright, modern dental treatment room with a blue dental chair" loading="lazy" />
              </div>
              <div data-reveal="">
                <div className="details">
                  <div className="drow">
                    <span className="label">
                      Address
                    </span>
                    <address className="big">
                      21 Collier Row Road
                      <br />
                      Collier Row
                      <br />
                      Romford RM5 3NR
                    </address>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Telephone
                    </span>
                    <div>
                      <span className="big num">
                        01708 728715
                      </span>
                      <button className="copybtn" type="button" data-copy="01708 728715">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Email
                    </span>
                    <div>
                      <span className="big" style={{ fontSize: "1.1rem" }}>
                        collierrowdental@gmail.com
                      </span>
                      <button className="copybtn" type="button" data-copy="collierrowdental@gmail.com">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">
                      Hours
                    </span>
                    <div>
                      <OpenStatus className="in-list" />
                      <HoursList />
                    </div>
                  </div>
                </div>
                <div className="vbtns">
                  <a className="btn btn-solid" href={PRACTICE.tel}>
                    Call the practice
                    {" "}
                    <span className="arr" aria-hidden="true"></span>
                  </a>
                  <Link className="btn btn-line" href={ROUTES.location.path}>
                    Map, parking and buses
                  </Link>
                </div>
              </div>
            </div>
            <div className="enquire">
              <div className="left">
                <h2 className="h2" style={{ fontSize: "clamp(1.7rem,1.6vw + 1rem,2.4rem)" }} data-reveal="">
                  Send an
                  {" "}
                  <em>
                    enquiry
                  </em>
                </h2>
                <p data-reveal="">
                  For general questions. An enquiry does not book an appointment, so please do not include medical details. For anything urgent, call us.
                </p>
              </div>
              <form className="form" id="enquiry" noValidate data-reveal="">
                <div className="row">
                  <div className="field">
                    <label htmlFor="f-name">
                      Full name
                    </label>
                    <input id="f-name" autoComplete="name" required />
                    <span className="err" id="e-name"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">
                      Phone
                    </label>
                    <input id="f-phone" type="tel" autoComplete="tel" />
                    <span className="err" id="e-phone"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="f-email">
                      Email
                    </label>
                    <input id="f-email" type="email" autoComplete="email" required />
                    <span className="err" id="e-email"></span>
                  </div>
                  <div className="field">
                    <label htmlFor="f-reason">
                      Reason
                    </label>
                    <select id="f-reason" required>
                      <option value="">
                        Choose one
                      </option>
                      <option>
                        Registering as a patient
                      </option>
                      <option>
                        Appointment question
                      </option>
                      <option>
                        Orthodontics
                      </option>
                      <option>
                        Root canal referral
                      </option>
                      <option>
                        Prices
                      </option>
                      <option>
                        Something else
                      </option>
                    </select>
                    <span className="err" id="e-reason"></span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="f-msg">
                    Message
                  </label>
                  <textarea id="f-msg" required></textarea>
                  <span className="err" id="e-msg"></span>
                </div>
                <label className="check" htmlFor="f-privacy">
                  <input id="f-privacy" type="checkbox" />
                  <span>
                    I agree to the practice using these details to reply to my enquiry, as described in the
                    {" "}
                    <Link href="/privacy">
                      privacy policy
                    </Link>
                    .
                  </span>
                </label>
                <span className="err" id="e-privacy"></span>
                <div>
                  <button className="btn btn-solid" type="submit">
                    Send enquiry
                    {" "}
                    <span className="arr" aria-hidden="true"></span>
                  </button>
                </div>
                <p className="status" id="status" role="status" hidden></p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
