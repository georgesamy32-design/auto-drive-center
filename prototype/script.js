/* Auto Drive Service Center — interactions */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* Sticky header shadow on scroll */
  const header = document.getElementById("header");
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.classList.remove("open");
    })
  );

  /* Scroll-reveal */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------------------------------------------------------
     Stats counter — counts up 0 → target over 1500ms (ease-out).
     Triggered once via IntersectionObserver; will not re-run on
     subsequent scrolls (the element is unobserved + flagged).
     --------------------------------------------------------- */
  const DURATION = 1500;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const renderValue = (el, value) => {
    const suffix = el.dataset.suffix || "";
    el.textContent = Math.round(value).toLocaleString() + suffix;
  };

  const animateCount = (el) => {
    if (el.dataset.done === "true") return;
    el.dataset.done = "true";
    const target = Number(el.dataset.count) || 0;

    if (prefersReducedMotion) {
      renderValue(el, target);
      return;
    }

    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      renderValue(el, easeOutCubic(progress) * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const counters = document.querySelectorAll(".stat__num");
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            co.unobserve(e.target); // fire once, no aggressive re-trigger
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => renderValue(c, Number(c.dataset.count) || 0));
  }

  /* ---------------------------------------------------------
     Booking form — native HTML5 validation + loading state.
     (Front-end demo: swap the setTimeout for a real fetch()/
     form action when wiring to email/WhatsApp.)
     --------------------------------------------------------- */
  const form = document.getElementById("bookingForm");
  if (form) {
    const success = document.getElementById("formSuccess");
    const submitBtn = document.getElementById("bookingSubmit");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      window.setTimeout(() => {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
        form.reset();
        success.hidden = false;
        success.scrollIntoView({ behavior: "smooth", block: "center" });
        window.setTimeout(() => (success.hidden = true), 6000);
      }, 900);
    });
  }

  /* Footer year */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
