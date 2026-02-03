import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import arrowSlide from '@/assets/arrow-slide.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SolutionItem {
  svgContent: React.ReactNode;
}

interface SolutionsCarouselMobileProps {
  solutions: SolutionItem[];
  className?: string;
}

export function SolutionsCarouselMobile({ solutions, className = '' }: SolutionsCarouselMobileProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = solutions.length;

  return (
    <div className={`lg:hidden ${className}`}>
      <Swiper
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        spaceBetween={16}
        slidesPerView={1}
        className="w-full"
      >
        {solutions.map((solution, index) => (
          <SwiperSlide key={index}>
            <div className="px-4">
              {solution.svgContent}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-4 justify-center pl-[60px]">
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="transition-opacity rotate-180"
          style={{ opacity: activeSlide === 0 ? 0.6 : 1 }}
        >
          <img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px]" />
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="transition-opacity"
          style={{ opacity: activeSlide === totalSlides - 1 ? 0.6 : 1 }}
        >
          <img src={arrowSlide} alt="Next" className="w-[50px] h-[38px]" />
        </button>
      </div>
    </div>
  );
}

export default SolutionsCarouselMobile;
