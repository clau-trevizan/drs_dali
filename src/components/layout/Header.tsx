import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '@/assets/logo.png';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages: { code: Language; display: string; label: string }[] = [
  { code: 'pt', display: 'PT', label: 'Português' },
  { code: 'en', display: 'EN (US)', label: 'English' },
  { code: 'es', display: 'ES', label: 'Español' },
];

// Active color for menu items
const ACTIVE_COLOR = 'rgb(105, 192, 172)';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Get current language display
  const currentLangDisplay = languages.find(l => l.code === language)?.display || 'PT';

  // Navigation items with translations
  const navigation = [
    { name: t('nav.solucoes'), href: '/solucoes' },
    {
      name: t('nav.areas'),
      href: '#',
      submenu: [
        { name: 'Clinical Trial Services', href: '/areas/cts' },
        { name: 'Patient Centric Services', href: '/areas/pcs' },
        { name: 'Thermo Integrated Services', href: '/areas/tis' },
        { name: 'DRS 360', href: '/drs-360' },
      ],
    },
    { name: t('nav.grupo'), href: '/grupo-drs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path matches a menu item
  const isActive = (href: string) => {
    if (href === '#') return false;
    return location.pathname === href;
  };

  // Check if current page is an expertise submenu page
  const isExpertisePage = () => {
    const expertisePaths = ['/areas/cts', '/areas/pcs', '/areas/tis', '/drs-360'];
    return expertisePaths.includes(location.pathname);
  };

  // Check if current page is the contato page
  const isContatoPage = () => location.pathname === '/contato';

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="drs-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Group DRS" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation + Actions wrapped in inner-white */}
        <div className="hidden lg:flex inner-white">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger 
                        className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent"
                        style={{ 
                          color: isExpertisePage() ? ACTIVE_COLOR : '#274B41', 
                          fontSize: '17px', 
                          fontWeight: 400, 
                          lineHeight: '28px' 
                        }}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="expertise-dropdown-parent">
                        <ul 
                          className="grid gap-1 p-4 z-50"
                          style={{ 
                            background: '#000', 
                            borderRadius: '15px',
                            boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.25)',
                            border: 'none'
                          }}
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.href}
                                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                  style={{ 
                                    color: isActive(subItem.href) ? ACTIVE_COLOR : '#FFF',
                                    transition: 'color 0.2s' 
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.color = ACTIVE_COLOR}
                                  onMouseLeave={(e) => e.currentTarget.style.color = isActive(subItem.href) ? ACTIVE_COLOR : '#FFF'}
                                >
                                  <span className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-4 py-2 transition-colors"
                      style={{ 
                        color: isActive(item.href) ? ACTIVE_COLOR : '#274B41', 
                        fontSize: '17px', 
                        fontWeight: 400, 
                        lineHeight: '28px' 
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions inside inner-white */}
          <div className="flex items-center gap-3">
            <a href="https://360.drsgroup.com.br/" target="_blank" rel="noopener noreferrer" className="drs-btn">
              <ArrowIcon className="w-4 h-3" />
              {t('nav.portal')}
            </a>
            <Link 
              to="/contato" 
              className="drs-btn"
              style={{ backgroundColor: isContatoPage() ? ACTIVE_COLOR : undefined }}
            >
              <ArrowIcon className="w-4 h-3" />
              {t('nav.contato')}
            </Link>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-md flex items-center gap-1 h-[44px]"
                  style={{ 
                    color: '#274B41', 
                    borderColor: '#274B41' 
                  }}
                >
                  {currentLangDisplay}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="z-50"
                style={{ 
                  background: '#000', 
                  borderRadius: '15px',
                  boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.25)',
                  border: 'none'
                }}
              >
                {languages
                  .filter((lang) => lang.code !== language)
                  .map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer text-white hover:bg-white/10 focus:bg-white/10 focus:text-white"
                    >
                      {lang.display}
                    </DropdownMenuItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>


        {/* Mobile Menu Button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="mobile-hamburger-btn" style={{ width: '60px', height: 'auto', padding: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50" fill="none" style={{ width: '100%', height: 'auto' }}>
                <rect width="60" height="50" rx="10" fill="#274B41"/>
                <path d="M17 18H43" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M17 31H43" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm">
            <div className="flex flex-col gap-6 mt-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-3">
                      <span 
                        className="font-semibold flex items-center gap-2"
                        style={{ 
                          color: isExpertisePage() ? ACTIVE_COLOR : '#274B41', 
                          fontSize: '17px', 
                          fontWeight: 400, 
                          lineHeight: '28px' 
                        }}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </span>
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block transition-colors"
                            style={{ 
                              color: isActive(subItem.href) ? ACTIVE_COLOR : 'hsl(var(--muted-foreground))'
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ 
                        color: isActive(item.href) ? ACTIVE_COLOR : '#274B41', 
                        fontSize: '17px', 
                        fontWeight: 400, 
                        lineHeight: '28px' 
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <hr className="border-border" />
              
              <div className="flex flex-col gap-3">
                <a href="https://360.drsgroup.com.br/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="drs-btn">
                  <ArrowIcon className="w-4 h-3" />
                  {t('nav.portal')}
                </a>
                <Link 
                  to="/contato" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="drs-btn"
                  style={{ backgroundColor: isContatoPage() ? ACTIVE_COLOR : undefined }}
                >
                  <ArrowIcon className="w-4 h-3" />
                  {t('nav.contato')}
                </Link>
              </div>
              
              {/* Language selector mobile - below Contato */}
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="outline"
                    size="sm"
                    onClick={() => handleLanguageChange(lang.code)}
                    className="rounded-md"
                    style={{ 
                      color: lang.code === language ? '#fff' : '#274B41', 
                      borderColor: '#274B41',
                      backgroundColor: lang.code === language ? ACTIVE_COLOR : 'transparent'
                    }}
                  >
                    {lang.display}
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}

export default Header;
