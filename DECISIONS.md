# Decision Log


## 1. Light mode as the default theme, not dark

**Decision:** Made light mode (`#F7F7F5` background) the default, with dark
mode as an opt-in toggle.

## 2. CSS custom properties + `data-theme` attribute for theming, not a body class

**Decision:** Theme switching works by setting `data-theme="dark"` on `<html>`,
with every colour in the stylesheet routed through `var(--token-name)`.

**Alternative considered:** A simpler `.dark-mode` class toggled on `<body>`,
with dark-specific rules written separately (e.g. `.dark-mode .card { background: #1E1E1E }`).


## 3. Sorting GitHub repos by `updated_at` instead of showing "pinned" repos

**Decision:** The live API feature sorts fetched repos by most-recently-updated
and shows the top 4, rather than GitHub's actual pinned repos.

**Alternative considered:** Manually hardcoding which repos to feature, or
finding a way to fetch pinned status.

**Why:** GitHub's public REST API (`/users/{user}/repos`) doesn't expose
pinned status at all — that data is only available through GitHub's GraphQL
API, which requires authentication (a personal access token). Adding
authentication to a static client-side site would mean either exposing a
token in public source code (a real security problem) or standing up a
backend proxy, both out of scope for this project.

**What I gave up:** The featured repos aren't curated — they're whatever I
touched most recently, which could include unrelated coursework repos
(`OOP-week-5`, `intropy`) bumping a more relevant project off the list if I
happen to commit to them close to when someone views the site.

---

## 4. Client-side-only form validation, with a simulated success state

**Decision:** `form.js` validates fields properly (required, email format,
minimum message length) with custom error messages, but there is no real
backend, submission just shows a success message and resets the form.

**Alternative considered:** Wiring up a real form-handling service (Netlify
Forms, Formspree) so the form actually sends email.

**Why:** Validation logic and UX (error messages, focus management,
`aria-invalid`) could be built and tested immediately without depending on
an external service or deployment platform choice being finalised first.

**What I gave up:** The form doesn't actually deliver messages anywhere yet, this is an honest limitation, not a hidden one, and something I'd want to
fix by wiring a real service before treating the site as fully "live" for
actual outreach.

---

## 5. Separate branches per feature area, not one branch per day

**Decision:** Used `feature/skeleton`, `feature/styling`, `feature/interactivity`,
`feature/github-api`, and `feature/pages` — each covering one coherent piece
of functionality, merged via its own PR.

**Alternative considered:** A looser branching pattern, e.g. one branch per
work session regardless of what was being built.



**What I gave up:** Some features (like the 404 page, article, and CV)
ended up bundled into one `feature/pages` branch rather than each getting
its own, a pragmatic trade-off since they're all small, similar "static
content" additions, not because I couldn't be bothered to split them
further.

---


**Alternative considered:** Leaving the original copy as-is, since it was
already written and polished.

**Why:** The original copy described skills and a career direction (database
administration, wallet technology) that don't match anything actually
demonstrated on this site — a reviewer clicking from that copy into the
real projects section would immediately notice the mismatch. Content
authenticity is a graded rubric line, and generic-sounding, mismatched copy
fails it regardless of how polished the sentences are individually.

**What I gave up:** Reused, already-designed copy that looked finished in
Figma — the honest rewrite meant redoing text across multiple sections and
re-syncing Figma to match afterward.

---

## 6. Building hi-fi mockups before wireframes, not after

**Decision:** The Figma file started as a hi-fi, fully-coloured design
(inherited from a prior personal project), rather than starting with
greyscale wireframes as the brief's recommended order suggests.

**Alternative considered:** Starting fresh with wireframes first, as
intended.

**Why:** I had an existing personal portfolio design already built in
Figma before this assignment began, and adapting it was faster than
starting from a blank canvas.

**What I gave up:** The wireframe stage came after the hi-fi design existed,
rather than genuinely shaping it — which meant less room to rethink layout
and hierarchy early, since decisions were already partly locked in by the
time wireframes were added retroactively.

---


## 8. Mobile-first breakpoints (`min-width`), not desktop-first (`max-width`)

**Decision:** Base CSS rules (no media query) target the smallest screen;
`min-width` queries at 768px, 1024px, and 1440px add complexity as the
screen grows.

**Alternative considered:** Writing full desktop styles as the default and
overriding them downward for smaller screens with `max-width` queries.

**Why:** Most of the base layout,  a single-column stack,  is genuinely
simpler to write first and only needs additions (multi-column grids, row
layouts) as space becomes available, rather than writing a complex desktop
layout and then subtracting from it for mobile.

**What I gave up:** Nothing significant here either,  mobile-first was
already the established pattern from earlier CSS coursework, so this was
consistency rather than a genuinely contested choice.