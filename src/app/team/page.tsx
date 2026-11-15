import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Dentists | Collier Row Dental Practice",
  description: "Meet the dentists at Collier Row Dental Practice, including a specialist orthodontist and two endodontists.",
});

const jsonLd = [breadcrumbJsonLd("team")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="team"
          image="/img/surgery.webp"
          position="60% 50%"
          eyebrow="Our team"
          title={<>Meet <em>our team</em></>}
          lead="General dentists with interests in children’s and restorative care, a specialist orthodontist and two endodontists."
        />
        <section className="section">
          <div className="wrap">
            <div className="chips" role="group" aria-label="Filter the team" data-reveal="">
              <button type="button" className="chip on" data-filter="all" aria-pressed="true">
                All clinicians
                <span className="num">
                  8
                </span>
              </button>
              <button type="button" className="chip" data-filter="general" aria-pressed="false">
                General dentistry
                <span className="num">
                  4
                </span>
              </button>
              <button type="button" className="chip" data-filter="ortho" aria-pressed="false">
                Orthodontics
                <span className="num">
                  2
                </span>
              </button>
              <button type="button" className="chip" data-filter="endo" aria-pressed="false">
                Root canal
                <span className="num">
                  2
                </span>
              </button>
            </div>
            <div className="bios" id="bios">
              <article className="bio-card" id="amish-patel" data-group="ortho" data-reveal="" style={{ "--d": "0.00s" }}>
                <span className="bio-no num" aria-hidden="true">
                  01
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Specialist orthodontist
                  </p>
                  <h2>
                    Dr Amish Patel
                  </h2>
                  <p className="ql">
                    BDS MFDS MSc MOrth
                  </p>
                  <p className="bio-text">
                    Dr Amish Patel has experience in a variety of fields in dentistry including oral surgery (extraction of teeth) and paediatric (children’s) dentistry. He is on the specialist register for orthodontics (braces) and has an interest in clear braces. He has taken postgraduate courses in implant dentistry, works at the Royal London Dental Hospital and is an examiner for the Royal College of Surgeons of England.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="sameer-patel" data-group="ortho" data-reveal="" style={{ "--d": "0.08s" }}>
                <span className="bio-no num" aria-hidden="true">
                  02
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Orthodontics, cosmetic dentistry
                  </p>
                  <h2>
                    Dr Sameer Patel
                  </h2>
                  <p className="ql">
                    BDS MFDS MSc MOrth
                  </p>
                  <p className="bio-text">
                    Dr Sameer Patel works part-time in an orthodontic department in a teaching hospital and has an interest in minimally invasive, injection-free cosmetic dentistry. He is involved in many young dentist forums and helps train and assess dental nurses in hospital and practice settings.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="nikhil-shah" data-group="general" data-reveal="" style={{ "--d": "0.00s" }}>
                <span className="bio-no num" aria-hidden="true">
                  03
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Restorative and preventive
                  </p>
                  <h2>
                    Dr Nikhil Shah
                  </h2>
                  <p className="bio-text">
                    Dr Shah graduated from the Royal London Hospital. He has an interest in restorative and preventive dentistry.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="priya-gohil" data-group="general" data-reveal="" style={{ "--d": "0.08s" }}>
                <span className="bio-no num" aria-hidden="true">
                  04
                </span>
                <div className="bio-body">
                  <p className="fc">
                    General dentistry, children
                  </p>
                  <h2>
                    Dr Priya Gohil
                  </h2>
                  <p className="bio-text">
                    Dr Gohil is an experienced dentist and enjoys looking after children’s teeth.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="parul-patel" data-group="general" data-reveal="" style={{ "--d": "0.00s" }}>
                <span className="bio-no num" aria-hidden="true">
                  05
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Minimally invasive restorative
                  </p>
                  <h2>
                    Dr Parul Patel
                  </h2>
                  <p className="bio-text">
                    Dr Patel has a keen interest in minimally invasive restorative techniques.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="neha-tank" data-group="general" data-reveal="" style={{ "--d": "0.08s" }}>
                <span className="bio-no num" aria-hidden="true">
                  06
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Children’s dentistry
                  </p>
                  <h2>
                    Dr Neha Tank
                  </h2>
                  <p className="bio-text">
                    Dr Tank has a particular interest in looking after children’s teeth.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="simranjit-johal" data-group="endo" data-reveal="" style={{ "--d": "0.00s" }}>
                <span className="bio-no num" aria-hidden="true">
                  07
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Endodontist
                  </p>
                  <h2>
                    Dr Simranjit Johal
                  </h2>
                  <p className="bio-text">
                    Dr Johal has joined our team as an endodontist. His practice is limited to providing root canal treatment.
                  </p>
                </div>
              </article>
              <article className="bio-card" id="carl-agyeman" data-group="endo" data-reveal="" style={{ "--d": "0.08s" }}>
                <span className="bio-no num" aria-hidden="true">
                  08
                </span>
                <div className="bio-body">
                  <p className="fc">
                    Endodontist
                  </p>
                  <h2>
                    Dr Carl Agyeman
                  </h2>
                  <p className="bio-text">
                    Dr Agyeman has joined our team as an endodontist. His practice is limited to providing root canal treatment.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
