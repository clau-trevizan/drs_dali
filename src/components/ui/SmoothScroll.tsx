import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function SmoothScroll() {
  const location = useLocation();

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;

    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      prevent: (node) => {
        return node.closest('[data-lenis-prevent]') !== null;
      },
    });

    lenisInstance = lenis;

    let animationFrame: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return null;
}
