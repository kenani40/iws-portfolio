# Design Notes

## Who this site is for

A university careers officer or an engineering-firm HR reviewer, skimming
roughly a dozen candidate portfolios for an internship or graduate role,
giving each one under a minute before deciding whether to read further.

What they actually want, in order:
1. Proof I can build real things, not just a list of claimed skills.
2. Evidence I understand *why* I made the choices I did, not that I copied
   a tutorial and got lucky.
3. A fast way to reach me if they're interested.

They're likely a generalist on the software side, the site needs to
establish quickly that "web development" is a genuine, demonstrable skill
alongside my core Electrical Engineering background, not a side hobby.

## Sitemap

```
/ (Home)
├── /about
├── /projects
│   ├── /projects/plant-nursery
│   ├── /projects/flag-of-malawi
│   └── /projects/bootstrap-portfolio
├── /article
├── /cv.pdf
├── /contact
└── /404
```

## Content plan

**Home**: One clear sentence stating who I am and what I do, not just a
name and photo. Links to the two strongest projects, not all of them.

**About**: Written in my own voice. The actual story of why an EE student
ended up doing serious web development work, not a resume rehash.

**Projects (×3)**: Each project write-up covers: what the problem was,
what I actually did, what tools I used, how it went (including anything
that didn't work smoothly), and what I'd do differently next time.

1. **Plant Nursery landing page**: a real group-coordination problem
   (Assignment 2), including a real bug I owned and debugged (missing
   `alt` attribute) with a genuine "what I'd change" retrospective.
2. **Flag of Malawi in pure CSS**: a real technical struggle (invisible
   sun rays, diagnosed and fixed through geometry reasoning, not guessing)
   — strong material for an honest "what went wrong and how I found it"
   section.
3. **Bootstrap Portfolio (Lab 3)**: a component-assembly problem rather
   than a from-scratch build: learning to work *within* a framework's
   conventions instead of writing every rule by hand. Real content:
   navbar, project cards using the 12-column grid, category-coded skill
   badges, a dismissible alert, a centered contact form, and a Bootstrap
   modal (the extension challenge) wired to `data-bs-toggle`/`data-bs-target`
   with no custom JavaScript. Honest retrospective material: Bootstrap
   trades control for speed, good for this exercise, but everything looks
   like "a Bootstrap site" unless deliberately overridden, which is a real
   trade-off worth naming rather than hiding.

**Article (500+ words)**: Topic: why `box-sizing: border-box` should be
the first line in every stylesheet. Genuine, tested understanding from
real debugging across multiple labs, not a general "what is CSS" piece.

**Skills**: Shown via links to the specific project that demonstrates
each one, not a bare list of badges.

**Contact**: Form with real client-side validation and specific error
messages (not just the browser default).

**404**: Custom page, on-theme with the rest of the site.

## Design System

### Colour palette (light mode — default)

| Token | Hex | Usage | Contrast (on `--bg`) |
|---|---|---|---|
| `--bg` | `#F7F7F5` | Page background | — |
| `--bg-alt` | `#FFFFFF` | Card / form field background | — |
| `--text-primary` | `#14171A` | Headings, primary content | 16.77:1 |
| `--text-secondary` | `#5B6066` | Subtext, descriptions | 5.91:1 |
| `--accent` | `#0F7A38` | Buttons, links, skill pills | 5.07:1 |
| `--accent-text` | `#F7F7F5` | Text on accent-filled buttons | 5.07:1 |
| `--border` | `#E2E2DE` | Card borders, dividers | — |
| `--error` | `#B3261E` | Form validation error states | — |

### Colour palette (dark mode — via `[data-theme="dark"]`)

| Token | Hex | Usage | Contrast (on dark `--bg`) |
|---|---|---|---|
| `--bg` | `#121212` | Page background | — |
| `--bg-alt` | `#1E1E1E` | Card / form field background | — |
| `--text-primary` | `#EDEDED` | Headings, primary content | 16.00:1 |
| `--text-secondary` | `#9A9A9A` | Subtext, descriptions | 6.66:1 |
| `--accent` | `#22C55E` | Buttons, links, skill pills | 8.22:1 |
| `--accent-text` | `#0A0A0A` | Text on accent-filled buttons | 8.69:1 |

All pairings verified at or above WCAG AA's 4.5:1 minimum for normal text.
The light-mode accent deliberately uses a darker green (`#0F7A38`) than
dark mode's (`#22C55E`) — the brighter green only reaches 3.07:1 on a light
background, which fails AA, so the two modes intentionally use different
accent shades rather than one colour reused everywhere regardless of
background.

### Type scale

Typeface: Inter, loaded via Google Fonts.

| Element | Size | Weight |
|---|---|---|
| Hero heading (`h1`) | 2rem (mobile) → 3.5rem (1440px+) | Bold (700) |
| Section headings (`h2`) | ~1.5–2rem, browser default scaled by context | Bold (700) |
| Sub-headings (`h3`) | ~1.1–1.25rem | Semi Bold (600) |
| Body text | 1rem (16px base) | Regular (400) |
| Secondary/description text | 0.9rem | Regular (400) |
| Skill pill / tag text | 0.8–0.9rem | Semi Bold (600) |
| Button text | 1rem | Semi Bold (600) |

### Spacing scale

Defined as custom properties, used consistently instead of one-off pixel
values:

| Token | Value |
|---|---|
| `--space-xs` | 0.5rem (8px) |
| `--space-sm` | 1rem (16px) |
| `--space-md` | 1.5rem (24px) |
| `--space-lg` | 3rem (48px) |
| `--space-xl` | 5rem (80px) |

### Corner radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 6px | Buttons, form fields, cards |
| `--radius-pill` | 20px | Tag/skill pills |

### Component states

**Buttons (`.btn`):**
- Default: `--accent` background, `--accent-text` text
- Hover/focus: background darkens slightly (`#9AB92E` light / adjusted for dark)
- Focus (keyboard): 3px `--accent` outline via `:focus-visible`, offset 2px

**Form fields:**
- Default: `--bg-alt` background, 1px `--border` outline, `--radius-sm` corners
- Focus: `:focus-visible` outline in `--accent`
- Invalid (`.invalid` class, added by `form.js`): border colour changes to
  `--error`, with a matching error message in `--error` shown beneath the
  field
- Success: no field-level styling change — a status message appears below
  the submit button in `--accent`

**Skill pills / project cards:**
- Default: solid `--accent` fill (pills) or `--bg-alt` with `--border`
  outline (project cards)
- Hover (project cards): `translateY(-4px)` lift with a subtle shadow,
  disabled under `prefers-reduced-motion`

### Breakpoints

Mobile-first, base styles target the smallest screen; each `min-width`
query adds complexity as the viewport grows.

| Breakpoint | Width | Key changes |
|---|---|---|
| Base (mobile) | up to 767px | Single column throughout, hamburger nav, stacked hero |
| Tablet | 768px+ | Horizontal nav, 2-column skills/projects |
| Desktop | 1024px+ | Side-by-side hero and about layouts, 3-column projects |
| Large desktop | 1440px+ | Wider max-width, larger heading scale |
