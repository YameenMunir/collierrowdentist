import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Crowns in Collier Row | Collier Row Dental Practice",
  description: "A crown is a metal or porcelain cap which sits over the tooth to either change the way it looks or to protect it from biting forces if it has been wea",
});

const jsonLd = [breadcrumbJsonLd("crowns")];

export default function Page() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <main id="main">
        <PageHero
          route="crowns"
          image="/img/implant.webp"
          eyebrow="Treatment"
          title="Dental crowns"
          lead="A crown is a metal or porcelain cap which sits over the tooth to either change the way it looks or to protect it from biting forces if it has been weakened by decay."
        />
        <section className="section">
          <div className="wrap article">
            <aside className="toc" aria-label="On this page">
              <p className="label">
                On this page
              </p>
              <a href="#overview">
                Overview
              </a>
              <a href="#what-happens">
                What happens
              </a>
              <a href="#cost">
                Cost
              </a>
            </aside>
            <div className="prose">
              <section id="overview">
                <h2 data-reveal="">
                  Overview
                </h2>
                <p data-reveal="">
                  A crown is a metal or porcelain cap which sits over the tooth to either change the way it looks or to protect it from biting forces if it has been weakened by decay.
                </p>
                <p className="callout" data-reveal="">
                  <span>
                    This is a general outline of what happens if you decide to have a crown. It can vary between teeth and patients.
                  </span>
                </p>
              </section>
              <section id="what-happens">
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
                        If needed, your dentist can numb the tooth and area so that you are comfortable during the procedure. If at any stage you feel pain or sensitivity, let your dentist know and they will do what they can to make you more comfortable.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Preparing the tooth
                      </h3>
                      <p>
                        To make room for the crown, the size of the tooth has to be reduced. The dentist removes this bit by bit so that only the right amount is taken away. It may seem like a lot, but it is removed slowly and accurately.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Taking moulds
                      </h3>
                      <p>
                        The crown is made in a dental laboratory. So the technician can make a crown tailored to your tooth, your dentist takes moulds of your top and bottom teeth. The material starts runny and becomes rubbery as it sets. It is not painful, but can feel like a bit of a mouthful.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Temporary crown
                      </h3>
                      <p>
                        While your crown is being made, your dentist fits a temporary crown to stop the prepared tooth hurting or moving. Be careful with it, as it may fall off or break. If this happens, contact the practice for advice.
                      </p>
                    </div>
                  </li>
                  <li data-reveal="">
                    <div>
                      <h3>
                        Fitting the crown
                      </h3>
                      <p>
                        About a week later your crown returns from the laboratory. The temporary crown is removed, with anaesthetic if needed, and the new crown is checked for fit, bite and, for porcelain crowns, colour. Once you and the dentist are happy, it is cemented in place. It may feel slightly high or bulky at first, but this eases over time.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>
              <section id="cost">
                <h2 data-reveal="">
                  Cost
                </h2>
                <p data-reveal="">
                  Crowns are Band 3 treatment on the NHS, as they need lab work.
                  {" "}
                  <Link className="tlink" href="/prices">
                    See NHS charges
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </section>
        <RelatedTreatments items={["implants", "dentures"]} />
        <CtaBand />
      </main>
    </>
  );
}
