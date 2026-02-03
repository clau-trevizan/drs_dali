import React, { useState } from 'react';
import { Dialog, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface City {
  name: string;
  position: { x: string; y?: string; bottom?: string };
  info: {
    title: string;
    description: string;
    extra?: {
      title: string;
      description: string;
    };
  };
}

interface CityPosition {
  desktop: { x: string; y?: string; bottom?: string };
  mobile: { x: string; y?: string; bottom?: string };
}

interface CityWithResponsive {
  name: string;
  position: CityPosition;
  info: {
    title: string;
    description: string;
    extra?: {
      title: string;
      description: string;
    };
  };
}

const cities: CityWithResponsive[] = [
  {
    name: 'Dublin',
    position: { 
      desktop: { x: '39.5vw', y: '14.5vw' },
      mobile: { x: '420px', y: '150px' }
    },
    info: {
      title: 'DRS International – Dublin (IE)',
      description: "Dublin - 15 - 17 Earlsfort Terrace, Saint Kevin's, Dublin 2, D02 YX28, Irlanda"
    }
  },
  {
    name: 'Buenos Aires',
    position: { 
      desktop: { x: '24.5vw', bottom: '6vw' },
      mobile: { x: '260px', bottom: '60px' }
    },
    info: {
      title: 'Buenos Aires',
      description: 'Rua Henrique do Rego Almeida, 261 – Setor 01\nCEP: 88133-512 – Palhoça/SC'
    }
  },
  {
    name: 'São Paulo',
    position: { 
      desktop: { x: '29vw', bottom: '10vw' },
      mobile: { x: '310px', bottom: '100px' }
    },
    info: {
      title: 'Centro Logístico – São Paulo (SP)',
      description: 'Rod. Anhanguera, s/nº – Km 15 – Warehouses 09–40\nVila Jaguara – São Paulo/SP – CEP: 05110-080',
      extra: {
        title: 'Escritório Administrativo – São Paulo (SP)',
        description: 'Av. Queiroz Filho, 1700 – Torre A, salas 107 e 108\nCEP: 05319-000 – São Paulo/SP'
      }
    }
  },
  {
    name: 'Brasília',
    position: { 
      desktop: { x: '27.5vw', bottom: '11vw' },
      mobile: { x: '290px', bottom: '115px' }
    },
    info: {
      title: 'Filial Brasília (DF)',
      description: 'ST SCIA, Quadra 14, Conjunto 2, Lote 11 – Sala PT B\nCEP: 71250-110 – Brasília/DF'
    }
  },
  {
    name: 'Santa Catarina',
    position: { 
      desktop: { x: '27.5vw', bottom: '8vw' },
      mobile: { x: '290px', bottom: '85px' }
    },
    info: {
      title: 'Filial Santa Catarina (SC)',
      description: 'Rua Henrique do Rego Almeida, 261 – Setor 01\nCEP: 88133-512 – Palhoça/SC'
    }
  }
];

export function WorldMap() {
  const [selectedCity, setSelectedCity] = useState<CityWithResponsive | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll to the right on mobile for better initial view
  React.useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      // Scroll 80px to the right for better initial positioning
      scrollContainerRef.current.scrollLeft = 80;
    }
  }, [isMobile]);

  const getPosition = (city: CityWithResponsive) => {
    return isMobile ? city.position.mobile : city.position.desktop;
  };

  return (
    <>
      {/* Container with horizontal scroll on mobile */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto lg:overflow-x-visible"
      >
        <div 
          className="relative"
          style={{ 
            minWidth: '900px' // Ensures zoom effect by setting minimum width
          }}
        >
          <img 
            src="/images/mapa.svg" 
            alt="Mapa de cobertura mundial" 
            className="w-full h-auto"
          />
          
          {/* Pins clicáveis */}
          {cities.map((city) => {
            const pos = getPosition(city);
            return (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city)}
                className="absolute group cursor-pointer z-10"
                style={{ 
                  left: pos.x, 
                  top: pos.y || 'auto',
                  bottom: pos.bottom || 'auto',
                  width: '25px',
                  height: '25px',
                  marginLeft: '-12.5px',
                  marginTop: pos.y ? '-12.5px' : 'auto'
                }}
                aria-label={`Ver informações sobre ${city.name}`}
              >
                {/* Pin visual */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#274B41] rounded-full animate-ping opacity-75 group-hover:opacity-100" />
                  <div className="relative w-full h-full bg-[#274B41] rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform" style={{ fontSize: '8px' }}>
                    DRS
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dialog com informações da cidade */}
      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitive.Content 
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 border-none p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg"
            style={{ backgroundColor: '#274B41' }}
          >
            {/* Botão de fechar customizado */}
            <div className="flex justify-center mb-2">
              <DialogPrimitive.Close className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <path d="M1.25 16.4023L17.525 1.40234" stroke="#69C0AC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.25 1.25L17.525 16.25" stroke="#69C0AC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="sr-only">Fechar</span>
              </DialogPrimitive.Close>
            </div>
            
            <div className="text-white" style={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}>
              <span className="font-bold">{selectedCity?.info.title}</span>
              <br />
              {selectedCity?.info.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < (selectedCity?.info.description.split('\n').length || 1) - 1 && <br />}
                </span>
              ))}
              {selectedCity?.info.extra && (
                <>
                  <br /><br />
                  <span className="font-bold">{selectedCity.info.extra.title}</span>
                  <br />
                  {selectedCity.info.extra.description.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < (selectedCity.info.extra!.description.split('\n').length || 1) - 1 && <br />}
                    </span>
                  ))}
                </>
              )}
            </div>
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  );
}