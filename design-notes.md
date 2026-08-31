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

**Home** : One clear sentence stating who I am and what I do, not just a
name and photo. Links to the two strongest projects, not all of them.

**About** : Written in my own voice. The actual story of why an EE student
ended up doing serious web development work, not a resume rehash.

**Projects (×3)** : Each project write-up covers: what the problem was,
what I actually did, what tools I used, how it went (including anything
that didn't work smoothly), and what I'd do differently next time.

1. **Plant Nursery landing page** : a real group-coordination problem
   (Assignment 2), including a real bug I owned and debugged (missing
   `alt` attribute) with a genuine "what I'd change" retrospective.
2. **Flag of Malawi in pure CSS** : a real technical struggle (invisible
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
   trades control for speedl, good for this exercise, but everything looks
   like "a Bootstrap site" unless deliberately overridden, which is a real
   trade-off worth naming rather than hiding.

**Article (500+ words)**:  Topic: why `box-sizing: border-box` should be
the first line in every stylesheet. Genuine, tested understanding from
real debugging across multiple labs, not a general "what is CSS" piece.

**Skills**: Shown via links to the specific project that demonstrates
each one, not a bare list of badges.

**Contact**:  Form with real client-side validation and specific error
messages (not just the browser default).

**404**: Custom page, on-theme with the rest of the site.