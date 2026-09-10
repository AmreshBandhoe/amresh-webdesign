# Assets

| File | Used for |
|---|---|
| `hero.png` | Home hero background, Over mij portrait |
| `faralobi-1-hero.jpg` … `faralobi-4-sfeer.jpg` | Faralobi portfolio slideshow (hero, Ons verhaal, Menukaart, Sfeer) |
| `surinamespreekt-1-hero.jpg` … `surinamespreekt-4-voorstellen.jpg` | Suriname Spreekt portfolio slideshow (hero, nieuws met stelling, Opinie Index dashboard, Voorstellen) |
| `tikisu-1-hero.jpg` … `tikisu-4-nieuwsbrief.jpg` | TikiSu portfolio slideshow (hero, uitgelichte evenementen, categorieën, nieuwsbrief) |
| `erfeniswijzer-1-hero.jpg` … `erfeniswijzer-4-gids.jpg` | De Erfeniswijzer portfolio slideshow (hero, Hulp bij erfenis, Kennisbank, gratis gids) |
| `faka-1-hero.jpg` … `faka-4-collections.jpg` | FAKA portfolio slideshow (hero, Shop All, productpagina, collecties) |
| `discoversuriname-1-hero.jpg` … `discoversuriname-4-suriname.jpg` | Discover Suriname portfolio slideshow (hero, Alle tours, Autoverhuur, Over Suriname) |
| `tqb-1-schatkist.jpg` … `tqb-4-beheer.jpg` | Spaar Quest portfolio slideshow (schatkist, Buit Binnenhalen, Ouder Modus, verkopen beheren) |
| `techfix-1-hero.jpg` … `techfix-4-betalen.jpg` | TechFix.sr portfolio slideshow (hero, diensten, reparatie aanmelden, online betalen) |
| `coralpalm-1-hero.jpg` … `coralpalm-4-zaal.jpg` | Coral Palm Suites portfolio slideshow (hero, aanbod, vakantiewoningen, zaalverhuur) |
| `work2.png` | Social Media Instellingen portfolio thumbnail |
| `work3.png` | Financial Life Plan portfolio thumbnail |

The Tropic Store and Sranan Kitchen entries in `PROJECTS`
(in `app.js`) have no image yet — they show a placeholder slot label instead.
Add a `media` entry and drop the `slot` field once a screenshot exists.

`signature.png` was part of the original design canvas but is not used by the
site — the signature images were dropped from the templates rather than kept
as a placeholder.

## The Faralobi screenshots

`faralobi-*.jpg` are real screenshots of <https://faralobi.netlify.app/>,
captured with a scripted headless Chrome (via `puppeteer-core`, pointed at the
system Chrome install) rather than a plain screenshot tool, because the site
uses GSAP ScrollTrigger + Lenis for its scroll-reveal animations: content only
renders once the page is genuinely scrolled, and `window.scrollTo` alone
wasn't enough — it needed gradual, settled scroll steps toward each section's
`id` anchor (`#verhaal`, `#menukaart`, `#sfeer`) before capturing. Re-run that
process if the live site's content changes and the thumbnails go stale — there
is no cached script in this repo, it was a one-off capture.

## The TikiSu screenshots

`tikisu-*.jpg` are real screenshots of
<https://suriname-event-spark.lovable.app>, a plain React SPA — no
scroll-gated animations, so these were just `window.scrollTo` to each section
plus a short settle wait, same script pattern as Faralobi. They carry a small
"Edit with Lovable" badge in the bottom-right corner because that's what the
live site currently renders (it's a Lovable-hosted preview) — left in rather
than edited out, since these are meant to be honest screenshots of the site.

## The Suriname Spreekt screenshots

`surinamespreekt-*.jpg` are real screenshots of
<https://suriname-spreekt.lovable.app>, captured the same way as TikiSu (plain
React SPA, no scroll-gated animations) from four routes: `/` (hero), `/nieuws`
(article + stelling voting), `/dashboard` (the "Index" nav item — the actual
route differs from its label), and `/voorstellen`.

## The Erfeniswijzer screenshots

