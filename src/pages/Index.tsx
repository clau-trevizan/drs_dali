import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Layout } from '@/components/layout';
import { DRS360Section } from '@/components/sections';

import { ArrowIcon } from '@/components/ui/ArrowIcon';
import cornerShape from '@/assets/corner-shape.jpg';
import flutuante from '@/assets/flutuante.svg';
import arrowSlide from '@/assets/arrow-slide.svg';
// Background images are in public/images/ folder
import imgSlide from '@/assets/img-slide.png';
import bannerMobile from '@/assets/banner_mobile.png';
import videoBox from '@/assets/video-box.mp4';
import videoModal from '@/assets/video-modal.mp4';
import topoVideoNova from '@/assets/topo_video_nova.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Play } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const stats = [
  { title: '+500 protocolos sob gestão', description: 'Atuação em diferentes fases clínicas e terapias.' },
  { title: '+100 clientes ativos', description: 'Biofarmacêuticas, CRO\'s, Centros de Pesquisa, Operadoras e Logística.' },
  { title: '+200.000 pacientes atendidos por ano', description: 'Fazemos a diferença, seja conectando a pesquisa clínica ou viabilizando os tratamentos.' },
];

const services = [
  { name: 'Clinical Trial Services - CTS', href: '/areas/cts' },
  { name: 'Patient Centric Services - PCS', href: '/areas/pcs' },
  { name: 'Thermo Integrated Services - TIS', href: '/areas/tis' },
];

