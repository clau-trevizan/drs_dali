import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

function Loader({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#16493C] transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent" />
    </div>
  );
}

export function Layout({ children, mainClassName = '' }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  // trava scroll enquanto carrega
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  useEffect(() => {
    let total = 0;
    let loaded = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setLoading(false);
    };

    const trackImages = () => {
      const images = Array.from(document.images);

      images.forEach((img) => {
        if ((img as any)._tracked) return;

        (img as any)._tracked = true;
        total++;

        const done = () => {
          loaded++;
          if (loaded >= total) finish();
        };

        if (img.complete && img.naturalHeight !== 0) {
          done();
        } else {
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });
        }
      });
    };

    const observer = new MutationObserver(trackImages);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    trackImages();

    const fallback = setTimeout(finish, 15000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <Loader visible={loading} />

      <div className={`min-h-screen flex flex-col transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className={`flex-1 ${mainClassName}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
