import { formatHours, HOURS } from "@/lib/hours";

/** Weekly opening hours from hours.ts. site-behavior.ts highlights today's row via `data-day`. */
export default function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "hours compact" : "hours"}>
      {HOURS.hours.map((day, i) => (
        <li key={day[0]} data-day={i}>
          <span>{day[0]}</span>
          <span className="num">{formatHours(day)}</span>
        </li>
      ))}
    </ul>
  );
}
