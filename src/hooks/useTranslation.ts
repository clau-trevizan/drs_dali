import { useLanguage } from '@/contexts/LanguageContext';

export function useTranslation() {
  const { language, setLanguage, t } = useLanguage();
  
  return {
    language,
    setLanguage,
    t,
    // Helper to check current language
    isPortuguese: language === 'pt',
    isEnglish: language === 'en',
    isSpanish: language === 'es',
  };
}

export default useTranslation;
