/** Renders one or more schema.org JSON-LD blocks. */
export default function JsonLd({ data }: { data: object[] }) {
  return (
    <>
      {data.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Safe: `d` is static data defined in this repo, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\u003c") }}
        />
      ))}
    </>
  );
}
