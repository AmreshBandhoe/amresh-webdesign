/* ==========================================================================
   Amresh — Web Designer
   Implemented from the Claude Design canvas "Amresh Webdesign.dc.html".
   Vanilla JS: hash routing, portfolio filter + detail modal, contact form.
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------- content -- */

  var PROJECTS = [
    {
      id: 'faralobi', title: 'Faralobi', cat: 'Website', tag: 'Website & Branding',
      url: 'https://faralobi.netlify.app/',
      media: [
        { src: 'assets/faralobi-1-hero.jpg', alt: 'Faralobi — openingsscherm met "Waar Paramaribo aanschuift voor een bord vol lobi"' },
        { src: 'assets/faralobi-2-verhaal.jpg', alt: 'Faralobi — sectie Ons verhaal' },
        { src: 'assets/faralobi-3-menukaart.jpg', alt: 'Faralobi — sectie Vanavond bij Faralobi met de menukaart' },
        { src: 'assets/faralobi-4-sfeer.jpg', alt: 'Faralobi — sfeerfoto’s van het terras en de tafels' }
      ],
      desc: 'Surinaams-Creoolse restaurantwebsite met menukaart en reservering.',
      long: 'Een warme, sfeervolle website voor restaurant Faralobi. Met een dagelijkse menukaart per categorie, een sfeeropnamegalerij en een reserveringsformulier dat direct per e-mail of WhatsApp bij de eigenaar belandt.'
    },
    {
      id: 'surinamespreekt', title: 'Suriname Spreekt', cat: 'Website', tag: 'Nieuws- en opinieplatform',
      url: 'https://suriname-spreekt.lovable.app/nieuws',
      media: [
        { src: 'assets/surinamespreekt-1-hero.jpg', alt: 'Suriname Spreekt — startpagina "Suriname Spreekt." met live stemcijfers' },
        { src: 'assets/surinamespreekt-2-nieuws.jpg', alt: 'Suriname Spreekt — nieuwsartikel met bijbehorende stelling om direct op te stemmen' },
        { src: 'assets/surinamespreekt-3-index.jpg', alt: 'Suriname Spreekt — De Opinie Index dashboard met sentiment en stemtrends' },
        { src: 'assets/surinamespreekt-4-voorstellen.jpg', alt: 'Suriname Spreekt — Populaire Voorstellen, waar bezoekers zelf onderwerpen voordragen' }
      ],
      desc: 'Nieuws- en opinieplatform waarop bezoekers direct stemmen op actuele stellingen.',
      long: 'Voor Suriname Spreekt ontwierp en bouwde ik een modern, responsief webplatform dat nieuws en publieke opinie combineert. Gebruikers stemmen direct op actuele stellingen, lezen AI-samenvattingen van discussies, volgen opinietrends via een dashboard en kunnen zelf onderwerpen voorstellen. De interface is volledig tweetalig (NL/EN) en geoptimaliseerd voor mobiel gebruik.'
    },
    {
      id: 'tikisu', title: 'TikiSu', cat: 'Website', tag: 'Ticketingplatform',
      url: 'https://suriname-event-spark.lovable.app',
      media: [
        { src: 'assets/tikisu-1-hero.jpg', alt: 'TikiSu — startpagina met "Ontdek de mooiste evenementen van Suriname" en zoekbalk' },
        { src: 'assets/tikisu-2-trending.jpg', alt: 'TikiSu — uitgelichte evenementen zoals Kaseko Festival en Natio vs. Guyana' },
        { src: 'assets/tikisu-3-categorie.jpg', alt: 'TikiSu — overzicht van categorieën zoals Concerten, Sport en Theater' },
        { src: 'assets/tikisu-4-nieuwsbrief.jpg', alt: 'TikiSu — nieuwsbriefsectie en footer' }
      ],
      desc: 'Ticketingplatform voor concerten, festivals, sport en cultuur in Suriname.',
      long: 'Een ticketingplatform waarop bezoekers evenementen zoeken op naam, locatie en datum, en boeken via een overzicht van uitgelichte, populaire en binnenkort startende evenementen — met een indeling per categorie van concerten tot sport, theater en religie.'
    },
    {
      id: 'social', title: 'Social Media Instellingen', cat: 'Branding', tag: 'Social Media Management',
      media: [{ src: 'assets/work2.png', alt: 'Social Media Instellingen' }],
      desc: 'Contentstrategie en visuele stijl voor social kanalen.',
      long: 'Opzet en beheer van de social kanalen: een consistente visuele stijl, templates voor posts en een contentkalender waarmee het team zelf verder kan.'
    },
    {
      id: 'flp', title: 'Financial Life Plan', cat: 'Website', tag: 'Website & Content',
      media: [{ src: 'assets/work3.png', alt: 'Financial Life Plan' }],
      desc: 'Zakelijke website met heldere dienstenstructuur.',
      long: 'Een betrouwbare, rustige website voor een financieel adviesbureau. Focus op vindbaarheid, duidelijke dienstenpagina’s en een contactroute die leads oplevert.'
    },
    {
      id: 'shop', title: 'Tropic Store', cat: 'Webshop', tag: 'WooCommerce', media: [], slot: 'webshop screenshot',
      desc: 'WooCommerce webshop met lokale betaalmethodes.',
      long: 'Complete WooCommerce webshop: productbeheer, voorraad, verzendzones en lokale betaalmethodes. Ingericht zodat de eigenaar alles zelf kan onderhouden.'
    },
    {
      id: 'seo', title: 'Bouwbedrijf Kwatta', cat: 'SEO', tag: 'SEO & Optimalisatie', media: [], slot: 'before / after graph',
      desc: 'Van pagina 4 naar top 3 in Google op kernzoektermen.',
      long: 'Technische SEO-opschoning, snellere laadtijden en herschreven pagina’s per dienst. Binnen vier maanden een top 3-positie op de belangrijkste zoektermen.'
    },
    {
      id: 'brand', title: 'Sranan Kitchen', cat: 'Branding', tag: 'Logo & Huisstijl', media: [], slot: 'logo & huisstijl',
      desc: 'Logo, kleurpalet en huisstijl voor een cateringbedrijf.',
      long: 'Volledige huisstijl: logo, kleurpalet, typografie en toepassingen op menukaarten, verpakking en social media. Geleverd met een compacte brandguide.'
    }
  ];

  var SERVICES = [
    { key: 'monitor', title: 'Websites', text: 'Moderne, responsive websites die er goed uitzien en gebruiksvriendelijk zijn.' },
    { key: 'cart', title: 'Webshops', text: 'Verkoop je producten online met een professionele WooCommerce webshop.' },
    { key: 'search', title: 'SEO & Optimalisatie', text: 'Beter vindbaar in Google en meer bezoekers naar je website.' },
    { key: 'pencil', title: 'Design & Branding', text: 'Sterke visuele identiteit en grafisch ontwerp voor een professionele uitstraling.' }
  ];

  var SERVICE_DETAIL = [
    {
      key: 'monitor', title: 'Websites', price: 'SRD 12.000',
      text: 'Een maatwerk website die past bij jouw merk en meteen duidelijk maakt wat je doet.',
      points: ['Ontwerp op maat', 'Responsive op mobiel en tablet', 'Snelle laadtijden', 'Zelf teksten aanpassen']
    },
    {
      key: 'cart', title: 'Webshops', price: 'SRD 22.000',
      text: 'Een complete WooCommerce webshop, ingericht zodat je zelf producten en voorraad beheert.',
      points: ['Producten & varianten', 'Betaal- en verzendmethodes', 'Kortingscodes', 'Uitleg en overdracht']
    },
    {
      key: 'search', title: 'SEO & Optimalisatie', price: 'SRD 4.500',
      text: 'Beter vindbaar worden in Google met technische en inhoudelijke optimalisatie.',
      points: ['Zoekwoordonderzoek', 'Technische SEO-scan', 'Snelheidsoptimalisatie', 'Maandelijkse rapportage']
    },
    {
      key: 'pencil', title: 'Design & Branding', price: 'SRD 6.000',
      text: 'Een herkenbare visuele identiteit die op elk kanaal consistent doorwerkt.',
      points: ['Logo & huisstijl', 'Kleur en typografie', 'Social media templates', 'Compacte brandguide']
    }
  ];

  var STEPS = [
    { n: '01', title: 'Kennismaken', text: 'We bespreken je doelen, doelgroep en wensen. Je krijgt een helder voorstel.' },
    { n: '02', title: 'Ontwerp', text: 'Ik maak een ontwerp van de belangrijkste pagina’s en verwerk je feedback.' },
    { n: '03', title: 'Bouwen', text: 'Het ontwerp wordt gebouwd: snel, responsive en klaar voor Google.' },
    { n: '04', title: 'Live & nazorg', text: 'We zetten de site live. Daarna help ik je met updates en aanpassingen.' }
  ];

  var SKILLS = [
    { name: 'Webdesign (UI/UX)', label: 'Expert', w: '94%' },
    { name: 'WordPress & WooCommerce', label: 'Expert', w: '90%' },
    { name: 'SEO & Analytics', label: 'Gevorderd', w: '78%' },
    { name: 'Grafisch ontwerp', label: 'Gevorderd', w: '82%' },
    { name: 'Online marketing', label: 'Gevorderd', w: '70%' }
  ];

  var TIMELINE = [
    { year: '2024 — nu', title: 'Freelance webdesigner', text: 'Websites, webshops en branding voor ondernemers in Suriname en daarbuiten.' },
    { year: '2022 — 2024', title: 'Webdesign & e-commerce', text: 'Gewerkt aan WooCommerce-webshops en onderhoud van bestaande websites.' },
    { year: '2021 — 2022', title: 'Grafisch ontwerp', text: 'Logo’s, huisstijlen en social media content voor lokale bedrijven.' },
    { year: '2020', title: 'HBO propedeuse Human Technology', text: 'Fundament in gebruikersonderzoek, interactieontwerp en techniek.' }
  ];

  var CONTACT_LINES = [
    { key: 'mail', label: 'E-mail', value: 'hallo@amresh.sr', href: 'mailto:hallo@amresh.sr' },
    { key: 'chat', label: 'WhatsApp', value: '+597 000 0000', href: 'tel:+5970000000' },
    { key: 'pin', label: 'Locatie', value: 'Paramaribo, Suriname' },
    { key: 'clock', label: 'Reactietijd', value: 'Binnen 1 werkdag' }
  ];

  var NAV = [
    { id: 'home', label: 'Home' },
    { id: 'over', label: 'Over mij' },
    { id: 'diensten', label: 'Diensten' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  var CATEGORIES = ['Alles', 'Website', 'Webshop', 'SEO', 'Branding'];

  var PAGE_TITLES = {
    home: 'Amresh — Freelance Webdesigner in Suriname',
    over: 'Over mij — Amresh, freelance webdesigner',
    diensten: 'Diensten — Websites, webshops, SEO en branding',
    portfolio: 'Portfolio — Werk van Amresh',
    contact: 'Contact — Laten we samen iets moois maken'
  };

  /* --------------------------------------------------------------- icons -- */

  var ICON_PATHS = {
    monitor: ['M3 4.5h18v11H3z', 'M9 20h6', 'M12 15.5V20'],
    cart: ['M2.5 4h2.2l2.4 9.5h10.4l1.8-6.6H6', 'M9.5 19.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z', 'M17 19.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z'],
    search: ['M10.5 17.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M15.6 15.6 21 21'],
    pencil: ['M4 20h4L20 8l-4-4L4 16v4Z', 'M14.5 5.5 18.5 9.5'],
    mail: ['M3 5.5h18v13H3z', 'M3.4 6.2 12 13l8.6-6.8'],
    chat: ['M4 4.5h16v11H9l-5 4v-15Z', 'M8 10h8'],
    pin: ['M12 21s6.5-6.1 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 14.9 12 21 12 21Z', 'M12 13a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z'],
    clock: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z', 'M12 7.5V12l3.4 2']
  };

  function icon(name, size) {
    var paths = (ICON_PATHS[name] || ICON_PATHS.monitor)
      .map(function (d) { return '<path d="' + d + '" />'; })
      .join('');
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" ' +
      'aria-hidden="true" stroke="var(--accent)" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }

  var MAIL_ICON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<rect x="1.2" y="3" width="13.6" height="10" rx="2" stroke="#fff" stroke-width="1.5" />' +
    '<path d="M2 4.5 8 9l6-4.5" stroke="#fff" stroke-width="1.5" fill="none" /></svg>';

  var GALLERY_ICON = '<svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<rect x="1" y="2.5" width="14" height="11" rx="2" stroke="#fff" stroke-width="1.5" />' +
    '<circle cx="5" cy="6.5" r="1.4" fill="#fff" />' +
    '<path d="M2 12l4-3.2 3.2 2.6L11.6 9 14 11.3" stroke="#fff" stroke-width="1.5" fill="none" /></svg>';

  var LINK_ICON = '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M6.5 9.5 14 2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" />' +
    '<path d="M9.5 2H14v4.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />' +
    '<path d="M12 9v3.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4H7" stroke="#fff" stroke-width="1.5" stroke-linecap="round" fill="none" /></svg>';

  /* --------------------------------------------------------------- state -- */

  var state = {
    page: 'home',
    filter: 'Alles',
    detail: null,
    form: { name: '', email: '', msg: '', type: 'Website' },
    touched: {},
    error: '',
    sent: null
  };

  var mainSlideshowTimers = [];
  var modalSlideshowTimers = [];
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function clearTimers(bucket) {
    bucket.forEach(function (id) { clearInterval(id); });
    bucket.length = 0;
  }

  function initSlideshows(root, bucket) {
    if (reduceMotion.matches) return;
    Array.prototype.forEach.call(root.querySelectorAll('[data-slideshow]'), function (el, index) {
      var imgs = el.querySelectorAll('.slideshow__img');
      if (imgs.length < 2) return;
      var active = 0;
      var id = setInterval(function () {
        imgs[active].classList.remove('is-active');
        active = (active + 1) % imgs.length;
        imgs[active].classList.add('is-active');
      }, 2800 + index * 350);
      bucket.push(id);
    });
  }

  var main = document.getElementById('main');
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var footerNav = document.getElementById('footer-nav');
  var footerServices = document.getElementById('footer-services');
  var lastFocused = null;

  /* ------------------------------------------------------------- helpers -- */

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function map(list, fn) { return list.map(fn).join(''); }

  /* Renders a project's media as a single <img>, or — when it has more than
     one — a set of stacked images that a small interval crossfades through
     (see initSlideshows). Always inside a `.slideshow` wrapper so the CSS is
     the same either way; the crossfade just never starts for a single image. */
  function mediaMarkup(media, lazy) {
    if (!media || !media.length) return '';
    var loadAttr = lazy ? ' loading="lazy"' : '';
    return '<span class="slideshow"' + (media.length > 1 ? ' data-slideshow' : '') + '>' +
      map(media, function (m, i) {
        return '<img class="slideshow__img' + (i === 0 ? ' is-active' : '') + '" src="' + esc(m.src) + '" alt="' + esc(m.alt) + '"' + loadAttr + ' />';
      }) +
    '</span>';
  }

  /* ------------------------------------------------------------ partials -- */

  function servicesStrip() {
    return map(SERVICES, function (s) {
      return '<div class="service-strip__item">' +
        '<div class="icon-tile">' + icon(s.key, 21) + '</div>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<p>' + esc(s.text) + '</p>' +
      '</div>';
    });
  }

  function featuredCards() {
    return map(PROJECTS.slice(0, 3), function (p) {
      return '<a class="featured__card" href="#/portfolio/' + esc(p.id) + '">' +
        '<div class="featured__frame">' + mediaMarkup(p.media, true) + '</div>' +
        '<div class="featured__title">' + esc(p.title) + '</div>' +
        '<div class="featured__meta"><span>' + esc(p.tag) + '</span><span class="arrow" aria-hidden="true">→</span></div>' +
      '</a>';
    });
  }

  function ctaBand() {
    return '<section class="cta-band">' +
      '<div class="cta-band__inner">' +
        '<div class="cta-band__glyph"><span></span></div>' +
        '<div class="cta-band__copy">' +
          '<div class="cta-band__title">Klaar om jouw idee online te brengen?</div>' +
          '<div class="cta-band__sub">Laten we samen iets moois maken. Ik help je graag verder!</div>' +
        '</div>' +
        '<a class="btn btn--primary" href="#/contact">' + MAIL_ICON + 'Neem contact op</a>' +
      '</div>' +
    '</section>';
  }

  /* --------------------------------------------------------------- pages -- */

  function homePage() {
    return '' +
      '<section class="hero">' +
        '<div class="hero__media"><img src="assets/hero.png" alt="Amresh aan het werk" /></div>' +
        '<div class="hero__scrim"></div>' +
        '<div class="hero__inner">' +
          '<div class="hero__copy">' +
            '<div class="hero__eyebrow">HALLO, IK BEN AMRESH</div>' +
            '<h1 class="hero__title">Jouw website,<br /><span class="accent">mijn focus.</span></h1>' +
            '<p class="hero__lead">Ik ben een freelance webdesigner uit Suriname en help bedrijven en ondernemers met moderne, snelle en gebruiksvriendelijke websites die resultaat opleveren.</p>' +
            '<div class="hero__actions">' +
              '<a class="btn btn--primary" href="#/portfolio">' + GALLERY_ICON + 'Bekijk mijn werk</a>' +
              '<a class="btn btn--ghost-light" href="#/contact">Neem contact op</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="band band--white">' +
        '<div class="intro-grid">' +
          '<div>' +
            '<div class="eyebrow">WAT IK DOE</div>' +
            '<h2 class="section-title">Webdesign dat werkt.</h2>' +
            '<p class="prose">Van een eenvoudige bedrijfswebsite tot een complete webshop. Ik zorg voor een strak ontwerp, goede prestaties en een website die past bij jouw doelen.</p>' +
            '<a class="link-arrow" href="#/diensten">Alle diensten <span aria-hidden="true">→</span></a>' +
          '</div>' +
          '<div class="service-strip">' + servicesStrip() + '</div>' +
        '</div>' +
      '</section>' +

      '<section class="split">' +
        '<div class="split__pane">' +
          '<div class="eyebrow">RECENTE PROJECTEN</div>' +
          '<div class="split__head">' +
            '<h2 class="section-title">Mijn werk</h2>' +
            '<a class="link-arrow" href="#/portfolio">Bekijk meer projecten <span aria-hidden="true">→</span></a>' +
          '</div>' +
          '<div class="featured">' + featuredCards() + '</div>' +
        '</div>' +
        '<div class="split__pane split__pane--tinted">' +
          '<div class="eyebrow">OVER MIJ</div>' +
          '<h2 class="about-title">Creatief, gedreven<br />en betrouwbaar.</h2>' +
          '<p class="prose" style="max-width: 460px; margin-bottom: 26px;">Ik ben Amresh, een gedreven webdesigner met ervaring in webdesign, e-commerce, SEO, grafisch ontwerp en online marketing. Ik werk nauwkeurig, denk graag mee en zorg dat jouw project op tijd en professioneel wordt opgeleverd.</p>' +
          '<ul class="fact-list">' +
            '<li><span class="dot"></span> Paramaribo, Suriname</li>' +
            '<li><span class="dot"></span> Freelance Webdesigner</li>' +
            '<li><span class="dot"></span> HBO propedeuse Human Technology</li>' +
          '</ul>' +
          '<div class="signature-row">' +
            '<a class="link-arrow" href="#/over">Meer over mij <span aria-hidden="true">→</span></a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      ctaBand();
  }

  function dienstenPage() {
    return '' +
      '<section class="band band--night">' +
        '<div class="shell">' +
          '<div class="eyebrow--dark">DIENSTEN</div>' +
          '<h1 class="page-title">Alles voor een sterke<br /><span class="accent">online aanwezigheid.</span></h1>' +
          '<p class="page-lead">Van ontwerp tot livegang. Kies wat je nodig hebt of laat me het hele traject verzorgen.</p>' +
        '</div>' +
      '</section>' +

      '<section class="band band--white">' +
        '<div class="card-grid">' +
          map(SERVICE_DETAIL, function (s) {
            return '<article class="service-card">' +
              '<div class="icon-tile" style="margin-bottom: 22px;">' + icon(s.key, 22) + '</div>' +
              '<h3>' + esc(s.title) + '</h3>' +
              '<p>' + esc(s.text) + '</p>' +
              '<ul class="service-card__points">' +
                map(s.points, function (pt) {
                  return '<li><span class="tick" aria-hidden="true">✓</span> ' + esc(pt) + '</li>';
                }) +
              '</ul>' +
              '<div class="service-card__price">Vanaf <b>' + esc(s.price) + '</b></div>' +
            '</article>';
          }) +
        '</div>' +
      '</section>' +

      '<section class="band band--alt">' +
        '<div class="shell">' +
          '<div class="eyebrow">WERKWIJZE</div>' +
          '<h2 class="section-title" style="margin-bottom: 40px;">Zo pakken we het aan.</h2>' +
          '<div class="step-grid">' +
            map(STEPS, function (st) {
              return '<article class="step">' +
                '<div class="step__n">' + esc(st.n) + '</div>' +
                '<h3>' + esc(st.title) + '</h3>' +
                '<p>' + esc(st.text) + '</p>' +
              '</article>';
            }) +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function overPage() {
    return '' +
      '<section class="band band--night">' +
        '<div class="about-hero">' +
          '<div>' +
            '<div class="eyebrow--dark">OVER MIJ</div>' +
            '<h1 class="about-hero__title">Creatief, gedreven<br />en <span class="accent">betrouwbaar.</span></h1>' +
            '<p>Ik ben Amresh, freelance webdesigner uit Paramaribo. Ik combineer een oog voor design met technische kennis, zodat jouw website niet alleen mooi is maar ook echt werkt.</p>' +
            '<p>Elke opdracht begint met een goed gesprek. Ik wil weten wie je klanten zijn en wat je wil bereiken — daarna bouw ik daar de website om.</p>' +
          '</div>' +
          '<div><img class="about-hero__portrait" src="assets/hero.png" alt="Amresh" /></div>' +
        '</div>' +
      '</section>' +

      '<section class="band band--white">' +
        '<div class="two-col">' +
          '<div>' +
            '<h2 class="col-title">Waar ik goed in ben</h2>' +
            '<div class="skills">' +
              map(SKILLS, function (sk) {
                return '<div>' +
                  '<div class="skill__head"><span class="skill__name">' + esc(sk.name) + '</span><span class="skill__label">' + esc(sk.label) + '</span></div>' +
                  '<div class="skill__track" role="img" aria-label="' + esc(sk.name + ': ' + sk.label) + '">' +
                    '<div class="skill__bar" style="width: ' + esc(sk.w) + ';"></div>' +
                  '</div>' +
                '</div>';
              }) +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h2 class="col-title">Achtergrond</h2>' +
            '<div>' +
              map(TIMELINE, function (t) {
                return '<div class="timeline__row">' +
                  '<div class="timeline__year">' + esc(t.year) + '</div>' +
                  '<div>' +
                    '<div class="timeline__title">' + esc(t.title) + '</div>' +
                    '<div class="timeline__text">' + esc(t.text) + '</div>' +
                  '</div>' +
                '</div>';
              }) +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function portfolioPage() {
    var list = state.filter === 'Alles'
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.cat === state.filter; });

    return '' +
      '<section class="band band--night">' +
        '<div class="shell">' +
          '<div class="eyebrow--dark">PORTFOLIO</div>' +
          '<h1 class="page-title">Mijn werk.</h1>' +
          '<p class="page-lead">Een selectie van websites, webshops en branding-projecten die ik heb opgeleverd.</p>' +
        '</div>' +
      '</section>' +

      '<section class="band--portfolio">' +
        '<div class="shell">' +
          '<div class="filters" role="group" aria-label="Filter projecten op categorie">' +
            map(CATEGORIES, function (c) {
              return '<button class="filter" type="button" data-filter="' + esc(c) + '" ' +
                'aria-pressed="' + (state.filter === c ? 'true' : 'false') + '">' + esc(c) + '</button>';
            }) +
          '</div>' +
          (list.length
            ? '<div class="work-grid">' +
                map(list, function (p) {
                  return '<button class="work-card" type="button" data-project="' + esc(p.id) + '">' +
                    '<span class="work-card__frame">' +
                      (p.media && p.media.length
                        ? mediaMarkup(p.media, true)
                        : '<span class="work-card__slot">' + esc(p.slot) + '</span>') +
                    '</span>' +
                    '<span class="work-card__head">' +
                      '<span class="work-card__title">' + esc(p.title) + '</span>' +
                      '<span class="work-card__cat">' + esc(p.cat) + '</span>' +
                    '</span>' +
                    '<span class="work-card__desc">' + esc(p.desc) + '</span>' +
                  '</button>';
                }) +
              '</div>'
            : '<p class="work-empty">Nog geen projecten in deze categorie.</p>') +
        '</div>' +
      '</section>';
  }

  function contactPage() {
    var f = state.form;
    var invalid = state.touched;

    var formOrThanks = state.sent
      ? '<div class="thanks">' +
          '<div class="thanks__check" aria-hidden="true">✓</div>' +
          '<h3>Bedankt, ' + esc(state.sent.name) + '!</h3>' +
          '<p>Je bericht is verstuurd. Ik neem snel contact met je op via ' + esc(state.sent.email) + '.</p>' +
          '<button class="btn btn--outline-accent" type="button" id="reset-form">Nog een bericht sturen</button>' +
        '</div>'
      : '<form class="form" id="contact-form" novalidate>' +
          '<div class="form__row">' +
            '<label class="field' + (invalid.name ? ' is-invalid' : '') + '">' +
              '<span>Naam</span>' +
              '<input type="text" name="name" placeholder="Je naam" autocomplete="name" value="' + esc(f.name) + '"' +
                (invalid.name ? ' aria-invalid="true"' : '') + ' />' +
            '</label>' +
            '<label class="field' + (invalid.email ? ' is-invalid' : '') + '">' +
              '<span>E-mail</span>' +
              '<input type="email" name="email" placeholder="jij@voorbeeld.com" autocomplete="email" value="' + esc(f.email) + '"' +
                (invalid.email ? ' aria-invalid="true"' : '') + ' />' +
            '</label>' +
          '</div>' +
          '<label class="field">' +
            '<span>Waar kan ik je mee helpen?</span>' +
            '<select name="type">' +
              map(['Website', 'Webshop', 'SEO & Optimalisatie', 'Design & Branding', 'Iets anders'], function (o) {
                return '<option value="' + esc(o) + '"' + (f.type === o ? ' selected' : '') + '>' + esc(o) + '</option>';
              }) +
            '</select>' +
          '</label>' +
          '<label class="field' + (invalid.msg ? ' is-invalid' : '') + '">' +
            '<span>Bericht</span>' +
            '<textarea name="msg" rows="5" placeholder="Vertel kort over je project, doelen en planning."' +
              (invalid.msg ? ' aria-invalid="true"' : '') + '>' + esc(f.msg) + '</textarea>' +
          '</label>' +
          (state.error
            ? '<div class="form__error" role="alert">' + esc(state.error) + '</div>'
            : '') +
          '<div><button class="btn btn--primary" type="submit">Verstuur bericht</button></div>' +
        '</form>';

    return '' +
      '<section class="band band--night band--contact-hero">' +
        '<div class="shell">' +
          '<div class="eyebrow--dark">CONTACT</div>' +
          '<h1 class="page-title">Laten we samen<br /><span class="accent">iets moois maken.</span></h1>' +
          '<p class="page-lead">Vertel me kort over je project. Ik reageer meestal binnen één werkdag.</p>' +
        '</div>' +
      '</section>' +

      '<section class="band band--white band--contact">' +
        '<div class="contact-grid">' +
          '<div>' + formOrThanks + '</div>' +
          '<aside class="contact-aside">' +
            '<h3>Direct contact</h3>' +
            '<div class="contact-lines">' +
              map(CONTACT_LINES, function (c) {
                var value = c.href
                  ? '<a href="' + esc(c.href) + '">' + esc(c.value) + '</a>'
                  : esc(c.value);
                return '<div class="contact-line">' +
                  '<span class="contact-line__icon">' + icon(c.key, 17) + '</span>' +
                  '<div>' +
                    '<div class="contact-line__label">' + esc(c.label) + '</div>' +
                    '<div class="contact-line__value">' + value + '</div>' +
                  '</div>' +
                '</div>';
              }) +
            '</div>' +
            '<div class="contact-aside__note">Beschikbaar voor nieuwe projecten. Ook voor kleine aanpassingen aan een bestaande website.</div>' +
          '</aside>' +
        '</div>' +
      '</section>';
  }

  var PAGES = {
    home: homePage,
    over: overPage,
    diensten: dienstenPage,
    portfolio: portfolioPage,
    contact: contactPage
  };

  /* --------------------------------------------------------------- modal -- */

  function renderModal() {
    clearTimers(modalSlideshowTimers);
    var existing = document.querySelector('.modal');
    if (existing) existing.remove();
    if (!state.detail) return;

    var p = PROJECTS.filter(function (x) { return x.id === state.detail; })[0];
    if (!p) return;

    var overlay = document.createElement('div');
    overlay.className = 'modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'modal-title');
    overlay.innerHTML =
      '<div class="modal__panel">' +
        '<div class="modal__media">' + mediaMarkup(p.media, false) + '</div>' +
        '<div class="modal__body">' +
          '<div class="modal__cat">' + esc(p.cat) + '</div>' +
          '<h2 class="modal__title" id="modal-title">' + esc(p.title) + '</h2>' +
          '<p class="modal__text">' + esc(p.long) + '</p>' +
          '<div class="modal__actions">' +
            (p.url
              ? '<a class="btn btn--primary" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + LINK_ICON + 'Bekijk live website</a>' +
                '<a class="btn btn--outline-accent" href="#/contact">Zoiets ook nodig?</a>'
              : '<a class="btn btn--primary" href="#/contact">Zoiets ook nodig?</a>') +
            '<button class="btn btn--ghost" type="button" data-close-modal>Sluiten</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.closest('[data-close-modal]')) closeModal();
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    initSlideshows(overlay, modalSlideshowTimers);

    var close = overlay.querySelector('[data-close-modal]');
    if (close) close.focus();
  }

  function closeModal() {
    if (!state.detail) return;
    state.detail = null;
    document.body.style.overflow = '';
    renderModal();
    if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab' && state.detail) trapFocus(e);
  });

  function trapFocus(e) {
    var panel = document.querySelector('.modal__panel');
    if (!panel) return;
    var items = panel.querySelectorAll('a[href], button:not([disabled])');
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /* --------------------------------------------------------------- chrome -- */

  function renderChrome() {
    nav.innerHTML = map(NAV, function (item) {
      return '<a class="nav__link' + (state.page === item.id ? ' is-active' : '') + '" ' +
        'href="#/' + item.id + '"' + (state.page === item.id ? ' aria-current="page"' : '') + '>' +
        esc(item.label) + '</a>';
    });

    footerNav.innerHTML = map(NAV, function (item) {
      return '<a href="#/' + item.id + '">' + esc(item.label) + '</a>';
    });

    footerServices.innerHTML = map(SERVICES, function (s) {
      return '<a href="#/diensten">' + esc(s.title) + '</a>';
    });
  }

  function syncNavVisibility() {
    var mobile = window.matchMedia('(max-width: 780px)').matches;
    nav.hidden = mobile && navToggle.getAttribute('aria-expanded') !== 'true';
  }

  navToggle.addEventListener('click', function () {
    var open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    syncNavVisibility();
  });

  window.addEventListener('resize', syncNavVisibility);

  /* -------------------------------------------------------------- routing -- */

  function parseHash() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean);
    var page = parts[0] && PAGES[parts[0]] ? parts[0] : 'home';
    return { page: page, detail: page === 'portfolio' ? (parts[1] || null) : null };
  }

  function route(scroll) {
    var next = parseHash();
    var changedPage = next.page !== state.page;
    state.page = next.page;

    if (next.detail && PROJECTS.some(function (p) { return p.id === next.detail; })) {
      state.detail = next.detail;
    } else if (changedPage) {
      state.detail = null;
    }

    document.title = PAGE_TITLES[state.page];
    document.documentElement.lang = 'nl';

    navToggle.setAttribute('aria-expanded', 'false');
    syncNavVisibility();

    renderChrome();
    render();

    if (scroll !== false) {
      window.scrollTo({ top: 0, behavior: changedPage ? 'smooth' : 'auto' });
    }
  }

  function render() {
    clearTimers(mainSlideshowTimers);
    main.innerHTML = PAGES[state.page]();
    bindPage();
    initSlideshows(main, mainSlideshowTimers);
    document.body.style.overflow = state.detail ? 'hidden' : '';
    renderModal();
  }

  /* -------------------------------------------------------------- bindings */

  function bindPage() {
    Array.prototype.forEach.call(main.querySelectorAll('[data-filter]'), function (btn) {
      btn.addEventListener('click', function () {
        state.filter = btn.getAttribute('data-filter');
        render();
      });
    });

    Array.prototype.forEach.call(main.querySelectorAll('[data-project]'), function (btn) {
      btn.addEventListener('click', function () {
        lastFocused = btn;
        state.detail = btn.getAttribute('data-project');
        document.body.style.overflow = 'hidden';
        renderModal();
      });
    });

    var form = main.querySelector('#contact-form');
    if (form) {
      form.addEventListener('input', function (e) {
        var name = e.target.name;
        if (name in state.form) state.form[name] = e.target.value;
      });
      form.addEventListener('change', function (e) {
        var name = e.target.name;
        if (name in state.form) state.form[name] = e.target.value;
      });
      form.addEventListener('submit', submit);
    }

    var reset = main.querySelector('#reset-form');
    if (reset) {
      reset.addEventListener('click', function () {
        state.sent = null;
        state.form.name = '';
        state.form.email = '';
        state.form.msg = '';
        state.error = '';
        state.touched = {};
        render();
        var first = main.querySelector('input[name="name"]');
        if (first) first.focus();
      });
    }
  }

  function submit(e) {
    e.preventDefault();
    var f = state.form;
    var bad = {
      name: !f.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()),
      msg: f.msg.trim().length < 10
    };

    if (bad.name || bad.email || bad.msg) {
      var parts = [];
      if (bad.name) parts.push('vul je naam in');
      if (bad.email) parts.push('vul een geldig e-mailadres in');
      if (bad.msg) parts.push('schrijf een bericht van minstens 10 tekens');
      state.touched = bad;
      state.error = 'Bijna! Even nog: ' + parts.join(', ') + '.';
      render();
      var firstBad = main.querySelector('.field.is-invalid input, .field.is-invalid textarea');
      if (firstBad) firstBad.focus();
      return;
    }

    state.sent = { name: f.name.trim().split(' ')[0], email: f.email.trim() };
    state.error = '';
    state.touched = {};
    render();
  }

  /* ----------------------------------------------------------------- boot -- */

  window.addEventListener('hashchange', function () { route(true); });
  route(false);
})();
