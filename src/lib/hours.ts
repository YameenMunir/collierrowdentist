export type DayHours = [day: string, opens: string | null, closes: string | null];

export interface HoursData {
  tz: string;
  hours: DayHours[];
  /** ISO dates (YYYY-MM-DD) on which the practice is closed, e.g. bank holidays. */
  closures: string[];
}

export const HOURS: HoursData = {
  tz: "Europe/London",
  hours: [
    ["Monday", "09:00", "17:00"],
    ["Tuesday", "09:00", "17:00"],
    ["Wednesday", "09:00", "17:00"],
    ["Thursday", "09:00", "17:00"],
    ["Friday", "09:00", "17:00"],
    ["Saturday", null, null],
    ["Sunday", null, null],
  ],
  closures: [],
};

/** "09:00" -> "9am", "17:30" -> "5:30pm". */
export function formatTime(t: string): string {
  const [h0, m] = t.split(":").map(Number);
  return `${h0 % 12 || 12}${m ? ":" + String(m).padStart(2, "0") : ""}${h0 < 12 ? "am" : "pm"}`;
}

/** Opening time range for a day, e.g. "9am–5pm", or "Closed". */
export function formatHours([, opens, closes]: DayHours): string {
  return opens && closes ? `${formatTime(opens)}–${formatTime(closes)}` : "Closed";
}
