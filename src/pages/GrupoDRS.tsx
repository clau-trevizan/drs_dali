import { Layout } from '@/components/layout';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import imgGrupo from '/images/img-grupo.png';
import drs360Final from '@/assets/drs360-final.png';
import flutuante2 from '@/assets/flutuante2.svg';
import flutuante3 from '@/assets/flutante3.svg';
import arrowSlide from '@/assets/arrow-slide.svg';
import imgSlide from '@/assets/img-slide.png';
import { useState, useRef } from 'react';
import { SolutionModal, SolutionModalData } from '@/components/ui/SolutionModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DRS360Section } from '@/components/sections';

const solutionsData: SolutionModalData[] = [
  {
    title: "Monitoramento em tempo real",
    description: "Envios com geolocalização, temperatura, umidade e quedas para total visibilidade de suas operações.",
    diferenciais: [
      "Rastreamento GPS em tempo real",
      "Monitoramento de temperatura e umidade",
      "Detecção de impacto e quedas",
      "Alertas automáticos personalizáveis"
    ],
    destaques: [
      "Dashboard unificado para todas as operações",
      "Histórico completo de movimentações",
      "Integração com sistemas existentes"
    ]
  },
  {
    title: "Visão completa da operação",
    description: "Controle de entregas e recebimento em tempo real para gestão eficiente.",
    diferenciais: [
      "Painel de controle centralizado",
      "Visualização de todas as entregas",
      "Status em tempo real de cada envio",
      "Relatórios de performance"
    ],
    destaques: [
      "Interface intuitiva e responsiva",
      "Acesso multi-dispositivo",
      "Filtros avançados de busca"
    ]
  },
  {
    title: "Alertas inteligentes",
    description: "Notificações configuráveis para gestão proativa de exceções e desvios.",
    diferenciais: [
      "Alertas por temperatura fora do range",
      "Notificações de atraso de entrega",
      "Avisos de desvio de rota",
      "Escalação automática de incidentes"
    ],
    destaques: [
      "Configuração flexível por usuário",
      "Múltiplos canais de notificação",
      "Relatórios de ocorrências"
    ]
  },
  {
    title: "Histórico completo",
    description: "Rastreio completo de cada movimentação para auditoria e compliance.",
    diferenciais: [
      "Registro de todas as movimentações",
      "Logs de acesso e modificações",
      "Documentação automática",
      "Exportação de dados"
    ],
    destaques: [
      "Retenção de dados conforme regulamentação",
      "Busca avançada por período",
      "Relatórios personalizados"
    ]
  },
  {
    title: "Relatórios personalizados",
    description: "Relatórios prontos validados para compliance FDA, ANVISA e outras agências.",
    diferenciais: [
      "Templates pré-configurados",
      "Customização de relatórios",
      "Exportação em múltiplos formatos",
      "Agendamento automático"
    ],
    destaques: [
      "Conformidade com FDA e ANVISA",
      "Assinatura digital",
      "Versionamento de documentos"
    ]
  },
  {
    title: "Segurança da informação",
    description: "Protocolos rigorosos de segurança digital para proteção de dados sensíveis.",
    diferenciais: [
      "Criptografia de ponta a ponta",
      "Autenticação multi-fator",
      "Controle de acesso granular",
      "Backup automático"
    ],
    destaques: [
      "Conformidade com LGPD",
      "Certificações de segurança",
      "Monitoramento 24/7"
    ]
  }
];

