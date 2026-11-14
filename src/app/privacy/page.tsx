import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Collier Row Dental Practice" },
  description: "Privacy, cookies and accessibility information for the Collier Row Dental Practice website.",
  openGraph: { title: "Privacy Policy | Collier Row Dental Practice", description: "Privacy, cookies and accessibility information for the Collier Row Dental Practice website.", images: ["/img/hero.webp"] },
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
        "name": "Privacy"
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
            <img decoding="async" src="/img/hygiene.webp" alt="" style={{ objectPosition: "50% 50%" }} fetchPriority="high" />
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
                  Privacy
                </li>
              </ol>
            </nav>
            <p className="scene-no" style={{ "--i": "1" }}>
              Legal
            </p>
            <h1 className="h1" id="ptitle" style={{ "--i": "2" }}>
              Privacy, cookies
              {" "}
              <em>
                and accessibility
              </em>
            </h1>
            <p className="lead" style={{ "--i": "3" }}>
              How the practice handles your information on this website.
            </p>
          </div>
        </section>
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
