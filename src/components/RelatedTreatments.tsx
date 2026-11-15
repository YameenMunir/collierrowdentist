import Link from "next/link";
import { ROUTES } from "@/lib/routes";

/** One line per treatment that says how it differs from the others, so patients can compare options. */
const CARDS = {
  crowns: {
    title: "Dental crowns",
    summary: "Protects a weakened tooth you still have.",
  },
  implants: {
    title: "Dental implants",
    summary: "A fixed replacement for a missing tooth, anchored in the bone.",
  },
  dentures: {
    title: "Dentures",
    summary: "A removable replacement for one or more missing teeth.",
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
