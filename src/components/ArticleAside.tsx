import type { ReactNode } from "react";

export interface Fact {
  label: string;
  value: ReactNode;
}

interface ArticleAsideProps {
  /** The handful of facts a patient looks for first (cost, visits, who treats you). Shown on mobile too. */
  facts?: Fact[];
  /** "On this page" links; only worth it on longer pages. Hidden on mobile. */
  toc?: { href: string; label: string }[];
}

/** Left-hand column of an article page: key facts at a glance, then an optional table of contents. */
export default function ArticleAside({ facts, toc }: ArticleAsideProps) {
  return (
    <aside className="aside">
      {facts && facts.length > 0 && (
        <div className="facts-wrap" data-reveal="">
          <p className="label">At a glance</p>
          <dl className="facts">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
      {toc && toc.length > 0 && (
        <nav className="toc" aria-label="On this page">
          <p className="label">On this page</p>
          {toc.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </aside>
  );
}