`erfeniswijzer-*.jpg` are real screenshots of
<https://erfenis-rust-gids.abandhoe83.workers.dev/>, a TanStack Start SSR site.
Captured with headless system Chrome (`--headless=new --screenshot` at
1280x832, `--virtual-time-budget` for the scroll-reveal content to settle) from
four routes: `/` (hero), `/hulp-bij-erfenis`, `/kennisbank` and `/gratis-gids`,
then re-encoded to JPEG. It was a one-off capture — no cached script in the
repo. Re-run if the live site changes.

## The FAKA screenshots

`faka-*.jpg` are real screenshots of <https://faka-vision-system.lovable.app/>,
a Lovable-hosted React SPA. Captured with headless system Chrome
(`--headless=new --screenshot` at 1280x832, `--virtual-time-budget` to let the
page settle) from four routes: `/` (hero), `/shop`, `/products/faka-oversized-hoodie`
and `/collections`, then re-encoded to JPEG. The nav links `/new-drop`, `/about`
etc. currently 404 on the live site, so those routes were avoided. They carry a
small "Edit with Lovable" badge bottom-right — left in, since these are honest
screenshots. One-off capture, no cached script.

## The Discover Suriname screenshots

`discoversuriname-*.jpg` are real screenshots of
<https://discover-suriname-guide.lovable.app/>, a Lovable-hosted React SPA.
Captured with headless system Chrome (`--headless=new --screenshot` at
1280x832, `--virtual-time-budget` to let the page settle) from four routes:
`/` (hero), `/tours`, `/auto-huren` and `/over-suriname`, then re-encoded to
JPEG. They carry a small "Edit with Lovable" badge bottom-right — left in,
since these are honest screenshots. One-off capture, no cached script.

## The Spaar Quest screenshots

`tqb-*.jpg` are real screenshots of <https://treasure-quest-bank.lovable.app/>,
a Lovable-hosted React SPA (single route, state in `localStorage`). The kid
dashboard is one scrolling screen and the Ouder Modus is behind a PIN, so a
plain `--screenshot` per route was not enough — captured instead with a
Playwright script (Chromium, 1280x832) that scrolls to each section and unlocks
Ouder Modus with the default PIN `1234`, then re-encoded to JPEG. Views: the
"Schatkist" dashboard, the Buit Binnenhalen section, the Ouder Modus settings,
and the verkopen/inkomsten beheer. "Edit with Lovable" badge left in. One-off
capture, no cached script.

## The TechFix.sr screenshots

`techfix-*.jpg` are real screenshots of <https://suri-tech-fix.lovable.app/>, a
Lovable-hosted one-page React site. Captured with a Playwright script (Chromium,
1280x832) that scrolls to each anchor section (`#top`, `#diensten`,
`#reparatie`, `#betalen`) and settles before shooting, then re-encoded to JPEG.
"Edit with Lovable" badge and the floating WhatsApp button are part of the live
page. One-off capture, no cached script.

## The Coral Palm Suites screenshots

`coralpalm-*.jpg` are real screenshots of
<https://waterland-suites-showcase.lovable.app/>, a Lovable-hosted one-page
React site (no routes — all nav is in-page anchors). Captured with a Playwright
script (Chromium, 1280x832) that scrolls to a heading in each section (hero,
"Drie manieren…", "Uw eigen plek…", "Een zaal die net zo gastvrij…") and
settles before shooting, then re-encoded to JPEG. "Edit with Lovable" badge left
in. One-off capture, no cached script.

## The slideshow

A project with more than one `media` entry (currently Faralobi, Suriname
Spreekt, TikiSu, De Erfeniswijzer, FAKA, Discover Suriname, Spaar Quest, TechFix.sr and Coral Palm Suites) renders as a crossfading slideshow instead of a static
image — see `mediaMarkup()` / `initSlideshows()` in `app.js` and the
`.slideshow` rules in `styles.css`. It appears on the portfolio card, the home
"Recente projecten" card, and the detail modal. The crossfade is skipped under
`prefers-reduced-motion: reduce`, settling on the first image.
