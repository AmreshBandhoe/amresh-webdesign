# Amresh — Web Designer

Static portfolio site for Amresh, freelance webdesigner in Paramaribo, Suriname.
Implemented from the Claude Design canvas
[Amresh Webdesign](https://claude.ai/design/p/1af56ae6-615b-4466-bc77-9a59433caf44).

## Run

```bash
npx --yes serve . -l 4180
```

Then open <http://localhost:4180>. No build step — plain HTML, CSS and JS.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page shell: header, footer, `<main>` mount point |
| `styles.css` | All styling, design tokens under `:root` |
| `app.js` | Content data, hash router, portfolio filter/modal, contact form |
| `assets/` | Project thumbnails — see `assets/README.md` |
| `Amresh Webdesign.dc.html` | The imported design canvas (source of truth for the design) |
| `support.js` | Runtime the canvas file needs; not used by the site |

## Structure

`app.js` holds the content as plain arrays near the top — `PROJECTS`,
`SERVICES`, `SERVICE_DETAIL`, `STEPS`, `SKILLS`, `TIMELINE`, `CONTACT_LINES`.
Editing copy or adding a project means editing those arrays; nothing else needs
to change.

Five pages are routed on the hash: `#/home`, `#/over`, `#/diensten`,
`#/portfolio`, `#/contact`. A project detail also deep-links, e.g.
`#/portfolio/faralobi`.

## Behaviour carried over from the design

- Portfolio category filter (Alles / Website / Webshop / SEO / Branding)
- Project detail modal, closable by overlay click, Sluiten, or Escape
- Contact form validation with the same Dutch error copy and success panel
- Projects without a screenshot show their placeholder slot label

## Added on top of the canvas

The canvas is a single-state design; these are the things a real page needs:

- Deep-linkable URLs and per-page `<title>`s
- A mobile nav toggle under 780px
- Keyboard support: skip link, focus trap in the modal, Escape to close,
  focus returned to the card that opened it
- `prefers-reduced-motion` handling
- A live-site link in the project modal when a `PROJECTS` entry has a `url`
  (currently just Faralobi, linking to faralobi.netlify.app)
