"use client";

import { useEffect } from "react";

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealSelector = [
      ".section-intro",
      ".service-card",
      ".timeline > li",
      ".ai-hub-copy",
      ".stack-chip",
      ".results-band > div",
      ".quote",
      ".price-card",
      ".contact > *",
    ].join(",");
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    root.classList.add("motion-ready");
    revealTargets.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    if (reduceMotion) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6%" },
    );
    revealTargets.forEach((element) => observer.observe(element));

    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("is-scrolled", scrollTop > 32);
      progress?.style.setProperty("--scroll-progress", `${scrollable > 0 ? scrollTop / scrollable : 0}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLAnchorElement>(".mobile-menu nav a").forEach((link) => {
      const closeMenu = () => {
        link.closest<HTMLDetailsElement>("details")?.removeAttribute("open");
      };
      link.addEventListener("click", closeMenu);
      cleanups.push(() => link.removeEventListener("click", closeMenu));
    });

    if (canHover) {
      document.querySelectorAll<HTMLElement>(".button, .header-cta").forEach((button) => {
        const attract = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - (rect.left + rect.width / 2);
          const y = event.clientY - (rect.top + rect.height / 2);
          button.style.setProperty("--mag-x", `${(x * 0.12).toFixed(2)}px`);
          button.style.setProperty("--mag-y", `${(y * 0.16).toFixed(2)}px`);
        };
        const release = () => {
          button.style.setProperty("--mag-x", "0px");
          button.style.setProperty("--mag-y", "0px");
        };
        button.addEventListener("pointermove", attract);
        button.addEventListener("pointerleave", release);
        cleanups.push(() => {
          button.removeEventListener("pointermove", attract);
          button.removeEventListener("pointerleave", release);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
