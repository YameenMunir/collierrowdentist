import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Collier Row Dental Practice",
  description: "Privacy, cookies and accessibility information for the Collier Row Dental Practice website.",
});

const jsonLd = [breadcrumbJsonLd("privacy")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="privacy"
          image="/img/hygiene.webp"
          position="50% 50%"
          eyebrow="Legal"
          title={<>Privacy, cookies <em>and accessibility</em></>}
          lead="How the practice handles your information on this website."
        />
        <section className="section">
          <div className="wrap">
            <div className="legal">
              <p className="callout warn" data-reveal="">
                <b>
                  Template for the practice to review.
                </b>
                <span>
                  The practice's own privacy notice should replace this text before launch.
                </span>
              </p>
              <h2 data-reveal="">
                Who we are
              </h2>
              <p data-reveal="">
                Collier Row Dental Practice, 21 Collier Row Road, Collier Row, Romford RM5 3NR, is responsible for personal information collected through this website.
              </p>
              <h2 data-reveal="">
                What we collect
              </h2>
              <p data-reveal="">
                When you send an enquiry we collect your name, email address, phone number (if given), the reason for your enquiry and your message. Please do not include medical details in an enquiry.
              </p>
              <h2 data-reveal="">
                How we use it
              </h2>
              <p data-reveal="">
                We use your details only to reply to your enquiry. We do not sell your information or use it for marketing.
              </p>
              <h2 data-reveal="">
                Your rights
              </h2>
              <p data-reveal="">
                You can ask to see, correct or delete the information we hold about you by contacting the practice on 01708 728715 or collierrowdental@gmail.com.
              </p>
              <h2 id="cookies" data-reveal="">
                Cookies
              </h2>
              <p data-reveal="">
                This website uses no tracking or advertising cookies. Your light or dark display choice is stored in your browser only.
              </p>
              <h2 id="accessibility" data-reveal="">
                Accessibility
              </h2>
              <p data-reveal="">
                This website is designed to meet WCAG 2.2 AA. If you have difficulty using any part of it, call us on 01708 728715 and we will help.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
