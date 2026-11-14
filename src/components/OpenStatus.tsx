/**
 * Live open/closed indicator. The fallback text is replaced in the browser by
 * site-behavior.ts, which finds every `[data-open-status]` element.
 */
export default function OpenStatus({ className }: { className?: string }) {
  return (
    <p className={className ? `open-status ${className}` : "open-status"} data-open-status="">
      <span className="sdot" aria-hidden="true"></span>
      <span className="stext">Monday to Friday, 9am–5pm</span>
    </p>
  );
}
