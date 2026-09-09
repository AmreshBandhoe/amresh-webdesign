# Assets

| File | Used for |
|---|---|
| `hero.png` | Home hero background, Over mij portrait |
| `faralobi-1-hero.jpg` … `faralobi-4-sfeer.jpg` | Faralobi portfolio slideshow (hero, Ons verhaal, Menukaart, Sfeer) |
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

## The slideshow

A project with more than one `media` entry (currently just Faralobi) renders
as a crossfading slideshow instead of a static image — see `mediaMarkup()` /
`initSlideshows()` in `app.js` and the `.slideshow` rules in `styles.css`. It
appears on the portfolio card, the home "Recente projecten" card, and the
detail modal. The crossfade is skipped under `prefers-reduced-motion: reduce`,
settling on the first image.
