"use client";

import { useEffect } from "react";

const marker = "[data-motion]";

function visitScenes(node: Node, visit: (scene: HTMLElement) => void) {
  if (!(node instanceof HTMLElement)) return;
  if (node.matches(marker)) visit(node);
  if (node.firstElementChild)
    node.querySelectorAll<HTMLElement>(marker).forEach(visit);
}

function visibleAnchor() {
  if (!window.location.hash) return null;
  const target = document.querySelector(":target");
  if (!target) return null;
  const { top } = target.getBoundingClientRect();
  return top >= -1 && top < window.innerHeight ? target : null;
}

export function ScrollMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const allowed = window.matchMedia(
      "screen and (prefers-reduced-motion: no-preference)",
    );
    const finished = new WeakSet<HTMLElement>();
    let disconnect: (() => void) | undefined;

    function syncPreference() {
      disconnect?.();
      disconnect = undefined;
      if (!allowed.matches) return;

      const outside = new WeakSet<HTMLElement>();
      const observer = new IntersectionObserver(
        (entries, instance) => {
          const anchor = visibleAnchor();
          for (const entry of entries) {
            const scene = entry.target as HTMLElement;
            if (!entry.isIntersecting) {
              outside.add(scene);
              continue;
            }
            instance.unobserve(scene);
            if (!scene.isConnected) continue;
            finished.add(scene);
            // First paint, a deep link and keyboard focus keep their reading position.
            if (
              !outside.has(scene) ||
              scene.matches(":focus-within") ||
              anchor?.contains(scene) ||
              (anchor && scene.contains(anchor))
            )
              continue;
            scene.setAttribute("data-motion-play", "");
          }
        },
        { rootMargin: "0px 0px -64px 0px" },
      );

      function observe(scene: HTMLElement) {
        if (scene.closest("main") && !finished.has(scene))
          observer.observe(scene);
      }
      function release(scene: HTMLElement) {
        observer.unobserve(scene);
        outside.delete(scene);
        scene.removeAttribute("data-motion-play");
      }

      visitScenes(document.body, observe);
      // App Router navigation and filters can insert new sections after hydration.
      const changes = new MutationObserver((records) => {
        for (const record of records) {
          record.removedNodes.forEach((node) => visitScenes(node, release));
          record.addedNodes.forEach((node) => visitScenes(node, observe));
        }
      });
      changes.observe(document.body, { childList: true, subtree: true });
      disconnect = () => {
        changes.disconnect();
        observer.disconnect();
        document
          .querySelectorAll("[data-motion-play]")
          .forEach((scene) => scene.removeAttribute("data-motion-play"));
      };
    }

    syncPreference();
    allowed.addEventListener("change", syncPreference);
    return () => {
      allowed.removeEventListener("change", syncPreference);
      disconnect?.();
    };
  }, []);

  return null;
}
