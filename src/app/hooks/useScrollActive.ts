import { useRef, useEffect, useState, useMemo, RefObject } from 'react';

/**
 * On touch/no-hover devices (mobile): returns true while the element
 * is ≥ `threshold` (0–1) visible inside the viewport.
 * On hover-capable devices (desktop): always returns false — CSS :hover handles it.
 */
export function useScrollActive<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.45,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isActive, setIsActive] = useState(false);

  // Detect touch/no-hover once on mount (stable for the lifetime of the component)
  const isTouchDevice = useMemo(
    () =>
      typeof window !== 'undefined'
        ? window.matchMedia('(hover: none), (pointer: coarse)').matches
        : false,
    [],
  );

  useEffect(() => {
    if (!isTouchDevice) return; // Desktop: skip — CSS hover takes over

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isTouchDevice, threshold]);

  return [ref, isActive];
}
