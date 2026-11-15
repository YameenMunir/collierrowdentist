import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { PRACTICE } from "@/lib/site";
import HoursList from "@/components/HoursList";
import OpenStatus from "@/components/OpenStatus";

export const metadata: Metadata = pageMetadata({
  title: "Location and Directions | Collier Row Dental Practice",
  description:
    "Find Collier Row Dental Practice at 21 Collier Row Road, Romford RM5 3NR. Map, directions, parking, bus routes and opening hours.",
});

const jsonLd = [breadcrumbJsonLd("location")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="location"
          image="/img/hero.webp"
          position="50% 30%"
          eyebrow="Location"
          title={<>Find <em>the practice</em></>}
          lead="We are at 21 Collier Row Road, Romford, with free parking nearby and bus stops close to the door."
        />

        <section className="section" aria-labelledby="map-title">
          <div className="wrap">
            <h2 className="sr-only" id="map-title">
              Map and address
            </h2>
            <div className="contact-grid location-grid">
              <div className="map-frame" data-reveal="">
                <iframe
                  title="Map showing Collier Row Dental Practice, 21 Collier Row Road, Romford RM5 3NR"
                  src={PRACTICE.maps.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
              <div data-reveal="">
                <div className="details">
                  <div className="drow">
                    <span className="label">Address</span>
                    <address className="big">
                      21 Collier Row Road
                      <br />
                      Collier Row
                      <br />
                      Romford RM5 3NR
                    </address>
                  </div>
                  <div className="drow">
                    <span className="label">Telephone</span>
                    <div>
                      <a className="big num" href={PRACTICE.tel}>
                        01708 728715
                      </a>
                    </div>
                  </div>
                  <div className="drow">
                    <span className="label">Hours</span>
                    <div>
                      <OpenStatus className="in-list" />
                      <HoursList />
                    </div>
                  </div>
                </div>
                <div className="vbtns">
                  <a className="btn btn-solid" href={PRACTICE.maps.directions} target="_blank" rel="noopener">
                    Get directions <span className="arr" aria-hidden="true"></span>
                  </a>
                  <a className="btn btn-line" href={PRACTICE.maps.open} target="_blank" rel="noopener">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section tint" aria-labelledby="getting-title">
          <div className="wrap">
            <div className="head">
              <div className="left">
                <p className="scene-no" data-reveal="">
                  Getting here
                </p>
                <h2 className="h2" id="getting-title">
                  Easy to reach, <em>by car or bus</em>
                </h2>
              </div>
            </div>
            <div className="pillars">
              <div data-reveal="">
                <span className="label">By car</span>
                <h3>Parking</h3>
                <p>Free off-street parking nearby, and a paid car park near Tesco.</p>
              </div>
              <div data-reveal="" style={{ "--d": ".08s" }}>
                <span className="label">By bus</span>
                <h3>Bus stops</h3>
                <p>
                  Stop ET (Collier Row Library): 247 from Barkingside, 252 from Collier Row, 294 from Noak Hill.
                  <br />
                  Stop WF (Collier Row / Clockhouse Lane): 247 from Romford, 252 from Hornchurch, 294 from Havering.
                </p>
              </div>
              <div data-reveal="" style={{ "--d": ".16s" }}>
                <span className="label">Access</span>
                <h3>Ground floor</h3>
                <p>The practice is on the ground floor with easy access.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
