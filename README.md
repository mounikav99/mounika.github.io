# Mounika Veeramachaneni — Portfolio

Personal portfolio website. Skills-first positioning for a Data Analyst / BI Engineer.

**Stack:** React 18 · Vite · Tailwind CSS · Lucide Icons · GitHub Pages

---

## Content Updates

All site content lives in **one file**: `src/data/resumeData.js`

To update anything:
- Personal info, email, LinkedIn → `personal` object
- Skills → `skillDomains` array
- Work history → `experience` array
- Featured projects → `projects` array
- Certifications → `certifications` array
- Education → `education` array (no graduation year)

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0f1e` | Page background |
| Card BG | `#0f172a` | Component backgrounds |
| Teal accent | `#2dd4bf` | Primary CTA, teal domains |
| Amber accent | `#fbbf24` | Secondary accent, amber domains |
| Text primary | `#f1f5f9` | Headings |
| Text muted | `#94a3b8` | Body, descriptions |
| Border | `#1e293b` | Default borders |

---

## Rules
- **No graduation year** in any rendered output
- **Skills section before Experience** — do not reorder
- **resumeData.js is the source of truth** — never hardcode content in components
