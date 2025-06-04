import { useEffect, useState } from "react";

export enum ScrollDirection {
  UP = "up",
  DOWN = "down",
  NONE = "none",
}
/**
 * Custom hook to track the scroll direction and whether the user is at the top of the page.
 *
 * @param threshold - The minimum distance in pixels to scroll before determining a direction change.
 * @returns An object containing the current scroll direction and a boolean indicating if the user is at the top.
 */

export function useScrollDirection(threshold: number = 10) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState(ScrollDirection.NONE);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction: ScrollDirection = scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;
      if (direction !== scrollDirection && (scrollY - lastScrollY > threshold || scrollY - lastScrollY < -threshold)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return { scrollDirection, scrolled };
}
