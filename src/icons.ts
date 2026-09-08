// src/icons.ts
//
// Central place for Tabler icon data (https://tabler.io/icons).
// To add a new icon:
//   1. Find it on tabler.io/icons, copy its <path d="..."> value(s)
//   2. Add an entry to `iconPaths` below
//   3. Add a keyword -> icon-name mapping to `skillIconMap`
// That's it — grid tiles and the project modal both pick it up automatically.

export type IconPath = string | { d: string; fill: true };

export const iconPaths = {
  "device-desktop": [
    "M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z",
    "M7 20h10",
    "M9 16v4",
    "M15 16v4",
  ],
  "brand-unity": [
    "M14 3l6 4v7",
    "M18 17l-6 4l-6 -4",
    "M4 14v-7l6 -4",
    "M4 7l8 5v9",
    "M20 7l-8 5",
  ],
  "brand-steam": [
    "M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 3l-.176 0a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302",
    { d: "M15.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", fill: true as const },
  ],
  "brand-android": [
    "M4 10l0 6",
    "M20 10l0 6",
    "M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0",
    "M8 3l1 2",
    "M16 3l-1 2",
    "M9 18l0 3",
    "M15 18l0 3",
  ],
  "brand-apple": [
    "M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077",
    "M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2",
  ],
  "brand-meta": [
    "M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z",
    "M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z",
  ],
} as const satisfies Record<string, IconPath[]>;

export type IconName = keyof typeof iconPaths;

// Lowercase keyword -> icon name. Checked as: exact match first, then
// "does the skill string contain this keyword" as a fallback.
export const skillIconMap: Record<string, IconName> = {
  pc: "device-desktop",
  windows: "device-desktop",
  desktop: "device-desktop",
  unity: "brand-unity",
  steam: "brand-steam",
  android: "brand-android",
  ios: "brand-apple",
  iphone: "brand-apple",
  ipad: "brand-apple",
  apple: "brand-apple",
  meta: "brand-meta",
  horizon: "brand-meta",
  quest: "brand-meta",
  source: "brand-steam",
};

/** Match a skill/tag string (e.g. "PC", "Android") to a known icon, if any. */
export function getSkillIcon(skill: string): IconName | null {
  const s = skill.toLowerCase().trim();
  if (skillIconMap[s]) return skillIconMap[s];
  for (const [keyword, icon] of Object.entries(skillIconMap)) {
    if (s.includes(keyword)) return icon;
  }
  return null;
}

/**
 * Render an icon as a raw SVG markup string — for use in client-side JS
 * (e.g. building modal content via innerHTML), where Astro components
 * can't run. Keeps the icon data itself defined in exactly one place.
 */
export function renderIconMarkup(name: IconName, className = "w-3.5 h-3.5"): string {
  const paths = iconPaths[name]
    .map((p) =>
      typeof p === "string"
        ? `<path d="${p}" />`
        : `<path d="${p.d}" fill="currentColor" stroke="none" />`
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>${paths}</svg>`;
}