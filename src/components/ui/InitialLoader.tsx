import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let total = 0;
    let loaded = 0;
    let finished = false;

    // trava scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finish = () => {
      if (finished) return;
      finished = true;

      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = originalOverflow || '';
      }, 500);
    };

    const trackImages = () => {
      const images = Array.from(document.images);

      images.forEach((img) => {
        if (img.dataset.tracked) return;

        img.dataset.tracked = 'true';
        total++;

        const onDone = () => {
          loaded++;
          if (loaded >= total) finish();
        };

        if (img.complete && img.naturalHeight !== 0) {
          onDone();
        } else {
          img.addEventListener('load', onDone, { once: true });
          img.addEventListener('error', onDone, { once: true });
        }
      });
    };

    const observer = new MutationObserver(trackImages);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    trackImages();

    // fallback absoluto
    const fallback = setTimeout(finish, 15000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
      document.body.style.overflow = originalOverflow || '';
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
