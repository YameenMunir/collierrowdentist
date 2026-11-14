/* Collier Row Dental Practice: shared behaviour for every page.
   Content lives in content/site.json and is built into static HTML by build/build.py. */
(function () {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const motion = () => root.classList.contains('motion');

  /* ---------- once per visit ---------- */

  /* Theme: follows the OS until chosen, then remembered */
  const themeBtn = $('#theme'), sys = matchMedia('(prefers-color-scheme: dark)');
  const dark = () => root.dataset.theme !== 'light';
  const sync = () => { root.classList.toggle('is-dark', dark()); if (themeBtn) themeBtn.setAttribute('aria-label', dark() ? 'Switch to daylight mode' : 'Switch to night mode'); };
  sync(); sys.addEventListener('change', sync);
  themeBtn && themeBtn.addEventListener('click', () => {
    const apply = () => { if (dark()) root.dataset.theme = 'light'; else root.removeAttribute('data-theme'); try { localStorage.setItem('crdp-theme-v2', dark() ? 'dark' : 'light'); } catch (_) {} sync(); };
    document.startViewTransition && motion() ? document.startViewTransition(apply) : apply();
  });

  /* Scroll work, kept to one rAF per frame: reads first, then writes, and nothing that triggers layout.
     Parallax runs only on desktop pointers; on touch screens scroll-linked JS lags behind the
     compositor, so phones get still images with entrance motion instead. */
  const header = $('#header'), progress = $('.progress');
  const cssProgress = window.CSS && CSS.supports('animation-timeline: scroll()');
  const parallaxOK = () => motion() && matchMedia('(hover: hover) and (pointer: fine) and (min-width: 901px)').matches;
  let raf = 0, maxScroll = 1, scrolled = null, showTop = null, lastY = scrollY, hidden = false, visiblePar = new Set();
  const totop = $('#totop');
  totop && totop.addEventListener('click', () => {
    scrollTo({ top: 0, behavior: motion() ? 'smooth' : 'auto' });
    const logo = $('.header .logo'); logo && logo.focus({ preventScroll: true });
  });
  const measure = () => { maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight); };
  const frame = () => {
    raf = 0;
    const y = scrollY;
    const s = y > 10; if (s !== scrolled && header) { scrolled = s; header.classList.toggle('scrolled', s); }
    const dy = y - lastY; lastY = y;
    const hide = y > innerHeight * 0.7 && dy > 4 ? true : (dy < -4 || y < 80 ? false : hidden);
    if (hide !== hidden && header && !root.classList.contains('menu-open')) { hidden = hide; header.classList.toggle('hidden', hide); }
    const t = y > innerHeight * 0.8; if (t !== showTop && totop) { showTop = t; totop.classList.toggle('on', t); totop.tabIndex = t ? 0 : -1; }
    if (progress && !cssProgress) progress.style.transform = `scaleX(${Math.min(1, y / maxScroll).toFixed(4)})`;
    if (!parallaxOK()) return;
    const hm = y < innerHeight * 1.2 ? $('.h3-media') : null;
    const rects = [...visiblePar].map(img => [img, img.parentElement.getBoundingClientRect()]);
    if (hm) hm.style.transform = `translate3d(0,${(y * 0.3).toFixed(1)}px,0)`;
    const vh = innerHeight;
    rects.forEach(([img, r]) => { const p = (r.top + r.height / 2 - vh / 2) / (vh + r.height); img.style.translate = `0 ${(p * -10).toFixed(2)}%`; });
  };
  const onScroll = () => { raf ||= requestAnimationFrame(frame); };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(() => measure()).observe(document.body);
  measure();

  /* Visibility watcher: parallax only for images on screen, ambient loops paused off screen */
  const vis = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.target.tagName === 'IMG') { e.isIntersecting ? visiblePar.add(e.target) : visiblePar.delete(e.target); }
    else e.target.classList.toggle('is-offscreen', !e.isIntersecting);
  }), { rootMargin: '100px 0px' }) : null;
  const watch = scope => { if (!vis) return; vis.disconnect(); visiblePar.clear();
    $$('.hero3, .ticker, .scene-hero, .visit-scene', scope).forEach(el => vis.observe(el));
    if (parallaxOK()) $$('[data-par] img', scope).forEach(img => vis.observe(img)); };

  /* Menu */
  const drawer = $('#drawer'), menubtn = $('#menubtn');
  const setMenu = open => {
    if (!drawer) return;
    drawer.classList.toggle('open', open); drawer.setAttribute('aria-hidden', !open); menubtn.setAttribute('aria-expanded', open);
    root.classList.toggle('menu-open', open);
    if (open) setTimeout(() => $('.drawer li a').focus({ preventScroll: true }), 120);
  };
  if (drawer && menubtn) {
    menubtn.addEventListener('click', () => setMenu(true));
    $$('[data-close]', drawer).forEach(el => el.addEventListener('click', () => { setMenu(false); menubtn.focus({ preventScroll: true }); }));
    addEventListener('keydown', e => { if (e.key === 'Escape' && drawer.classList.contains('open')) { setMenu(false); menubtn.focus({ preventScroll: true }); } });
  }
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* Hero slideshow: crossfading photos, progress bars, pause control, paused when hidden */
  function initHero(scope) {
    const hero = $('.hero3', scope); if (!hero) return () => {};
    const slides = $$('.h3-slide', hero), dots = $$('.h3-dot', hero), pause = $('.h3-pause', hero);
    const DUR = 7000; let i = 0, timer = 0, paused = !motion();
    hero.style.setProperty('--dur', DUR + 'ms');
    if (!motion()) hero.classList.add('static', 'paused');
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('on', k === i));
      dots.forEach((d, k) => { d.classList.remove('on'); d.toggleAttribute('aria-current', k === i); });
      void hero.offsetWidth; dots[i].classList.add('on');
      const now = $('.h3-now', hero); if (now) now.textContent = dots[i].querySelector('.cap').lastChild.textContent;
      schedule();
    };
    const schedule = () => { clearTimeout(timer); if (!paused) timer = setTimeout(() => show(i + 1), DUR); };
    dots.forEach((d, k) => d.addEventListener('click', () => show(k)));
    pause && pause.addEventListener('click', () => {
      paused = !paused; hero.classList.toggle('paused', paused);
      pause.setAttribute('aria-pressed', paused); pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      if (!paused) show(i); else clearTimeout(timer);
    });
    const vis = () => { if (document.hidden) clearTimeout(timer); else schedule(); };
    document.addEventListener('visibilitychange', vis);
    schedule();
    return () => { clearTimeout(timer); document.removeEventListener('visibilitychange', vis); };
  }

  /* Live open / closed status, worked out in UK time whatever the visitor's own time zone */
  let HOURS = null;
  try { HOURS = JSON.parse($('#hours-data').textContent); } catch (_) {}
  const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  const fmt = t => { let [h, m] = t.split(':').map(Number); const s = h < 12 ? 'am' : 'pm'; h = h % 12 || 12; return h + (m ? ':' + String(m).padStart(2, '0') : '') + s; };
  const mins = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  function ukNow() {
    const parts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: HOURS.tz, weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()).map(p => [p.type, p.value]));
    return { day: DAYS.indexOf(parts.weekday), min: (+parts.hour) * 60 + (+parts.minute), date: `${parts.year}-${parts.month}-${parts.day}` };
  }
  function addDays(date, n) { const d = new Date(date + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function status() {
    const now = ukNow(), closed = new Set(HOURS.closures || []);
    const today = HOURS.hours[now.day];
    if (today && today[1] && !closed.has(now.date)) {
      const o = mins(today[1]), c = mins(today[2]);
      if (now.min >= o && now.min < c) {
        const left = c - now.min;
        return { cls: left <= 30 ? 'is-soon' : 'is-open', html: left <= 30 ? `<b>Closing soon</b> · closes at ${fmt(today[2])}` : `<b>Open now</b> · closes at ${fmt(today[2])}` };
      }
      if (now.min < o) return { cls: 'is-closed', html: `<b>Closed</b> · opens today at ${fmt(today[1])}` };
    }
    for (let n = 1; n <= 14; n++) {
      const d = (now.day + n) % 7, h = HOURS.hours[d];
      if (h && h[1] && !closed.has(addDays(now.date, n))) return { cls: 'is-closed', html: `<b>Closed</b> · opens ${n === 1 ? 'tomorrow' : DAYS[d]} at ${fmt(h[1])}` };
    }
    return { cls: 'is-closed', html: '<b>Closed</b>' };
  }
  function paintStatus() {
    if (!HOURS) return;
    const s = status(), day = ukNow().day;
    $$('[data-open-status]').forEach(el => {
      el.classList.remove('is-open', 'is-soon', 'is-closed'); el.classList.add(s.cls);
      $('.stext', el).innerHTML = s.html;
    });
    $$('.hours li').forEach(li => li.classList.toggle('today', +li.dataset.day === day));
  }
  setInterval(paintStatus, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) paintStatus(); });

  /* Count numbers up from zero (the real value is in the markup at rest) */
  function countUp(el) {
    if (el.dataset.counted) return; el.dataset.counted = 1;
    const txt = el.textContent.trim(), m = txt.match(/^(\D*)([\d.,]+)(\D*)$/); if (!m) return;
    const target = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length, t0 = performance.now(), dur = 1400;
    const tick = now => { const p = Math.min(1, (now - t0) / dur), v = target * (1 - Math.pow(1 - p, 4));
      el.textContent = m[1] + v.toFixed(dec) + m[3]; if (p < 1) requestAnimationFrame(tick); else el.textContent = txt; };
    requestAnimationFrame(tick);
  }

  /* ---------- treatment reel arrows ---------- */
  document.addEventListener('click', e => {
    const b = e.target.closest('.reel-nav'); if (!b) return;
    const vp = b.closest('.reel').querySelector('.reel-viewport');
    const card = vp.querySelector('.reel-card');
    const step = card ? card.getBoundingClientRect().width + 20 : vp.clientWidth * .8;
    vp.scrollBy({ left: step * +b.dataset.dir, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  /* ---------- per page (re-run after in-place navigation) ---------- */
  let cleanups = [];
  function initPage() {
    cleanups.forEach(f => f()); cleanups = [];
    cleanups.push(initHero(document));
    paintStatus();

    /* Split headings into words so they rise in */
    if (motion()) $$('main .h2, main .scene-hero .h1, main .bio-card h2, main .cta h2').forEach(h => {
      if (h.classList.contains('split')) return;
      let wi = 0;
      const walk = node => [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const f = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { f.append(part); return; }
            const w = document.createElement('span'); w.className = 'w';
            const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--wi', wi++);
            w.append(s); f.append(w);
          });
          n.replaceWith(f);
        } else if (n.nodeType === 1 && !n.classList.contains('w')) walk(n);
      });
      if (!h.hasAttribute('aria-label')) h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim());
      walk(h); h.classList.add('split');
      if (!h.hasAttribute('data-reveal') && !h.closest('.scene-hero')) h.setAttribute('data-reveal', '');
    });

    /* Statement words light up: scroll-driven where supported, otherwise all at once when it comes into view */
    if (!root.classList.contains('sda') && 'IntersectionObserver' in window) {
      const lio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('lit'); lio.unobserve(e.target); } }), { rootMargin: '0px 0px -25% 0px' });
      $$('main .lightup').forEach(el => lio.observe(el));
      cleanups.push(() => lio.disconnect());
    }

    /* Team filter */
    const chips = $$('main .chip');
    chips.forEach(c => c.addEventListener('click', () => {
      const f = c.dataset.filter;
      chips.forEach(x => { x.classList.toggle('on', x === c); x.setAttribute('aria-pressed', x === c); });
      $$('main .bio-card').forEach((card, k) => {
        const show = f === 'all' || card.dataset.group === f;
        card.classList.toggle('out', !show);
        card.classList.remove('pre', 'fade-in');
        if (show && motion()) { card.style.animationDelay = (k % 4) * 0.06 + 's'; void card.offsetWidth; card.classList.add('fade-in', 'shown'); }
      });
    }));

    /* Reveals: content already on screen is left alone; later content eases in once.
       A clipped image frame never reports as visible, so frames are watched through their parent. */
    if (motion() && 'IntersectionObserver' in window) {
      const targets = new Map();
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        (targets.get(e.target) || []).forEach(el => {
          el.classList.add('shown'); el.classList.remove('pre');
          $$('[data-count], .amt', el).forEach(countUp);
          if (el.id === 'journey') requestAnimationFrame(() => el.style.setProperty('--p', 1));
        });
        io.unobserve(e.target);
      }), { rootMargin: '0px 0px -8% 0px', threshold: 0 });
      $$('main [data-reveal]').forEach(el => {
        if (el.getBoundingClientRect().top > innerHeight * 0.9) {
          el.classList.add('pre'); if (el.id === 'journey') el.style.setProperty('--p', 0);
          const t = el.classList.contains('frame') ? el.parentElement : el;
          if (!targets.has(t)) { targets.set(t, []); io.observe(t); }
          targets.get(t).push(el);
        }
      });
      const safety = setTimeout(() => $$('.pre').forEach(el => { el.classList.replace('pre', 'shown'); el.style.setProperty('--p', 1); }), 12000);
      cleanups.push(() => { io.disconnect(); clearTimeout(safety); });
    }

    /* "On this page" highlight */
    const toc = $$('.toc a');
    if (toc.length) {
      const tio = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        toc.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
      }), { rootMargin: '-30% 0px -60% 0px' });
      toc.forEach(a => { const s = document.getElementById(a.getAttribute('href').slice(1)); if (s) tio.observe(s); });
      cleanups.push(() => tio.disconnect());
    }

    /* Expanders (FAQs) */
    $$('main .qa button').forEach(b => b.addEventListener('click', () => {
      const box = b.closest('.qa'), open = !box.hasAttribute('data-open');
      box.toggleAttribute('data-open', open); b.setAttribute('aria-expanded', open);
    }));

    /* Copy buttons */
    $$('main [data-copy]').forEach(b => b.addEventListener('click', async () => {
      const t = b.textContent;
      try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; }
      catch (_) { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); b.textContent = 'Selected'; }
      setTimeout(() => b.textContent = t, 1600);
    }));

    /* Enquiry form (preview validates here; production adds server-side validation, spam protection and rate limiting) */
    const form = $('#enquiry');
    form && form.addEventListener('submit', e => {
      e.preventDefault();
      const v = id => $('#' + id).value.trim(), errs = {};
      if (!v('f-name')) errs.name = 'Enter your full name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('f-email'))) errs.email = 'Enter an email address like name@example.com.';
      if (v('f-phone') && !/^[0-9 +()-]{10,}$/.test(v('f-phone'))) errs.phone = 'Enter a UK phone number, or leave this blank.';
      if (!v('f-reason')) errs.reason = 'Choose a reason for your enquiry.';
      if (v('f-msg').length < 5) errs.msg = 'Add a short message.';
      if (!$('#f-privacy').checked) errs.privacy = 'Tick the box so we can reply to you.';
      const ids = { name: 'f-name', email: 'f-email', phone: 'f-phone', reason: 'f-reason', msg: 'f-msg', privacy: 'f-privacy' };
      Object.keys(ids).forEach(k => { $('#e-' + k).textContent = errs[k] || ''; });
      const first = Object.keys(ids).find(k => errs[k]);
      if (first) { $('#' + ids[first]).focus(); return; }
      const s = $('#status'); s.hidden = false;
      s.textContent = 'This is a preview, so nothing was sent. On the live site your enquiry goes to the practice and the team replies by email or phone.';
    });

    watch(document); measure(); scrolled = null; showTop = null; frame();
  }
  initPage();

  /* ---------- in-place navigation for the hosted preview ----------
     On the live site each page is a normal static HTML file and links work as usual.
     Inside the preview frame, page loads are swapped in place so the site can be browsed. */
  if (window.self === window.top) return;
  const cache = new Map();
  const keyOf = href => { const p = href.split('#')[0]; return (p === '' || p === './' || p === '/') ? 'index.html' : p.replace(/^\.\//, ''); };
  const main0 = $('main'); if (main0 && main0.dataset.path) cache.set(main0.dataset.path, { title: document.title, main: main0.outerHTML });
  let current = main0 ? main0.dataset.path : 'index.html';
  const stack = [];

  async function load(key) {
    if (cache.has(key)) return cache.get(key);
    const tries = key === 'index.html' ? ['index.html', './'] : [key];
    for (const u of tries) {
      try {
        const r = await fetch(u); if (!r.ok) continue;
        const doc = new DOMParser().parseFromString(await r.text(), 'text/html');
        const m = doc.querySelector('main'); if (!m) continue;
        const entry = { title: doc.title, main: m.outerHTML }; cache.set(key, entry); return entry;
      } catch (_) {}
    }
    return null;
  }
  async function go(key, hash, push = true) {
    if (key === current) { scrollToHash(hash); return; }
    const entry = await load(key);
    if (!entry) return;
    const swap = () => {
      $('main').outerHTML = entry.main; document.title = entry.title;
      $$('.nav a').forEach(a => { keyOf(a.getAttribute('href')) === key || (key.startsWith('treatment') && a.getAttribute('href') === 'treatments.html') || (key === 'root-canal.html' && a.getAttribute('href') === 'treatments.html') ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
      if (push) stack.push(current); current = key;
      scrollTo({ top: 0, behavior: 'instant' }); hidden = false; header && header.classList.remove('hidden'); initPage(); scrollToHash(hash);
      $('main').setAttribute('tabindex', '-1'); $('main').focus({ preventScroll: true });
    };
    document.startViewTransition && motion() ? document.startViewTransition(swap) : swap();
  }
  function scrollToHash(hash) {
    if (!hash) return; const el = document.getElementById(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: motion() ? 'smooth' : 'auto', block: 'start' }), 60);
  }
  /* Phone links: the preview frame blocks tel: links in many browsers, so we try to open the dialler
     and always show the number with a copy button as a fallback. On the live site tel: links work normally. */
  let toast;
  function callToast(num) {
    if (!toast) {
      toast = document.createElement('div'); toast.className = 'call-toast'; toast.setAttribute('role', 'status');
      toast.innerHTML = '<span class="ct-label">Call us on</span><b class="ct-num num"></b><div class="ct-btns"><button type="button" class="ct-copy">Copy number</button><button type="button" class="ct-close" aria-label="Close">×</button></div>';
      document.body.append(toast);
      toast.querySelector('.ct-close').addEventListener('click', () => toast.classList.remove('on'));
      toast.querySelector('.ct-copy').addEventListener('click', async e => {
        const b = e.currentTarget, n = toast.querySelector('.ct-num');
        try { await navigator.clipboard.writeText(n.textContent); b.textContent = 'Copied'; }
        catch (_) { const r = document.createRange(); r.selectNodeContents(n); getSelection().removeAllRanges(); getSelection().addRange(r); b.textContent = 'Selected'; }
        setTimeout(() => b.textContent = 'Copy number', 1600);
      });
    }
    toast.querySelector('.ct-num').textContent = num;
    requestAnimationFrame(() => toast.classList.add('on'));
    clearTimeout(toast._t); toast._t = setTimeout(() => toast.classList.remove('on'), 8000);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="tel:"]'); if (!a) return;
    e.preventDefault(); setMenu(false);
    try { window.open(a.getAttribute('href'), '_blank'); } catch (_) {}
    callToast('01708 728715');
  });

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]'); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const href = a.getAttribute('href');
    if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('#')) return;
    const [p, hash] = href.split('#'), key = keyOf(p);
    if (!/\.html$/.test(key)) return;
    e.preventDefault(); setMenu(false); go(key, hash);
  });
  addEventListener('keydown', e => { if (e.altKey && e.key === 'ArrowLeft' && stack.length) go(stack.pop(), '', false); });
})();
