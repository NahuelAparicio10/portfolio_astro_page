/**
 * Scroll reveal.
 *
 * Two rules drive the design:
 *
 * 1. Content starts *visible*. The `.reveal` class only hides an element once
 *    this script has confirmed it can animate it (`data-motion-ready`). If the
 *    script never runs, whether because JavaScript is off, it failed to parse
 *    or the connection is slow, the page still reads normally instead of going
 *    blank. The usual pattern (opacity:0 in CSS, removed by JS) fails closed,
 *    which is unacceptable on a static site that gets indexed.
 *
 * 2. Only `transform` and `opacity` are animated, so the compositor handles
 *    them and scrolling stays smooth on mid-range phones.
 */

const REVEAL_SELECTOR = '[data-reveal]';
const VISIBLE_CLASS = 'is-revealed';

/** Stagger step between children, in milliseconds. */
const STAGGER_MS = 80;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function revealNow(element: HTMLElement): void {
  element.classList.add(VISIBLE_CLASS);
}

function applyStagger(element: HTMLElement): void {
  const children = element.querySelectorAll<HTMLElement>('[data-reveal-child]');
  children.forEach((child, index) => {
    child.style.transitionDelay = `${index * STAGGER_MS}ms`;
  });
}

export function initReveal(root: ParentNode = document): void {
  const elements = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
  if (elements.length === 0) return;

  // Reduced motion, or a browser without IntersectionObserver: show everything
  // immediately and skip the animation entirely.
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach(revealNow);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        revealNow(target);
        // Reveal once. Re-animating on every scroll pass is noise, not feedback.
        observer.unobserve(target);
      }
    },
    {
      // Trigger slightly before the element reaches the viewport so the
      // animation is already underway when it becomes visible.
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    },
  );

  for (const element of elements) {
    applyStagger(element);
    // Opting in here, rather than in CSS, is what keeps the no-JS path safe.
    element.setAttribute('data-motion-ready', '');
    observer.observe(element);
  }
}
