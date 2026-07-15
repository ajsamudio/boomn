"use client";

import { useEffect, useState } from "react";

export function MotionEnhancer() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealSelector = [
      ".section-intro",
      ".method-heading",
      ".partners-title",
      ".service-row",
      ".genius-card",
      ".method-loop > div",
      ".partner-cards article",
      ".quote-section blockquote",
      ".quote-person",
      ".contact .eyebrow",
      ".contact h2",
      ".contact > p:not(.eyebrow)",
      ".contact .button",
      "footer > *",
    ].join(",");
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    root.classList.add("motion-ready");
    revealTargets.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });

    if (reduceMotion) {
      root.classList.add("page-loaded");
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      setShowLoader(false);
      return;
    }

    const loadTimer = window.setTimeout(() => root.classList.add("page-loaded"), 120);
    const loaderTimer = window.setTimeout(() => setShowLoader(false), 1650);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7%" },
    );
    revealTargets.forEach((element) => observer.observe(element));

    const header = document.querySelector<HTMLElement>(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle("is-scrolled", scrollTop > 40);
      progress?.style.setProperty("--scroll-progress", `${scrollable > 0 ? scrollTop / scrollable : 0}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const hero = document.querySelector<HTMLElement>(".hero");
    const operatorCard = document.querySelector<HTMLElement>(".operator-card");
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    if (canHover && hero) {
      const moveHero = (event: PointerEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        hero.style.setProperty("--pointer-x", x.toFixed(3));
        hero.style.setProperty("--pointer-y", y.toFixed(3));
      };
      window.addEventListener("pointermove", moveHero, { passive: true });
      cleanups.push(() => window.removeEventListener("pointermove", moveHero));
    }

    if (canHover && operatorCard) {
      const tiltCard = (event: PointerEvent) => {
        const rect = operatorCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        operatorCard.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        operatorCard.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      };
      const resetCard = () => {
        operatorCard.style.setProperty("--tilt-x", "0deg");
        operatorCard.style.setProperty("--tilt-y", "0deg");
      };
      operatorCard.addEventListener("pointermove", tiltCard);
      operatorCard.addEventListener("pointerleave", resetCard);
      cleanups.push(() => {
        operatorCard.removeEventListener("pointermove", tiltCard);
        operatorCard.removeEventListener("pointerleave", resetCard);
      });
    }

    if (canHover) {
      document.querySelectorAll<HTMLElement>(".button, .header-cta").forEach((button) => {
        const attract = (event: PointerEvent) => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - (rect.left + rect.width / 2);
          const y = event.clientY - (rect.top + rect.height / 2);
          button.style.setProperty("--mag-x", `${(x * 0.13).toFixed(2)}px`);
          button.style.setProperty("--mag-y", `${(y * 0.18).toFixed(2)}px`);
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
      window.clearTimeout(loadTimer);
      window.clearTimeout(loaderTimer);
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      {showLoader && (
        <div className="page-loader" aria-hidden="true">
          <div className="loader-word">BOOMN<span>.</span></div>
          <div className="loader-track"><i /></div>
          <p>Building momentum</p>
        </div>
      )}
      <div className="scroll-progress" aria-hidden="true" />
      <noscript><style>{`.page-loader{display:none!important}`}</style></noscript>
    </>
  );
}
