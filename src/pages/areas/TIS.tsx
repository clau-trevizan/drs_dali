import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import imgTis from '@/assets/tis.png';
import imgTisSingle from '@/assets/img-tis-nova.png';
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

export default function TIS() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const solutionsSwiperRef = useRef<SwiperType | null>(null);
  const [activeSolutionSlide, setActiveSolutionSlide] = useState(0);

  const solutionsData: SolutionModalData[] = [
    { title: t('tis.sol1.title'), description: t('tis.sol1.desc'), diferenciais: [], destaques: [] },
    { title: t('tis.sol2.title'), description: t('tis.sol2.desc'), diferenciais: [], destaques: [] },
    { title: t('tis.sol3.title'), description: t('tis.sol3.desc'), diferenciais: [], destaques: [] },
    { title: t('tis.sol4.title'), description: t('tis.sol4.desc'), diferenciais: [], destaques: [] }
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
    <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
    <img src={imgTis} alt="Thermo Integrated Services" className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]" />
    </div>
    <div className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0" style={{ backgroundColor: '#69C0AC' }}>
    <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
    <span className="text-[16px] lg:text-[20px] hero-tag-mobile" style={{ color: '#000', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', textTransform: 'uppercase', borderRadius: '30px', border: '1px solid #000', padding: '0px 20px', display: 'inline-block', marginBottom: '1rem', width: 'fit-content', background: 'transparent' }}>{t('tis.hero.tag')}</span>
    <h1 className="text-[24px] md:text-[30px] lg:text-[35px] leading-[30px] md:leading-[36px] lg:leading-[40px] mb-4" style={{ color: '#000', fontWeight: 900 }}>{t('tis.hero.title')}</h1>
    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#000', fontWeight: 400 }}>{t('tis.hero.description')}</p>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Text Blocks + Image Section */}
    <section className="py-8 md:py-16 bg-white overflow-hidden relative padding-bottom-0">
    <img src={flutuante2} alt="Decorativo" className="hidden lg:block animate-float" style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }} />
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-7" style={{ marginBottom: '6.5rem' }}>
    <div className="flex flex-col gap-6 mb-12">
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('tis.text1')}</p>
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('tis.text2')}</p>
    </div>
    <img src={imgTisSingle} alt="Soluções TIS" className="w-full h-auto" />
    </div>
    </div>
    </div>
    </section>

    {/* Nossas Soluções Tag Section */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-2 lg:col-span-10">
    <span style={{ color: '#274B41', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', borderRadius: '30px', background: '#69C0AC', padding: '3px 30px', display: 'inline-block', textTransform: 'uppercase' }}>{t('tis.solutions.tag')}</span>

    {/* Desktop Grid */}
    <div className="hidden lg:grid grid-cols-3 gap-6 mt-8">
    {[1,2,3,4].map((i) => (
      <div key={i} className="col-span-1" style={{ marginTop: i === 2 ? '65px' : i === 3 ? '130px' : '0' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
      <text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">{t(`tis.svg${i}.line1`)}</text>
      <text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">{t(`tis.svg${i}.line2`)}</text>
      <text className="botao" x="23" y="160" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i}.desc1`)}</text>
      <text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i}.desc2`)}</text>
      <text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i}.desc3`)}</text>
   
     
      
      </svg>
      </div>
    ))}
    </div>

    {/* Mobile Carousel */}
    <div className="lg:hidden mt-8">
    <Swiper modules={[Navigation]} onSwiper={(swiper) => { solutionsSwiperRef.current = swiper; }} onSlideChange={(swiper) => setActiveSolutionSlide(swiper.activeIndex)} spaceBetween={16} slidesPerView={1} className="w-full">
    {[0,1,2,3].map((i) => (
      <SwiperSlide key={i}>
      <div className="px-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
      <text className="titulos" x="23" y="72" fontSize="35" fontWeight="900" fill="#274B41">{t(`tis.svg${i+1}.line1`)}</text>
      <text className="titulos" x="23" y="107" fontSize="35" fontWeight="900" fill="#274B41">{t(`tis.svg${i+1}.line2`)}</text>
      <text className="botao" x="23" y="160" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i+1}.desc1`)}</text>
      <text className="botao" x="23" y="185" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i+1}.desc2`)}</text>
      <text className="botao" x="23" y="210" fontSize="20" fontWeight="400" fill="#008C79">{t(`tis.svg${i+1}.desc3`)}</text>
      
      
      </svg>
      </div>
      </SwiperSlide>
    ))}
    </Swiper>
    <div className="flex gap-4 mt-4 justify-center pl-[60px]">
    <button onClick={() => solutionsSwiperRef.current?.slidePrev()} className="transition-opacity rotate-180" style={{ opacity: activeSolutionSlide === 0 ? 0.6 : 1 }}><img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px]" /></button>
    <button onClick={() => solutionsSwiperRef.current?.slideNext()} className="transition-opacity" style={{ opacity: activeSolutionSlide === solutionsData.length - 1 ? 0.6 : 1 }}><img src={arrowSlide} alt="Next" className="w-[50px] h-[38px]" /></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Orange CTA Section */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ borderRadius: '50px', padding: '70px', backgroundColor: '#F39325' }}>
    <div className="lg:col-span-4">
    <h2 style={{ fontWeight: 900, fontSize: '30px', color: '#000', lineHeight: '1.2' }}>{t('tis.cta.title')}</h2>
    </div>
    <div className="lg:col-span-5 flex items-center">
    <Link to="/contato" className="flex items-center gap-4" style={{ borderRadius: '10px', background: '#274B41', padding: '15px 25px' }}>
    <ArrowIcon className="w-5 h-4 text-white flex-shrink-0" />
    <span style={{ fontSize: '16px', color: '#fff', fontWeight: 400 }}>{t('tis.cta.button')}</span>
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
    <div className="lg:col-span-4 drs360-access-border-box lg:!p-0 lg:!rounded-[50px_0_0_50px]" style={{ position: 'relative', zIndex: 1, borderRadius: '50px 0px 0 50px', border: '1px solid rgb(105, 192, 172)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: 'auto', minHeight: 'auto', padding: '0' }}>
    <img src={img360} alt="DRS 360" className="object-contain gestao-digital-image" style={{ width: '50%', minHeight: 'auto', height: 'auto' }} />
    </div>
    <div className="lg:col-span-8 flex flex-col justify-center overflow-hidden drs360-access-green-box gestao-digital-greenbox lg:!ml-[-35px] lg:!rounded-[40px] lg:!mt-0" style={{ backgroundColor: '#69C0AC', marginLeft: '-35px', padding: '3rem 4rem', borderRadius: '40px', backgroundImage: `url(${cantoVerde})`, backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundSize: '150px' }}>
    <h2 style={{ color: '#000', fontSize: '30px', fontWeight: 900, lineHeight: '1.2', marginBottom: '1.5rem' }}>{t('drs360.bottom.title')}</h2>
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '25px', marginBottom: '2rem' }}>{t('drs360.bottom.desc')}</p>
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

    <SolutionModal open={modalOpen} onOpenChange={setModalOpen} data={selectedSolution} />
    </Layout>
  );
}
