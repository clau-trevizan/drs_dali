import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import imgCts from '@/assets/img-cts.png';
import imgSingle from '@/assets/img_single.png';
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
import { useTranslation } from '@/hooks/useTranslation';

export default function CTS() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const solutionsSwiperRef = useRef<SwiperType | null>(null);
  const [activeSolutionSlide, setActiveSolutionSlide] = useState(0);

  const solutionsData: SolutionModalData[] = [
    {
      title: t('cts.sol1.title'),
      description: t('cts.sol1.desc'),
      diferenciais: [t('cts.sol1.dif1'), t('cts.sol1.dif2'), t('cts.sol1.dif3'), t('cts.sol1.dif4'), t('cts.sol1.dif5')],
      destaques: [t('cts.sol1.dest1'), t('cts.sol1.dest2'), t('cts.sol1.dest3')]
    },
    {
      title: t('cts.sol2.title'),
      description: t('cts.sol2.desc'),
      diferenciais: [t('cts.sol2.dif1'), t('cts.sol2.dif2'), t('cts.sol2.dif3'), t('cts.sol2.dif4')],
      destaques: [t('cts.sol2.dest1'), t('cts.sol2.dest2'), t('cts.sol2.dest3')]
    },
    {
      title: t('cts.sol3.title'),
      description: t('cts.sol3.desc'),
      diferenciais: [t('cts.sol3.dif1'), t('cts.sol3.dif2'), t('cts.sol3.dif3'), t('cts.sol3.dif4')],
      destaques: [t('cts.sol3.dest1'), t('cts.sol3.dest2'), t('cts.sol3.dest3')]
    },
    {
      title: t('cts.sol4.title'),
      description: t('cts.sol4.desc'),
      diferenciais: [t('cts.sol4.dif1'), t('cts.sol4.dif2'), t('cts.sol4.dif3'), t('cts.sol4.dif4')],
      destaques: [t('cts.sol4.dest1'), t('cts.sol4.dest2'), t('cts.sol4.dest3')]
    },
    {
      title: t('cts.sol5.title'),
      description: t('cts.sol5.desc'),
      diferenciais: [t('cts.sol5.dif1'), t('cts.sol5.dif2'), t('cts.sol5.dif3'), t('cts.sol5.dif4')],
      destaques: [t('cts.sol5.dest1'), t('cts.sol5.dest2'), t('cts.sol5.dest3')]
    },
    {
      title: t('cts.sol6.title'),
      description: t('cts.sol6.desc'),
      diferenciais: [t('cts.sol6.dif1'), t('cts.sol6.dif2'), t('cts.sol6.dif3'), t('cts.sol6.dif4'), t('cts.sol6.dif5')],
      destaques: [t('cts.sol6.dest1'), t('cts.sol6.dest2'), t('cts.sol6.dest3')]
    }
  ];

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
                src={imgCts}
                alt="Clinical Trial Services"
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>

            {/* Content Side - Right with teal background */}
            <div
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
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
                  {t('cts.hero.tag')}
                </span>
                <h1 className="text-[24px] md:text-[30px] lg:text-[35px] leading-[30px] md:leading-[36px] lg:leading-[40px] mb-4" style={{ color: '#000', fontWeight: 900 }}>
                  {t('cts.hero.title')}
                </h1>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('cts.hero.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Blocks + Image Section */}
      <section className="py-8 md:py-16 bg-white overflow-hidden relative padding-bottom-0">
        <img
          src={flutuante2}
          alt="Decorativo"
          className="hidden lg:block animate-float"
          style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }}
        />
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-7" style={{ marginBottom: '6.5rem' }}>
              <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[1.5]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('cts.text1')}
                </p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[1.5]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('cts.text2')}
                </p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[1.5]" style={{ color: '#000', fontWeight: 900 }}>
                  {t('cts.text3')}
                </p>
              </div>
              <img
                src={imgSingle}
                alt="Soluções CTS"
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
                {t('cts.solutions.tag')}
              </span>

              {/* 6 Solution Blocks Grid - Desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-6 mt-8">
                {/* Block 1 - Fornecimento de medicamentos */}
                <div className="col-span-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg1.line1')}</text>
                    <text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg1.line2')}</text>
                    <text className="titulos" x="23" y="142" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg1.line3')}</text>
                    <text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg1.desc1')}</text>
                    <text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg1.desc2')}</text>
                    <text className="botao" x="23" y="235" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg1.desc3')}</text>
                    <text className="botao" x="23" y="260" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg1.desc4')}</text>
                    <rect x="269" y="325" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(0)}/>
                    <text className="botao cursor-pointer" x="291" y="352" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(0)}>{t('saibamais')}</text>
                  </svg>
                </div>

                {/* Block 2 - Serviço de armazenagem */}
                <div className="col-span-1 mt-[65px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg2.line1')}</text>
                    <text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg2.line2')}</text>
                    <text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg2.desc1')}</text>
                    <text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg2.desc2')}</text>
                    <text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg2.desc3')}</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(1)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(1)}>{t('saibamais')}</text>
                  </svg>
                </div>

                {/* Block 3 - Serviços globais de importador oficial */}
                <div className="col-span-1 mt-[130px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg3.line1')}</text>
                    <text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg3.line2')}</text>
                    <text className="titulos" x="43" y="148" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg3.line3')}</text>
                    <text className="titulos" x="43" y="183" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg3.line4')}</text>
                    <text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg3.desc1')}</text>
                    <text className="botao" x="43" y="251" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg3.desc2')}</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(2)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(2)}>{t('saibamais')}</text>
                  </svg>
                </div>

                {/* Block 4 - Embalagem, etiquetagem e cegamento */}
                <div className="col-span-1 mt-[-110px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg4.line1')}</text>
                    <text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg4.line2')}</text>
                    <text className="titulos" x="43" y="148" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg4.line3')}</text>
                    <text className="botao" x="43" y="191" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg4.desc1')}</text>
                    <text className="botao" x="43" y="216" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg4.desc2')}</text>
                    <text className="botao" x="43" y="241" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg4.desc3')}</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(3)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(3)}>{t('saibamais')}</text>
                  </svg>
                </div>

                {/* Block 5 - Kits laboratoriais */}
                <div className="col-span-1 mt-[-45px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="98" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg5.line1')}</text>
                    <text className="titulos" x="43" y="133" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg5.line2')}</text>
                    <text className="botao" x="43" y="176" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg5.desc1')}</text>
                    <text className="botao" x="43" y="201" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg5.desc2')}</text>
                    <text className="botao" x="43" y="226" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg5.desc3')}</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(4)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(4)}>{t('saibamais')}</text>
                  </svg>
                </div>

                {/* Block 6 - Transporte especializado */}
                <div className="col-span-1 mt-[20px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulos" x="43" y="78" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg6.line1')}</text>
                    <text className="titulos" x="43" y="113" fontSize="35" fontWeight="900" fill="#274B41">{t('cts.svg6.line2')}</text>
                    <text className="botao" x="43" y="156" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg6.desc1')}</text>
                    <text className="botao" x="43" y="181" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg6.desc2')}</text>
                    <text className="botao" x="43" y="206" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg6.desc3')}</text>
                    // <text className="botao" x="43" y="231" fontSize="20" fontWeight="400" fill="#008C79">{t('cts.svg6.desc4')}</text>
                    <rect x="269" y="326" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(5)}/>
                    <text className="botao cursor-pointer" x="292" y="353" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(5)}>{t('saibamais')}</text>
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
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                          <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                          <text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">{t(`cts.svg${i+1}.line1`)}</text>
                          <text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">{t(`cts.svg${i+1}.line2`)}</text>
                          {t(`cts.svg${i+1}.line3`) !== `cts.svg${i+1}.line3` && (
                            <text className="titulos" x="23" y="142" fontSize="35" fontWeight="900" fill="#274B41">{t(`cts.svg${i+1}.line3`)}</text>
                          )}
                          <text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">{t(`cts.svg${i+1}.desc1`)}</text>
                          <text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">{t(`cts.svg${i+1}.desc2`)}</text>
                          <text className="botao" x="23" y="235" fontSize="20" fontWeight="400" fill="#008C79">{t(`cts.svg${i+1}.desc3`)}</text>
                          <rect x="269" y="325" width="135" height="41" rx="10" fill="#274B41" className="cursor-pointer hover:opacity-80" onClick={() => openModal(i)}/>
                          <text className="botao cursor-pointer" x="291" y="352" fontSize="16" fontWeight="400" fill="#ffffff" onClick={() => openModal(i)}>{t('saibamais')}</text>
                        </svg>
                      </div>
                    </SwiperSlide>
                  ))}
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center rounded-[24px] lg:rounded-[50px] p-6 md:p-10 lg:p-[70px]"
            style={{ backgroundColor: '#F39325' }}
          >
            <div className="lg:col-span-4">
              <h2 className="text-[20px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[32px] lg:leading-[1.2]" style={{ fontWeight: 900, color: '#000' }}>
                {t('cts.cta.title')}
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-center">
              <Link
                to="/contato"
                className="flex items-center gap-4"
                style={{ borderRadius: '10px', background: '#274B41', padding: '15px 25px' }}
              >
                <ArrowIcon className="w-5 h-4 text-white flex-shrink-0" />
                <span style={{ fontSize: '16px', color: '#fff', fontWeight: 400 }}>
                  {t('cts.cta.button')}
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
                <div
                  className="lg:col-span-4 drs360-access-border-box lg:!p-0 lg:!rounded-[50px_0_0_50px]"
                  style={{
                    position: 'relative', zIndex: 1, borderRadius: '50px 0px 0 50px',
                    border: '1px solid rgb(105, 192, 172)', display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'center', alignItems: 'center', height: 'auto', minHeight: 'auto', padding: '0'
                  }}
                >
                  <img src={img360} alt="DRS 360" className="object-contain gestao-digital-image" style={{ width: '50%', minHeight: 'auto', height: 'auto' }} />
                </div>
                <div
                  className="lg:col-span-8 flex flex-col justify-center overflow-hidden drs360-access-green-box gestao-digital-greenbox lg:!ml-[-35px] lg:!rounded-[40px] lg:!mt-0"
                  style={{
                    backgroundColor: '#69C0AC', marginLeft: '-35px', padding: '3rem 4rem',
                    borderRadius: '40px', backgroundImage: `url(${cantoVerde})`,
                    backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundSize: '150px'
                  }}
                >
                  <h2 style={{ color: '#000', fontSize: '30px', fontWeight: 900, lineHeight: '1.2', marginBottom: '1.5rem' }}>
                    {t('drs360.bottom.title')}
                  </h2>
                  <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '25px', marginBottom: '2rem' }}>
                    {t('drs360.bottom.desc')}
                  </p>
                  <Link to="/drs-360" className="drs-btn drs-btn-uppercase inline-flex w-fit">
                    <ArrowIcon className="w-4 h-3" />
                    {t('drs360.bottom.cta')}
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