const Index = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  // Stop video when dialog closes
  const handleVideoDialogChange = (open: boolean) => {
    setIsVideoOpen(open);
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            {/* Image Side - Left (no gap, attached to green box) */}
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              {/* Clickable video with overlay */}
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="relative block w-full h-full cursor-pointer group"
                aria-label="Assistir ao vídeo"
              >
              {/* Overlay image top left */}
                <img 
                  src={topoVideoNova} 
                  alt=""
                  className="absolute top-0 left-0 z-10 h-auto pointer-events-none"
                  style={{ maxWidth: '150px' }}
                />
                <video 
                  src={videoBox}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full min-h-[250px] lg:min-h-[400px] rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px] overflow-hidden object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </button>
            </div>

            {/* Content Side - Right with teal background */}
            <div 
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ 
                backgroundColor: '#69C0AC',
                backgroundImage: `url(${cornerShape})`,
                backgroundPosition: 'bottom right',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 120px'
              }}
            >
              <div className="lg:p-[5.5rem]">
                <h1 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>
                  {t('home.hero.title').split(' ').slice(0, 2).join(' ')}<br/>{t('home.hero.title').split(' ').slice(2).join(' ')}
                </h1>
                <p className="mb-6 max-w-md text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('home.hero.description')}
                </p>
                <Link to="/solucoes" className="drs-btn drs-btn-uppercase w-fit">
                  <ArrowIcon className="w-4 h-3" />
                  {t('home.hero.cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* Video Lightbox Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={handleVideoDialogChange}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black border-none">
          <VisuallyHidden>
            <DialogTitle>Vídeo Institucional DRS</DialogTitle>
            <DialogDescription>Vídeo institucional da DRS</DialogDescription>
          </VisuallyHidden>
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              src={videoModal}
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </DialogContent>
      </Dialog>
      </section>

      {/* Stats Section - Staircase Layout */}
      <section className="py-16 bg-background overflow-hidden relative">
        {/* Floating decorative image - aligned to right edge */}
        <img 
          src={flutuante} 
          alt="Decorativo" 
          className="hidden md:block animate-float"
          style={{ position: 'absolute', right: 0, top: '150px', width: '180px', height: 'auto' }}
        />
        
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="flex items-start justify-between mb-12">
                <h2 style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px' }}>
                  Resultados que importam.<br/>
                  Soluções que transformam.
                </h2>
              </div>
              
              {/* 3-Column Cards Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 home-section2-grid">
                {/* Card 1 */}
                <div className="flex justify-center home-section2-card1">
                  <svg width="100%" height="100%" viewBox="0 0 330 336" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <text className="titulos" x="34" y="77" fontSize="35" fontWeight="900" fill="#274B41">+500</text>
                    <text className="titulos" x="34" y="111" fontSize="35" fontWeight="900" fill="#274B41">protocolos</text>
                    <text className="titulos" x="34" y="145" fontSize="35" fontWeight="900" fill="#274B41">sob gestão</text>
                    <text className="botao" x="34" y="189" fontSize="20" fontWeight="400" fill="#008C79">Atuação em diferentes fases</text>
                    <text className="botao" x="34" y="214" fontSize="20" fontWeight="400" fill="#008C79">clínicas e terapias.</text>
                    <path d="M23.8594 0.5H249.622C261.393 0.500256 270.933 10.0575 270.933 21.8457V48.5039C270.933 60.3576 280.527 69.9715 292.367 69.9717H308.007C319.879 69.9718 329.503 79.6091 329.503 91.502V312.104C329.503 325.027 319.042 335.5 306.144 335.5H180.311C168.638 335.5 159.176 326.024 159.176 314.331V289.329H159.167C158.901 277.637 149.354 268.239 137.615 268.239H23.3896C10.7488 268.239 0.500132 257.975 0.5 245.312V23.8965C0.500217 10.9732 10.9583 0.5 23.8594 0.5Z" stroke="#274B41"/>
                  </svg>
                </div>
            
                {/* Card 2 */}
                <div className="flex justify-center mt-0 lg:mt-[150px] home-section2-card2">
                  <svg width="100%" height="100%" viewBox="0 0 330 336" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <text className="titulos" x="34" y="77" fontSize="35" fontWeight="900" fill="#274B41">+100</text>
                    <text className="titulos" x="34" y="111" fontSize="35" fontWeight="900" fill="#274B41">clientes</text>
                    <text className="titulos" x="34" y="145" fontSize="35" fontWeight="900" fill="#274B41">ativos</text>
                    <text className="botao" x="34" y="189" fontSize="20" fontWeight="400" fill="#008C79">Biofarmacêuticas, CRO's,</text>
                    <text className="botao" x="34" y="214" fontSize="20" fontWeight="400" fill="#008C79">Centros de Pesquisa,</text>
                    <text className="botao" x="34" y="239" fontSize="20" fontWeight="400" fill="#008C79">Operadoras e Logística.</text>
                    <path d="M23.8594 0.5H249.622C261.393 0.500256 270.933 10.0575 270.933 21.8457V48.5039C270.933 60.3576 280.527 69.9715 292.367 69.9717H308.007C319.879 69.9718 329.503 79.6091 329.503 91.502V312.104C329.503 325.027 319.042 335.5 306.144 335.5H180.311C168.638 335.5 159.176 326.024 159.176 314.331V289.329H159.167C158.901 277.637 149.354 268.239 137.615 268.239H23.3896C10.7488 268.239 0.500132 257.975 0.5 245.312V23.8965C0.500217 10.9732 10.9583 0.5 23.8594 0.5Z" stroke="#274B41"/>
                    <path d="M261.07 295.23H245.386C242.097 295.23 239.43 297.899 239.43 301.192V316.892C239.43 320.184 242.097 322.854 245.386 322.854H261.07C264.36 322.854 267.026 320.184 267.026 316.892V301.192C267.026 297.899 264.36 295.23 261.07 295.23Z" fill="#F19425"/>
                    <path d="M161.741 250H139.272C134.56 250 130.741 253.823 130.741 258.54V281.031C130.741 285.748 134.56 289.571 139.272 289.571H161.741C166.453 289.571 170.272 285.748 170.272 281.031V258.54C170.272 253.823 166.453 250 161.741 250Z" fill="#16493C"/>
                  </svg>
                </div>
            
                {/* Card 3 */}
                <div className="flex justify-center mt-0 lg:mt-[300px] home-section2-card3">
                  <svg width="100%" height="100%" viewBox="0 0 330 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <text className="titulos" x="34" y="77" fontSize="35" fontWeight="900" fill="#274B41">+200.000</text>
                    <text className="titulos" x="34" y="111" fontSize="35" fontWeight="900" fill="#274B41">pacientes</text>
                    <text className="titulos" x="34" y="145" fontSize="35" fontWeight="900" fill="#274B41">atendidos</text>
                    <text className="titulos" x="34" y="179" fontSize="35" fontWeight="900" fill="#274B41">por ano</text>
                    <text className="botao" x="34" y="223" fontSize="20" fontWeight="400" fill="#008C79">Fazemos a diferença, seja</text>
                    <text className="botao" x="34" y="248" fontSize="20" fontWeight="400" fill="#008C79">conectando a pesquisa clínica</text>
                    <text className="botao" x="34" y="273" fontSize="20" fontWeight="400" fill="#008C79">ou viabilizando os tratamentos.</text>
                    <path d="M23.8594 0.5H249.622C261.393 0.500256 270.933 10.0575 270.933 21.8457V48.5039C270.933 60.3576 280.527 69.9715 292.367 69.9717H308.007C319.879 69.9718 329.503 79.6098 329.503 91.5029V366.603C329.503 379.526 319.042 390 306.144 390H180.311C168.638 390 159.176 380.524 159.176 368.831V343.829H159.167C158.902 332.137 149.354 322.738 137.615 322.738H23.3896C10.7488 322.738 0.500231 312.475 0.5 299.812V23.8965C0.500238 10.9732 10.9583 0.5 23.8594 0.5Z" stroke="#274B41"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DRS 360 Preview Section with Swiper */}
      <section className="py-8 md:py-12 bg-background">
        <div className="drs-container">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left side - Swiper content box - 5 cols on desktop, skip 2 */}
            <div 
              className="col-span-12 lg:col-start-3 lg:col-span-5 relative min-h-[470px] lg:min-h-[550px] flex flex-wrap justify-center items-center p-[4rem_1rem_4rem_2rem] lg:p-0 carousel-container-offset"
            >
              {/* Mobile background - only visible on screens < 1024px */}
              <div 
                className="absolute inset-0 lg:hidden"
                style={{ 
                  backgroundImage: 'url(/images/fundo_mobile.svg)',
                  backgroundPosition: 'top left',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100%'
                }}
              ></div>
              {/* Desktop background - hidden on screens < 1024px */}
              <div 
                className="absolute inset-0 hidden lg:block"
                style={{ 
                  backgroundImage: 'url(/images/fundo2.svg)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain'
                }}
              ></div>
              
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                spaceBetween={24}
                slidesPerView={1}
                className="drs360-swiper h-full w-full mt-0 lg:mt-[-100px] relative z-10"
              >
                <SwiperSlide>
                  <div className="h-full flex flex-col p-4 lg:p-0">
                    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>
                      DRS360: Visibilidade 24/7 em tempo real
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      Plataforma proprietária com rastreabilidade e dashboards por estudo.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full flex flex-col p-4 lg:p-0">
                    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>
                      Controle total da sua operação
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      Gerencie todos os processos de forma integrada e eficiente.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              
              {/* Custom navigation buttons at bottom left - with margin-left on mobile */}
              <div className="flex gap-4 mt-[120px] lg:mt-4 lg:absolute lg:bottom-12 lg:left-16 justify-center lg:justify-start relative z-10 pl-0 lg:pl-[60px] ml-[-90px] lg:ml-0">
                <button 
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="transition-opacity rotate-180"
                  style={{ opacity: activeSlide === 0 ? 0.6 : 1 }}
                >
                  <img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" />
                </button>
                <button 
                  onClick={() => swiperRef.current?.slideNext()}
                  className="transition-opacity"
                  style={{ opacity: activeSlide === 1 ? 0.6 : 1 }}
                >
                  <img src={arrowSlide} alt="Next" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" />
                </button>
              </div>
            </div>
            
            {/* Right side - Fixed image - 3 cols on desktop with max-width 90% */}
            <div className="col-span-12 lg:col-span-3 hidden lg:flex justify-center h-full pb-4 lg:pb-[70px]">
              <img 
                src={imgSlide} 
                alt="DRS 360 App" 
                className="rounded-3xl self-end"
                style={{ maxWidth: '90%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left side - 8 columns with SVG - Desktop only */}
            <div className="lg:col-span-8 hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 847 564" fill="none" className="w-full h-auto">
                <path d="M775.139 204.7L813.274 204.696C831.902 204.696 847 189.612 847 171.004L847 37.1558C847 16.638 830.349 -3.62957e-05 809.806 -3.53978e-05L142.416 0.000298951C123.477 0.000299778 108.127 15.3338 108.127 34.2543L108.127 58.6092C108.127 76.6171 93.5132 91.2114 75.4921 91.2114L34.0006 91.2114C15.2243 91.2114 1.0519e-05 106.416 1.13392e-05 125.178L0.000146699 526.773C0.000147596 547.29 16.6508 563.929 37.1938 563.929L705.852 563.929C725.989 563.929 742.313 547.621 742.313 527.504L742.313 397.172L742.313 237.493C742.313 219.383 757.011 204.7 775.139 204.7Z" fill="#F39325"/>
                <text className="titulos" x="100" y="173" fontSize="35" fontWeight="900" fill="#000000">Soluções inteligentes para</text>
                <text className="titulos" x="100" y="213" fontSize="35" fontWeight="900" fill="#000000">cada etapa na cadeia de saúde</text>
                <text className="botao" x="100" y="260" fontSize="20" fontWeight="900" fill="#000000">Combinamos inovação, tecnologia e cuidado para </text>
                <text className="botao" x="100" y="288" fontSize="20" fontWeight="900" fill="#000000">impulsionar projetos essenciais da saúde.</text>
                <text className="botao" x="100" y="335" fontSize="20" fontWeight="900" fill="#000000">Atuamos em três áreas complementares, conectadas pela</text>
                <text className="botao" x="100" y="365" fontSize="20" fontWeight="900" fill="#000000">nossa plataforma proprietária DRS 360 e guiadas por um</text>
                <text className="botao" x="100" y="390" fontSize="20" fontWeight="900" fill="#000000">propósito comum: tornar os estudos clínicos possíveis e </text>
                <text className="botao" x="100" y="420" fontSize="20" fontWeight="900" fill="#000000">assegurar que cada tratamento chegue a quem precisa.</text>
                <Link to="/solucoes">
                  <rect x="104" y="447.081" width="175" height="50" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M143.112 465.807L148.645 471.294L148.691 471.337C148.876 471.52 148.984 471.762 149 472.048L148.999 472.145C148.986 472.371 148.899 472.588 148.728 472.782L148.664 472.848L143.112 478.354C142.701 478.762 142.037 478.762 141.627 478.354C141.213 477.945 141.213 477.279 141.627 476.869L145.46 473.067L130.052 473.068C129.472 473.068 129 472.599 129 472.02C129 471.44 129.472 470.972 130.052 470.972L145.336 470.971L141.627 467.292C141.213 466.883 141.213 466.217 141.627 465.807C142.037 465.4 142.701 465.4 143.112 465.807Z" fill="white"/>
                  <text className="botao" x="165" y="478" fontSize="20" fontWeight="900" fill="#fff">Saiba mais</text>
                </Link>
              </svg>
            </div>
            
            {/* Mobile SVG - Only visible on screens < 1024px */}
            <div className="lg:hidden w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 841" fill="none" className="w-full h-auto">
                <path d="M56.1159 783.209L56.1121 813.78C56.1121 828.713 44.0226 840.816 29.1075 840.816H-14.2189C-30.6643 840.816 -44 827.468 -44 811L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.9762C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.663 9.44393e-05 408 13.3482 408 29.8165L408 727.664C408 743.808 394.929 756.894 378.804 756.894L210.385 756.894H82.4003C67.8846 756.894 56.1159 768.676 56.1159 783.209Z" fill="#F39325"/>
                <text className="titulos" x="41" y="176" fontSize="35" fontWeight="900" fill="#000000">Soluções</text>
                <text className="titulos" x="41" y="216" fontSize="35" fontWeight="900" fill="#000000">inteligentes para</text>
                <text className="titulos" x="41" y="255" fontSize="35" fontWeight="900" fill="#000000">cada elo da</text>
                <text className="titulos" x="41" y="296" fontSize="35" fontWeight="900" fill="#000000">cadeia da saúde</text>
                <text className="botao" x="41" y="355" fontSize="20" fontWeight="900" fill="#000000">Oferecemos muito mais do que</text>
                <text className="botao" x="41" y="383" fontSize="20" fontWeight="900" fill="#000000">logística: atuamos como um parceiro</text>
                <text className="botao" x="41" y="411" fontSize="20" fontWeight="900" fill="#000000">estratégico na jornada da saúde.</text>
                <text className="botao" x="41" y="439" fontSize="20" fontWeight="900" fill="#000000"> Atuamos em três áreas</text>
                <text className="botao" x="41" y="467" fontSize="20" fontWeight="900" fill="#000000">complementares, conectadas por</text>
                <text className="botao" x="41" y="495" fontSize="20" fontWeight="900" fill="#000000">tecnologia própria, DRS360, e por um</text>
                <text className="botao" x="41" y="523" fontSize="20" fontWeight="900" fill="#000000">compromisso comum: entregar</text>
                <text className="botao" x="41" y="551" fontSize="20" fontWeight="900" fill="#000000">inteligência, confiança e cuidado.</text>
                <Link to="/solucoes">
                  <rect x="41" y="613" width="200" height="50" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M80.1116 631.726L85.6449 637.213L85.6911 637.256C85.8763 637.439 85.984 637.681 86 637.967L85.9991 638.063C85.9856 638.29 85.899 638.507 85.7284 638.701L85.6638 638.767L80.1116 644.273C79.701 644.681 79.0371 644.681 78.6265 644.273C78.2135 643.864 78.2135 643.198 78.6265 642.788L82.4601 638.986L67.0524 638.986C66.4721 638.986 66 638.518 66 637.939C66 637.359 66.4721 636.891 67.0523 636.891L82.3364 636.89L78.6265 633.211C78.2135 632.802 78.2135 632.136 78.6265 631.726C79.0371 631.319 79.701 631.319 80.1116 631.726Z" fill="white"/>
                  <text className="botao" x="101" y="644" fontSize="16" fontWeight="900" fill="#fff">SAIBA MAIS</text>
                </Link>
              </svg>
            </div>
            
            {/* Right side - 4 columns with button container adjustments */}
            <div className="lg:col-span-4 space-y-3 flex flex-col justify-center mt-[-80px] lg:mt-0 lg:ml-[-80px] lg:pt-[150px] pl-[60px] lg:pl-0">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                  style={{ backgroundColor: '#274B41', color: '#fff', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '28px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                    <path d="M3.33334 19.9999C3.33334 12.1432 3.33334 8.2148 5.77413 5.77404C8.21489 3.33325 12.1433 3.33325 20 3.33325C27.8567 3.33325 31.7852 3.33325 34.2258 5.77404C36.6667 8.2148 36.6667 12.1432 36.6667 19.9999C36.6667 27.8566 36.6667 31.7851 34.2258 34.2258C31.7852 36.6666 27.8567 36.6666 20 36.6666C12.1433 36.6666 8.21489 36.6666 5.77413 34.2258C3.33334 31.7851 3.33334 27.8566 3.33334 19.9999Z" stroke="white" strokeWidth="2"/>
                    <path className="origin-center transition-transform duration-300 group-hover:rotate-180" d="M25 20H20M20 20H15M20 20V15M20 20V25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRS 360 Full Section - 10 columns centered */}
      {/* Desktop version */}
      <div className="hidden lg:block">
        <DRS360Section className="[&_.grid]:lg:col-start-2 [&_.grid]:lg:col-span-10" />
      </div>
      
      {/* Mobile version - only visible on screens < 1024px */}
      <section className="py-16 bg-background lg:hidden">
        <div className="drs-container">
          <span 
            style={{ 
              color: '#274B41', 
              fontSize: '20px', 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: '40px',
              borderRadius: '30px',
              background: '#69C0AC',
              padding: '5px 20px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}
          >
            DRS 360
          </span>
          <h2 
            style={{ 
              color: '#274B41', 
              fontSize: '35px', 
              fontStyle: 'normal', 
              fontWeight: 900, 
              lineHeight: '40px',
              marginBottom: '2rem'
            }}
          >
            Planejamento, controle, rastreabilidade e decisões em tempo real - tudo em um só lugar
          </h2>
          <Link to="/drs-360">
            <img 
              src={bannerMobile} 
              alt="DRS 360 - Saiba mais" 
              className="w-full h-auto"
            />
          </Link>
        </div>
      </section>

      {/* Nossa Rede Mundial Section with Map */}
      <DRS360Section 
        tagText="nossa rede mundial"
        showTitle={false}
        hasLink={false}
        uppercaseTag={true}
        useWorldMap={true}
      />

    </Layout>
  );
};

export default Index;
