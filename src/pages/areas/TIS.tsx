import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import imgTis from '@/assets/tis.png';
import imgTisSingle from '@/assets/img-tis.png';
import img360 from '@/assets/img-360.png';
import cantoVerde from '@/assets/canto-verde.jpg';
import flutuante2 from '@/assets/flutuante2.svg';
import arrowSlide from '@/assets/arrow-slide.svg';
import { useState, useRef } from 'react';
import { SolutionModal, SolutionModalData } from '@/components/ui/SolutionModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const solutionsData: SolutionModalData[] = [
  {
    title: "Cadeia fria e embalagens sustentáveis",
    description: "Embalagens térmicas retornáveis e sustentáveis, com controle preciso de temperatura e rastreabilidade total para garantir segurança e desempenho em toda a cadeia fria.",
    diferenciais: [],
    destaques: []
  },
  {
    title: "Transporte de cadeia fria",
    description: "Embalagens térmicas retornáveis e sustentáveis, com controle preciso de temperatura e rastreabilidade total para garantir segurança e desempenho em toda a cadeia fria.",
    diferenciais: [],
    destaques: []
  },
  {
    title: "Gestão de importação e exportação",
    description: "Gestão internacional de importação e exportação com conformidade térmica, aduaneira e suporte integral em IOR/EOR, assegurando processos ágeis, seguros e totalmente regulados.",
    diferenciais: [],
    destaques: []
  },
  {
    title: "Telemetria Data loggers",
    description: "Soluções avançadas de monitoramento, com múltiplos modelos de data loggers e integração completa à nossa plataforma digital. Controle, precisão e rastreabilidade em tempo real para toda a cadeia fria.",
    diferenciais: [],
    destaques: []
  },
  {
    title: "Serviços Integrados",
    description: "Soluções completas: armazenagem, maturação, controle de ativos e operações integradas. Processos seguros, padronizados e inteligentes.",
    diferenciais: [],
    destaques: []
  }
];