const benefitsData: SolutionModalData[] = [
  {
    title: "Controle total",
    description: "Visibilidade completa de todas as suas operações em um único painel de controle.",
    diferenciais: [
      "Dashboard centralizado",
      "Métricas em tempo real",
      "Alertas personalizados"
    ],
    destaques: [
      "Redução de riscos operacionais",
      "Tomada de decisão baseada em dados"
    ]
  },
  {
    title: "Eficiência operacional",
    description: "Otimização de processos e redução de custos com automação inteligente.",
    diferenciais: [
      "Processos automatizados",
      "Redução de erros manuais",
      "Integração com sistemas"
    ],
    destaques: [
      "Aumento de produtividade",
      "Economia de recursos"
    ]
  },
  {
    title: "Compliance garantido",
    description: "Conformidade com regulamentações nacionais e internacionais.",
    diferenciais: [
      "FDA, ANVISA, EMA",
      "LGPD e GDPR",
      "ISO 27001/27701"
    ],
    destaques: [
      "Auditorias simplificadas",
      "Documentação completa"
    ]
  },
  {
    title: "Rastreabilidade total",
    description: "Histórico completo de cada movimentação para auditoria.",
    diferenciais: [
      "Logs detalhados",
      "Trilha de auditoria",
      "Exportação de dados"
    ],
    destaques: [
      "Transparência total",
      "Investigação facilitada"
    ]
  },
  {
    title: "Suporte dedicado",
    description: "Equipe especializada disponível para apoiar sua operação.",
    diferenciais: [
      "Atendimento 24/7",
      "Treinamento contínuo",
      "Consultoria técnica"
    ],
    destaques: [
      "Resolução rápida",
      "Parceria estratégica"
    ]
  },
  {
    title: "Integração simplificada",
    description: "Conexão fácil com seus sistemas existentes via APIs.",
    diferenciais: [
      "APIs documentadas",
      "Webhooks em tempo real",
      "Conectores prontos"
    ],
    destaques: [
      "Implementação ágil",
      "Escalabilidade"
    ]
  }
];

