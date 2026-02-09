import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startFade = () => {
      if (isFading) return;
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsVisible(false), 500);
      }, 1500);
    };

    const waitForImages = () => {
      const images = Array.from(document.images);
      const unloaded = images.filter((img) => !img.complete || img.naturalHeight === 0);

      if (unloaded.length === 0 && images.length > 0) {
        startFade();
        return;
      }

      if (images.length === 0) {
        // No images yet — DOM may not be ready, retry
        return;
      }

      let loaded = 0;
      const total = unloaded.length;

      unloaded.forEach((img) => {
        const onDone = () => {
          loaded++;
          if (loaded >= total) startFade();
        };
        img.addEventListener('load', onDone, { once: true });
        img.addEventListener('error', onDone, { once: true });
      });
    };

    // Poll until images appear in the DOM, then wait for them
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      const images = Array.from(document.images);
      if (images.length > 0) {
        clearInterval(poll);
        waitForImages();
      } else if (attempts > 50) {
        // After 5s with no images, just show the page
        clearInterval(poll);
        startFade();
      }
    }, 100);

    // Hard fallback: 15 seconds max
    const fallback = setTimeout(() => {
      clearInterval(poll);
      startFade();
    }, 15000);

    return () => {
      clearInterval(poll);
      clearTimeout(fallback);
    };
  }, []);

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
