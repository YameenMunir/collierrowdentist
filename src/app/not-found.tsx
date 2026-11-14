import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main id="main">
        <section>
          <div className="wrap err404">
            <span className="big" style={{ "--i": "0" }}>
              404
            </span>
            <h1 className="h2">
              This page could not be found
            </h1>
            <p className="lead">
              The page may have moved when the website was redesigned. These links may help.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-solid" href="/">
                Go to the homepage
                {" "}
                <span className="arr" aria-hidden="true"></span>
              </Link>
              <Link className="btn btn-line" href="/treatments">
                Treatments
              </Link>
              <Link className="btn btn-line" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
