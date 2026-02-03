import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation type
type TranslationValue = string | Record<string, string>;
type Translations = Record<Language, Record<string, TranslationValue>>;

// All translations for the site
export const translations: Translations = {
  pt: {
    // Header
    'nav.solucoes': 'Soluções',
    'nav.areas': 'Áreas de expertise',
    'nav.grupo': 'Grupo DRS',
    'nav.contato': 'Contato',
    'nav.portal': 'Portal 360 DRS',
    
    // Home - Section 1 (Hero)
    'home.hero.title': 'Conectamos ciência e pessoas',
    'home.hero.description': 'Entregamos resultados e criamos soluções personalizadas para indústria farmacêutica, CROs e centros de pesquisa clínica com tecnologia proprietária.',
    'home.hero.cta': 'Saiba mais',
    
    // Home - Section 2 (Stats)
    'home.stats.title': 'Resultados que importam.\nSoluções que transformam.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.title': 'protocolos\nsob gestão',
    'home.stats.card1.description': 'Atuação em diferentes fases\nclínicas e terapias.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.title': 'clientes\nativos',
    'home.stats.card2.description': "Biofarmacêuticas, CRO's,\nCentros de Pesquisa,\nOperadoras e Logística.",
    'home.stats.card3.number': '+200.000',
    'home.stats.card3.title': 'pacientes\natendidos\npor ano',
    'home.stats.card3.description': 'Fazemos a diferença, seja\nconectando a pesquisa clínica\nou viabilizando os tratamentos.',
    
    // Home - Section 3 (DRS 360 Carousel)
    'home.drs360.slide1.title': 'DRS360: Visibilidade 24/7 em tempo real',
    'home.drs360.slide1.description': 'Plataforma proprietária com rastreabilidade e dashboards por estudo.',
    'home.drs360.slide2.title': 'Controle total da sua operação',
    'home.drs360.slide2.description': 'Gerencie todos os processos de forma integrada e eficiente.',
    
    // Home - Section 4 (Solutions)
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',
    
    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar',
    
    // Home - World Map Section
    'home.worldmap.tag': 'ATUAÇÃO GLOBAL',
    
    // CTA Section
    'cta.title': 'Transforme sua operação em saúde com o apoio da DRS.',
    'cta.button': 'Saiba mais',
    
    // Cookie Consent
    'cookie.message': 'Utilizamos cookies (e técnicas semelhantes) para melhorar a sua experiência no nosso site. Também nos ajudam a entender como o nosso site está sendo usado. Pode ler o nosso',
    'cookie.link': 'Aviso de Cookies',
    'cookie.button': 'ACEITO',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    
    // Soluções Page
    'solucoes.hero.title': 'Soluções completas para pesquisa clínica e saúde',
    'solucoes.hero.description': 'Oferecemos serviços integrados que conectam a indústria farmacêutica aos pacientes.',
    
    // Grupo DRS Page
    'grupo.hero.title': 'Somos referência em pesquisa clínica, tecnologia e inovação aplicadas à saúde',
    
    // DRS 360 Page
    'drs360.hero.title': 'DRS 360',
    'drs360.hero.description': 'Planejamento, controle, rastreabilidade e decisões em tempo real.',
    
    // Contact Page
    'contato.hero.title': 'Entre em contato',
    'contato.hero.description': 'Estamos prontos para atender você.',
    'contato.form.name': 'Nome',
    'contato.form.email': 'E-mail',
    'contato.form.company': 'Empresa',
    'contato.form.phone': 'Telefone',
    'contato.form.message': 'Mensagem',
    'contato.form.submit': 'Enviar',
    
    // CTS Page
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Soluções completas para estudos clínicos.',
    
    // PCS Page
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Serviços centrados no paciente.',
    
    // TIS Page
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Logística integrada com controle de temperatura.',
    
    // Insights Page
    'insights.hero.title': 'As últimas notícias, entrevistas, tecnologias e recursos do setor.',
    'insights.search': 'Buscar',
    'insights.categories': 'Categorias',
    
    // Privacy Policy Page
    'privacy.title': 'Política de Privacidade',
  },
  en: {
    // Header
    'nav.solucoes': 'Solutions',
    'nav.areas': 'Areas of expertise',
    'nav.grupo': 'DRS Group',
    'nav.contato': 'Contact',
    'nav.portal': 'Portal 360 DRS',
    
    // Home - Section 1 (Hero)
    'home.hero.title': 'We connect science and people',
    'home.hero.description': 'Entregamos resultados e criamos soluções personalizadas para indústria farmacêutica, CROs e centros de pesquisa clínica com tecnologia proprietária.',
    'home.hero.cta': 'Saiba mais',
    
    // Home - Section 2 (Stats)
    'home.stats.title': 'Resultados que importam.\nSoluções que transformam.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.title': 'protocolos\nsob gestão',
    'home.stats.card1.description': 'Atuação em diferentes fases\nclínicas e terapias.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.title': 'clientes\nativos',
    'home.stats.card2.description': "Biofarmacêuticas, CRO's,\nCentros de Pesquisa,\nOperadoras e Logística.",
    'home.stats.card3.number': '+200.000',
    'home.stats.card3.title': 'pacientes\natendidos\npor ano',
    'home.stats.card3.description': 'Fazemos a diferença, seja\nconectando a pesquisa clínica\nou viabilizando os tratamentos.',
    
    // Home - Section 3 (DRS 360 Carousel)
    'home.drs360.slide1.title': 'DRS360: Visibilidade 24/7 em tempo real',
    'home.drs360.slide1.description': 'Plataforma proprietária com rastreabilidade e dashboards por estudo.',
    'home.drs360.slide2.title': 'Controle total da sua operação',
    'home.drs360.slide2.description': 'Gerencie todos os processos de forma integrada e eficiente.',
    
    // Home - Section 4 (Solutions)
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',
    
    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar',
    
    // Home - World Map Section
    'home.worldmap.tag': 'ATUAÇÃO GLOBAL',
    
    // CTA Section
    'cta.title': 'Transforme sua operação em saúde com o apoio da DRS.',
    'cta.button': 'Saiba mais',
    
    // Cookie Consent
    'cookie.message': 'Utilizamos cookies (e técnicas semelhantes) para melhorar a sua experiência no nosso site. Também nos ajudam a entender como o nosso site está sendo usado. Pode ler o nosso',
    'cookie.link': 'Aviso de Cookies',
    'cookie.button': 'ACEITO',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    
    // Soluções Page
    'solucoes.hero.title': 'Soluções completas para pesquisa clínica e saúde',
    'solucoes.hero.description': 'Oferecemos serviços integrados que conectam a indústria farmacêutica aos pacientes.',
    
    // Grupo DRS Page
    'grupo.hero.title': 'Somos referência em pesquisa clínica, tecnologia e inovação aplicadas à saúde',
    
    // DRS 360 Page
    'drs360.hero.title': 'DRS 360',
    'drs360.hero.description': 'Planejamento, controle, rastreabilidade e decisões em tempo real.',
    
    // Contact Page
    'contato.hero.title': 'Entre em contato',
    'contato.hero.description': 'Estamos prontos para atender você.',
    'contato.form.name': 'Nome',
    'contato.form.email': 'E-mail',
    'contato.form.company': 'Empresa',
    'contato.form.phone': 'Telefone',
    'contato.form.message': 'Mensagem',
    'contato.form.submit': 'Enviar',
    
    // CTS Page
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Soluções completas para estudos clínicos.',
    
    // PCS Page
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Serviços centrados no paciente.',
    
    // TIS Page
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Logística integrada com controle de temperatura.',
    
    // Insights Page
    'insights.hero.title': 'As últimas notícias, entrevistas, tecnologias e recursos do setor.',
    'insights.search': 'Buscar',
    'insights.categories': 'Categorias',
    
    // Privacy Policy Page
    'privacy.title': 'Política de Privacidade',
  },
  es: {
    // Header
    'nav.solucoes': 'Soluciones',
    'nav.areas': 'Áreas de expertise',
    'nav.grupo': 'Grupo DRS',
    'nav.contato': 'Contacto',
    'nav.portal': 'Portal 360 DRS',
    
    // Home - Section 1 (Hero)
    'home.hero.title': 'Conectamos la ciencia y las personas',
    'home.hero.description': 'Entregamos resultados e criamos soluções personalizadas para indústria farmacêutica, CROs e centros de pesquisa clínica com tecnologia proprietária.',
    'home.hero.cta': 'Saiba mais',
    
    // Home - Section 2 (Stats)
    'home.stats.title': 'Resultados que importam.\nSoluções que transformam.',
    'home.stats.card1.number': '+500',
    'home.stats.card1.title': 'protocolos\nsob gestão',
    'home.stats.card1.description': 'Atuação em diferentes fases\nclínicas e terapias.',
    'home.stats.card2.number': '+100',
    'home.stats.card2.title': 'clientes\nativos',
    'home.stats.card2.description': "Biofarmacêuticas, CRO's,\nCentros de Pesquisa,\nOperadoras e Logística.",
    'home.stats.card3.number': '+200.000',
    'home.stats.card3.title': 'pacientes\natendidos\npor ano',
    'home.stats.card3.description': 'Fazemos a diferença, seja\nconectando a pesquisa clínica\nou viabilizando os tratamentos.',
    
    // Home - Section 3 (DRS 360 Carousel)
    'home.drs360.slide1.title': 'DRS360: Visibilidade 24/7 em tempo real',
    'home.drs360.slide1.description': 'Plataforma proprietária com rastreabilidade e dashboards por estudo.',
    'home.drs360.slide2.title': 'Controle total da sua operação',
    'home.drs360.slide2.description': 'Gerencie todos os processos de forma integrada e eficiente.',
    
    // Home - Section 4 (Solutions)
    'home.solutions.cts': 'Clinical Trial Services - CTS',
    'home.solutions.pcs': 'Patient Centric Services - PCS',
    'home.solutions.tis': 'Thermo Integrated Services - TIS',
    
    // Home - DRS 360 Section
    'home.drs360section.tag': 'DRS 360',
    'home.drs360section.title': 'Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar',
    
    // Home - World Map Section
    'home.worldmap.tag': 'ATUAÇÃO GLOBAL',
    
    // CTA Section
    'cta.title': 'Transforme sua operação em saúde com o apoio da DRS.',
    'cta.button': 'Saiba mais',
    
    // Cookie Consent
    'cookie.message': 'Utilizamos cookies (e técnicas semelhantes) para melhorar a sua experiência no nosso site. Também nos ajudam a entender como o nosso site está sendo usado. Pode ler o nosso',
    'cookie.link': 'Aviso de Cookies',
    'cookie.button': 'ACEITO',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    
    // Soluções Page
    'solucoes.hero.title': 'Soluções completas para pesquisa clínica e saúde',
    'solucoes.hero.description': 'Oferecemos serviços integrados que conectam a indústria farmacêutica aos pacientes.',
    
    // Grupo DRS Page
    'grupo.hero.title': 'Somos referência em pesquisa clínica, tecnologia e inovação aplicadas à saúde',
    
    // DRS 360 Page
    'drs360.hero.title': 'DRS 360',
    'drs360.hero.description': 'Planejamento, controle, rastreabilidade e decisões em tempo real.',
    
    // Contact Page
    'contato.hero.title': 'Entre em contato',
    'contato.hero.description': 'Estamos prontos para atender você.',
    'contato.form.name': 'Nome',
    'contato.form.email': 'E-mail',
    'contato.form.company': 'Empresa',
    'contato.form.phone': 'Telefone',
    'contato.form.message': 'Mensagem',
    'contato.form.submit': 'Enviar',
    
    // CTS Page
    'cts.hero.title': 'Clinical Trial Services',
    'cts.hero.description': 'Soluções completas para estudos clínicos.',
    
    // PCS Page
    'pcs.hero.title': 'Patient Centric Services',
    'pcs.hero.description': 'Serviços centrados no paciente.',
    
    // TIS Page
    'tis.hero.title': 'Thermo Integrated Services',
    'tis.hero.description': 'Logística integrada com controle de temperatura.',
    
    // Insights Page
    'insights.hero.title': 'As últimas notícias, entrevistas, tecnologias e recursos do setor.',
    'insights.search': 'Buscar',
    'insights.categories': 'Categorias',
    
    // Privacy Policy Page
    'privacy.title': 'Política de Privacidade',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguageState] = useState<Language>('pt');

  // Read language from URL on mount and when URL changes
  useEffect(() => {
    const langParam = searchParams.get('lang');
    if (langParam && ['pt', 'en', 'es'].includes(langParam)) {
      setLanguageState(langParam as Language);
    }
  }, [searchParams]);

  // Update URL when language changes
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    const newParams = new URLSearchParams(searchParams);
    if (lang === 'pt') {
      newParams.delete('lang');
    } else {
      newParams.set('lang', lang);
    }
    setSearchParams(newParams, { replace: true });
  }, [searchParams, setSearchParams]);

  // Translation function
  const t = useCallback((key: string): string => {
    const value = translations[language][key];
    if (typeof value === 'string') {
      return value;
    }
    // Return key if translation not found (placeholder for future translations)
    return translations['pt'][key] as string || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
