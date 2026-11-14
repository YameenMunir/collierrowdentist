/**
 * Shared behaviour for every page: theme toggle, header/scroll effects, menu drawer,
 * hero slideshow, live open/closed status, reveal animations, FAQs, copy buttons,
 * team filter and enquiry form validation.
 *
 * This is a typed port of the original site.js, so the motion and interaction design is
 * unchanged. `createSite()` is called once (global listeners); `initPage()` is re-run after
 * every client-side navigation to wire up whatever the new page contains.
 */
import { formatTime as fmt, HOURS } from "./hours";

type Cleanup = () => void;

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => [...r.querySelectorAll<T>(s)];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mins = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

function ukNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: HOURS.tz, weekday: "long", year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value]),
  ) as Record<string, string>;
  return { day: DAYS.indexOf(parts.weekday), min: +parts.hour * 60 + +parts.minute, date: `${parts.year}-${parts.month}-${parts.day}` };
}

function addDays(date: string, n: number) {
  const d = new Date(date + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function openStatus() {
  const now = ukNow();
  const closed = new Set(HOURS.closures);
  const today = HOURS.hours[now.day];
  if (today && today[1] && today[2] && !closed.has(now.date)) {
    const o = mins(today[1]), c = mins(today[2]);
    if (now.min >= o && now.min < c) {
      const left = c - now.min;
      return left <= 30
        ? { cls: "is-soon", html: `<b>Closing soon</b> · closes at ${fmt(today[2])}` }
        : { cls: "is-open", html: `<b>Open now</b> · closes at ${fmt(today[2])}` };
    }
    if (now.min < o) return { cls: "is-closed", html: `<b>Closed</b> · opens today at ${fmt(today[1])}` };
  }
  for (let n = 1; n <= 14; n++) {
    const d = (now.day + n) % 7, h = HOURS.hours[d];
    if (h && h[1] && !closed.has(addDays(now.date, n)))
      return { cls: "is-closed", html: `<b>Closed</b> · opens ${n === 1 ? "tomorrow" : DAYS[d]} at ${fmt(h[1])}` };
  }
  return { cls: "is-closed", html: "<b>Closed</b>" };
}

function countUp(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const txt = (el.textContent ?? "").trim();
  const m = txt.match(/^(\D*)([\d.,]+)(\D*)$/);
  if (!m) return;
  const target = parseFloat(m[2].replace(/,/g, ""));
  const dec = (m[2].split(".")[1] || "").length;
  const t0 = performance.now(), dur = 1400;
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / dur), v = target * (1 - Math.pow(1 - p, 4));
    el.textContent = m[1] + v.toFixed(dec) + m[3];
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = txt;
  };
  requestAnimationFrame(tick);
}

