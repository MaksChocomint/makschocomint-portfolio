"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const root = document.querySelector("main") ?? document.body;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElement = (element: Element) => {
      element.classList.add("visible");
    };

    const revealTree = (node: Element) => {
      if (node.classList.contains("on-scroll")) {
        revealElement(node);
      }

      node.querySelectorAll(".on-scroll").forEach(revealElement);
    };

    if (prefersReducedMotion) {
      document.querySelectorAll(".on-scroll").forEach(revealElement);

      const reducedMotionObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof Element) {
              revealTree(node);
            }
          });
        });
      });

      reducedMotionObserver.observe(root, {
        childList: true,
        subtree: true,
      });

      return () => reducedMotionObserver.disconnect();
    }

    const observedElements = new WeakSet<Element>();
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const observeElement = (element: Element) => {
      if (observedElements.has(element)) {
        return;
      }

      observedElements.add(element);

      if (element.getBoundingClientRect().top <= window.innerHeight * 0.9) {
        revealElement(element);
        return;
      }

      intersectionObserver.observe(element);
    };

    document.querySelectorAll(".on-scroll").forEach(observeElement);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.classList.contains("on-scroll")) {
            observeElement(node);
          }

          node.querySelectorAll(".on-scroll").forEach(observeElement);
        });
      });
    });

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return null;
}
