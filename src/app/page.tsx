import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Dentist in Collier Row | Collier Row Dental Practice" },
  description: "Collier Row Dental Practice, 21 Collier Row Road, RM5 3NR. NHS and independent family dentistry with specialist orthodontics and root canal treatment. Call 01708 728715.",
  openGraph: { title: "Dentist in Collier Row | Collier Row Dental Practice", description: "Collier Row Dental Practice, 21 Collier Row Road, RM5 3NR. NHS and independent family dentistry with specialist orthodontics and root canal treatment. Call 01708 728715.", images: ["/img/hero.webp"] },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Collier Row Dental Practice",
    "url": "https://www.collierrowdentist.co.uk/",
    "telephone": "+44 1708 728715",
    "email": "collierrowdental@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21 Collier Row Road",
      "addressLocality": "Romford",
      "addressRegion": "Essex",
      "postalCode": "RM5 3NR",
      "addressCountry": "GB"
    },
    "areaServed": "Collier Row, Romford",
    "medicalSpecialty": [
      "Orthodontic",
      "Endodontic"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <section className="hero3" id="top" aria-labelledby="hero-title">
          <div className="h3-media" aria-hidden="true">
            <div className="h3-slide on" data-slide="0">
              <img decoding="async" src="/img/hero.webp" alt="" style={{ objectPosition: "50% 28%" }} fetchPriority="high" />
            </div>
            <div className="h3-slide" data-slide="1">
              <img decoding="async" src="/img/scanner.webp" alt="" style={{ objectPosition: "50% 40%" }} loading="lazy" />
            </div>
            <div className="h3-slide" data-slide="2">
              <img decoding="async" src="/img/xray.webp" alt="" style={{ objectPosition: "50% 50%" }} loading="lazy" />
            </div>
          </div>
          <div className="h3-shade" aria-hidden="true"></div>
          <div className="letterbox top" aria-hidden="true"></div>
          <div className="letterbox bot" aria-hidden="true"></div>
          <div className="grain" aria-hidden="true"></div>
          <div className="vignette" aria-hidden="true"></div>
          <div className="h3-inner">
            <div className="h3-copy">
              <p className="h3-label">
                <span className="logo-mark-sm" aria-hidden="true">
                  <svg viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="24" />
                    <g transform="translate(10.2 10.6) scale(1.15)">
                      <path d="M7.2 3C5 3 3.3 4.8 3.3 7.1c0 2 .8 3.4 1.4 5 .6 1.7.8 3.6 1.3 5.6.4 1.6.9 3.3 2 3.3 1.3 0 1.4-2 1.7-3.6.3-1.4.8-2.6 2.3-2.6s2 1.2 2.3 2.6c.3 1.6.4 3.6 1.7 3.6 1.1 0 1.6-1.7 2-3.3.5-2 .7-3.9 1.3-5.6.6-1.6 1.4-3 1.4-5C20.7 4.8 19 3 16.8 3c-1.8 0-2.8 1-4.8 1S9 3 7.2 3z" />
                    </g>
                  </svg>
                </span>
                Dentist in Collier Row · NHS &amp; independent
              </p>
              <h1 className="h3-title" id="hero-title" aria-label="Professional dental care for the whole family">
                <span className="w">
                  <span style={{ "--wi": "0" }}>
                    Professional
                  </span>
                </span>
                {" "}
                <span className="w">
                  <span style={{ "--wi": "1" }}>
                    dental
                  </span>
                </span>
                {" "}
                <span className="w">
                  <span style={{ "--wi": "2" }}>
                    care
                  </span>
                </span>
                {" "}
                <span className="w">
                  <span style={{ "--wi": "3" }}>
                    for
                  </span>
                </span>
                {" "}
                <span className="w">
                  <span style={{ "--wi": "4" }}>
                    the
                  </span>
                </span>
                {" "}
                <em>
                  <span className="w">
                    <span style={{ "--wi": "5" }}>
                      whole
                    </span>
                  </span>
                  {" "}
                  <span className="w">
                    <span style={{ "--wi": "6" }}>
                      family
                    </span>
                  </span>
                </em>
              </h1>
              <p className="h3-lead">
                A highly qualified, experienced team offering all-round modern dentistry in a friendly, relaxed setting, with specialist orthodontic and root canal care under the same roof.
              </p>
              <div className="h3-ctas">
                <Link className="btn h3-btn" href="/contact">
                  Contact the practice
                  {" "}
                  <span className="arr" aria-hidden="true"></span>
                </Link>
                <Link className="btn h3-ghost" href="/treatments">
                  Explore treatments
                </Link>
              </div>
              <ul className="h3-points">
                <li>
                  Specialist orthodontist
                </li>
                <li>
                  Two endodontists
                </li>
                <li>
                  Sedation for nervous patients
                </li>
                <li>
                  Ground-floor access
                </li>
              </ul>
            </div>
            <aside className="h3-card" aria-label="Contact the practice">
              <p className="h3-card-label">
                Get in touch
              </p>
              <a className="h3-row" href="tel:+441708728715">
                <span>
                  Call the practice
                </span>
                <b className="num">
                  01708 728715
                </b>
              </a>
              <a className="h3-row" href={"https://www.google.com/maps/dir/?api=1&destination=21+Collier+Row+Road+Romford+RM5+3NR"} target="_blank" rel="noopener">
                <span>
                  Find us
                </span>
                <b>
                  21 Collier Row Road
                  <br />
                  Romford RM5 3NR
                </b>
              </a>
              <Link className="h3-row" href="/patient-information#emergencies">
                <span>
                  In dental pain?
                </span>
                <b>
                  Emergency appointments
                </b>
              </Link>
              <p className="h3-card-note">
                Monday to Friday, 9am–5pm. Out of hours, call NHS 111.
              </p>
            </aside>
          </div>
          <div className="h3-foot">
            <div className="h3-dotwrap">
              <p className="h3-now" aria-hidden="true">
                General &amp; family dentistry
              </p>
              <div className="h3-dots">
                <button type="button" className="h3-dot on" data-go="0" aria-label={"Show slide 1: General & family dentistry"} aria-current="true">
                  <span className="bar">
                    <i></i>
                  </span>
                  <span className="cap">
                    <b>
                      01
                    </b>
                    General &amp; family dentistry
                  </span>
                </button>
                <button type="button" className="h3-dot" data-go="1" aria-label="Show slide 2: Specialist orthodontics">
                  <span className="bar">
                    <i></i>
                  </span>
                  <span className="cap">
                    <b>
                      02
                    </b>
                    Specialist orthodontics
                  </span>
                </button>
                <button type="button" className="h3-dot" data-go="2" aria-label="Show slide 3: Root canal treatment">
                  <span className="bar">
                    <i></i>
                  </span>
                  <span className="cap">
                    <b>
                      03
                    </b>
                    Root canal treatment
                  </span>
                </button>
              </div>
            </div>
            <button type="button" className="h3-pause" aria-label="Pause slideshow" aria-pressed="false">
              <svg className="i-pause" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14M16 5v14" />
              </svg>
              <svg className="i-play" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 5l12 7-12 7z" />
              </svg>
            </button>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>
              Tooth-coloured fillings
            </span>
            <i></i>
            <span>
              Preventive dentistry
            </span>
            <i></i>
            <span>
              Hygienist services
            </span>
            <i></i>
            <span>
              Crowns &amp; bridges
            </span>
            <i></i>
            <span>
              Dental implants
            </span>
            <i></i>
            <span>
              Dentures
            </span>
            <i></i>
            <span>
              Cosmetic dentistry
            </span>
            <i></i>
            <span>
              Teeth whitening
            </span>
            <i></i>
            <span>
              Orthodontics
            </span>
            <i></i>
            <span>
              Root canal treatment
            </span>
            <i></i>
            <span>
              Extractions
            </span>
            <i></i>
            <span>
              Sedation
            </span>
            <i></i>
            <span>
              Tooth-coloured fillings
            </span>
            <i></i>
            <span>
              Preventive dentistry
            </span>
            <i></i>
            <span>
              Hygienist services
            </span>
            <i></i>
            <span>
              Crowns &amp; bridges
            </span>
            <i></i>
            <span>
              Dental implants
            </span>
            <i></i>
            <span>
              Dentures
            </span>
            <i></i>
            <span>
              Cosmetic dentistry
            </span>
            <i></i>
            <span>
              Teeth whitening
            </span>
            <i></i>
            <span>
              Orthodontics
            </span>
            <i></i>
            <span>
              Root canal treatment
            </span>
            <i></i>
            <span>
              Extractions
            </span>
            <i></i>
            <span>
              Sedation
            </span>
            <i></i>
          </div>
        </div>
        <section className="scene-statement" aria-labelledby="intro-title">
          <div className="stage">
            <div className="wrap">
              <p className="scene-no" id="intro-title">
                01 / The practice
              </p>
              <p className="lightup" style={{ marginTop: "2rem" }}>
                <span className="lw" style={{ "--i": "0", "--p": "0.0" }}>
                  Our
                </span>
                {" "}
                <span className="lw" style={{ "--i": "1", "--p": "3.03" }}>
                  aim
                </span>
                {" "}
                <span className="lw" style={{ "--i": "2", "--p": "6.07" }}>
                  is
                </span>
                {" "}
                <span className="lw" style={{ "--i": "3", "--p": "9.1" }}>
                  to
                </span>
                {" "}
                <span className="lw" style={{ "--i": "4", "--p": "12.14" }}>
                  provide
                </span>
                {" "}
                <span className="lw" style={{ "--i": "5", "--p": "15.17" }}>
                  the
                </span>
                {" "}
                <span className="lw" style={{ "--i": "6", "--p": "18.21" }}>
                  very
                </span>
                {" "}
                <span className="lw" style={{ "--i": "7", "--p": "21.24" }}>
                  best
                </span>
                {" "}
                <span className="lw" style={{ "--i": "8", "--p": "24.28" }}>
                  all-round
                </span>
                {" "}
                <span className="lw" style={{ "--i": "9", "--p": "27.31" }}>
                  care
                </span>
                {" "}
                <span className="lw" style={{ "--i": "10", "--p": "30.34" }}>
                  that
                </span>
                {" "}
                <span className="lw" style={{ "--i": "11", "--p": "33.38" }}>
                  modern
                </span>
                {" "}
                <span className="lw" style={{ "--i": "12", "--p": "36.41" }}>
                  dentistry
                </span>
                {" "}
                <span className="lw" style={{ "--i": "13", "--p": "39.45" }}>
                  has
                </span>
                {" "}
                <span className="lw" style={{ "--i": "14", "--p": "42.48" }}>
                  to
                </span>
                {" "}
                <span className="lw" style={{ "--i": "15", "--p": "45.52" }}>
                  offer,
                </span>
                {" "}
                <span className="lw" style={{ "--i": "16", "--p": "48.55" }}>
                  while
                </span>
                {" "}
                <span className="lw" style={{ "--i": "17", "--p": "51.59" }}>
                  remaining
                </span>
                {" "}
                <span className="lw" style={{ "--i": "18", "--p": "54.62" }}>
                  true
                </span>
                {" "}
                <span className="lw" style={{ "--i": "19", "--p": "57.66" }}>
                  to
                </span>
                {" "}
                <span className="lw" style={{ "--i": "20", "--p": "60.69" }}>
                  the
                </span>
                {" "}
                <span className="lw em" style={{ "--i": "21", "--p": "63.72" }}>
                  family-centred
                </span>
                {" "}
                <span className="lw em" style={{ "--i": "22", "--p": "66.76" }}>
                  values
                </span>
                {" "}
                <span className="lw" style={{ "--i": "23", "--p": "69.79" }}>
                  on
                </span>
                {" "}
                <span className="lw" style={{ "--i": "24", "--p": "72.83" }}>
                  which
                </span>
                {" "}
                <span className="lw" style={{ "--i": "25", "--p": "75.86" }}>
                  the
                </span>
                {" "}
                <span className="lw" style={{ "--i": "26", "--p": "78.9" }}>
                  practice
                </span>
                {" "}
                <span className="lw" style={{ "--i": "27", "--p": "81.93" }}>
                  was
                </span>
                {" "}
                <span className="lw" style={{ "--i": "28", "--p": "84.97" }}>
                  founded.
                </span>
              </p>
              <div className="stage-meta">
                <span>
                  Est. family practice
                </span>
                <span>
                  NHS &amp; independent
                </span>
                <span>
                  21 Collier Row Road
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="pillars-title">
          <div className="wrap">
            <div className="intro-grid">
              <figure style={{ margin: "0" }}>
                <div className="frame zoom" data-reveal="">
                  <img decoding="async" src="/img/consult.webp" width="1000" height="750" alt="A dentist explains an X-ray on a screen to a seated patient" loading="lazy" />
                </div>
                <figcaption className="figcap" data-reveal="">
                  Every treatment starts with a clear explanation of your options.
                </figcaption>
              </figure>
              <div className="copy">
                <p className="scene-no" data-reveal="">
                  02 / Care
                </p>
                <h2 className="h2" id="pillars-title">
                  Calm, careful dentistry for
                  {" "}
                  <em>
                    every age
                  </em>
                </h2>
                <p className="lead" data-reveal="">
                  A highly qualified, experienced team in a friendly, relaxed setting, with the latest equipment in a ground-floor practice.
                </p>
              </div>
            </div>
            <div className="pillars">
              <div data-reveal="">
                <span className="label">
                  For families
                </span>
                <h3>
                  Every age
                </h3>
                <p>
                  Check-ups, fillings and preventive care for children and adults, with dentists who enjoy treating young patients.
                </p>
              </div>
              <div data-reveal="" style={{ "--d": ".08s" }}>
                <span className="label">
                  In-house
                </span>
                <h3>
                  Specialists
                </h3>
                <p>
                  Orthodontics and root canal treatment from clinicians who focus on them.
                </p>
              </div>
              <div data-reveal="" style={{ "--d": ".16s" }}>
                <span className="label">
                  Nervous patients
                </span>
                <h3>
                  Sedation
                </h3>
                <p>
                  Sedation services are available. Ask the team which options suit you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="reel tint" aria-labelledby="reel-title">
          <div className="reel-sticky">
            <div className="wrap reel-head">
              <div className="head" style={{ marginBottom: "0" }}>
                <div className="left">
                  <p className="scene-no" data-reveal="">
                    03 / Treatments
                  </p>
                  <h2 className="h2" id="reel-title">
                    Everyday care and complex treatment,
                    {" "}
                    <em>
                      in one place
                    </em>
                  </h2>
                </div>
                <p data-reveal="">
                  From routine check-ups to implants and specialist orthodontics.
                </p>
              </div>
            </div>
            <div className="reel-viewport">
              <div className="reel-track">
                <Link className="reel-card" href="/treatments#general">
                  <img decoding="async" src="/img/treatment.webp" alt="" style={{ objectPosition: "50% 30%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      01 / 06
                    </span>
                    <h3>
                      General dentistry
                    </h3>
                    <p>
                      Check-ups, tooth-coloured fillings and extractions for the whole family.
                    </p>
                  </div>
                </Link>
                <Link className="reel-card" href="/orthodontics">
                  <img decoding="async" src="/img/scanner.webp" alt="" style={{ objectPosition: "50% 45%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      02 / 06
                    </span>
                    <h3>
                      Orthodontics
                    </h3>
                    <p>
                      Aesthetic braces, near-invisible aligners and lingual braces with a specialist.
                    </p>
                  </div>
                </Link>
                <Link className="reel-card" href="/root-canal">
                  <img decoding="async" src="/img/xray.webp" alt="" style={{ objectPosition: "55% 50%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      03 / 06
                    </span>
                    <h3>
                      Root canal treatment
                    </h3>
                    <p>
                      Complex cases with our two endodontists, explained step by step.
                    </p>
                  </div>
                </Link>
                <Link className="reel-card" href="/treatment-implants">
                  <img decoding="async" src="/img/implant.webp" alt="" style={{ objectPosition: "50% 50%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      04 / 06
                    </span>
                    <h3>
                      Implants, crowns &amp; bridges
                    </h3>
                    <p>
                      Restore damaged teeth or replace missing ones for good.
                    </p>
                  </div>
                </Link>
                <Link className="reel-card" href="/treatment-dentures">
                  <img decoding="async" src="/img/surgery.webp" alt="" style={{ objectPosition: "60% 50%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      05 / 06
                    </span>
                    <h3>
                      Dentures
                    </h3>
                    <p>
                      Full and partial dentures, made and fitted for comfort.
                    </p>
                  </div>
                </Link>
                <Link className="reel-card" href="/treatments#general">
                  <img decoding="async" src="/img/hygiene.webp" alt="" style={{ objectPosition: "50% 50%" }} loading="lazy" />
                  <span className="go" aria-hidden="true"></span>
                  <div className="rc">
                    <span className="label">
                      06 / 06
                    </span>
                    <h3>
                      Hygienist &amp; prevention
                    </h3>
                    <p>
                      Professional cleaning and advice to keep gums healthy.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="reel-hint">
              <span aria-hidden="true">
                Swipe
                <i className="or">
                  or use the arrows
                </i>
              </span>
              <button className="reel-nav" type="button" data-dir="-1" aria-label="Previous treatments">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button className="reel-nav" type="button" data-dir="1" aria-label="Next treatments">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="section tint" style={{ paddingTop: "clamp(2rem,4vw,3rem)" }} aria-label="All treatments">
          <div className="wrap">
            <div className="index" data-reveal="">
              <Link href="/contact" aria-label="Tooth-coloured fillings: ask the practice">
                <b>
                  Tooth-coloured fillings
                </b>
                <span>
                  Fillings that match your natural teeth
                </span>
              </Link>
              <Link href="/contact" aria-label="Preventive dentistry: ask the practice">
                <b>
                  Preventive dentistry
                </b>
                <span>
                  Care that stops problems before they start
                </span>
              </Link>
              <Link href="/contact" aria-label="Hygienist services: ask the practice">
                <b>
                  Hygienist services
                </b>
                <span>
                  Professional cleaning and gum care
                </span>
              </Link>
              <Link href="/treatment-crowns">
                <b>
                  Crowns &amp; bridges
                </b>
                <span>
                  Strengthen damaged teeth or fill gaps
                </span>
                <em className="go" aria-hidden="true"></em>
              </Link>
              <Link href="/treatment-implants">
                <b>
                  Dental implants
                </b>
                <span>
                  A fixed, long-term replacement for missing teeth
                </span>
                <em className="go" aria-hidden="true"></em>
              </Link>
              <Link href="/treatment-dentures">
                <b>
                  Dentures
                </b>
                <span>
                  Full and partial dentures, fitted for comfort
                </span>
                <em className="go" aria-hidden="true"></em>
              </Link>
              <Link href="/contact" aria-label="Cosmetic dentistry: ask the practice">
                <b>
                  Cosmetic dentistry
                </b>
                <span>
                  Improve the look of your smile
                </span>
              </Link>
              <Link href="/contact" aria-label="Teeth whitening: ask the practice">
                <b>
                  Teeth whitening
                </b>
                <span>
                  Professionally supervised whitening
                </span>
              </Link>
              <Link href="/orthodontics">
                <b>
                  Orthodontics
                </b>
                <span>
                  Braces, aligners and lingual braces
                </span>
                <i>
                  Specialist
                </i>
              </Link>
              <Link href="/root-canal">
                <b>
                  Root canal treatment
                </b>
                <span>
                  Including complex cases with our endodontists
                </span>
                <i>
                  Specialist
                </i>
              </Link>
              <Link href="/treatment-extractions">
                <b>
                  Extractions
                </b>
                <span>
                  Careful removal when it is the right option
                </span>
                <em className="go" aria-hidden="true"></em>
              </Link>
              <Link href="/contact" aria-label="Sedation: ask the practice">
                <b>
                  Sedation
                </b>
                <span>
                  Support for nervous patients
                </span>
              </Link>
            </div>
            <div className="more" data-reveal="">
              <Link className="tlink" href="/treatments">
                All treatments
              </Link>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="spec-title">
          <div className="wrap">
            <div className="spec">
              <div className="spec-media">
                <div className="frame zoom" data-reveal="">
                  <img decoding="async" src="/img/scanner.webp" width="900" height="1350" alt="A modern intraoral scanner and dental instruments in a treatment room" loading="lazy" />
                </div>
              </div>
              <div className="copy">
                <p className="scene-no" data-reveal="">
                  04 / Specialist care
                </p>
                <h2 className="h2" id="spec-title">
                  Orthodontics and root canal treatment,
                  {" "}
                  <em>
                    close to home
                  </em>
                </h2>
                <p className="lead" data-reveal="">
                  Many patients are referred to us by their own dentist. We treat on the NHS where eligible, and independently.
                </p>
                <div className="duo">
                  <div data-reveal="">
                    <h3>
                      Orthodontics
                    </h3>
                    <p>
                      Aesthetic braces, near-invisible aligners and lingual braces. Dr Amish Patel is on the specialist register for orthodontics.
                    </p>
                    <Link className="tlink" href="/orthodontics">
                      Orthodontics and NHS patients
                    </Link>
                  </div>
                  <div data-reveal="">
                    <h3>
                      Root canal treatment
                    </h3>
                    <p>
                      Our two endodontists' practice is limited to root canal treatment. Treatment takes around 60 to 90 minutes and may need more than one visit.
                    </p>
                    <Link className="tlink" href="/root-canal">
                      Root canal treatment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="journey">
              <p className="scene-no" data-reveal="">
                Referred for NHS orthodontics? What happens next
              </p>
              <ol id="journey" data-reveal="">
                <li>
                  <span className="step">
                    Step 1
                  </span>
                  <h3>
                    Referral
                  </h3>
                  <p>
                    Your dentist refers you for an NHS orthodontic assessment. There is currently a long waiting list.
                  </p>
                </li>
                <li>
                  <span className="step">
                    Step 2
                  </span>
                  <h3>
                    We contact you
                  </h3>
                  <p>
                    When you come off the waiting list, we contact you to arrange your assessment.
                  </p>
                </li>
                <li>
                  <span className="step">
                    Step 3
                  </span>
                  <h3>
                    Assessment
                  </h3>
                  <p>
                    Active treatment is unlikely at this visit. Plans are discussed at later appointments, after further investigations.
                  </p>
                </li>
                <li>
                  <span className="step">
                    Step 4
                  </span>
                  <h3>
                    Treatment
                  </h3>
                  <p>
                    If accepted and you go ahead, you commit to frequent appointments, including in work or school time.
                  </p>
                </li>
              </ol>
              <div className="note">
                <p data-reveal="">
                  <b>
                    Eligibility.
                  </b>
                  {" "}
                  The NHS has strict criteria for funded orthodontics and not every referral qualifies. Patients who do not qualify can choose independent treatment.
                </p>
                <p data-reveal="">
                  <b>
                    For referring dentists.
                  </b>
                  {" "}
                  We accept NHS and private referrals for orthodontic and endodontic treatment.
                  {" "}
                  <Link className="tlink" href="/referrals" style={{ marginLeft: ".25rem" }}>
                    Referral information
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section tint" aria-labelledby="team-title">
          <div className="wrap">
            <div className="head">
              <div className="left">
                <p className="scene-no" data-reveal="">
                  05 / The team
                </p>
                <h2 className="h2" id="team-title">
                  The clinicians
                  {" "}
                  <em>
                    you will see
                  </em>
                </h2>
              </div>
              <p data-reveal="">
                General dentists, a specialist orthodontist and two endodontists, working together in one practice.
              </p>
            </div>
            <div className="credits">
              <Link href="/team#amish-patel" data-reveal="" style={{ "--d": "0.00s" }}>
                <b>
                  Dr Amish Patel
                </b>
                <span>
                  Specialist orthodontist
                </span>
              </Link>
              <Link href="/team#sameer-patel" data-reveal="" style={{ "--d": "0.06s" }}>
                <b>
                  Dr Sameer Patel
                </b>
                <span>
                  Orthodontics, cosmetic dentistry
                </span>
              </Link>
              <Link href="/team#nikhil-shah" data-reveal="" style={{ "--d": "0.00s" }}>
                <b>
                  Dr Nikhil Shah
                </b>
                <span>
                  Restorative and preventive
                </span>
              </Link>
              <Link href="/team#priya-gohil" data-reveal="" style={{ "--d": "0.06s" }}>
                <b>
                  Dr Priya Gohil
                </b>
                <span>
                  General dentistry, children
                </span>
              </Link>
              <Link href="/team#parul-patel" data-reveal="" style={{ "--d": "0.00s" }}>
                <b>
                  Dr Parul Patel
                </b>
                <span>
                  Minimally invasive restorative
                </span>
              </Link>
              <Link href="/team#neha-tank" data-reveal="" style={{ "--d": "0.06s" }}>
                <b>
                  Dr Neha Tank
                </b>
                <span>
                  Children’s dentistry
                </span>
              </Link>
              <Link href="/team#simranjit-johal" data-reveal="" style={{ "--d": "0.00s" }}>
                <b>
                  Dr Simranjit Johal
                </b>
                <span>
                  Endodontist
                </span>
              </Link>
              <Link href="/team#carl-agyeman" data-reveal="" style={{ "--d": "0.06s" }}>
                <b>
                  Dr Carl Agyeman
                </b>
                <span>
                  Endodontist
                </span>
              </Link>
            </div>
            <div className="more" data-reveal="">
              <Link className="tlink" href="/team">
                Meet the team
              </Link>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="price-title">
          <div className="wrap">
            <div className="head">
              <div className="left">
                <p className="scene-no" data-reveal="">
                  06 / Prices
                </p>
                <h2 className="h2" id="price-title">
                  NHS dental
                  {" "}
                  <em>
                    charges
                  </em>
                </h2>
              </div>
              <p data-reveal="">
                From April 2026. You pay one charge for each course of treatment, even if it needs more than one visit.
                {" "}
                <Link className="tlink" href="/prices">
                  Prices and exemptions
                </Link>
              </p>
            </div>
            <div className="price-cards">
              <article className="pcard" data-reveal="" style={{ "--d": "0.00s" }}>
                <span className="label">
                  Also urgent care
                </span>
                <h3>
                  Band 1
                </h3>
                <span className="amt num">
                  £27.90
                </span>
                <p>
                  Check-up, examination and X-rays, or urgent and unscheduled care.
                </p>
              </article>
              <article className="pcard" data-reveal="" style={{ "--d": "0.08s" }}>
                <span className="label">
                  Includes Band 1
                </span>
                <h3>
                  Band 2
                </h3>
                <span className="amt num">
                  £76.60
                </span>
                <p>
                  Everything in Band 1, plus fillings, extractions and deep scaling.
                </p>
              </article>
              <article className="pcard" data-reveal="" style={{ "--d": "0.16s" }}>
                <span className="label">
                  Lab work
                </span>
                <h3>
                  Band 3
                </h3>
                <span className="amt num">
                  £332.10
                </span>
                <p>
                  Treatment that needs lab work, such as crowns and dentures.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="visit-scene" aria-labelledby="visit-title">
          <div className="bg" aria-hidden="true">
            <img decoding="async" src="/img/surgery.webp" alt="" loading="lazy" />
          </div>
          <div className="wrap">
            <div className="visit-card" data-reveal="">
              <p className="scene-no">
                07 / Visit
              </p>
              <h2 className="h2" id="visit-title" style={{ fontSize: "clamp(2rem,2.5vw + 1rem,3.2rem)" }}>
                Find
                {" "}
                <em>
                  the practice
                </em>
              </h2>
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
                    <p className="open-status in-list" data-open-status="">
                      <span className="sdot" aria-hidden="true"></span>
                      <span className="stext">
                        Monday to Friday, 9am–5pm
                      </span>
                    </p>
                    <ul className="hours">
                      <li data-day="0">
                        <span>
                          Monday
                        </span>
                        <span className="num">
                          9am–5pm
                        </span>
                      </li>
                      <li data-day="1">
                        <span>
                          Tuesday
                        </span>
                        <span className="num">
                          9am–5pm
                        </span>
                      </li>
                      <li data-day="2">
                        <span>
                          Wednesday
                        </span>
                        <span className="num">
                          9am–5pm
                        </span>
                      </li>
                      <li data-day="3">
                        <span>
                          Thursday
                        </span>
                        <span className="num">
                          9am–5pm
                        </span>
                      </li>
                      <li data-day="4">
                        <span>
                          Friday
                        </span>
                        <span className="num">
                          9am–5pm
                        </span>
                      </li>
                      <li data-day="5">
                        <span>
                          Saturday
                        </span>
                        <span className="num">
                          Closed
                        </span>
                      </li>
                      <li data-day="6">
                        <span>
                          Sunday
                        </span>
                        <span className="num">
                          Closed
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="drow">
                  <span className="label">
                    Parking
                  </span>
                  <div>
                    Free off-street parking nearby, and a paid car park near Tesco.
                  </div>
                </div>
                <div className="drow">
                  <span className="label">
                    Buses
                  </span>
                  <div>
                    Stop ET (Collier Row Library): 247 from Barkingside, 252 from Collier Row, 294 from Noak Hill
                    <br />
                    Stop WF (Collier Row / Clockhouse Lane): 247 from Romford, 252 from Hornchurch, 294 from Havering
                  </div>
                </div>
              </div>
              <div className="vbtns">
                <a className="btn btn-solid" href="tel:+441708728715">
                  Call the practice
                  {" "}
                  <span className="arr" aria-hidden="true"></span>
                </a>
                <a className="btn btn-line" href={"https://www.google.com/maps/dir/?api=1&destination=21+Collier+Row+Road+Romford+RM5+3NR"} target="_blank" rel="noopener">
                  Get directions
                </a>
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
