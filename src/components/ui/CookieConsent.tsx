import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './ArrowIcon';
import { useTranslation } from '@/hooks/useTranslation';

const COOKIE_CONSENT_KEY = 'drs-cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 py-4 lg:py-6"
      style={{ backgroundColor: '#274B41' }}
    >
      <div className="drs-container">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Text - 7 columns on desktop */}
          <div className="col-span-12 lg:col-span-7">
            <p className="text-white text-sm lg:text-base" style={{ margin: 0 }}>
              {t('cookie.message')}{' '}
              <Link 
                to="/politica-privacidade" 
                className="underline hover:opacity-80"
                style={{ color: '#69C0AC' }}
              >
                {t('cookie.link')}
              </Link>
              . Ao clicar "{t('cookie.button')}" consente na nossa utilização de cookies.
            </p>
          </div>
          
          {/* Button - 5 columns on desktop */}
          <div className="col-span-12 lg:col-span-5 flex justify-start lg:justify-end">
            <button
              onClick={handleAccept}
              className="drs-btn flex items-center gap-2"
              style={{ backgroundColor: '#15AF97' }}
            >
              <ArrowIcon />
              {t('cookie.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
