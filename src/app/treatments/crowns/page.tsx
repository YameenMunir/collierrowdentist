import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import ArticleAside from "@/components/ArticleAside";
import PageHero from "@/components/PageHero";
import RelatedTreatments from "@/components/RelatedTreatments";
import { ROUTES } from "@/lib/routes";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dental Crowns in Collier Row | Collier Row Dental Practice",
  description: "Dental crowns at Collier Row Dental Practice: how a crown is made and fitted over two visits, and what it costs on the NHS (Band 3).",
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
            <ArticleAside
              facts={[
                {
                  label: "NHS cost",
                  value: (
                    <>
                      Band 3, £332.10{" "}
                      <Link className="sub" href={ROUTES.prices.path}>
                        See all charges
                      </Link>
                    </>
                  ),
                },
                { label: "Visits", value: "Two, about a week apart" },
                { label: "Made by", value: "A dental laboratory, to fit your tooth" },
              ]}
            />
            <div className="prose">
              <section id="what-happens">
                <h2 data-reveal="">
                  What happens
                </h2>
                <p data-reveal="">
                  A general outline. It can vary between teeth and patients.
                </p>
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
                        So the laboratory can make a crown tailored to your tooth, your dentist takes moulds of your top and bottom teeth. The material starts runny and becomes rubbery as it sets. It is not painful, but can feel like a bit of a mouthful.
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
            </div>
          </div>
        </section>
        <RelatedTreatments items={["implants", "dentures"]} />
      </main>
    </>
  );
}