export function createSite() {
  const root = document.documentElement;
  const motion = () => root.classList.contains("motion");
  const disposers: Cleanup[] = [];
  const on = <K extends keyof WindowEventMap>(t: Window, e: K, f: (ev: WindowEventMap[K]) => void, o?: AddEventListenerOptions) => {
    t.addEventListener(e, f as EventListener, o);
    disposers.push(() => t.removeEventListener(e, f as EventListener));
  };

  /* ---------- Theme: follows the OS until chosen, then remembered ---------- */
  const themeBtn = $("#theme");
  const sys = matchMedia("(prefers-color-scheme: dark)");
  const dark = () => root.dataset.theme !== "light";
  const syncTheme = () => {
    root.classList.toggle("is-dark", dark());
    themeBtn?.setAttribute("aria-label", dark() ? "Switch to daylight mode" : "Switch to night mode");
  };
  syncTheme();
  sys.addEventListener("change", syncTheme);
  disposers.push(() => sys.removeEventListener("change", syncTheme));
  const onTheme = () => {
    const apply = () => {
      if (dark()) root.dataset.theme = "light"; else root.removeAttribute("data-theme");
      try { localStorage.setItem("crdp-theme-v2", dark() ? "dark" : "light"); } catch { /* storage blocked */ }
      syncTheme();
    };
    if ("startViewTransition" in document && motion()) document.startViewTransition(apply);
    else apply();
  };
  themeBtn?.addEventListener("click", onTheme);
  disposers.push(() => themeBtn?.removeEventListener("click", onTheme));

  /* ---------- Scroll work: one rAF per frame, reads first then writes ---------- */
  const header = $("#header"), progress = $(".progress"), totop = $("#totop");
  const cssProgress = !!(window.CSS && CSS.supports("animation-timeline: scroll()"));
  const parallaxOK = () => motion() && matchMedia("(hover: hover) and (pointer: fine) and (min-width: 901px)").matches;
  let raf = 0, maxScroll = 1, scrolled: boolean | null = null, showTop: boolean | null = null, lastY = scrollY, hidden = false;
  const visiblePar = new Set<Element>();

  const onTop = () => {
    scrollTo({ top: 0, behavior: motion() ? "smooth" : "auto" });
    $<HTMLElement>(".header .logo")?.focus({ preventScroll: true });
  };
  totop?.addEventListener("click", onTop);
  disposers.push(() => totop?.removeEventListener("click", onTop));

  const measure = () => { maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight); };
  const frame = () => {
    raf = 0;
    const y = scrollY;
    const s = y > 10;
    if (s !== scrolled && header) { scrolled = s; header.classList.toggle("scrolled", s); }
    const dy = y - lastY; lastY = y;
    const hide = y > innerHeight * 0.7 && dy > 4 ? true : dy < -4 || y < 80 ? false : hidden;
    if (hide !== hidden && header && !root.classList.contains("menu-open")) { hidden = hide; header.classList.toggle("hidden", hide); }
    const t = y > innerHeight * 0.8;
    if (t !== showTop && totop) { showTop = t; totop.classList.toggle("on", t); (totop as HTMLElement).tabIndex = t ? 0 : -1; }
    if (progress && !cssProgress) (progress as HTMLElement).style.transform = `scaleX(${Math.min(1, y / maxScroll).toFixed(4)})`;
    if (!parallaxOK()) return;
    const hm = y < innerHeight * 1.2 ? $(".h3-media") : null;
    const rects = [...visiblePar].map((img) => [img as HTMLElement, img.parentElement!.getBoundingClientRect()] as const);
    if (hm) hm.style.transform = `translate3d(0,${(y * 0.3).toFixed(1)}px,0)`;
    const vh = innerHeight;
    rects.forEach(([img, r]) => {
      const p = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
      img.style.translate = `0 ${(p * -10).toFixed(2)}%`;
    });
  };
  const onScroll = () => { raf ||= requestAnimationFrame(frame); };
  on(window, "scroll", onScroll, { passive: true });
  on(window, "resize", () => { measure(); onScroll(); }, { passive: true });
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);
    disposers.push(() => ro.disconnect());
  }
  measure();

  /* Visibility watcher: parallax only for images on screen, ambient loops paused off screen */
  const vis = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => {
        if (e.target.tagName === "IMG") { e.isIntersecting ? visiblePar.add(e.target) : visiblePar.delete(e.target); }
        else e.target.classList.toggle("is-offscreen", !e.isIntersecting);
      }), { rootMargin: "100px 0px" })
    : null;
  disposers.push(() => vis?.disconnect());
  const watch = () => {
    if (!vis) return;
    vis.disconnect(); visiblePar.clear();
    $$(".hero3, .ticker, .scene-hero, .visit-scene").forEach((el) => vis.observe(el));
    if (parallaxOK()) $$("[data-par] img").forEach((img) => vis.observe(img));
  };

  /* ---------- Menu drawer ---------- */
  const drawer = $("#drawer"), menubtn = $("#menubtn");
  const setMenu = (open: boolean) => {
    if (!drawer || !menubtn) return;
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    menubtn.setAttribute("aria-expanded", String(open));
    root.classList.toggle("menu-open", open);
    if (open) setTimeout(() => $<HTMLElement>(".drawer li a")?.focus({ preventScroll: true }), 120);
  };
  if (drawer && menubtn) {
    const openMenu = () => setMenu(true);
    menubtn.addEventListener("click", openMenu);
    disposers.push(() => menubtn.removeEventListener("click", openMenu));
    $$("[data-close]", drawer).forEach((el) => {
      const close = () => { setMenu(false); menubtn.focus({ preventScroll: true }); };
      el.addEventListener("click", close);
      disposers.push(() => el.removeEventListener("click", close));
    });
    on(window, "keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) { setMenu(false); menubtn.focus({ preventScroll: true }); }
    });
  }
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Live open / closed status (UK time whatever the visitor's time zone) ---------- */
  function paintStatus() {
    const s = openStatus(), day = ukNow().day;
    $$("[data-open-status]").forEach((el) => {
      el.classList.remove("is-open", "is-soon", "is-closed");
      el.classList.add(s.cls);
      const t = $(".stext", el);
      if (t) t.innerHTML = s.html;
    });
    $$(".hours li").forEach((li) => li.classList.toggle("today", Number(li.dataset.day) === day));
  }
  const statusTimer = setInterval(paintStatus, 30000);
  disposers.push(() => clearInterval(statusTimer));
  const onVisible = () => { if (!document.hidden) paintStatus(); };
  document.addEventListener("visibilitychange", onVisible);
  disposers.push(() => document.removeEventListener("visibilitychange", onVisible));

  /* ---------- Treatment reel arrows ---------- */
  const onReel = (e: MouseEvent) => {
    const b = (e.target as Element).closest<HTMLElement>(".reel-nav");
    if (!b) return;
    const vp = b.closest(".reel")?.querySelector<HTMLElement>(".reel-viewport");
    if (!vp) return;
    const card = vp.querySelector(".reel-card");
    const step = card ? card.getBoundingClientRect().width + 20 : vp.clientWidth * 0.8;
    vp.scrollBy({ left: step * Number(b.dataset.dir), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  document.addEventListener("click", onReel);
  disposers.push(() => document.removeEventListener("click", onReel));

  /* ---------- Hero slideshow: crossfading photos, progress bars, pause control ---------- */
  function initHero(): Cleanup {
    const hero = $(".hero3");
    if (!hero) return () => {};
    const slides = $$(".h3-slide", hero), dots = $$(".h3-dot", hero), pause = $(".h3-pause", hero);
    const DUR = 7000;
    let i = 0, timer: ReturnType<typeof setTimeout> | undefined, paused = !motion();
    hero.style.setProperty("--dur", DUR + "ms");
    if (!motion()) hero.classList.add("static", "paused");
    const schedule = () => { clearTimeout(timer); if (!paused) timer = setTimeout(() => show(i + 1), DUR); };
    const show = (n: number) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === i));
      dots.forEach((d, k) => { d.classList.remove("on"); d.toggleAttribute("aria-current", k === i); });
      void hero.offsetWidth;
      dots[i].classList.add("on");
      const now = $(".h3-now", hero);
      if (now) now.textContent = dots[i].querySelector(".cap")!.lastChild!.textContent;
      schedule();
    };
    const offs: Cleanup[] = [];
    dots.forEach((d, k) => { const f = () => show(k); d.addEventListener("click", f); offs.push(() => d.removeEventListener("click", f)); });
    if (pause) {
      const f = () => {
        paused = !paused;
        hero.classList.toggle("paused", paused);
        pause.setAttribute("aria-pressed", String(paused));
        pause.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
        if (!paused) show(i); else clearTimeout(timer);
      };
      pause.addEventListener("click", f);
      offs.push(() => pause.removeEventListener("click", f));
    }
    const onHide = () => { if (document.hidden) clearTimeout(timer); else schedule(); };
    document.addEventListener("visibilitychange", onHide);
    schedule();
    return () => { clearTimeout(timer); document.removeEventListener("visibilitychange", onHide); offs.forEach((f) => f()); };
  }

  /* ---------- Per page (re-run after every client-side navigation) ---------- */
  let cleanups: Cleanup[] = [];
  function initPage() {
    cleanups.forEach((f) => f());
    cleanups = [];
    setMenu(false);
    hidden = false;
    header?.classList.remove("hidden");
    cleanups.push(initHero());
    paintStatus();

    /* Split headings into words so they rise in */
    if (motion()) {
      $$("main .h2, main .scene-hero .h1, main .bio-card h2, main .cta h2").forEach((h) => {
        if (h.classList.contains("split")) return;
        let wi = 0;
        const walk = (node: Node) => [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const f = document.createDocumentFragment();
            (n.textContent ?? "").split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) { f.append(part); return; }
              const w = document.createElement("span"); w.className = "w";
              const s = document.createElement("span"); s.textContent = part; s.style.setProperty("--wi", String(wi++));
              w.append(s); f.append(w);
            });
            (n as ChildNode).replaceWith(f);
          } else if (n.nodeType === 1 && !(n as Element).classList.contains("w")) walk(n);
        });
        if (!h.hasAttribute("aria-label")) h.setAttribute("aria-label", (h.textContent ?? "").replace(/\s+/g, " ").trim());
        walk(h);
        h.classList.add("split");
        if (!h.hasAttribute("data-reveal") && !h.closest(".scene-hero")) h.setAttribute("data-reveal", "");
      });
    }

    /* Statement words light up: scroll-driven where supported, otherwise on entering view */
    if (!root.classList.contains("sda") && "IntersectionObserver" in window) {
      const lio = new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("lit"); lio.unobserve(e.target); }
      }), { rootMargin: "0px 0px -25% 0px" });
      $$("main .lightup").forEach((el) => lio.observe(el));
      cleanups.push(() => lio.disconnect());
    }

    /* Team filter */
    const chips = $$("main .chip");
    chips.forEach((c) => {
      const f = () => {
        const filter = c.dataset.filter;
        chips.forEach((x) => { x.classList.toggle("on", x === c); x.setAttribute("aria-pressed", String(x === c)); });
        $$("main .bio-card").forEach((card, k) => {
          const show = filter === "all" || card.dataset.group === filter;
          card.classList.toggle("out", !show);
          card.classList.remove("pre", "fade-in");
          if (show && motion()) { card.style.animationDelay = (k % 4) * 0.06 + "s"; void card.offsetWidth; card.classList.add("fade-in", "shown"); }
        });
      };
      c.addEventListener("click", f);
      cleanups.push(() => c.removeEventListener("click", f));
    });

    /* Reveals: content already on screen is left alone; later content eases in once.
       A clipped image frame never reports as visible, so frames are watched through their parent. */
    if (motion() && "IntersectionObserver" in window) {
      const targets = new Map<Element, HTMLElement[]>();
      const io = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        (targets.get(e.target) || []).forEach((el) => {
          el.classList.add("shown"); el.classList.remove("pre");
          $$("[data-count], .amt", el).forEach(countUp);
          if (el.id === "journey") requestAnimationFrame(() => el.style.setProperty("--p", "1"));
        });
        io.unobserve(e.target);
      }), { rootMargin: "0px 0px -8% 0px", threshold: 0 });
      $$("main [data-reveal], .footer [data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top > innerHeight * 0.9) {
          el.classList.add("pre");
          if (el.id === "journey") el.style.setProperty("--p", "0");
          const t = el.classList.contains("frame") ? el.parentElement! : el;
          if (!targets.has(t)) { targets.set(t, []); io.observe(t); }
          targets.get(t)!.push(el);
        }
      });
      const safety = setTimeout(() => $$(".pre").forEach((el) => { el.classList.replace("pre", "shown"); el.style.setProperty("--p", "1"); }), 12000);
      cleanups.push(() => { io.disconnect(); clearTimeout(safety); });
    }

    /* "On this page" highlight */
    const toc = $$<HTMLAnchorElement>(".toc a");
    if (toc.length) {
      const tio = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        toc.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
      }), { rootMargin: "-30% 0px -60% 0px" });
      toc.forEach((a) => { const s = document.getElementById(a.getAttribute("href")!.slice(1)); if (s) tio.observe(s); });
      cleanups.push(() => tio.disconnect());
    }

    /* Expanders (FAQs) */
    $$("main .qa button").forEach((b) => {
      const f = () => {
        const box = b.closest(".qa")!, open = !box.hasAttribute("data-open");
        box.toggleAttribute("data-open", open);
        b.setAttribute("aria-expanded", String(open));
      };
      b.addEventListener("click", f);
      cleanups.push(() => b.removeEventListener("click", f));
    });

    /* Copy buttons */
    $$("main [data-copy]").forEach((b) => {
      const f = async () => {
        const t = b.textContent;
        try { await navigator.clipboard.writeText(b.dataset.copy ?? ""); b.textContent = "Copied"; }
        catch {
          const prev = b.previousElementSibling;
          if (prev) { const r = document.createRange(); r.selectNodeContents(prev); getSelection()?.removeAllRanges(); getSelection()?.addRange(r); }
          b.textContent = "Selected";
        }
        setTimeout(() => (b.textContent = t), 1600);
      };
      b.addEventListener("click", f);
      cleanups.push(() => b.removeEventListener("click", f));
    });

    /* Enquiry form. Concept build: validates in the browser and sends nothing. */
    const form = $<HTMLFormElement>("#enquiry");
    if (form) {
      const f = (e: SubmitEvent) => {
        e.preventDefault();
        const el = (id: string) => $<HTMLInputElement>("#" + id)!;
        const v = (id: string) => el(id).value.trim();
        const errs: Record<string, string> = {};
        if (!v("f-name")) errs.name = "Enter your full name.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("f-email"))) errs.email = "Enter an email address like name@example.com.";
        if (v("f-phone") && !/^[0-9 +()-]{10,}$/.test(v("f-phone"))) errs.phone = "Enter a UK phone number, or leave this blank.";
        if (!v("f-reason")) errs.reason = "Choose a reason for your enquiry.";
        if (v("f-msg").length < 5) errs.msg = "Add a short message.";
        if (!el("f-privacy").checked) errs.privacy = "Tick the box so we can reply to you.";
        const ids: Record<string, string> = { name: "f-name", email: "f-email", phone: "f-phone", reason: "f-reason", msg: "f-msg", privacy: "f-privacy" };
        Object.keys(ids).forEach((k) => { $("#e-" + k)!.textContent = errs[k] || ""; });
        const first = Object.keys(ids).find((k) => errs[k]);
        if (first) { el(ids[first]).focus(); return; }
        const s = $("#status")!;
        s.hidden = false;
        s.textContent = "This is a concept build, so nothing was sent. On a live site, your enquiry would go to the practice and the team would reply by email or phone.";
      };
      form.addEventListener("submit", f);
      cleanups.push(() => form.removeEventListener("submit", f));
    }

    watch(); measure(); scrolled = null; showTop = null; frame();
  }

  return {
    initPage,
    destroy() {
      cleanups.forEach((f) => f());
      cleanups = [];
      disposers.forEach((f) => f());
      if (raf) cancelAnimationFrame(raf);
    },
  };
}
