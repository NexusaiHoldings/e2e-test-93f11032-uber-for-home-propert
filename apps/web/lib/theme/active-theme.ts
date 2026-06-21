/**
 * active-theme — the resolved ThemeContract this company wears.
 * Written by provisioning (_step_substrate_install): an approved mood
 * board's derived theme wins, else the CMO's authored ThemeContract
 * (company-theme-authoring-001 / visual phase 3b). Do NOT hand-edit.
 */
import type { ThemeContract } from "./contract";

export const activeTheme: ThemeContract = {
  "color": {
    "bg": "#ffffff",
    "surface": "#fafafa",
    "surfaceAlt": "#f4f4f4",
    "text": "#111111",
    "textMuted": "#555555",
    "border": "#e2e2e2",
    "borderStrong": "#c9c9c9",
    "accent": "#2563eb",
    "accentText": "#ffffff",
    "danger": "#c0341d",
    "success": "#15803d"
  },
  "type": {
    "fontHeading": "system-sans",
    "fontBody": "system-sans"
  },
  "shape": {
    "radius": 8
  }
};