export default function GrupoDRS() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const benefitsCarouselRef = useRef<SwiperType | null>(null);
  const duplicatedCarouselRef = useRef<SwiperType | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [duplicatedActiveSlide, setDuplicatedActiveSlide] = useState(0);
  const [certActiveSlide, setCertActiveSlide] = useState(0);

  const openBenefitModal = (index: number) => {
    setSelectedSolution(benefitsData[index]);
    setModalOpen(true);
  };

  return (
    <Layout mainClassName="pagina-grupo-drs">
      {/* Section 1: Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            {/* Image Side - Left */}
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img
                src={imgGrupo}
                alt="Grupo DRS"
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>

            {/* Content Side - Right with teal background */}
            <div
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[1.5rem_1rem_4rem_2rem] lg:p-0 mt-[-50px] lg:mt-0 mobile-padding"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem] mobile-padding-2">
                {/* Tag DRS 360 */}
                <span
                  className="text-[16px] lg:text-[20px]"
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
                  DRS 360
                </span>
                <h1 className="text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>
                  Somos referência em pesquisa clínica, tecnologia e inovação aplicadas à saúde
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Text Blocks Section */}
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
              <div className="flex flex-col gap-6">
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  O Grupo DRS é um ecossistema integrado que impulsiona a evolução da saúde por meio de pesquisa clínica, armazenagem especializada, tecnologia avançada, programas de suporte ao paciente, soluções regulatórias e embalagens térmicas de alta performance.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Transformamos a jornada de medicamentos, dados e pessoas com precisão, governança e responsabilidade.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Com presença no Brasil, Argentina e Europa, operamos com uma infraestrutura que amplia nossa capacidade de inovação e assegura padrões internacionais de qualidade. Movemos produtos e entregamos confiança, rastreabilidade e adesão ao tratamento — gerando impacto real na vida dos pacientes.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Excelência validada, visão de futuro e compromisso absoluto com o cuidado.<br/>Essa é a nossa essência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Impacto e Capacidade Carousel Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            {/* Tag - spans 10 cols starting at 2 */}
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <span
                style={{
                  color: '#000',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '40px',
                  borderRadius: '30px',
                  background: '#69C0AC',
                  padding: '3px 30px',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  marginLeft: '10%'
                }}
              >
                Impacto e Capacidade
              </span>
            </div>

            {/* Carousel - 12 cols on desktop */}
            <div className="col-span-12">
              {/* Carousel with 3 items per view */}
              <div className="relative mt-8">
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={(swiper) => { benefitsCarouselRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveSlide(Math.floor(swiper.activeIndex / 3))}
                  spaceBetween={24}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  className="benefits-carousel"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3
                    }
                  }}
                >
                  {/* Slide 1 - +30 mil pacientes */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+30</text>
                      <text className="titulo2" x="168" y="116" fontSize="35" fontWeight="400" fill="#274B41">mil</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">pacientes</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">atendidos com suporte clínico e</text>
                      <text className="botao" x="57" y="220" fontSize="20" fontWeight="400" fill="#008C79">logístico</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 2 - +400 estudos clínicos */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+400</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">estudos clínicos</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">apoiados em todas as fases</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 3 - +50 mil kits clínicos */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+50</text>
                      <text className="titulo2" x="168" y="116" fontSize="35" fontWeight="400" fill="#274B41">mil</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">kits clínicos</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">montados e rastreados</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 4 - Cópia do Slide 1 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+30</text>
                      <text className="titulo2" x="168" y="116" fontSize="35" fontWeight="400" fill="#274B41">mil</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">pacientes</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">atendidos com suporte clínico e</text>
                      <text className="botao" x="57" y="220" fontSize="20" fontWeight="400" fill="#008C79">logístico</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 5 - Cópia do Slide 2 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+400</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">estudos clínicos</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">apoiados em todas as fases</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 6 - Cópia do Slide 3 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo1" x="57" y="116" fontSize="50" fontWeight="900" fill="#F39325">+50</text>
                      <text className="titulo2" x="168" y="116" fontSize="35" fontWeight="400" fill="#274B41">mil</text>
                      <text className="titulo2" x="57" y="151" fontSize="35" fontWeight="400" fill="#274B41">kits clínicos</text>
                      <text className="botao" x="57" y="195" fontSize="20" fontWeight="400" fill="#008C79">montados e rastreados</text>
                    </svg>
                  </SwiperSlide>
                </Swiper>

                {/* Navigation - prev, dots, next in a row */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => benefitsCarouselRef.current?.slidePrev()}
                    className="hover:opacity-80 transition-opacity rotate-180"
                  >
                    <img src={arrowSlide} alt="Previous" className="w-[66px] h-[50px]" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {[0, 1].map((dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => {
                          benefitsCarouselRef.current?.slideTo(dotIndex * 3);
                          setActiveSlide(dotIndex);
                        }}
                        className="w-3 h-3 hover:opacity-80 transition-opacity"
                        style={{
                          borderRadius: '5px',
                          backgroundColor: activeSlide === dotIndex ? '#274B41' : '#69C0AC'
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => benefitsCarouselRef.current?.slideNext()}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={arrowSlide} alt="Next" className="w-[66px] h-[50px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Missão, Visão e Valores Section */}
      <section className="py-16 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12 gap-8">
            {/* Block 1 - Missão/Visão SVG (5 columns) */}
            <div className="col-span-12 lg:col-start-2 lg:col-span-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 529 523" fill="none">
                <path d="M261.548 451.097V489.233C261.548 507.86 276.632 522.958 295.24 522.958H491.202C511.72 522.958 528.359 506.307 528.359 485.764V142.416C528.359 123.477 513.024 108.127 494.104 108.127H469.749C451.741 108.127 437.146 93.5132 437.146 75.4921V34.0006C437.146 15.2243 421.942 0 403.18 0H37.1565C16.6387 0 0 16.6507 0 37.1937V381.81C0 401.947 16.3081 418.271 36.4254 418.271H228.75C246.861 418.271 261.544 432.969 261.544 451.097H261.548Z" fill="#16493C"/>
                <text className="titulos" x="60" y="104" fontSize="35" fontWeight="900" fill="#ffffff">Missão</text>
                <text className="botao" x="60" y="145" fontSize="16" fontWeight="400" fill="#69C0AC">Promover o acesso à saúde com soluções</text>
                <text className="botao" x="60" y="165" fontSize="16" fontWeight="400" fill="#69C0AC">logísticas, clínicas e tecnológicas que gerem </text>
                <text className="botao" x="60" y="185" fontSize="16" fontWeight="400" fill="#69C0AC">valor, segurança e impacto social positivo.</text>
                <text className="titulos" x="60" y="255" fontSize="35" fontWeight="900" fill="#ffffff">Visão</text>
                <text className="botao" x="60" y="297" fontSize="16" fontWeight="400" fill="#69C0AC">Ser reconhecido como o ecossistema logístico</text>
                <text className="botao" x="60" y="318" fontSize="16" fontWeight="400" fill="#69C0AC"> de saúde mais confiável e inovador da América</text>
                <text className="botao" x="60" y="337" fontSize="16" fontWeight="400" fill="#69C0AC"> Latina.</text>
                <path d="M496.371 356.88H453.128C444.062 356.88 436.713 364.237 436.713 373.312V416.598C436.713 425.673 444.062 433.029 453.128 433.029H496.371C505.437 433.029 512.786 425.673 512.786 416.598V373.312C512.786 364.237 505.437 356.88 496.371 356.88Z" fill="#F19425"/>
              </svg>
            </div>

            {/* Block 2 - Valores (4 columns) */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-center" style={{ paddingLeft: '50px' }}>
              <h3 style={{ color: '#000', fontSize: '35px', fontStyle: 'normal', fontWeight: 900, lineHeight: '40px', marginBottom: '24px', textAlign: 'left' }}>
                Valores
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '28px', textAlign: 'left' }}>
                <li><strong>Ética e transparência</strong> – Integridade em cada decisão e processo.</li>
                <li><strong>Compromisso com a vida</strong> – O cuidado com o paciente está no centro de tudo.</li>
                <li><strong>Inovação com propósito</strong> – Tecnologia aplicada com foco em resultados reais.</li>
                <li><strong>Excelência técnica e humana</strong> – Rigor técnico com atendimento empático.</li>
                <li><strong>Sustentabilidade real</strong> – Responsabilidade ambiental e social.</li>
                <li><strong>Colaboração com foco no cuidado</strong> – Parcerias fortes, com escuta ativa.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tagline Section */}
      <section className="bg-white overflow-hidden relative" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        {/* Floating decorative image */}
        <img
          src={flutuante3}
          alt="Decorativo"
          className="hidden md:block animate-float"
          style={{ position: 'absolute', left: '55%', top: '10px', width: '420px', height: 'auto', zIndex: 0 }}
        />
        <div className="drs-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
              <p style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px', marginBottom: '60px' }}>
                Combinamos ciência, rastreabilidade e atendimento humano para transformar a jornada da saúde: do laboratório ao paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Nosso Diferencial Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
              <h3 style={{ color: '#000', fontSize: '30px', fontStyle: 'normal', fontWeight: 900, lineHeight: '30px', marginBottom: '16px' }}>
                Nosso diferencial é como trabalhamos
              </h3>
              <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '20px' }}>
                Integramos alta performance logística com inteligência de dados e cuidado clínico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Duplicated Carousel (without the tag text) */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Carousel - 12 cols on desktop */}
            <div className="col-span-12 grupo-drs-section7-carousel">
              {/* Carousel with 3 items per view */}
              <div className="relative mt-8">
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={(swiper) => { duplicatedCarouselRef.current = swiper; }}
                  onSlideChange={(swiper) => setDuplicatedActiveSlide(Math.floor(swiper.activeIndex / 3))}
                  spaceBetween={24}
                  slidesPerView={3}
                  slidesPerGroup={3}
                  className="benefits-carousel-duplicated"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 3
                    }
                  }}
                >
                  {/* Slide 1 - DRS 360 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">DRS 360</text>
                      <text className="botao" x="57" y="160" fontSize="20" fontWeight="400" fill="#008C79">plataforma proprietária com</text>
                      <text className="botao" x="57" y="185" fontSize="20" fontWeight="400" fill="#008C79">rastreamento em tempo real,</text>
                      <text className="botao" x="57" y="210" fontSize="20" fontWeight="400" fill="#008C79">relatórios inteligentes e gestão</text>
                      <text className="botao" x="57" y="235" fontSize="20" fontWeight="400" fill="#008C79">preditiva</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 2 - Ecossistema completo */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">Ecossistema</text>
                      <text className="titulo2" x="57" y="150" fontSize="35" fontWeight="400" fill="#274B41">completo:</text>
                      <text className="botao" x="57" y="190" fontSize="20" fontWeight="400" fill="#008C79">logística, tecnologia, suporte ao</text>
                      <text className="botao" x="57" y="215" fontSize="20" fontWeight="400" fill="#008C79">paciente e serviços regulatórios</text>
                      <text className="botao" x="57" y="240" fontSize="20" fontWeight="400" fill="#008C79">em uma única estrutura</text>
                      <text className="botao" x="57" y="265" fontSize="20" fontWeight="400" fill="#008C79">operacional.</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 3 - Especialização em saúde */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">Especialização</text>
                      <text className="titulo2" x="57" y="150" fontSize="35" fontWeight="400" fill="#274B41">em saúde:</text>
                      <text className="botao" x="57" y="190" fontSize="20" fontWeight="400" fill="#008C79">operação 100% regulada, com</text>
                      <text className="botao" x="57" y="215" fontSize="20" fontWeight="400" fill="#008C79">validações e protocolos para</text>
                      <text className="botao" x="57" y="240" fontSize="20" fontWeight="400" fill="#008C79">medicamentos sensíveis</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 4 - Cópia do Slide 1 (DRS 360) */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">DRS 360</text>
                      <text className="botao" x="57" y="160" fontSize="20" fontWeight="400" fill="#008C79">plataforma proprietária com</text>
                      <text className="botao" x="57" y="185" fontSize="20" fontWeight="400" fill="#008C79">rastreamento em tempo real,</text>
                      <text className="botao" x="57" y="210" fontSize="20" fontWeight="400" fill="#008C79">relatórios inteligentes e gestão</text>
                      <text className="botao" x="57" y="235" fontSize="20" fontWeight="400" fill="#008C79">preditiva</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 5 - Cópia do Slide 2 (Ecossistema completo) */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">Ecossistema</text>
                      <text className="titulo2" x="57" y="150" fontSize="35" fontWeight="400" fill="#274B41">completo:</text>
                      <text className="botao" x="57" y="190" fontSize="20" fontWeight="400" fill="#008C79">logística, tecnologia, suporte ao</text>
                      <text className="botao" x="57" y="215" fontSize="20" fontWeight="400" fill="#008C79">paciente e serviços regulatórios</text>
                      <text className="botao" x="57" y="240" fontSize="20" fontWeight="400" fill="#008C79">em uma única estrutura</text>
                      <text className="botao" x="57" y="265" fontSize="20" fontWeight="400" fill="#008C79">operacional.</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 6 - Cópia do Slide 3 (Especialização em saúde) */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <text className="titulo2" x="57" y="116" fontSize="35" fontWeight="400" fill="#274B41">Especialização</text>
                      <text className="titulo2" x="57" y="150" fontSize="35" fontWeight="400" fill="#274B41">em saúde:</text>
                      <text className="botao" x="57" y="190" fontSize="20" fontWeight="400" fill="#008C79">operação 100% regulada, com</text>
                      <text className="botao" x="57" y="215" fontSize="20" fontWeight="400" fill="#008C79">validações e protocolos para</text>
                      <text className="botao" x="57" y="240" fontSize="20" fontWeight="400" fill="#008C79">medicamentos sensíveis</text>
                    </svg>
                  </SwiperSlide>
                </Swiper>

                {/* Navigation - prev, dots, next in a row */}
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => duplicatedCarouselRef.current?.slidePrev()}
                    className="hover:opacity-80 transition-opacity rotate-180"
                  >
                    <img src={arrowSlide} alt="Previous" className="w-[66px] h-[50px]" />
                  </button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {[0, 1].map((dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => {
                          duplicatedCarouselRef.current?.slideTo(dotIndex * 3);
                          setDuplicatedActiveSlide(dotIndex);
                        }}
                        className="w-3 h-3 hover:opacity-80 transition-opacity"
                        style={{
                          borderRadius: '5px',
                          backgroundColor: duplicatedActiveSlide === dotIndex ? '#274B41' : '#69C0AC'
                        }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => duplicatedCarouselRef.current?.slideNext()}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={arrowSlide} alt="Next" className="w-[66px] h-[50px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7b: Nosso Time (moved from last) */}
      <section className="py-16 bg-white overflow-hidden relative grupo-drs-svg">
        <div className="drs-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-12">
            {/* Image Side - Left (4 columns) */}
            <div className="col-span-12 lg:col-span-4 flex items-end justify-center lg:justify-end grupo-drs-section8-image-wrapper" style={{ marginRight: '-50px' }}>
              <img
                src="/images/img-nosso-time.png"
                alt="Nosso Time"
                className="w-full max-w-[400px] h-auto object-contain grupo-drs-section8-image"
              />
            </div>

            {/* SVG Side - Right (8 columns) - Desktop */}
            <div className="hidden lg:block col-span-12 lg:col-span-8" style={{ textAlign: 'left' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 847 564" fill="none">
                <path d="M71.8609 204.7L33.7256 204.696C15.0985 204.696 1.63619e-05 189.612 1.71753e-05 171.004L2.3026e-05 37.1558C2.39229e-05 16.638 16.6508 -3.62957e-05 37.1938 -3.53978e-05L704.584 0.000298951C723.523 0.000299778 738.873 15.3338 738.873 34.2543L738.873 58.6092C738.873 76.6171 753.487 91.2114 771.508 91.2114L812.999 91.2114C831.776 91.2114 847 106.416 847 125.178L847 526.773C847 547.29 830.349 563.929 809.806 563.929L141.148 563.929C121.011 563.929 104.687 547.621 104.687 527.504L104.687 397.172L104.687 237.493C104.687 219.383 89.9892 204.7 71.8609 204.7Z" fill="#F39325"/>
                <text className="titulos" x="180" y="144" fontSize="30" fontWeight="900" fill="#000000">Nosso time</text>
                <text className="botao" x="180" y="190" fontSize="20" fontWeight="400" fill="#000000">Pessoas que cuidam de pessoas, com excelência e empatia.</text>
                <text className="botao" x="180" y="238" fontSize="20" fontWeight="400" fill="#000000">Nosso time multidisciplinar reúne especialistas em logística,</text>
                <text className="botao" x="180" y="266" fontSize="20" fontWeight="400" fill="#000000">farmacêuticos, enfermeiros, cientistas de dados e</text>
                <text className="botao" x="180" y="294" fontSize="20" fontWeight="400" fill="#000000">desenvolvedores de tecnologia. Todos alinhados por um</text>
                <text className="botao" x="180" y="322" fontSize="20" fontWeight="400" fill="#000000">propósito comum: tornar o acesso à saúde mais eficiente,</text>
                <text className="botao" x="180" y="350" fontSize="20" fontWeight="400" fill="#000000">seguro e humano.</text>
                <text className="botao" x="180" y="393" fontSize="20" fontWeight="400" fill="#000000">Nossa cultura é colaborativa, com foco na escuta ativa e</text>
                <text className="botao" x="180" y="420" fontSize="20" fontWeight="400" fill="#000000">soluções centradas em pessoas.</text>
                <a href="https://vagasdrsgroup.gupy.io/" target="_blank">
                  <rect x="211" y="450" width="285" height="50" rx="10" fill="#274B41" style={{ transform: 'translateX(-30px)' }}/>
                  <text x="246" y="482" fontSize="20" fontWeight="400" fill="#ffffff" style={{ transform: 'translateX(-30px)' }}>Faça parte do nosso time!</text>
                </a>
              </svg>
            </div>

            {/* SVG Side - Mobile */}
            <div className="block lg:hidden col-span-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 713" fill="none" className="w-full h-auto">
                <path d="M56.1159 655.315L56.1121 685.886C56.1121 700.819 44.0226 712.922 29.1075 712.922H-14.2189C-30.6643 712.922 -44 699.574 -44 683.106L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.97623C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.664 9.44393e-05 408 13.3482 408 29.8165L408 599.77C408 615.914 394.929 629 378.804 629L210.385 629H82.4003C67.8846 629 56.1159 640.782 56.1159 655.315Z" fill="#F39325"></path>
                <text className="titulos" x="40" y="120" fontSize="30" fontWeight="900" fill="#000000">Nosso time</text>
                <text className="botao2" x="40" y="180" fontSize="20" fontWeight="400" fill="#000000">Pessoas que cuidam de pessoas,</text>
                <text className="botao2" x="40" y="210" fontSize="20" fontWeight="400" fill="#000000"> com excelência e empatia.</text>
                <text className="botao2" x="40" y="270" fontSize="20" fontWeight="400" fill="#000000">Nosso time multidisciplinar reúne</text>
                <text className="botao2" x="40" y="298" fontSize="20" fontWeight="400" fill="#000000">especialistas em logística, </text>
                <text className="botao2" x="40" y="328" fontSize="20" fontWeight="400" fill="#000000">farmacêuticos, enfermeiros, cientistas</text>
                <text className="botao2" x="40" y="356" fontSize="20" fontWeight="400" fill="#000000"> de dados e desenvolvedores de</text>
                <text className="botao2" x="40" y="384" fontSize="20" fontWeight="400" fill="#000000">tecnologia. Todos alinhados por um</text>
                <text className="botao2" x="40" y="415" fontSize="20" fontWeight="400" fill="#000000">propósito comum: tornar o acesso à</text>
                <text className="botao2" x="40" y="445" fontSize="20" fontWeight="400" fill="#000000">saúde mais eficiente, seguro e humano.</text>
                <a href="https://vagasdrsgroup.gupy.io/" target="_blank">
                  <rect x="40" y="485" width="347" height="70" rx="10" fill="#274B41" style={{ cursor: 'pointer' }}></rect>
                  <path d="M84.1116 494.727L89.6449 500.213L89.6911 500.256C89.8763 500.439 89.984 500.682 90 500.968L89.9991 501.064C89.9856 501.29 89.899 501.507 89.7284 501.701L89.6638 501.767L84.1116 507.274C83.701 507.681 83.0371 507.681 82.6265 507.274C82.2135 506.864 82.2135 506.198 82.6265 505.789L86.4601 501.986L71.0524 501.987C70.4721 501.987 70 501.519 70 500.939C70 500.359 70.4721 499.891 71.0523 499.891L86.3364 499.89L82.6265 496.212C82.2135 495.802 82.2135 495.136 82.6265 494.727C83.0371 494.319 83.701 494.319 84.1116 494.727Z" fill="white" style={{ transform: 'translateY(18px)' }}></path>
                  <text className="botao" x="110" y="525" fontSize="16" fontWeight="900" fill="#fff">Faça parte do nosso time</text>
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
              <h3 style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px', marginBottom: '24px' }}>
                Onde atuamos
              </h3>
              <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px' }}>
                Oferecemos soluções completas que conectam pesquisa clínica, tecnologia e cuidado para a saúde. Atuamos como parceiros estratégicos em toda a jornada, garantindo segurança, eficiência e atendimento humanizado em cada etapa do processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Nossa atuação */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
              <p style={{ color: '#000', fontSize: '40px', fontStyle: 'normal', fontWeight: 900, lineHeight: '45px' }}>
                Nossa atuação se divide em três áreas principais:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 3 Solution Blocks (without nossas funcionalidades text) */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              {/* 3 Solution Blocks Grid */}
              <div className="grid grid-cols-12 gap-6 mt-8">
                {/* Block 1 - CTS */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulo2" x="57" y="100" fontSize="35" fontWeight="400" fill="#274B41">Clinical Trial</text>
                    <text className="titulo2" x="57" y="134" fontSize="35" fontWeight="400" fill="#274B41">Services - CTS:</text>
                    <text className="botao" x="57" y="180" fontSize="20" fontWeight="400" fill="#008C79">soluções integradas e reguladas</text>
                    <text className="botao" x="57" y="205" fontSize="20" fontWeight="400" fill="#008C79">para estudos clínicos, com total</text>
                    <text className="botao" x="57" y="230" fontSize="20" fontWeight="400" fill="#008C79">rastreabilidade e compliance</text>
                    <text className="botao" x="57" y="255" fontSize="20" fontWeight="400" fill="#008C79">internacional.</text>
                  </svg>
                </div>

                {/* Block 2 - PCS */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulo2" x="57" y="100" fontSize="35" fontWeight="400" fill="#274B41">Patient Centric</text>
                    <text className="titulo2" x="57" y="134" fontSize="35" fontWeight="400" fill="#274B41">Services - PCS:</text>
                    <text className="botao" x="57" y="180" fontSize="20" fontWeight="400" fill="#008C79">terapias e suporte ao paciente,</text>
                    <text className="botao" x="57" y="205" fontSize="20" fontWeight="400" fill="#008C79">com entregas domiciliares,</text>
                    <text className="botao" x="57" y="230" fontSize="20" fontWeight="400" fill="#008C79">adesão ao tratamento e</text>
                    <text className="botao" x="57" y="255" fontSize="20" fontWeight="400" fill="#008C79">atendimento especializado.</text>
                  </svg>
                </div>

                {/* Block 3 - TIS */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '0' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                    <text className="titulo2" x="57" y="100" fontSize="35" fontWeight="400" fill="#274B41">Thermo</text>
                    <text className="titulo2" x="57" y="134" fontSize="35" fontWeight="400" fill="#274B41">Integrated</text>
                    <text className="titulo2" x="57" y="170" fontSize="35" fontWeight="400" fill="#274B41">Services - TIS:</text>
                    <text className="botao" x="57" y="205" fontSize="20" fontWeight="400" fill="#008C79">cadeia fria inteligente e</text>
                    <text className="botao" x="57" y="230" fontSize="20" fontWeight="400" fill="#008C79">sustentável para produtos</text>
                    <text className="botao" x="57" y="255" fontSize="20" fontWeight="400" fill="#008C79">sensíveis, com alto padrão</text>
                    <text className="botao" x="57" y="280" fontSize="20" fontWeight="400" fill="#008C79">de segurança.</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: DRS 360 Platform Info (moved after Section 11) */}
      <section className="bg-white" style={{ paddingTop: '30px', paddingBottom: '4rem' }}>
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-3 lg:col-span-8" style={{ textAlign: 'left' }}>
              <p style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '25px', marginBottom: '32px' }}>
                Tudo isso é potencializado pela nossa plataforma proprietária, a DRS 360, que monitora em tempo real, gera alertas inteligentes e oferece controle total da operação. Com ela, sponsors, centros de pesquisa e operadoras acompanham cada etapa com transparência e agilidade.
              </p>
              <a
                href="/solucoes"
                className="drs-btn inline-flex items-center gap-2"
              >
                <ArrowIcon className="w-5 h-4" />
                <span>Conheça todos os nossos serviços</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating decorative element between Section 12 and 13 */}
      <div className="relative bg-white">
        <img
          src="/images/flutuante4.svg"
          alt="Decorativo"
          className="hidden md:block animate-float"
          style={{ position: 'absolute', right: '10%', top: '-50px', width: '250px', height: 'auto', zIndex: 10 }}
        />
      </div>

      {/* Section: Certificações e Conformidades Section with Swiper */}
      <section className="py-8 md:py-12 bg-background">
        <div className="drs-container">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left side - Swiper content box - 5 cols on desktop, skip 2 */}
            <div
              className="col-span-12 lg:col-start-3 lg:col-span-5 relative min-h-[470px] lg:min-h-[550px] flex flex-wrap justify-center items-center p-[4rem_1rem_4rem_2rem] lg:p-0 carousel-container-offset mobile-padding-3"
            >
              {/* Mobile background - only visible on screens < 1024px */}
              <div
                className="absolute inset-0 lg:hidden grupo-drs-section13-bg"
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
                onSlideChange={(swiper) => setCertActiveSlide(swiper.activeIndex)}
                spaceBetween={24}
                slidesPerView={1}
                className="drs360-swiper h-full w-full mt-0 lg:mt-[-100px] relative z-10"
              >
                <SwiperSlide>
                  <div className="h-full flex flex-col p-4 lg:p-0">
                    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>
                      Certificações e Conformidades
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px] mb-4" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      Excelência reconhecida, com qualidade validada em cada etapa.
                    </p>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] lg:leading-[22px]" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      A DRS opera em conformidade com os mais altos padrões regulatórios nacionais e internacionais, garantindo segurança, rastreabilidade e confiança em toda a cadeia da saúde
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-full flex flex-col p-4 lg:p-0">
                    <h3 className="mb-4 text-[24px] md:text-[28px] lg:text-[35px] leading-[30px] md:leading-[35px] lg:leading-[40px]" style={{ color: '#FFF', fontWeight: 900 }}>
                      Certificações e Conformidades
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[24px] lg:leading-[25px] mb-4" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      Excelência reconhecida, com qualidade validada em cada etapa.
                    </p>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[21px] lg:leading-[22px]" style={{ color: '#69C0AC', fontWeight: 400 }}>
                      A DRS opera em conformidade com os mais altos padrões regulatórios nacionais e internacionais, garantindo segurança, rastreabilidade e confiança em toda a cadeia da saúde
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Custom navigation buttons at bottom left - with margin-left on mobile */}
              <div className="flex gap-4 mt-[120px] lg:mt-4 lg:absolute lg:bottom-12 lg:left-16 justify-center lg:justify-start relative z-10 pl-0 lg:pl-[60px] ml-[-90px] lg:ml-0 grupo-drs-section13-arrows margin-top-mobile">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="transition-opacity rotate-180"
                  style={{ opacity: certActiveSlide === 0 ? 0.6 : 1 }}
                >
                  <img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="transition-opacity"
                  style={{ opacity: certActiveSlide === 1 ? 0.6 : 1 }}
                >
                  <img src={arrowSlide} alt="Next" className="w-[50px] h-[38px] lg:w-[66px] lg:h-[50px]" />
                </button>
              </div>
            </div>

            {/* Right side - Fixed image - 3 cols on desktop with max-width 90% */}
            <div className="col-span-12 lg:col-span-3 hidden lg:flex justify-center h-full pb-4 lg:pb-[70px]">
              <img
                src="/images/certificacoes.png"
                alt="Certificações"
                className="rounded-3xl self-end"
                style={{ maxWidth: '90%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nossa Rede Mundial Section with Map */}
      <DRS360Section
        tagText="nossa rede mundial"
        showTitle={false}
        hasLink={false}
        uppercaseTag={true}
        useWorldMap={true}
      />

      <SolutionModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        data={selectedSolution}
      />
    </Layout>
  );
}
