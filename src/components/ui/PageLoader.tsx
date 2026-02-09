import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function getBgImageUrls(): string[] {
  const urls: string[] = [];
  const elements = document.querySelectorAll('*');
  elements.forEach((el) => {
    const style = getComputedStyle(el);
    const bg = style.backgroundImage;
    if (bg && bg !== 'none') {
      const matches = bg.matchAll(/url\(["']?(.*?)["']?\)/g);
      for (const match of matches) {
        const url = match[1];
        if (url && !url.startsWith('data:') && !url.endsWith('.svg')) {
          urls.push(url);
        }
      }
    }
  });
  return [...new Set(urls)];
}

function preloadBgImages(urls: string[]): Promise<void> {
  if (urls.length === 0) return Promise.resolve();
  return new Promise((resolve) => {
    let loaded = 0;
    const total = urls.length;
    const done = () => {
      loaded++;
      if (loaded >= total) resolve();
    };
    urls.forEach((url) => {
      const img = new Image();
      img.onload = done;
      img.onerror = done;
      img.src = url;
    });
  });
}

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const location = useLocation();
  const fadingRef = useRef(false);

  useEffect(() => {
    setIsVisible(true);
    setIsFading(false);
    fadingRef.current = false;
    let cancelled = false;

    const startFade = () => {
      if (cancelled || fadingRef.current) return;
      fadingRef.current = true;
      setTimeout(() => {
        if (cancelled) return;
        setIsFading(true);
        setTimeout(() => {
          if (!cancelled) setIsVisible(false);
        }, 500);
      }, 300);
    };

    let lastImageCount = 0;
    let stableChecks = 0;

    const poll = setInterval(() => {
      if (cancelled || fadingRef.current) return;

      const imgElements = Array.from(document.images);
      const total = imgElements.length;

      if (total === 0) return;

      const allImgComplete = imgElements.every(
        (img) => img.complete && img.naturalHeight > 0
      );

      if (allImgComplete) {
        if (total === lastImageCount) {
          stableChecks++;
        } else {
          stableChecks = 0;
          lastImageCount = total;
        }

        // After img tags are stable, also check CSS background images
        if (stableChecks >= 3) {
          clearInterval(poll);
          const bgUrls = getBgImageUrls();
          preloadBgImages(bgUrls).then(() => {
            if (!cancelled) startFade();
          });
        }
      } else {
        stableChecks = 0;
        lastImageCount = total;
      }
    }, 150);

    // Hard fallback: 15 seconds max
    const fallback = setTimeout(() => {
      clearInterval(poll);
      startFade();
    }, 15000);

    return () => {
      cancelled = true;
      clearInterval(poll);
      clearTimeout(fallback);
    };
  }, [location.pathname]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#16493C' }}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
    </div>
  );
}
