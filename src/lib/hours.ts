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
