# Mounika Veeramachaneni — Portfolio Website

## Project Overview
Personal portfolio site for a Data Analyst / BI Engineer. Skills-first positioning — not tied to a single job role. Built with React + Vite + Tailwind CSS.

**Live design direction:** Dark editorial tech aesthetic. Slate-950 base, teal-400 + amber-400 accents, Space Mono for code elements, DM Sans for body.

## Critical Rules (Never Break These)
- **NO graduation year anywhere** — not in Education, not in comments, not in placeholders
- **Skills-first** — Skills section appears before Experience in all layouts
- **No role-specific language** — copy should reflect breadth (analytics, engineering, ITSM, ML) not one company
- **Responsive always** — every component must work on 375px mobile and 1440px desktop

## Project Structure
```
src/
  data/resumeData.js     ← SINGLE SOURCE OF TRUTH — all content lives here
  components/
    Navbar.jsx
    Hero.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    ScrollToTop.jsx
  App.jsx
  index.css
  main.jsx
```

## Design Tokens (from tailwind.config.js + index.css)
- **BG Primary:** `bg-slate-950` (#0a0f1e)
- **BG Cards:** `bg-slate-900` (#0f172a)
- **BG Elevated:** `bg-slate-800` (#1e293b)
- **Accent Teal:** `text-teal-400` / `bg-teal-400` (#2dd4bf)
- **Accent Amber:** `text-amber-400` / `bg-amber-400` (#fbbf24)
- **Text Primary:** `text-slate-100`
- **Text Muted:** `text-slate-400` / `text-slate-500`
- **Borders:** `border-slate-800` (default), `border-slate-700` (hover)
- **Font Display/Mono:** `font-mono` = Space Mono
- **Font Body:** `font-sans` = DM Sans

## Gradient utility
Use `className="text-gradient"` for teal→amber gradient text (defined in index.css).

## Animation Pattern (IntersectionObserver)
All scroll-triggered animations follow this pattern:
```jsx
const ref = useRef(null)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-6')
      }
    },
    { threshold: 0.15 }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])
// Initial: className="opacity-0 translate-y-6 transition-all duration-500"
```

## Stack Badges
Reuse this pattern consistently:
```jsx
<span className="px-2 py-0.5 text-xs font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
  {tech}
</span>
```

## Development Commands
```bash
npm install       # install deps
npm run dev       # dev server at localhost:5173
npm run build     # production build
npm run preview   # preview production build
```
