import { Layout } from '@/components/layout';
import { Tag } from '@/components/ui/Tag';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import { TableCarouselMobile } from '@/components/ui/TableCarouselMobile';
import { DRS360Section } from '@/components/sections';
import heroSolucoes from '@/assets/hero-solucoes.png';
import cornerShape from '@/assets/corner-shape.jpg';
import flutuante2 from '@/assets/flutuante2.svg';
import tableSolucoesPt from '@/assets/table-solucoes-2.svg';
import tableSolucoesEn from '@/assets/table-solucoes-2-en.svg';
import tableSolucoesEs from '@/assets/table-solucoes-2-es.svg';
import bannerMobile from '@/assets/banner_mobile.png';
import table01Pt from '@/assets/table_01_mobile.jpg';
import table01En from '@/assets/table_01_mobile_en.jpg';
import table01Es from '@/assets/table_01_mobile_es.jpg';
import table02Pt from '@/assets/table_02_mobile.jpg';
import table02En from '@/assets/table_02_mobile_en.jpg';
import table02Es from '@/assets/table_02_mobile_es.jpg';
import { useTranslation } from '@/hooks/useTranslation';

export default function Solucoes() {
  const { t, language } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img src={heroSolucoes} alt="Clinical Trial Services" className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]" />
            </div>
            <div className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0" style={{ backgroundColor: '#69C0AC' }}>
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
                <h1 className="text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>
                  {t('solucoes.hero.title')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Blocks + Table Section */}
      <section className="py-8 md:py-16 bg-white overflow-hidden relative padding-bottom-0">
        <img src={flutuante2} alt="Decorativo" className="hidden lg:block animate-float" style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }} />
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-7" style={{ marginBottom: '6.5rem' }}>
              <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[1.5]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('solucoes.text1')}
                </p>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[1.5]" style={{ color: '#000', fontWeight: 400 }}>
                  {t('solucoes.text2')}
                </p>
              </div>
              <div className="hidden lg:block overflow-x-auto">
                <img src={language === 'en' ? tableSolucoesEn : language === 'es' ? tableSolucoesEs : tableSolucoesPt} alt={t('solucoes.table.alt')} className="w-full h-auto min-w-[600px]" />
              </div>
              <TableCarouselMobile
                images={[
                  { src: language === 'en' ? table01En : language === 'es' ? table01Es : table01Pt, alt: t('solucoes.table.part1') },
                  { src: language === 'en' ? table02En : language === 'es' ? table02Es : table02Pt, alt: t('solucoes.table.part2') }
                ]}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTS Section */}
      <section className="py-16 bg-white relative">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {/* Desktop SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 847 564" fill="none" className="hidden lg:block w-full h-auto svg-desk-1">
                <path d="M775.139 204.7L813.274 204.696C831.902 204.696 847 189.612 847 171.004L847 37.1558C847 16.638 830.349 -3.62957e-05 809.806 -3.53978e-05L142.416 0.000298951C123.477 0.000299778 108.127 15.3338 108.127 34.2543L108.127 58.6092C108.127 76.6171 93.5132 91.2114 75.4921 91.2114L34.0006 91.2114C15.2243 91.2114 1.0519e-05 106.416 1.13392e-05 125.178L0.000146699 526.773C0.000147596 547.29 16.6508 563.929 37.1938 563.929L705.852 563.929C725.989 563.929 742.313 547.621 742.313 527.504L742.313 397.172L742.313 237.493C742.313 219.383 757.011 204.7 775.139 204.7Z" fill="#F39325"/>
                <text className="titulos" x="100" y="173" fontSize="35" fontWeight="900" fill="#000000">{t('solucoes.cts.svg.title')}</text>
                <text className="titulos" x="100" y="230" fontSize="20" fontWeight="900" fill="#000000">{t('solucoes.cts.svg.subtitle1')}</text>
                <text className="titulos" x="100" y="258" fontSize="20" fontWeight="900" fill="#000000">{t('solucoes.cts.svg.subtitle2')}</text>
                <text className="botao" x="100" y="310" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.cts.svg.desc1')}</text>
                <text className="botao" x="100" y="338" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.cts.svg.desc2')}</text>
                <text className="botao" x="100" y="385" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.cts.svg.desc3')}</text>
                <text className="botao" x="100" y="413" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.cts.svg.desc4')}</text>
                <a href="/areas/cts">
                  <rect x="104" y="447.081" width="520" height="50" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M143.112 465.807L148.645 471.294L148.691 471.337C148.876 471.52 148.984 471.762 149 472.048L148.999 472.145C148.986 472.371 148.899 472.588 148.728 472.782L148.664 472.848L143.112 478.354C142.701 478.762 142.037 478.762 141.627 478.354C141.213 477.945 141.213 477.279 141.627 476.869L145.46 473.067L130.052 473.068C129.472 473.068 129 472.599 129 472.02C129 471.44 129.472 470.972 130.052 470.972L145.336 470.971L141.627 467.292C141.213 466.883 141.213 466.217 141.627 465.807C142.037 465.4 142.701 465.4 143.112 465.807Z" fill="white"/>
                  <text className="botao" x="165" y="478" fontSize="20" fontWeight="900" fill="#fff">{t('solucoes.cts.svg.cta')}</text>
                </a>
              </svg>
              {/* Mobile SVG */}
              <a href="/areas/cts" className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 713" fill="none" className="w-full h-auto">
                  <path d="M56.1159 655.315L56.1121 685.886C56.1121 700.819 44.0226 712.922 29.1075 712.922H-14.2189C-30.6643 712.922 -44 699.574 -44 683.106L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.97623C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.664 9.44393e-05 408 13.3482 408 29.8165L408 599.77C408 615.914 394.929 629 378.804 629L210.385 629H82.4003C67.8846 629 56.1159 640.782 56.1159 655.315Z" fill="#F39325"/>
                  <rect x="40" y="510" width="347" height="70" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M84.1116 494.727L89.6449 500.213L89.6911 500.256C89.8763 500.439 89.984 500.682 90 500.968L89.9991 501.064C89.9856 501.29 89.899 501.507 89.7284 501.701L89.6638 501.767L84.1116 507.274C83.701 507.681 83.0371 507.681 82.6265 507.274C82.2135 506.864 82.2135 506.198 82.6265 505.789L86.4601 501.986L71.0524 501.987C70.4721 501.987 70 501.519 70 500.939C70 500.359 70.4721 499.891 71.0523 499.891L86.3364 499.89L82.6265 496.212C82.2135 495.802 82.2135 495.136 82.6265 494.727C83.0371 494.319 83.701 494.319 84.1116 494.727Z" fill="white" style={{ transform: 'translateY(42px)'}}/>
                  <text className="titulos" x="40" y="150" fontSize="30" fontWeight="900" fill="#000000">Clinical Trial</text>
                  <text className="titulos" x="40" y="185" fontSize="30" fontWeight="900" fill="#000000">Services - CTS </text>
                  <foreignObject x="40" y="215" width="340" height="100%">
                  <div className="titulos" style={{ fontSize: '20px', color: '#000000', fontWeight: '900'}}>{t('solucoes.cts.svg.subtitle1')} {t('solucoes.cts.svg.subtitle2')}</div>
                  <div className="botao" style={{ fontSize: '20px', color: '#000000', lineHeight: 'normal', marginTop: '15px'}}>{t('solucoes.cts.svg.desc1mob')}</div>
                  </foreignObject>
                  <foreignObject x="110" y="520" width="230" height="100%">
                  <div className="botao" style={{ fontSize: '16px', color: '#ffffff', lineHeight: 'normal'}}>{t('solucoes.cts.svg.cta')}</div>
                  </foreignObject>
                </svg>
              </a>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 422 379" fill="none" className="w-full h-auto">
                <path d="M341.007 377.761C352.778 377.761 362.317 368.204 362.317 356.415V329.757C362.318 317.903 371.912 308.29 383.752 308.289H399.392C411.264 308.289 420.887 298.652 420.888 286.759V23.8967C420.888 10.9733 410.427 0.500244 397.528 0.500244H271.695C260.023 0.500244 250.561 9.97586 250.561 21.6682V46.6702H250.552C250.287 58.3623 240.739 67.761 229 67.761H228.998L23.3887 66.762C10.7482 66.7626 0.5 77.0253 0.5 89.6877V353.365C0.500217 366.288 10.9583 376.761 23.8594 376.761H23.8613L341.007 377.761Z" stroke="#F39325"/>
                <text className="corrido" x="50" y="146" fontSize="20" fontWeight="700" fill="#000000">{t('solucoes.cts.diff.title')}</text>
                <text className="corrido" x="49" y="184" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.cts.diff.item1')}</text>
                <text className="corrido" x="63" y="205" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.cts.diff.item1b')}</text>
                <text className="corrido" x="49" y="231" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.cts.diff.item2')}</text>
                <text className="corrido" x="49" y="260" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.cts.diff.item3')}</text>
                <text className="corrido" x="63" y="280" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.cts.diff.item3b')}</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PCS Section */}
      <section className="py-16 bg-white relative">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 flex flex-col justify-end order-2 lg:order-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 422 379" fill="none" className="block w-full h-auto svg-desk-2">
                <path d="M80.3811 377.761C68.6104 377.761 59.0706 368.204 59.0706 356.415V329.757C59.0704 317.903 49.476 308.29 37.636 308.289H21.9963C10.124 308.289 0.500487 298.652 0.500244 286.759V23.8967C0.500277 10.9733 10.9614 0.500244 23.8596 0.500244H149.693C161.365 0.500244 170.827 9.97586 170.827 21.6682V46.6702H170.836C171.101 58.3623 180.649 67.761 192.388 67.761H192.39L397.999 66.762C410.64 66.7626 420.888 77.0253 420.888 89.6877V353.365C420.888 366.288 410.43 376.761 397.529 376.761H397.527L80.3811 377.761Z" stroke="#15AF97"/>
                <text className="corrido" x="80" y="115" fontSize="20" fontWeight="700" fill="#000000">{t('solucoes.pcs.diff.title')}</text>
                <text className="corrido" x="81" y="152" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item1')}</text>
                <text className="corrido" x="93" y="172" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item1b')}</text>
                <text className="corrido" x="81" y="208" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item2')}</text>
                <text className="corrido" x="93" y="227" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item2b')}</text>
                <text className="corrido" x="81" y="264" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item3')}</text>
                <text className="corrido" x="93" y="284" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item3b')}</text>
                <text className="corrido" x="81" y="320" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item4')}</text>
                <text className="corrido" x="93" y="340" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.pcs.diff.item4b')}</text>
              </svg>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
              {/* Desktop SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 847 564" fill="none" className="hidden lg:block w-full h-auto">
                <path d="M71.8609 204.7L33.7256 204.696C15.0985 204.696 1.63619e-05 189.612 1.71753e-05 171.004L2.3026e-05 37.1558C2.39229e-05 16.638 16.6508 -3.62957e-05 37.1938 -3.53978e-05L704.584 0.000298951C723.523 0.000299778 738.873 15.3338 738.873 34.2543L738.873 58.6092C738.873 76.6171 753.487 91.2114 771.508 91.2114L812.999 91.2114C831.776 91.2114 847 106.416 847 125.178L847 526.773C847 547.29 830.349 563.929 809.806 563.929L141.148 563.929C121.011 563.929 104.687 547.621 104.687 527.504L104.687 397.172L104.687 237.493C104.687 219.383 89.9892 204.7 71.8609 204.7Z" fill="#15AF97"/>
                <text className="titulos" x="170" y="147" fontSize="35" fontWeight="900" fill="#000000">{t('solucoes.pcs.svg.title')}</text>
                <text className="titulos" x="170" y="195" fontSize="20" fontWeight="900" fill="#000000">{t('solucoes.pcs.svg.subtitle1')}</text>
                <text className="titulos" x="170" y="224" fontSize="20" fontWeight="900" fill="#000000">{t('solucoes.pcs.svg.subtitle2')}</text>
                <text className="botao" x="170" y="270" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.pcs.svg.desc1')}</text>
                <text className="botao" x="170" y="298" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.pcs.svg.desc2')}</text>
                <text className="botao" x="170" y="345" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.pcs.svg.desc3')}</text>
                <text className="botao" x="170" y="374" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.pcs.svg.desc4')}</text>
                <text className="botao" x="170" y="402" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.pcs.svg.desc5')}</text>
                <a href="/areas/pcs">
                  <rect x="170" y="429" width="540" height="50" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M255.112 447.727L260.645 453.213L260.691 453.256C260.876 453.439 260.984 453.682 261 453.968L260.999 454.064C260.986 454.29 260.899 454.507 260.728 454.701L260.664 454.767L255.112 460.274C254.701 460.681 254.037 460.681 253.627 460.274C253.213 459.864 253.213 459.198 253.627 458.789L257.46 454.986L242.052 454.987C241.472 454.987 241 454.519 241 453.939C241 453.359 241.472 452.891 242.052 452.891L257.336 452.89L253.627 449.212C253.213 448.802 253.213 448.136 253.627 447.727C254.037 447.319 254.701 447.319 255.112 447.727Z" fill="white" style={{ transform: 'translateX(-50px)' }}/>
                  <text className="botao" x="222" y="460" fontSize="20" fontWeight="900" fill="#ffffff">{t('solucoes.pcs.svg.cta')}</text>
                </a>
              </svg>
              {/* Mobile SVG */}
              <a href="/areas/pcs" className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 409 713" fill="none" className="w-full h-auto">
                  <path d="M351.884 655.315L351.888 685.886C351.888 700.819 363.977 712.922 378.893 712.922H422.219C438.664 712.922 452 699.574 452 683.106L452 114.169C452 98.9857 439.71 86.6802 424.545 86.6802H405.024C390.59 86.6802 378.893 74.9651 378.893 60.5184V27.2567C378.893 12.2046 366.706 0 351.668 0L29.7819 9.44393e-05C13.3365 9.44393e-05 0.000244141 13.3482 0.000244141 29.8165L0 599.77C0 615.914 13.0712 629 29.1957 629L197.615 629H325.6C340.115 629 351.884 640.782 351.884 655.315Z" fill="#15AF97" />
                  <text className="titulos" x="22" y="130" fontSize="30" fontWeight="900" fill="#000000">Patient Centric </text>
                  <text className="titulos" x="22" y="165" fontSize="30" fontWeight="900" fill="#000000">Services - PCS</text>
                  <rect x="21" y="530" width="347" height="70" rx="10" fill="#274B41"/>
                  <path d="M65.1116 494.727L70.6449 500.213L70.6911 500.256C70.8763 500.439 70.984 500.682 71 500.968L70.9991 501.064C70.9856 501.29 70.899 501.507 70.7284 501.701L70.6638 501.767L65.1116 507.274C64.701 507.681 64.0371 507.681 63.6265 507.274C63.2135 506.864 63.2135 506.198 63.6265 505.789L67.4601 501.986L52.0524 501.987C51.4721 501.987 51 501.519 51 500.939C51 500.359 51.4721 499.891 52.0523 499.891L67.3364 499.89L63.6265 496.212C63.2135 495.802 63.2135 495.136 63.6265 494.727C64.0371 494.319 64.701 494.319 65.1116 494.727Z" fill="white" style={{ transform: 'translateY(62px)' }}/>

                  <foreignObject x="20" y="195" width="380" height="100%">
                  <div className="titulos" style={{ fontSize: '20px', color: '#000000', fontWeight: '900'}}>{t('solucoes.pcs.svg.subtitle1')} {t('solucoes.pcs.svg.subtitle2')}</div>
                  <div className="botao" style={{ fontSize: '20px', color: '#000000', lineHeight: 'normal', marginTop: '15px'}}>{t('solucoes.pcs.svg.desc1mob')}</div>
                  </foreignObject>
                  <foreignObject x="100" y="540" width="230" height="100%">
                  <div className="botao" style={{ fontSize: '16px', color: '#ffffff', lineHeight: 'normal'}}>{t('solucoes.pcs.svg.cta')}</div>
                  </foreignObject>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIS Section */}
      <section className="py-16 bg-white relative">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {/* Desktop SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 847 564" fill="none" className="hidden lg:block w-full h-auto svg-desk-3">
                <path d="M775.139 204.7L813.274 204.696C831.902 204.696 847 189.612 847 171.004L847 37.1558C847 16.638 830.349 -3.62957e-05 809.806 -3.53978e-05L142.416 0.000298951C123.477 0.000299778 108.127 15.3338 108.127 34.2543L108.127 58.6092C108.127 76.6171 93.5132 91.2114 75.4921 91.2114L34.0006 91.2114C15.2243 91.2114 -1.99985e-05 106.416 -1.91784e-05 125.178L0.000116182 526.773C0.000117078 547.29 16.6508 563.929 37.1938 563.929L705.852 563.929C725.989 563.929 742.313 547.621 742.313 527.504L742.313 397.172L742.313 237.493C742.313 219.383 757.011 204.7 775.139 204.7Z" fill="#F39325"/>
                <text className="titulos" x="100" y="173" fontSize="35" fontWeight="900" fill="#000000">{t('solucoes.tis.svg.title')}</text>
                <text className="titulos" x="100" y="230" fontSize="20" fontWeight="900" fill="#000000">{t('solucoes.tis.svg.subtitle')}</text>
                <text className="botao" x="100" y="282" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.tis.svg.desc1')}</text>
                <text className="botao" x="100" y="310" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.tis.svg.desc2')}</text>
                <text className="botao" x="100" y="338" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.tis.svg.desc3')}</text>
                <text className="botao" x="100" y="366" fontSize="20" fontWeight="400" fill="#000000">{t('solucoes.tis.svg.desc4')}</text>
                <a href="/areas/tis">
                  <rect x="104" y="447" width="540" height="50" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}/>
                  <path d="M143.112 465.807L148.645 471.294L148.691 471.337C148.876 471.52 148.984 471.762 149 472.048L148.999 472.145C148.986 472.371 148.899 472.588 148.728 472.782L148.664 472.848L143.112 478.354C142.701 478.762 142.037 478.762 141.627 478.354C141.213 477.945 141.213 477.279 141.627 476.869L145.46 473.067L130.052 473.068C129.472 473.068 129 472.599 129 472.02C129 471.44 129.472 470.972 130.052 470.972L145.336 470.971L141.627 467.292C141.213 466.883 141.213 466.217 141.627 465.807C142.037 465.4 142.701 465.4 143.112 465.807Z" fill="white"/>
                  <text className="botao" x="165" y="478" fontSize="20" fontWeight="900" fill="#fff">{t('solucoes.tis.svg.cta')}</text>
                </a>
              </svg>
              {/* Mobile SVG */}
              <a href="/areas/tis" className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 713" fill="none" className="w-full h-auto">
                  <path d="M56.1159 655.315L56.1121 685.886C56.1121 700.819 44.0226 712.922 29.1075 712.922H-14.2189C-30.6643 712.922 -44 699.574 -44 683.106L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.97623C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.664 9.44393e-05 408 13.3482 408 29.8165L408 599.77C408 615.914 394.929 629 378.804 629L210.385 629H82.4003C67.8846 629 56.1159 640.782 56.1159 655.315Z" fill="#F39325"/>
                  <text className="titulos" x="40" y="150" fontSize="30" fontWeight="900" fill="#000000">Thermo Integrated</text>
                  <text className="titulos" x="40" y="185" fontSize="30" fontWeight="900" fill="#000000">Services – TIS</text>
                  <rect x="40" y="520" width="347" height="70" rx="10" fill="#274B41"/>
                  <text className="botao" x="109" y="518" fontSize="16" fontWeight="400" fill="#fff"></text>
                  <path d="M84.1116 494.726L89.6449 500.213L89.6911 500.256C89.8763 500.439 89.984 500.681 90 500.967L89.9991 501.063C89.9856 501.29 89.899 501.507 89.7284 501.701L89.6638 501.767L84.1116 507.273C83.701 507.681 83.0371 507.681 82.6265 507.273C82.2135 506.864 82.2135 506.198 82.6265 505.788L86.4601 501.986L71.0524 501.986C70.4721 501.986 70 501.518 70 500.939C70 500.359 70.4721 499.891 71.0523 499.891L86.3364 499.89L82.6265 496.211C82.2135 495.802 82.2135 495.136 82.6265 494.726C83.0371 494.319 83.701 494.319 84.1116 494.726Z" fill="white" style={{ transform: 'translateY(52px)' }}/>

                  <foreignObject x="40" y="220" width="340" height="100%">
                  <div className="titulos" style={{ fontSize: '20px', color: '#000000', fontWeight: '900'}}>{t('solucoes.tis.svg.subtitle')}</div>
                  <div className="botao" style={{ fontSize: '20px', color: '#000000', lineHeight: 'normal', marginTop: '15px'}}>{t('solucoes.tis.svg.desc1mob')}</div>
                  </foreignObject>
                  <foreignObject x="110" y="530" width="230" height="100%">
                  <div className="botao" style={{ fontSize: '16px', color: '#ffffff', lineHeight: 'normal'}}>{t('solucoes.tis.svg.cta')}</div>
                  </foreignObject>
                </svg>
              </a>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 422 405" fill="none" className="block w-full h-auto">
                <path d="M341.007 404.251C352.778 404.251 362.317 394.694 362.317 382.905V356.247C362.318 344.393 371.912 334.78 383.752 334.779H399.392C411.264 334.779 420.887 325.142 420.888 313.249V23.8965C420.887 10.9733 410.426 0.5 397.528 0.5H271.695C260.023 0.5 250.561 9.97645 250.561 21.6689V46.6709H250.552C250.29 58.1774 241.039 67.4624 229.557 67.7539L229 67.7607H228.998L23.3887 66.7617C10.7483 66.7624 0.500181 77.0252 0.5 89.6875V379.854C0.500217 392.778 10.9583 403.251 23.8594 403.251H23.8613L341.007 404.251Z" stroke="#F39325"/>
                <text className="corrido" x="50" y="100" fontSize="20" fontWeight="700" fill="#000000">{t('solucoes.tis.diff.title')}</text>
                <text className="corrido" x="49" y="138" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item1')}</text>
                <text className="corrido" x="63" y="159" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item1b')}</text>
                <text className="corrido" x="63" y="180" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item1c')}</text>
                <text className="corrido" x="49" y="212" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item2')}</text>
                <text className="corrido" x="63" y="233" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item2b')}</text>
                <text className="corrido" x="63" y="254" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item2c')}</text>
                <text className="corrido" x="49" y="286" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item3')}</text>
                <text className="corrido" x="63" y="307" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item3b')}</text>
                <text className="corrido" x="49" y="339" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item4')}</text>
                <text className="corrido" x="63" y="360" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item4b')}</text>
                <text className="corrido" x="63" y="381" fontSize="16" fontWeight="400" fill="#000000">{t('solucoes.tis.diff.item4c')}</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* DRS 360 Section - Desktop */}
      <div className="hidden lg:block">
        <DRS360Section className="[&_.grid]:lg:col-start-2 [&_.grid]:lg:col-span-10" />
      </div>

      {/* Mobile DRS 360 */}
      <section className="py-16 bg-background lg:hidden">
        <div className="drs-container">
          <span style={{ color: '#274B41', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '40px', borderRadius: '30px', background: '#69C0AC', padding: '5px 20px', display: 'inline-block', marginBottom: '1rem' }}>
            DRS 360
          </span>
          <h2 style={{ color: '#274B41', fontSize: '35px', fontStyle: 'normal', fontWeight: 900, lineHeight: '40px', marginBottom: '2rem' }}>
            {t('home.drs360section.title')}
          </h2>
          <Link to="/drs-360">
            <img src={bannerMobile} alt="DRS 360" className="w-full h-auto" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