export default function TIS() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const solutionsSwiperRef = useRef<SwiperType | null>(null);
  const [activeSolutionSlide, setActiveSolutionSlide] = useState(0);

  const openModal = (index: number) => {
    setSelectedSolution(solutionsData[index]);
    setModalOpen(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            {/* Image Side - Left */}
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img 
                src={imgTis} 
                alt="Thermo Integrated Services" 
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>

            {/* Content Side - Right with teal background */}
            <div 
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
                {/* Tag TIS */}
                <span
                  className="text-[16px] lg:text-[20px] hero-tag-mobile"
                  style={{
                    color: '#000',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '40px',
                    textTransform: 'uppercase',
                    borderRadius: '30px',
                    border: '1px solid #000',
                    padding: '0px 20px',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    width: 'fit-content',
                    background: 'transparent'
                  }}
                >
                  TIS
                </span>
                <h1 className="text-[24px] md:text-[30px] lg:text-[35px] leading-[30px] md:leading-[36px] lg:leading-[40px] mb-4" style={{ color: '#000', fontWeight: 900 }}>
                  Thermo Integrated Services
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#000', fontWeight: 400 }}>
                  Seus produtos avançaram — e nós evoluímos junto. Oferecemos tecnologia, precisão e inteligência logística à altura das terapias mais inovadoras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Blocks + Image Section */}
      <section className="py-8 md:py-16 bg-white overflow-hidden relative">
        {/* Floating decorative image */}
        <img 
          src={flutuante2} 
          alt="Decorativo" 
          className="hidden lg:block animate-float"
          style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }}
        />
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-7" style={{ marginBottom: '6.5rem' }}>
              <div className="flex flex-col gap-6 mb-12">
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Elevamos o padrão da cadeia fria ao oferecer soluções completas e integradas, combinando embalagens reutilizáveis de alta performance, tecnologia avançada de monitoramento e gestão logística especializada.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Com soluções ready-to-use e rastreabilidade em tempo real, asseguramos segurança, agilidade e máxima confiabilidade em cada etapa — do primeiro movimento até a entrega final.
                </p>
              </div>
              <img 
                src={imgTisSingle} 
                alt="Soluções TIS" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Soluções Tag Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <span 
                style={{ 
                  color: '#274B41', 
                  fontSize: '20px', 
                  fontStyle: 'normal', 
                  fontWeight: 400, 
                  lineHeight: '40px',
                  borderRadius: '30px',
                  background: '#69C0AC',
                  padding: '3px 30px',
                  display: 'inline-block',
                  textTransform: 'uppercase'
                }}
              >
                NOSSAS SOLUÇÕES
              </span>
              
              {/* 5 Solution Blocks Grid - Desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-6 mt-8">
                {/* Block 1 - Cadeia fria e embalagens sustentáveis */}
                <div className="col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">Cadeia fria e</text>
                    <text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">embalagens</text>
                    <text className="titulos" x="23" y="142" fontSize="35" fontWeight="900" fill="#274B41">sustentáveis</text>
                    <text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">Embalagens térmicas</text>
                    <text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">retornáveis e sustentáveis,</text>
                    <text className="botao" x="23" y="235" fontSize="20" fontWeight="400" fill="#008C79">com controle preciso de</text>
                    <text className="botao" x="23" y="260" fontSize="20" fontWeight="400" fill="#008C79">temperatura.</text>
                    <rect x="269" y="325" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(0)}/>
                    <text className="botao cursor-pointer" x="291" y="352" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(0)}>SAIBA MAIS</text>
                  </svg>
                </div>
                
                {/* Block 2 - Transporte de cadeia fria */}
                <div className="col-span-1 mt-[65px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">Transporte de</text>
                    <text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">cadeia fria</text>
                    <text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">Embalagens térmicas</text>
                    <text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">retornáveis e sustentáveis,</text>
                    <text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">com rastreabilidade total.</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(1)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(1)}>SAIBA MAIS</text>
                  </svg>
                </div>
                
                {/* Block 3 - Gestão de importação e exportação */}
                <div className="col-span-1 mt-[130px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">Gestão de</text>
                    <text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">importação e</text>
                    <text className="titulos" x="43" y="148" fontSize="35" fontWeight="900" fill="#274B41">exportação</text>
                    <text className="botao" x="43" y="191" fontSize="20" fontWeight="400" fill="#008C79">Gestão internacional com</text>
                    <text className="botao" x="43" y="216" fontSize="20" fontWeight="400" fill="#008C79">conformidade térmica,</text>
                    <text className="botao" x="43" y="241" fontSize="20" fontWeight="400" fill="#008C79">aduaneira e suporte integral</text>
                    <text className="botao" x="43" y="266" fontSize="20" fontWeight="400" fill="#008C79">em IOR/EOR.</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(2)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(2)}>SAIBA MAIS</text>
                  </svg>
                </div>
                
                {/* Block 4 - Telemetria Data loggers */}
                <div className="col-span-1 mt-[-110px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">Telemetria</text>
                    <text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">Data loggers</text>
                    <text className="botao" x="43" y="156" fontSize="20" fontWeight="400" fill="#008C79">Soluções avançadas de</text>
                    <text className="botao" x="43" y="181" fontSize="20" fontWeight="400" fill="#008C79">monitoramento, com múltiplos</text>
                    <text className="botao" x="43" y="206" fontSize="20" fontWeight="400" fill="#008C79">modelos de data loggers e</text>
                    <text className="botao" x="43" y="231" fontSize="20" fontWeight="400" fill="#008C79">integração completa.</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(3)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(3)}>SAIBA MAIS</text>
                  </svg>
                </div>
                
                {/* Block 5 - Serviços Integrados */}
                <div className="col-span-1 mt-[-45px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">Serviços</text>
                    <text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">Integrados</text>
                    <text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">Soluções completas:</text>
                    <text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">armazenagem, maturação,</text>
                    <text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">controle de ativos e operações</text>
                    <text className="botao" x="43" y="251" fontSize="20" fontWeight="400" fill="#008C79">integradas.</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(4)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(4)}>SAIBA MAIS</text>
                  </svg>
                </div>
              </div>
              
              {/* Mobile Carousel */}
              <div className="lg:hidden mt-8">
                <Swiper
                  modules={[Navigation]}
                  onSwiper={(swiper) => { solutionsSwiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveSolutionSlide(swiper.activeIndex)}
                  spaceBetween={16}
                  slidesPerView={1}
                  className="w-full"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none"><path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"></path><text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">Cadeia fria e</text><text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">embalagens</text><text className="titulos" x="23" y="142" fontSize="35" fontWeight="900" fill="#274B41">sustentáveis</text><text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">Embalagens térmicas</text><text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">retornáveis e sustentáveis,</text><text className="botao" x="23" y="235" fontSize="20" fontWeight="400" fill="#008C79">com controle preciso de</text><text className="botao" x="23" y="260" fontSize="20" fontWeight="400" fill="#008C79">temperatura.</text><rect x="269" y="325" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(0)}></rect><text className="botao cursor-pointer" x="291" y="352" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(0)}>SAIBA MAIS</text></svg>
                    </div>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none"><path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"></path><text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">Transporte de</text><text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">cadeia fria</text><text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">Embalagens térmicas</text><text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">retornáveis e sustentáveis,</text><text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">com rastreabilidade total.</text><rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(1)}></rect><text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(1)}>SAIBA MAIS</text></svg>
                    </div>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none"><path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"></path><text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">Gestão de</text><text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">importação e</text><text className="titulos" x="43" y="148" fontSize="35" fontWeight="900" fill="#274B41">exportação</text><text className="botao" x="43" y="191" fontSize="20" fontWeight="400" fill="#008C79">Gestão internacional com</text><text className="botao" x="43" y="216" fontSize="20" fontWeight="400" fill="#008C79">conformidade térmica,</text><text className="botao" x="43" y="241" fontSize="20" fontWeight="400" fill="#008C79">aduaneira e suporte integral</text><text className="botao" x="43" y="266" fontSize="20" fontWeight="400" fill="#008C79">em IOR/EOR.</text><rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(2)}></rect><text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(2)}>SAIBA MAIS</text></svg>
                    </div>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none"><path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"></path><text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">Telemetria</text><text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">Data loggers</text><text className="botao" x="43" y="156" fontSize="20" fontWeight="400" fill="#008C79">Soluções avançadas de</text><text className="botao" x="43" y="181" fontSize="20" fontWeight="400" fill="#008C79">monitoramento, com múltiplos</text><text className="botao" x="43" y="206" fontSize="20" fontWeight="400" fill="#008C79">modelos de data loggers e</text><text className="botao" x="43" y="231" fontSize="20" fontWeight="400" fill="#008C79">integração completa.</text><rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(3)}></rect><text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(3)}>SAIBA MAIS</text></svg>
                    </div>
                  </SwiperSlide>
                  {/* Slide 5 */}
                  <SwiperSlide>
                    <div className="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none"><path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"></path><text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">Serviços</text><text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">Integrados</text><text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">Soluções completas:</text><text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">armazenagem, maturação,</text><text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">controle de ativos e operações</text><text className="botao" x="43" y="251" fontSize="20" fontWeight="400" fill="#008C79">integradas.</text><rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(4)}></rect><text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(4)}>SAIBA MAIS</text></svg>
                    </div>
                  </SwiperSlide>
                </Swiper>
                
                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-4 justify-center pl-[60px]">
                  <button 
                    onClick={() => solutionsSwiperRef.current?.slidePrev()}
                    className="transition-opacity rotate-180"
                    style={{ opacity: activeSolutionSlide === 0 ? 0.6 : 1 }}
                  >
                    <img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px]" />
                  </button>
                  <button 
                    onClick={() => solutionsSwiperRef.current?.slideNext()}
                    className="transition-opacity"
                    style={{ opacity: activeSolutionSlide === solutionsData.length - 1 ? 0.6 : 1 }}
                  >
                    <img src={arrowSlide} alt="Next" className="w-[50px] h-[38px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange CTA Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            style={{
              borderRadius: '50px',
              padding: '70px',
              backgroundColor: '#F39325'
            }}
          >
            {/* Left side - Title (4 columns) */}
            <div className="lg:col-span-4">
              <h2 style={{ fontWeight: 900, fontSize: '30px', color: '#000', lineHeight: '1.2' }}>
                Transforme sua operação em saúde com o apoio da DRS.
              </h2>
            </div>
            
            {/* Right side - Contact box (5 columns) */}
            <div className="lg:col-span-5 flex items-center">
              <Link 
                to="/contato"
                className="flex items-center gap-4"
                style={{
                  borderRadius: '10px',
                  background: '#274B41',
                  padding: '15px 25px'
                }}
              >
                <ArrowIcon className="w-5 h-4 text-white flex-shrink-0" />
                <span style={{ fontSize: '16px', color: '#fff', fontWeight: 400 }}>
                  Entre em contato e descubra como nossa tecnologia pode acelerar resultados.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DRS 360 Section */}
      <section className="pt-16 bg-white" style={{ paddingBottom: '12rem' }}>
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch" style={{ minHeight: 'auto' }}>
                {/* Image Side - Left (4 columns) */}
                <div 
                  className="lg:col-span-4 drs360-access-border-box lg:!p-0 lg:!rounded-[50px_0_0_50px]"
                  style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    borderRadius: '50px 0px 0 50px',
                    border: '1px solid rgb(105, 192, 172)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'auto',
                    minHeight: 'auto',
                    padding: '0'
                  }}
                >
                  <img 
                    src={img360} 
                    alt="DRS 360" 
                    className="object-contain gestao-digital-image"
                    style={{
                      width: '50%',
                      minHeight: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>

                {/* Content Side - Right with teal background (8 columns) */}
                <div 
                  className="lg:col-span-8 flex flex-col justify-center overflow-hidden drs360-access-green-box gestao-digital-greenbox lg:!ml-[-35px] lg:!rounded-[40px] lg:!mt-0"
                  style={{ 
                    backgroundColor: '#69C0AC',
                    marginLeft: '-35px',
                    padding: '3rem 4rem',
                    borderRadius: '40px',
                    backgroundImage: `url(${cantoVerde})`,
                    backgroundPosition: 'bottom right',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '150px'
                  }}
                >
                  <h2 style={{ color: '#000', fontSize: '30px', fontWeight: 900, lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    Gestão Digital para acelerar<br className="hidden lg:block" /> a pesquisa clínica com precisão.
                  </h2>
                  <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '25px', marginBottom: '2rem' }}>
                    Descubra como integrar eficiência, visibilidade e compliance em seus<br className="hidden lg:block" /> estudos com a plataforma DRS 360.
                  </p>
                  <Link to="/drs-360" className="drs-btn drs-btn-uppercase inline-flex w-fit">
                    <ArrowIcon className="w-4 h-3" />
                    Conheça a DRS 360
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        data={selectedSolution} 
      />
    </Layout>
  );
}
