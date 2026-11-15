import Link from "next/link";
import type { ReactNode } from "react";
import { ROUTES } from "@/lib/routes";
import { PRACTICE } from "@/lib/site";

interface CtaBandProps {
  title: ReactNode;
  text: ReactNode;
}

/**
 * The closing "Next scene" call-to-action band: call the practice or send an enquiry.
 * Only use it where the page has a specific next step to offer; the footer already
 * carries the practice phone number on every page.
 */
export default function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section className="cta">
      <div className="wrap">
        <p className="scene-no" data-reveal="">
          Next scene
        </p>
        <h2 data-reveal="">{title}</h2>
        <p data-reveal="">{text}</p>
        <div className="btns" data-reveal="">
          <a className="btn btn-solid" href={PRACTICE.tel}>
            Call {PRACTICE.phone} <span className="arr" aria-hidden="true"></span>
          </a>
          <Link className="btn btn-line" href={ROUTES.contact.path}>
            Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
