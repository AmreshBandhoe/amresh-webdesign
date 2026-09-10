# Assets

| File | Used for |
|---|---|
| `hero.png` | Home hero background, Over mij portrait |
| `faralobi-1-hero.jpg` … `faralobi-4-sfeer.jpg` | Faralobi portfolio slideshow (hero, Ons verhaal, Menukaart, Sfeer) |
| `surinamespreekt-1-hero.jpg` … `surinamespreekt-4-voorstellen.jpg` | Suriname Spreekt portfolio slideshow (hero, nieuws met stelling, Opinie Index dashboard, Voorstellen) |
| `tikisu-1-hero.jpg` … `tikisu-4-nieuwsbrief.jpg` | TikiSu portfolio slideshow (hero, uitgelichte evenementen, categorieën, nieuwsbrief) |
| `work2.png` | Social Media Instellingen portfolio thumbnail |
| `work3.png` | Financial Life Plan portfolio thumbnail |

The Tropic Store, Bouwbedrijf Kwatta and Sranan Kitchen entries in `PROJECTS`
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

## The slideshow

A project with more than one `media` entry (currently Faralobi, Suriname
Spreekt and TikiSu) renders as a crossfading slideshow instead of a static
image — see `mediaMarkup()` / `initSlideshows()` in `app.js` and the
`.slideshow` rules in `styles.css`. It appears on the portfolio card, the home
"Recente projecten" card, and the detail modal. The crossfade is skipped under
`prefers-reduced-motion: reduce`, settling on the first image.
