import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import arrowSlide from '@/assets/arrow-slide.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TableCarouselMobileProps {
  images: { src: string; alt?: string }[];
  className?: string;
}

export function TableCarouselMobile({ images, className = '' }: TableCarouselMobileProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = images.length;

  return (
    <div className={`lg:hidden ${className}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img 
                src={image.src} 
                alt={image.alt || `Tabela - Parte ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Slide indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className="h-2 rounded-full transition-all"
            style={{ 
              backgroundColor: activeSlide === index ? '#274B41' : '#D9D9D9',
              width: activeSlide === index ? '24px' : '8px'
            }}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-4 justify-center pl-[60px]">
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="transition-opacity rotate-180"
          style={{ opacity: activeSlide === 0 ? 0.6 : 1 }}
        >
          <img src={arrowSlide} alt="Anterior" className="w-[50px] h-[38px]" />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="transition-opacity"
          style={{ opacity: activeSlide === totalSlides - 1 ? 0.6 : 1 }}
        >
          <img src={arrowSlide} alt="Próximo" className="w-[50px] h-[38px]" />
        </button>
      </div>
    </div>
  );
}
