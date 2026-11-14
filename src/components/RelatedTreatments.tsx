import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const CARDS = {
  crowns: {
    title: "Dental crowns",
    summary: "A crown is a metal or porcelain cap which sits over the tooth to either change the way it…",
  },
  implants: {
    title: "Dental implants",
    summary: "Implants are screws placed in the bone, on which crowns or dentures can be fitted to…",
  },
  dentures: {
    title: "Dentures",
    summary: "There are many options for replacing missing teeth. The most common is a denture (plate)…",
  },
} as const;

type RelatedKey = keyof typeof CARDS;

/** "Related" strip at the foot of a treatment page: two sibling treatments plus "All treatments". */
export default function RelatedTreatments({ items }: { items: RelatedKey[] }) {
  return (
    <section className="section tint" style={{ paddingBlock: "clamp(3rem,6vw,5rem)" }}>
      <div className="wrap">
        <p className="label brand" data-reveal="" style={{ marginBottom: "1.5rem" }}>
          Related
        </p>
        <div className="related">
          {items.map((key) => (
            <Link key={key} href={ROUTES[key].path} data-reveal="">
              <b>{CARDS[key].title}</b>
              <span>{CARDS[key].summary}</span>
            </Link>
          ))}
          <Link href={ROUTES.treatments.path} data-reveal="">
            <b>All treatments</b>
            <span>General, restorative, cosmetic and specialist care.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
