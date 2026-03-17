import { Layout } from '@/components/layout';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import imgGrupo from '/images/img-grupo-nova.png';
import drs360Final from '@/assets/drs360-final-nova.png';
import flutuante2 from '@/assets/flutuante2.svg';
import flutuante3 from '@/assets/flutante3.svg';
import arrowSlide from '@/assets/arrow-slide.svg';
import imgSlide from '@/assets/img-slide.png';
import { useState, useRef } from 'react';
import { SolutionModal, SolutionModalData } from '@/components/ui/SolutionModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/effect-creative';
import { DRS360Section } from '@/components/sections';
import { useTranslation } from '@/hooks/useTranslation';

export default function GrupoDRS() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const benefitsCarouselRef = useRef<SwiperType | null>(null);
  const duplicatedCarouselRef = useRef<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [duplicatedActiveSlide, setDuplicatedActiveSlide] = useState(0);
  const [certActiveSlide, setCertActiveSlide] = useState(0);
  const missaoCarouselRef = useRef<SwiperType | null>(null);
  const [missaoActiveSlide, setMissaoActiveSlide] = useState(0);
  const [missaoNavHidden, setMissaoNavHidden] = useState(false);
  const [dupNavHidden, setDupNavHidden] = useState(false);
  const [certNavHidden, setCertNavHidden] = useState(false);

  return (
    <Layout mainClassName="pagina-grupo-drs">
    {/* Section 1: Hero Section */}
    <section className="relative overflow-hidden bg-background">
    <div className="drs-container py-8 md:py-12">
    <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
    <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
    <img src={imgGrupo} alt="Grupo DRS" className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]" />
    </div>
    <div className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[1.5rem_1rem_4rem_2rem] lg:p-0 mt-[-50px] lg:mt-0 mobile-padding" style={{ backgroundColor: '#69C0AC' }}>
    <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem] mobile-padding-2">
    <span className="text-[16px] lg:text-[20px]" style={{ color: '#000', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', textTransform: 'uppercase', borderRadius: '30px', border: '1px solid #000', padding: '0px 20px', display: 'inline-block', marginBottom: '1rem', width: 'fit-content', background: 'transparent' }}>{t('grupo.hero.tag')}</span>
    <h1 className="text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>{t('grupo.hero.title')}</h1>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 2: Text Blocks Section */}
    <section className="py-8 md:py-16 bg-white overflow-hidden relative padding-bottom-0">
    <img src={flutuante2} alt="Decorativo" className="hidden lg:block animate-float" style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }} />
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-7" style={{ marginBottom: '6.5rem' }}>
    <div className="flex flex-col gap-6">
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('grupo.text1')}</p>
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('grupo.text2')}</p>
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('grupo.text3')}</p>
    <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>{t('grupo.text4')}</p>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 3: Impacto e Capacidade Carousel Section */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-2 lg:col-span-10">
    <span style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', borderRadius: '30px', background: '#69C0AC', padding: '3px 30px', display: 'inline-block', textTransform: 'uppercase', marginLeft: '10%' }}>{t('grupo.impact.tag')}</span>
    </div>
    <div className="col-span-12">
    <div className="relative mt-8">
    <Swiper modules={[Navigation, Pagination]} onSwiper={(swiper) => { benefitsCarouselRef.current = swiper; }} onSlideChange={(swiper) => setActiveSlide(Math.floor(swiper.activeIndex / 3))} spaceBetween={24} slidesPerView={3} slidesPerGroup={3} className="benefits-carousel" breakpoints={{ 0: { slidesPerView: 1, slidesPerGroup: 1 }, 768: { slidesPerView: 2, slidesPerGroup: 2 }, 1024: { slidesPerView: 3, slidesPerGroup: 3 } }}>
    {[1,2,3,4,5].map((i, idx) => (
      <SwiperSlide key={idx}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">{t(`grupo.impact.card${i}.number`)}</text>
      {t(`grupo.impact.card${i}.unit`) !== `grupo.impact.card${i}.unit` && <text className="titulo2" x="168" y="116" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.impact.card${i}.unit`)}</text>}
      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.impact.card${i}.title`)}</text>
      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.impact.card${i}.desc1` in {} ? `grupo.impact.card${i}.desc1` : `grupo.impact.card${i}.desc1`)}</text>
      {i === 1 && <text className="botao" x="57" y="220" fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.impact.card${i}.desc2`)}</text>}
      </svg>
      </SwiperSlide>
    ))}
    </Swiper>
    <div className="flex items-center justify-center gap-4 mt-8">
    <button onClick={() => benefitsCarouselRef.current?.slidePrev()} className="hover:opacity-80 transition-opacity rotate-180"><img src={arrowSlide} alt="Previous" className="w-[66px] h-[50px]" /></button>
    <div className="flex gap-2">
    {[0, 1].map((dotIndex) => (
      <button key={dotIndex} onClick={() => { benefitsCarouselRef.current?.slideTo(dotIndex * 3); setActiveSlide(dotIndex); }} className="w-3 h-3 hover:opacity-80 transition-opacity" style={{ borderRadius: '5px', backgroundColor: activeSlide === dotIndex ? '#274B41' : '#69C0AC' }} />
    ))}
    </div>
    <button onClick={() => benefitsCarouselRef.current?.slideNext()} className="hover:opacity-80 transition-opacity"><img src={arrowSlide} alt="Next" className="w-[66px] h-[50px]" /></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 4: Missão, Visão e Valores Section */}
    <section className="py-8 md:py-12 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12 gap-8 items-center">
    <div className="col-span-12 lg:col-start-3 lg:col-span-5 relative min-h-[470px] lg:min-h-[550px] flex flex-wrap justify-center items-center p-[4rem_1rem_4rem_2rem] lg:p-0 carousel-container-offset">
    <div className="absolute inset-0 lg:hidden" style={{ backgroundImage: 'url(/images/fundo_mobile_modificado.svg)', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
    <div className="absolute inset-0 hidden lg:block" style={{ backgroundImage: 'url(/images/fundo2-modificado.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
    <Swiper modules={[Navigation, EffectCreative]} effect="creative" creativeEffect={{ prev: { translate: [0, 0, 0], opacity: 0 }, next: { translate: [0, 0, 0], opacity: 0 } }} onSwiper={(swiper) => { missaoCarouselRef.current = swiper; setMissaoNavHidden(swiper.isLocked); }} onResize={(swiper) => setMissaoNavHidden(swiper.isLocked)} onSlideChange={(swiper) => setMissaoActiveSlide(swiper.activeIndex)} spaceBetween={24} slidesPerView={1} className="drs360-swiper h-full w-full mt-0 lg:mt-[-100px] relative z-10">
    <SwiperSlide>
    <div className="h-full flex flex-col p-4 lg:p-0">
    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>{t('grupo.missao.title')}</h3>
    <p className="text-[16px] md:text-[18px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.missao.text')}</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="h-full flex flex-col p-4 lg:p-0">
    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>{t('grupo.visao.title')}</h3>
    <p className="text-[16px] md:text-[18px] lg:text-[16px] leading-[22px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.visao.text')}</p>
    </div>
    </SwiperSlide>
    </Swiper>
    <div className={`flex gap-4 mt-[120px] lg:mt-4 lg:absolute lg:bottom-12 lg:left-16 justify-center lg:justify-start relative z-10 pl-0 lg:pl-[60px] ml-[-90px] lg:ml-0 ${missaoNavHidden ? 'hidden' : ''}`}>
    <button onClick={() => missaoCarouselRef.current?.slidePrev()} className="transition-opacity rotate-180" style={{ opacity: missaoActiveSlide === 0 ? 0.6 : 1 }}><img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" /></button>
    <button onClick={() => missaoCarouselRef.current?.slideNext()} className="transition-opacity" style={{ opacity: missaoActiveSlide === 1 ? 0.6 : 1 }}><img src={arrowSlide} alt="Next" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" /></button>
    </div>
    </div>
    <div className="col-span-12 lg:col-span-4 lg:flex justify-center h-full pb-4 lg:pb-[70px]">
    <div className="col-span-12 lg:col-start-2 lg:col-span-9 mt-8" style={{ paddingLeft: '0px' }}>
    <h3 style={{ color: '#000', fontSize: '35px', fontStyle: 'normal', fontWeight: 900, lineHeight: '40px', marginBottom: '24px', textAlign: 'left' }}>{t('grupo.valores.title')}</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '28px', textAlign: 'left' }}>
    <li><strong>{t('grupo.valor1.title')}</strong> – {t('grupo.valor1.desc')}</li>
    <li><strong>{t('grupo.valor2.title')}</strong> - {t('grupo.valor2.desc')}</li>
    <li><strong>{t('grupo.valor3.title')}</strong> - {t('grupo.valor3.desc')}</li>
    <li><strong>{t('grupo.valor4.title')}</strong> - {t('grupo.valor4.desc')}</li>
    <li><strong>{t('grupo.valor5.title')}</strong> - {t('grupo.valor5.desc')}</li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 5: Tagline Section */}
    <section className="bg-white overflow-hidden relative" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
    <img src={flutuante3} alt="Decorativo" className="hidden md:block animate-float" style={{ position: 'absolute', left: '55%', top: '10px', width: '420px', height: 'auto', zIndex: 0 }} />
    <div className="drs-container relative" style={{ zIndex: 1 }}>
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
    <p style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px', marginBottom: '60px' }}>{t('grupo.tagline')}</p>
    </div>
    </div>
    </div>
    </section>

    {/* Section 6: Nosso Diferencial Section */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
    <h3 style={{ color: '#000', fontSize: '30px', fontStyle: 'normal', fontWeight: 900, lineHeight: '30px', marginBottom: '16px' }}>{t('grupo.diferencial.title')}</h3>
    <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px' }}>{t('grupo.diferencial.desc')}</p>
    </div>
    </div>
    </div>
    </section>

    {/* Section 7: Duplicated Carousel */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12 gap-8 items-center">
    <div className="col-span-12 grupo-drs-section7-carousel">
    <div className="relative mt-8">
    <Swiper modules={[Navigation, Pagination]} onSwiper={(swiper) => { duplicatedCarouselRef.current = swiper; setDupNavHidden(swiper.isLocked); }} onResize={(swiper) => setDupNavHidden(swiper.isLocked)} onSlideChange={(swiper) => setDuplicatedActiveSlide(Math.floor(swiper.activeIndex / 3))} spaceBetween={24} slidesPerView={3} slidesPerGroup={3} className="benefits-carousel-duplicated" breakpoints={{ 0: { slidesPerView: 1, slidesPerGroup: 1 }, 768: { slidesPerView: 2, slidesPerGroup: 2 }, 1024: { slidesPerView: 3, slidesPerGroup: 3 } }}>
    {[1,2,3].map((i, idx) => (
      <SwiperSlide key={idx}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.diff${i}.title1`)}</text>
      {t(`grupo.diff${i}.title2`) !== `grupo.diff${i}.title2` && <text className="titulo2" x="57" y="150" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.diff${i}.title2`)}</text>}
      <text className="botao" x="57" y={i === 1 ? 160 : 190} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.diff${i}.desc1`)}</text>
      <text className="botao" x="57" y={i === 1 ? 185 : 215} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.diff${i}.desc2`)}</text>
      <text className="botao" x="57" y={i === 1 ? 210 : 240} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.diff${i}.desc3`)}</text>
      <text className="botao" x="57" y={i === 1 ? 235 : 265} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.diff${i}.desc4`)}</text>
      </svg>
      </SwiperSlide>
    ))}
    </Swiper>
    <div className={`flex items-center justify-center gap-4 mt-8 ${dupNavHidden ? 'hidden' : ''}`}>
    <button onClick={() => duplicatedCarouselRef.current?.slidePrev()} className="hover:opacity-80 transition-opacity rotate-180"><img src={arrowSlide} alt="Previous" className="w-[66px] h-[50px]" /></button>
    <div className="flex gap-2">
    {[0, 1].map((dotIndex) => (
      <button key={dotIndex} onClick={() => { duplicatedCarouselRef.current?.slideTo(dotIndex * 3); setDuplicatedActiveSlide(dotIndex); }} className="w-3 h-3 hover:opacity-80 transition-opacity" style={{ borderRadius: '5px', backgroundColor: duplicatedActiveSlide === dotIndex ? '#274B41' : '#69C0AC' }} />
    ))}
    </div>
    <button onClick={() => duplicatedCarouselRef.current?.slideNext()} className="hover:opacity-80 transition-opacity"><img src={arrowSlide} alt="Next" className="w-[66px] h-[50px]" /></button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 7b: Nosso Time */}
    <section className="py-16 bg-white overflow-hidden relative grupo-drs-svg">
    <div className="drs-container relative" style={{ zIndex: 1 }}>
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-span-4 flex items-end justify-center lg:justify-end grupo-drs-section8-image-wrapper" style={{ marginRight: '-50px' }}>
    <img src="/images/img-nosso-time-nova.png" alt={t('grupo.nossotime.title')} className="w-full max-w-[400px] h-auto object-contain grupo-drs-section8-image" />
    </div>
    <div className="hidden lg:block col-span-12 lg:col-span-8" style={{ textAlign: 'left' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 847 564" fill="none" className="svg-team">
    <path d="M71.8609 204.7L33.7256 204.696C15.0985 204.696 1.63619e-05 189.612 1.71753e-05 171.004L2.3026e-05 37.1558C2.39229e-05 16.638 16.6508 -3.62957e-05 37.1938 -3.53978e-05L704.584 0.000298951C723.523 0.000299778 738.873 15.3338 738.873 34.2543L738.873 58.6092C738.873 76.6171 753.487 91.2114 771.508 91.2114L812.999 91.2114C831.776 91.2114 847 106.416 847 125.178L847 526.773C847 547.29 830.349 563.929 809.806 563.929L141.148 563.929C121.011 563.929 104.687 547.621 104.687 527.504L104.687 397.172L104.687 237.493C104.687 219.383 89.9892 204.7 71.8609 204.7Z" fill="#F39325"/>
    <text className="titulos" x="180" y="144" fontSize="30" fontWeight="900" fill="#000000">{t('grupo.nossotime.title')}</text>
    <text className="botao" x="180" y="190" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.subtitle')}</text>
    <text className="botao" x="180" y="238" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line1')}</text>
    <text className="botao" x="180" y="266" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line2')}</text>
    <text className="botao" x="180" y="294" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line3')}</text>
    <text className="botao" x="180" y="322" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line4')}</text>
    <text className="botao" x="180" y="350" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line5')}</text>
    <text className="botao" x="180" y="393" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line6')}</text>
    <text className="botao" x="180" y="420" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.svg.line7')}</text>
    <a href="https://vagasdrsgroup.gupy.io/" target="_blank">
    <rect x="211" y="450" width="305" height="50" rx="10" fill="#274B41" style={{ transform: 'translateX(-30px)' }}/>
    <path d="M143.112 465.807L148.645 471.294L148.691 471.337C148.876 471.52 148.984 471.762 149 472.048L148.999 472.145C148.986 472.371 148.899 472.588 148.728 472.782L148.664 472.848L143.112 478.354C142.701 478.762 142.037 478.762 141.627 478.354C141.213 477.945 141.213 477.279 141.627 476.869L145.46 473.067L130.052 473.068C129.472 473.068 129 472.599 129 472.02C129 471.44 129.472 470.972 130.052 470.972L145.336 470.971L141.627 467.292C141.213 466.883 141.213 466.217 141.627 465.807C142.037 465.4 142.701 465.4 143.112 465.807Z" fill="white" style={{transform: 'translate(70px, 3px)'}}></path>
    <text className="botao" x="260" y="482" fontSize="20" fontWeight="400" fill="#ffffff" style={{ transform: 'translateX(-30px)' }}>{t('grupo.nossotime.cta')}</text>
    </a>
    </svg>
    </div>
    <div className="block lg:hidden col-span-12">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 713" fill="none" className="w-full h-auto">
    <path d="M56.1159 655.315L56.1121 685.886C56.1121 700.819 44.0226 712.922 29.1075 712.922H-14.2189C-30.6643 712.922 -44 699.574 -44 683.106L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.97623C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.664 9.44393e-05 408 13.3482 408 29.8165L408 599.77C408 615.914 394.929 629 378.804 629L210.385 629H82.4003C67.8846 629 56.1159 640.782 56.1159 655.315Z" fill="#F39325"></path>
    <text className="titulos" x="40" y="120" fontSize="30" fontWeight="900" fill="#000000">{t('grupo.nossotime.title')}</text>
    <text className="botao2" x="40" y="180" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line1')}</text>
    <text className="botao2" x="40" y="210" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line2')}</text>
    <text className="botao2" x="40" y="270" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line3')}</text>
    <text className="botao2" x="40" y="298" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line4')}</text>
    <text className="botao2" x="40" y="328" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line5')}</text>
    <text className="botao2" x="40" y="356" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line6')}</text>
    <text className="botao2" x="40" y="384" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line7')}</text>
    <text className="botao2" x="40" y="415" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line8')}</text>
    <text className="botao2" x="40" y="445" fontSize="20" fontWeight="400" fill="#000000">{t('grupo.nossotime.mobile.line9')}</text>
    <a href="https://vagasdrsgroup.gupy.io/" target="_blank">
    <rect x="40" y="485" width="347" height="70" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}></rect>
    <path d="M84.1116 494.727L89.6449 500.213L89.6911 500.256C89.8763 500.439 89.984 500.682 90 500.968L89.9991 501.064C89.9856 501.29 89.899 501.507 89.7284 501.701L89.6638 501.767L84.1116 507.274C83.701 507.681 83.0371 507.681 82.6265 507.274C82.2135 506.864 82.2135 506.198 82.6265 505.789L86.4601 501.986L71.0524 501.987C70.4721 501.987 70 501.519 70 500.939C70 500.359 70.4721 499.891 71.0523 499.891L86.3364 499.89L82.6265 496.212C82.2135 495.802 82.2135 495.136 82.6265 494.727C83.0371 494.319 83.701 494.319 84.1116 494.727Z" fill="white" style={{ transform: 'translateY(18px)' }}></path>
    <text className="botao" x="110" y="525" fontSize="16" fontWeight="900" fill="#fff">{t('grupo.nossotime.cta')}</text>
    </a>
    </svg>
    </div>
    </div>
    </div>
    </section>

    {/* Section 9: Onde Atuamos */}
    <section className="bg-white" style={{ paddingTop: '4rem', paddingBottom: '0rem' }}>
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
    <h3 style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px', marginBottom: '24px' }}>{t('grupo.ondeatuamos')}</h3>
    <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px' }}>{t('grupo.ondeatuamos.desc')}</p>
    </div>
    </div>
    </div>
    </section>

    {/* Section 10: Nossa atuação */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
    <p style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px' }}>{t('grupo.nossaatuacao')}</p>
    </div>
    </div>
    </div>
    </section>

    {/* Section: 3 Solution Blocks */}
    <section className="py-8 bg-white">
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12">
    <div className="grid grid-cols-12 gap-6 mt-8">
    {[1,2,3].map((i) => (
      <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
      <text className="titulo2" x="57" y="100" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.area${i}.title1`)}</text>
      <text className="titulo2" x="57" y="134" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.area${i}.title2`)}</text>
      {i === 3 && <text className="titulo2" x="57" y="170" fontSize="35" fontWeight="400" fill="#274B41">{t(`grupo.area${i}.title3`)}</text>}
      <text className="botao" x="57" y={i === 3 ? 205 : 180} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.area${i}.desc1`)}</text>
      <text className="botao" x="57" y={i === 3 ? 230 : 205} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.area${i}.desc2`)}</text>
      <text className="botao" x="57" y={i === 3 ? 255 : 230} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.area${i}.desc3`)}</text>
      <text className="botao" x="57" y={i === 3 ? 280 : 255} fontSize="20" fontWeight="400" fill="#008C79">{t(`grupo.area${i}.desc4`)}</text>
      </svg>
      </div>
    ))}
    </div>
    </div>
    </div>
    </div>
    </section>

    {/* Section 12: DRS 360 Platform Info */}
    <section className="bg-white" style={{ paddingTop: '30px', paddingBottom: '4rem' }}>
    <div className="drs-container">
    <div className="grid grid-cols-12">
    <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
    <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px', marginBottom: '32px' }}>{t('grupo.drs360.platform')}</p>
    <a href="/solucoes" className="drs-btn inline-flex items-center gap-2">
    <ArrowIcon className="w-5 h-4" />
    <span>{t('grupo.drs360.cta')}</span>
    </a>
    </div>
    </div>
    </div>
    </section>

    <div className="relative bg-white">
    <img src="/images/flutuante4.svg" alt="Decorativo" className="hidden md:block animate-float" style={{ position: 'absolute', right: '10%', top: '-50px', width: '250px', height: 'auto', zIndex: 10 }} />
    </div>

    {/* Section: Certificações e Conformidades */}
    <section className="py-8 md:py-12 bg-background">
    <div className="drs-container">
    <div className="grid grid-cols-12 gap-8 items-center">
    <div className="col-span-12 lg:col-start-3 lg:col-span-5 relative min-h-[470px] lg:min-h-[550px] flex flex-wrap justify-center items-center p-[4rem_1rem_4rem_2rem] lg:p-0 carousel-container-offset mobile-padding-3">
    <div className="absolute inset-0 lg:hidden grupo-drs-section13-bg" style={{ backgroundImage: 'url(/images/fundo_mobile.svg)', backgroundPosition: 'top left', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}></div>
    <div className="absolute inset-0 hidden lg:block" style={{ backgroundImage: 'url(/images/fundo2.svg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
    <Swiper modules={[Navigation, EffectCreative]} effect="creative" creativeEffect={{ prev: { translate: [0, 0, 0], opacity: 0 }, next: { translate: [0, 0, 0], opacity: 0 } }} onSwiper={(swiper) => { swiperRef.current = swiper; setCertNavHidden(swiper.isLocked); }} onResize={(swiper) => setCertNavHidden(swiper.isLocked)} onSlideChange={(swiper) => setCertActiveSlide(swiper.activeIndex)} spaceBetween={24} slidesPerView={1} className="drs360-swiper h-full w-full mt-0 lg:mt-[-100px] relative z-10">    
    <SwiperSlide>
    <div className="h-full flex flex-col p-4 lg:p-0">
    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>{t('grupo.cert.title')}</h3>
    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px] mb-4" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.cert.subtitle')}</p>
    <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] lg:leading-[22px]" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.cert.desc')}</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="h-full flex flex-col p-4 lg:p-0">
    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>{t('grupo.cert2.title')}</h3>
    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px] mb-4" style={{ color: '#69C0AC', fontWeight: 400 }}></p>
    <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] lg:leading-[22px]" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.cert2.desc')}</p>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="h-full flex flex-col p-4 lg:p-0">
    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>{t('grupo.cert3.title')}</h3>
    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px] mb-4" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.cert3.subtitle')}</p>
    <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] lg:leading-[22px]" style={{ color: '#69C0AC', fontWeight: 400 }}>{t('grupo.cert3.desc')}</p>
    </div>
    </SwiperSlide>
    </Swiper>
    <div className={`flex gap-4 mt-[120px] lg:mt-4 lg:absolute lg:bottom-12 lg:left-16 justify-center lg:justify-start relative z-10 pl-0 lg:pl-[60px] ml-[-90px] lg:ml-0 grupo-drs-section13-arrows margin-top-mobile ${certNavHidden ? 'hidden' : ''}`}>
    <button onClick={() => swiperRef.current?.slidePrev()} className="transition-opacity rotate-180" style={{ opacity: certActiveSlide === 0 ? 0.6 : 1 }}><img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" /></button>
    <button onClick={() => swiperRef.current?.slideNext()} className="transition-opacity" style={{ opacity: certActiveSlide === 1 ? 0.6 : 1 }}><img src={arrowSlide} alt="Next" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" /></button>
    </div>
    </div>
    <div className="col-span-12 lg:col-span-3 hidden lg:flex justify-center h-full pb-4 lg:pb-[70px]">
    <img src="/images/certificacoes-nova.png" alt={t('grupo.cert.title')} className="rounded-3xl self-end" style={{ maxWidth: '90%' }} />
    </div>
    </div>
    </div>
    </section>

    <DRS360Section tagText={t('home.worldmap.tag')} showTitle={false} hasLink={false} uppercaseTag={true} useWorldMap={true} />

    <SolutionModal open={modalOpen} onOpenChange={setModalOpen} data={selectedSolution} />
    </Layout>
  );
}
