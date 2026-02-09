import { useEffect, useState } from 'react';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Aguarda o React montar tudo + browser pintar a tela
    const raf = requestAnimationFrame(() => {
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsVisible(false), 500);
      }, 100);
    });

    return () => cancelAnimationFrame(raf);
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
