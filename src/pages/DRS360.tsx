import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import drs360Hero from '@/assets/drs-360.png';
import drs360Final from '@/assets/drs360-final.png';
import img360 from '@/assets/img-360.png';
import cantoVerde from '@/assets/canto-verde.jpg';
import flutuante2 from '@/assets/flutuante2.svg';
import arrowSlide from '@/assets/arrow-slide.svg';
import { useState, useRef } from 'react';
import { SolutionModal, SolutionModalData } from '@/components/ui/SolutionModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function DRS360() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionModalData | null>(null);
  const benefitsCarouselRef = useRef<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const functionalitiesSwiperRef = useRef<SwiperType | null>(null);
  const [activeFuncSlide, setActiveFuncSlide] = useState(0);

  const openModal = (index: number) => {
    setSelectedSolution(solutionsData[index]);
    setModalOpen(true);
  };

  const openBenefitModal = (index: number) => {
    setSelectedSolution(benefitsData[index]);
    setModalOpen(true);
  };

  return (
    <Layout>
      <div className="drs360-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            {/* Image Side - Left */}
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img 
                src={drs360Hero} 
                alt="DRS 360" 
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>

            {/* Content Side - Right with teal background */}
            <div 
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
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
                  Conectando tecnologia, logística e cuidado em tempo real
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Blocks Section */}
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
                  O DRS 360 é a plataforma digital desenvolvida pelo Grupo DRS para oferecer gestão completa e rastreabilidade em tempo real de cada operação.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 400, lineHeight: '1.5' }}>
                  Por meio do DRS 360, biofarmacêuticas, CROs, centros de pesquisa, operadoras de saúde e parceiros logísticos monitoram e gerenciam seus próprios projetos, com total segurança, autonomia e visibilidade — sempre dentro de um ambiente exclusivo e protegido.
                </p>
                <p style={{ color: '#000', fontSize: '20px', fontWeight: 900, lineHeight: '1.5' }}>
                  Integrando dados, tecnologia e operação, o DRS 360 proporciona controle real, precisão contínua e cuidado em cada entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Funcionalidades Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <span 
                style={{ 
                  color: '#000', 
                  fontSize: '20px', 
                  fontStyle: 'normal', 
                  fontWeight: 400, 
                  lineHeight: '40px',
                  borderRadius: '30px',
                  background: '#F39325',
                  padding: '3px 30px',
                  display: 'inline-block',
                  textTransform: 'uppercase'
                }}
              >
                NOSSAS FUNCIONALIDADES
              </span>
              
              {/* Desktop: 6 Solution Blocks Grid */}
              <div className="hidden lg:grid grid-cols-12 gap-6 mt-8">
                {/* Block 1 - Monitoramento em tempo real */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="99" cy="85" r="50" fill="#F39325"/>
                    <path d="M83.6148 59.3589C77.9738 59.3589 73.3584 63.9743 73.3584 69.6153C73.3584 77.564 83.6148 87.564 83.6148 87.564C83.6148 87.564 93.8712 77.564 93.8712 69.6153C93.8712 63.9743 89.2558 59.3589 83.6148 59.3589Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M83.6156 72.9486C85.4565 72.9486 86.9489 71.4563 86.9489 69.6153C86.9489 67.7744 85.4565 66.282 83.6156 66.282C81.7746 66.282 80.2822 67.7744 80.2822 69.6153C80.2822 71.4563 81.7746 72.9486 83.6156 72.9486Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.7434 85H78.487C77.0708 85 75.9229 86.148 75.9229 87.5641V97.8205C75.9229 99.2366 77.0708 100.385 78.487 100.385H88.7434C90.1595 100.385 91.3075 99.2366 91.3075 97.8205V87.5641C91.3075 86.148 90.1595 85 88.7434 85Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M75.9229 92.6923H91.3075" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M104.128 87.564V100.385M111.82 82.4358V100.385M119.513 77.3076V100.385" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="49" y="175" fontSize="20" fontWeight="400" fill="#fff">Rastreamento em tempo real de</text>
                    <text className="botao" x="49" y="198" fontSize="20" fontWeight="400" fill="#fff">envios com geolocalização,</text>
                    <text className="botao" x="49" y="225" fontSize="20" fontWeight="400" fill="#fff">temperatura, umidade, sensores</text>
                    <text className="botao" x="49" y="249" fontSize="20" fontWeight="400" fill="#fff">de luminosidade e queda.</text>
                  </svg>
                </div>
                
                {/* Block 2 - Visão completa */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '65px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="85" cy="89" r="50" fill="#F39325"/>
                    <path d="M65 76.7692L83.9767 62L102.953 76.7692V104.462C102.953 105.93 102.354 107.339 101.286 108.378C100.218 109.416 98.7703 110 97.2605 110H70.693C69.1831 110 67.7351 109.416 66.6674 108.378C65.5998 107.339 65 105.93 65 104.462V76.7692Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M72.8135 84.3256H95.1391M72.8135 95.4884H95.1391" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M78.3949 80.9767H73.9298C73.3133 80.9767 72.8135 81.4765 72.8135 82.093V86.5581C72.8135 87.1746 73.3133 87.6744 73.9298 87.6744H78.3949C79.0114 87.6744 79.5112 87.1746 79.5112 86.5581V82.093C79.5112 81.4765 79.0114 80.9767 78.3949 80.9767Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M89.558 92.1395H85.0928C84.4763 92.1395 83.9766 92.6393 83.9766 93.2558V97.7209C83.9766 98.3374 84.4763 98.8372 85.0928 98.8372H89.558C90.1745 98.8372 90.6742 98.3374 90.6742 97.7209V93.2558C90.6742 92.6393 90.1745 92.1395 89.558 92.1395Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M92.9072 80.9767C97.4999 76.7907 101.71 74.6977 106.303 74.2791" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="36" y="178" fontSize="20" fontWeight="400" fill="#fff">Visão completa de estoque e</text>
                    <text className="botao" x="36" y="203" fontSize="20" fontWeight="400" fill="#fff">controle de entradas e saídas em</text>
                    <text className="botao" x="36" y="228" fontSize="20" fontWeight="400" fill="#fff">tempo real — no armazém principal</text>
                    <text className="botao" x="36" y="253" fontSize="20" fontWeight="400" fill="#fff">ou em unidades remotas, como</text>
                    <text className="botao" x="36" y="278" fontSize="20" fontWeight="400" fill="#fff">centros de pesquisa.</text>
                  </svg>
                </div>
                
                {/* Block 3 - Alertas inteligentes */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '130px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="100" cy="91" r="50" fill="#F39325"/>
                    <path d="M99.9994 67.923L74.3584 111.513H125.64L99.9994 67.923Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M100 85.8717V96.1281" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M99.9996 106.385C101.416 106.385 102.564 105.237 102.564 103.82C102.564 102.404 101.416 101.256 99.9996 101.256C98.5835 101.256 97.4355 102.404 97.4355 103.82C97.4355 105.237 98.5835 106.385 99.9996 106.385Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="49" y="180" fontSize="20" fontWeight="400" fill="#fff">Alertas inteligentes e configuráveis</text>
                    <text className="botao" x="49" y="205" fontSize="20" fontWeight="400" fill="#fff"> para gestão proativa — incluindo</text>
                    <text className="botao" x="49" y="230" fontSize="20" fontWeight="400" fill="#fff">temperatura, desvios operacionais e</text>
                    <text className="botao" x="49" y="255" fontSize="20" fontWeight="400" fill="#fff">necessidade de reabastecimento.</text>
                  </svg>
                </div>
                
                {/* Block 4 - Histórico completo */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '-110px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="91" cy="85" r="50" fill="#F39325"/>
                    <path d="M91.7688 70.6409C94.6011 70.6409 96.897 68.345 96.897 65.5127C96.897 62.6805 94.6011 60.3845 91.7688 60.3845C88.9366 60.3845 86.6406 62.6805 86.6406 65.5127C86.6406 68.345 88.9366 70.6409 91.7688 70.6409Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M91.7694 70.641V80.8974M76.3848 93.7179V83.4615H107.154V93.7179M91.7694 83.4615V93.7179" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M76.385 106.538C79.2173 106.538 81.5132 104.242 81.5132 101.41C81.5132 98.578 79.2173 96.282 76.385 96.282C73.5528 96.282 71.2568 98.578 71.2568 101.41C71.2568 104.242 73.5528 106.538 76.385 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M91.7688 106.538C94.6011 106.538 96.897 104.242 96.897 101.41C96.897 98.578 94.6011 96.282 91.7688 96.282C88.9366 96.282 86.6406 98.578 86.6406 101.41C86.6406 104.242 88.9366 106.538 91.7688 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M107.154 106.538C109.986 106.538 112.282 104.242 112.282 101.41C112.282 98.578 109.986 96.282 107.154 96.282C104.321 96.282 102.025 98.578 102.025 101.41C102.025 104.242 104.321 106.538 107.154 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="42" y="174" fontSize="20" fontWeight="400" fill="#fff">Todo seu projeto em um único</text>
                    <text className="botao" x="42" y="199" fontSize="20" fontWeight="400" fill="#fff">ambiente: importação, estoque,</text>
                    <text className="botao" x="42" y="224" fontSize="20" fontWeight="400" fill="#fff"> fornecimentos, logística e faturamento</text>
                    <text className="botao" x="42" y="249" fontSize="20" fontWeight="400" fill="#fff"> reunidos com total visibilidade e</text>
                    <text className="botao" x="42" y="274" fontSize="20" fontWeight="400" fill="#fff">controle.</text>
                  </svg>
                </div>
                
                {/* Block 5 - Relatórios personalizados */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '-45px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="99" cy="85" r="50" fill="#F39325"/>
                    <path d="M88.7432 64.4871V105.513" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.7436 73.4615C90.8678 73.4615 92.5898 71.7395 92.5898 69.6153C92.5898 67.4911 90.8678 65.7692 88.7436 65.7692C86.6194 65.7692 84.8975 67.4911 84.8975 69.6153C84.8975 71.7395 86.6194 73.4615 88.7436 73.4615Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.7436 88.8461C90.8678 88.8461 92.5898 87.1241 92.5898 85C92.5898 82.8758 90.8678 81.1538 88.7436 81.1538C86.6194 81.1538 84.8975 82.8758 84.8975 85C84.8975 87.1241 86.6194 88.8461 88.7436 88.8461Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M88.7436 104.231C90.8678 104.231 92.5898 102.509 92.5898 100.385C92.5898 98.2604 90.8678 96.5385 88.7436 96.5385C86.6194 96.5385 84.8975 98.2604 84.8975 100.385C84.8975 102.509 86.6194 104.231 88.7436 104.231Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M109.256 69.6154L119.513 72.1795V82.4359C119.513 90.1282 114.385 95.2564 109.256 97.8205C104.128 95.2564 99 90.1282 99 82.4359V72.1795L109.256 69.6154Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M106.692 84.9999L110.539 88.8461L119.513 81.923" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="50" y="174" fontSize="20" fontWeight="400" fill="#fff">Histórico completo de cada</text>
                    <text className="botao" x="50" y="199" fontSize="20" fontWeight="400" fill="#fff">movimentação com alçadas de</text>
                    <text className="botao" x="50" y="224" fontSize="20" fontWeight="400" fill="#fff">permissão e registro de atividades</text>
                    <text className="botao" x="50" y="249" fontSize="20" fontWeight="400" fill="#fff">(Compliance FDA, EMA &amp; ANVISA)</text>
                  </svg>
                </div>
                
                {/* Block 6 - Segurança da informação */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4" style={{ marginTop: '20px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                    <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                    <circle cx="93" cy="79" r="50" fill="#F39325"/>
                    <path d="M81.4622 55.923H99.4109L112.231 68.7435V96.9486C112.231 98.3087 111.691 99.6131 110.729 100.575C109.768 101.537 108.463 102.077 107.103 102.077H81.4622C80.1021 102.077 78.7977 101.537 77.836 100.575C76.8743 99.6131 76.334 98.3087 76.334 96.9486V61.0512C76.334 59.6911 76.8743 58.3867 77.836 57.425C78.7977 56.4633 80.1021 55.923 81.4622 55.923Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M99.4102 55.923V68.7435H112.231" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M94.5377 85.923V90.1379M81.8926 88.0305H94.5377H107.183" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M81.8941 98.0622C83.4072 98.0622 84.6338 96.8356 84.6338 95.3225C84.6338 93.8094 83.4072 92.5828 81.8941 92.5828C80.3809 92.5828 79.1543 93.8094 79.1543 95.3225C79.1543 96.8356 80.3809 98.0622 81.8941 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M94.5386 98.0622C96.0517 98.0622 97.2784 96.8356 97.2784 95.3225C97.2784 93.8094 96.0517 92.5828 94.5386 92.5828C93.0255 92.5828 91.7988 93.8094 91.7988 95.3225C91.7988 96.8356 93.0255 98.0622 94.5386 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M107.183 98.0622C108.696 98.0622 109.923 96.8356 109.923 95.3225C109.923 93.8094 108.696 92.5828 107.183 92.5828C105.67 92.5828 104.443 93.8094 104.443 95.3225C104.443 96.8356 105.67 98.0622 107.183 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <text className="botao" x="42" y="168" fontSize="20" fontWeight="400" fill="#fff">Relatórios gerenciais visões</text>
                    <text className="botao" x="42" y="193" fontSize="20" fontWeight="400" fill="#fff">dinâmicas de volume, projetos,</text>
                    <text className="botao" x="42" y="218" fontSize="20" fontWeight="400" fill="#fff"> períodos, rotas e muito mais.</text>
                    <text className="botao" x="42" y="243" fontSize="20" fontWeight="400" fill="#fff">OPEN API para integração de</text>
                    <text className="botao" x="42" y="268" fontSize="20" fontWeight="400" fill="#fff"> processos ou exportação de dados.</text>
                  </svg>
                </div>
              </div>

              {/* Mobile: Carousel for 6 Solution Blocks */}
              <div className="lg:hidden mt-8">
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={(swiper) => { functionalitiesSwiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveFuncSlide(swiper.activeIndex)}
                  spaceBetween={16}
                  slidesPerView={1}
                  className="w-full"
                >
                  {/* Slide 1 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="99" cy="85" r="50" fill="#F39325"/>
                        <path d="M83.6148 59.3589C77.9738 59.3589 73.3584 63.9743 73.3584 69.6153C73.3584 77.564 83.6148 87.564 83.6148 87.564C83.6148 87.564 93.8712 77.564 93.8712 69.6153C93.8712 63.9743 89.2558 59.3589 83.6148 59.3589Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M83.6156 72.9486C85.4565 72.9486 86.9489 71.4563 86.9489 69.6153C86.9489 67.7744 85.4565 66.282 83.6156 66.282C81.7746 66.282 80.2822 67.7744 80.2822 69.6153C80.2822 71.4563 81.7746 72.9486 83.6156 72.9486Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M88.7434 85H78.487C77.0708 85 75.9229 86.148 75.9229 87.5641V97.8205C75.9229 99.2366 77.0708 100.385 78.487 100.385H88.7434C90.1595 100.385 91.3075 99.2366 91.3075 97.8205V87.5641C91.3075 86.148 90.1595 85 88.7434 85Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M75.9229 92.6923H91.3075" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M104.128 87.564V100.385M111.82 82.4358V100.385M119.513 77.3076V100.385" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="49" y="175" fontSize="20" fontWeight="400" fill="#fff">Rastreamento em tempo real de</text>
                        <text className="botao" x="49" y="198" fontSize="20" fontWeight="400" fill="#fff">envios com geolocalização,</text>
                        <text className="botao" x="49" y="225" fontSize="20" fontWeight="400" fill="#fff">temperatura, umidade, sensores</text>
                        <text className="botao" x="49" y="249" fontSize="20" fontWeight="400" fill="#fff">de luminosidade e queda.</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                  
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="85" cy="89" r="50" fill="#F39325"/>
                        <path d="M65 76.7692L83.9767 62L102.953 76.7692V104.462C102.953 105.93 102.354 107.339 101.286 108.378C100.218 109.416 98.7703 110 97.2605 110H70.693C69.1831 110 67.7351 109.416 66.6674 108.378C65.5998 107.339 65 105.93 65 104.462V76.7692Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M72.8135 84.3256H95.1391M72.8135 95.4884H95.1391" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M78.3949 80.9767H73.9298C73.3133 80.9767 72.8135 81.4765 72.8135 82.093V86.5581C72.8135 87.1746 73.3133 87.6744 73.9298 87.6744H78.3949C79.0114 87.6744 79.5112 87.1746 79.5112 86.5581V82.093C79.5112 81.4765 79.0114 80.9767 78.3949 80.9767Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M89.558 92.1395H85.0928C84.4763 92.1395 83.9766 92.6393 83.9766 93.2558V97.7209C83.9766 98.3374 84.4763 98.8372 85.0928 98.8372H89.558C90.1745 98.8372 90.6742 98.3374 90.6742 97.7209V93.2558C90.6742 92.6393 90.1745 92.1395 89.558 92.1395Z" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M92.9072 80.9767C97.4999 76.7907 101.71 74.6977 106.303 74.2791" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="36" y="178" fontSize="20" fontWeight="400" fill="#fff">Visão completa de estoque e</text>
                        <text className="botao" x="36" y="203" fontSize="20" fontWeight="400" fill="#fff">controle de entradas e saídas em</text>
                        <text className="botao" x="36" y="228" fontSize="20" fontWeight="400" fill="#fff">tempo real — no armazém principal</text>
                        <text className="botao" x="36" y="253" fontSize="20" fontWeight="400" fill="#fff">ou em unidades remotas, como</text>
                        <text className="botao" x="36" y="278" fontSize="20" fontWeight="400" fill="#fff">centros de pesquisa.</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                  
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="100" cy="91" r="50" fill="#F39325"/>
                        <path d="M99.9994 67.923L74.3584 111.513H125.64L99.9994 67.923Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M100 85.8717V96.1281" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M99.9996 106.385C101.416 106.385 102.564 105.237 102.564 103.82C102.564 102.404 101.416 101.256 99.9996 101.256C98.5835 101.256 97.4355 102.404 97.4355 103.82C97.4355 105.237 98.5835 106.385 99.9996 106.385Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="49" y="180" fontSize="20" fontWeight="400" fill="#fff">Alertas inteligentes e configuráveis</text>
                        <text className="botao" x="49" y="205" fontSize="20" fontWeight="400" fill="#fff"> para gestão proativa — incluindo</text>
                        <text className="botao" x="49" y="230" fontSize="20" fontWeight="400" fill="#fff">temperatura, desvios operacionais e</text>
                        <text className="botao" x="49" y="255" fontSize="20" fontWeight="400" fill="#fff">necessidade de reabastecimento.</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                  
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="91" cy="85" r="50" fill="#F39325"/>
                        <path d="M91.7688 70.6409C94.6011 70.6409 96.897 68.345 96.897 65.5127C96.897 62.6805 94.6011 60.3845 91.7688 60.3845C88.9366 60.3845 86.6406 62.6805 86.6406 65.5127C86.6406 68.345 88.9366 70.6409 91.7688 70.6409Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M91.7694 70.641V80.8974M76.3848 93.7179V83.4615H107.154V93.7179M91.7694 83.4615V93.7179" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M76.385 106.538C79.2173 106.538 81.5132 104.242 81.5132 101.41C81.5132 98.578 79.2173 96.282 76.385 96.282C73.5528 96.282 71.2568 98.578 71.2568 101.41C71.2568 104.242 73.5528 106.538 76.385 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M91.7688 106.538C94.6011 106.538 96.897 104.242 96.897 101.41C96.897 98.578 94.6011 96.282 91.7688 96.282C88.9366 96.282 86.6406 98.578 86.6406 101.41C86.6406 104.242 88.9366 106.538 91.7688 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M107.154 106.538C109.986 106.538 112.282 104.242 112.282 101.41C112.282 98.578 109.986 96.282 107.154 96.282C104.321 96.282 102.025 98.578 102.025 101.41C102.025 104.242 104.321 106.538 107.154 106.538Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="42" y="174" fontSize="20" fontWeight="400" fill="#fff">Todo seu projeto em um único</text>
                        <text className="botao" x="42" y="199" fontSize="20" fontWeight="400" fill="#fff">ambiente: importação, estoque,</text>
                        <text className="botao" x="42" y="224" fontSize="20" fontWeight="400" fill="#fff"> fornecimentos, logística e faturamento</text>
                        <text className="botao" x="42" y="249" fontSize="20" fontWeight="400" fill="#fff"> reunidos com total visibilidade e</text>
                        <text className="botao" x="42" y="274" fontSize="20" fontWeight="400" fill="#fff">controle.</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                  
                  {/* Slide 5 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="99" cy="85" r="50" fill="#F39325"/>
                        <path d="M88.7432 64.4871V105.513" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M88.7436 73.4615C90.8678 73.4615 92.5898 71.7395 92.5898 69.6153C92.5898 67.4911 90.8678 65.7692 88.7436 65.7692C86.6194 65.7692 84.8975 67.4911 84.8975 69.6153C84.8975 71.7395 86.6194 73.4615 88.7436 73.4615Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M88.7436 88.8461C90.8678 88.8461 92.5898 87.1241 92.5898 85C92.5898 82.8758 90.8678 81.1538 88.7436 81.1538C86.6194 81.1538 84.8975 82.8758 84.8975 85C84.8975 87.1241 86.6194 88.8461 88.7436 88.8461Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M88.7436 104.231C90.8678 104.231 92.5898 102.509 92.5898 100.385C92.5898 98.2604 90.8678 96.5385 88.7436 96.5385C86.6194 96.5385 84.8975 98.2604 84.8975 100.385C84.8975 102.509 86.6194 104.231 88.7436 104.231Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M109.256 69.6154L119.513 72.1795V82.4359C119.513 90.1282 114.385 95.2564 109.256 97.8205C104.128 95.2564 99 90.1282 99 82.4359V72.1795L109.256 69.6154Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M106.692 84.9999L110.539 88.8461L119.513 81.923" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="50" y="174" fontSize="20" fontWeight="400" fill="#fff">Histórico completo de cada</text>
                        <text className="botao" x="50" y="199" fontSize="20" fontWeight="400" fill="#fff">movimentação com alçadas de</text>
                        <text className="botao" x="50" y="224" fontSize="20" fontWeight="400" fill="#fff">permissão e registro de atividades</text>
                        <text className="botao" x="50" y="249" fontSize="20" fontWeight="400" fill="#fff">(Compliance FDA, EMA &amp; ANVISA)</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                  
                  {/* Slide 6 */}
                  <SwiperSlide>
                    <div className="px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                        <path d="M250.06 332.091V356.592C250.06 368.56 259.746 378.261 271.695 378.261H397.529C410.704 378.261 421.388 367.563 421.388 354.364V91.5024C421.388 79.3338 411.541 69.4714 399.391 69.4714H383.752C372.189 69.4714 362.818 60.0821 362.818 48.5036V21.8453C362.818 9.78158 353.054 0 341.006 0L23.8594 1C10.6812 1 0 11.698 0 24.8969V288.573C0 301.512 10.4719 312 23.3899 312L229 311C240.629 311 250.057 320.443 250.057 332.091H250.06Z" fill="#274B41"/>
                        <circle cx="93" cy="79" r="50" fill="#F39325"/>
                        <path d="M81.4622 55.923H99.4109L112.231 68.7435V96.9486C112.231 98.3087 111.691 99.6131 110.729 100.575C109.768 101.537 108.463 102.077 107.103 102.077H81.4622C80.1021 102.077 78.7977 101.537 77.836 100.575C76.8743 99.6131 76.334 98.3087 76.334 96.9486V61.0512C76.334 59.6911 76.8743 58.3867 77.836 57.425C78.7977 56.4633 80.1021 55.923 81.4622 55.923Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M99.4102 55.923V68.7435H112.231" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M94.5377 85.923V90.1379M81.8926 88.0305H94.5377H107.183" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M81.8941 98.0622C83.4072 98.0622 84.6338 96.8356 84.6338 95.3225C84.6338 93.8094 83.4072 92.5828 81.8941 92.5828C80.3809 92.5828 79.1543 93.8094 79.1543 95.3225C79.1543 96.8356 80.3809 98.0622 81.8941 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M94.5386 98.0622C96.0517 98.0622 97.2784 96.8356 97.2784 95.3225C97.2784 93.8094 96.0517 92.5828 94.5386 92.5828C93.0255 92.5828 91.7988 93.8094 91.7988 95.3225C91.7988 96.8356 93.0255 98.0622 94.5386 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M107.183 98.0622C108.696 98.0622 109.923 96.8356 109.923 95.3225C109.923 93.8094 108.696 92.5828 107.183 92.5828C105.67 92.5828 104.443 93.8094 104.443 95.3225C104.443 96.8356 105.67 98.0622 107.183 98.0622Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <text className="botao" x="42" y="168" fontSize="20" fontWeight="400" fill="#fff">Relatórios gerenciais visões</text>
                        <text className="botao" x="42" y="193" fontSize="20" fontWeight="400" fill="#fff">dinâmicas de volume, projetos,</text>
                        <text className="botao" x="42" y="218" fontSize="20" fontWeight="400" fill="#fff"> períodos, rotas e muito mais.</text>
                        <text className="botao" x="42" y="243" fontSize="20" fontWeight="400" fill="#fff">OPEN API para integração de</text>
                        <text className="botao" x="42" y="268" fontSize="20" fontWeight="400" fill="#fff"> processos ou exportação de dados.</text>
                      </svg>
                    </div>
                  </SwiperSlide>
                </Swiper>
                
                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-4 justify-center pl-[60px]">
                  <button 
                    onClick={() => functionalitiesSwiperRef.current?.slidePrev()}
                    className="transition-opacity rotate-180"
                    style={{ opacity: activeFuncSlide === 0 ? 0.6 : 1 }}
                  >
                    <img src={arrowSlide} alt="Previous" className="w-[50px] h-[38px]" />
                  </button>
                  <button 
                    onClick={() => functionalitiesSwiperRef.current?.slideNext()}
                    className="transition-opacity"
                    style={{ opacity: activeFuncSlide === 5 ? 0.6 : 1 }}
                  >
                    <img src={arrowSlide} alt="Next" className="w-[50px] h-[38px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Estratégicos Carousel Section */}
      <section className="py-8 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
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
                BENEFÍCIOS ESTRATÉGICOS
              </span>
              
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
                  {/* Slide 1 - Redução de perdas */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <circle cx="114" cy="100" r="65" fill="#69C0AC"/>
                      <path d="M106.833 87.75H82.3333C80.0782 87.75 78.25 89.5782 78.25 91.8333V116.333C78.25 118.588 80.0782 120.417 82.3333 120.417H106.833C109.088 120.417 110.917 118.588 110.917 116.333V91.8333C110.917 89.5782 109.088 87.75 106.833 87.75Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M78.25 100H110.917" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M131.333 79.5833L147.667 83.6666V99.9999C147.667 112.25 139.5 120.417 131.333 124.5C123.167 120.417 115 112.25 115 99.9999V83.6666L131.333 79.5833Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M131.333 91.8333V112.25" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M125.208 106.125L131.333 112.25L137.458 106.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="49" y="205" fontSize="20" fontWeight="400" fill="#008C79">Redução de perdas e desvios</text>
                      <text className="botao" x="49" y="230" fontSize="20" fontWeight="400" fill="#008C79">logísticos </text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 2 - Aumento da previsibilidade */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <circle cx="111" cy="104" r="65" fill="#69C0AC"/>
                      <path d="M111.001 92L87.001 115.566" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M111 92L135 115.566" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M87 115.566L81 109.675M135 115.566L141 109.675" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="47" y="208" fontSize="20" fontWeight="400" fill="#008C79">Aumento da previsibilidade em</text>
                      <text className="botao" x="47" y="234" fontSize="20" fontWeight="400" fill="#008C79">estudos clínicos</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 3 - Apoio à tomada de decisão */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 421 378" fill="none">
                      <path d="M340.692 0.5C352.452 0.5 361.983 10.05 361.983 21.8301V48.4697C361.983 60.3155 371.57 69.9238 383.399 69.9238H399.023C410.885 69.9238 420.5 79.5546 420.5 91.4395V354.119C420.5 367.033 410.049 377.5 397.163 377.5H271.445C259.784 377.5 250.33 368.031 250.33 356.347V331.361H250.321C250.056 319.678 240.518 310.285 228.789 310.285H228.787L23.3672 311.283C10.7386 311.283 0.5 301.028 0.5 288.374V24.8799C0.5 11.9656 10.9481 1.49928 23.8369 1.49902H23.8389L340.692 0.5Z" stroke="#274B41"/>
                      <circle cx="122" cy="102" r="65" fill="#69C0AC"/>
                      <path d="M122.006 129C137.473 129 150.012 116.688 150.012 101.5C150.012 86.3122 137.473 74 122.006 74C106.539 74 94 86.3122 94 101.5C94 116.688 106.539 129 122.006 129Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M122.006 87.75V101.5L138.809 112.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="57" y="205" fontSize="20" fontWeight="400" fill="#008C79">Apoio à tomada de decisão em</text>
                      <text className="botao" x="57" y="230" fontSize="20" fontWeight="400" fill="#008C79">tempo real</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 4 - Cópia do Slide 1 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <circle cx="114" cy="100" r="65" fill="#69C0AC"/>
                      <path d="M106.833 87.75H82.3333C80.0782 87.75 78.25 89.5782 78.25 91.8333V116.333C78.25 118.588 80.0782 120.417 82.3333 120.417H106.833C109.088 120.417 110.917 118.588 110.917 116.333V91.8333C110.917 89.5782 109.088 87.75 106.833 87.75Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M78.25 100H110.917" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M131.333 79.5833L147.667 83.6666V99.9999C147.667 112.25 139.5 120.417 131.333 124.5C123.167 120.417 115 112.25 115 99.9999V83.6666L131.333 79.5833Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M131.333 91.8333V112.25" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M125.208 106.125L131.333 112.25L137.458 106.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="49" y="205" fontSize="20" fontWeight="400" fill="#008C79">Redução de perdas e desvios</text>
                      <text className="botao" x="49" y="230" fontSize="20" fontWeight="400" fill="#008C79">logísticos </text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 5 - Cópia do Slide 2 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 422 379" fill="none">
                      <path d="M341.007 0.5C352.778 0.500198 362.317 10.0574 362.317 21.8457V48.5039C362.318 60.3575 371.912 69.9714 383.752 69.9717H399.392C411.264 69.9717 420.887 79.609 420.888 91.502V354.364C420.888 367.288 410.427 377.761 397.528 377.761H271.695C260.023 377.761 250.561 368.285 250.561 356.593V331.591H250.552C250.287 319.899 240.739 310.5 229 310.5H228.998L23.3887 311.499C10.7482 311.498 0.5 301.236 0.5 288.573V24.8965C0.500217 11.9732 10.9583 1.5 23.8594 1.5H23.8613L341.007 0.5Z" stroke="#274B41"/>
                      <circle cx="111" cy="104" r="65" fill="#69C0AC"/>
                      <path d="M111.001 92L87.001 115.566" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M111 92L135 115.566" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M87 115.566L81 109.675M135 115.566L141 109.675" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="47" y="208" fontSize="20" fontWeight="400" fill="#008C79">Aumento da previsibilidade em</text>
                      <text className="botao" x="47" y="234" fontSize="20" fontWeight="400" fill="#008C79">estudos clínicos</text>
                    </svg>
                  </SwiperSlide>

                  {/* Slide 6 - Cópia do Slide 3 */}
                  <SwiperSlide>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 421 378" fill="none">
                      <path d="M340.692 0.5C352.452 0.5 361.983 10.05 361.983 21.8301V48.4697C361.983 60.3155 371.57 69.9238 383.399 69.9238H399.023C410.885 69.9238 420.5 79.5546 420.5 91.4395V354.119C420.5 367.033 410.049 377.5 397.163 377.5H271.445C259.784 377.5 250.33 368.031 250.33 356.347V331.361H250.321C250.056 319.678 240.518 310.285 228.789 310.285H228.787L23.3672 311.283C10.7386 311.283 0.5 301.028 0.5 288.374V24.8799C0.5 11.9656 10.9481 1.49928 23.8369 1.49902H23.8389L340.692 0.5Z" stroke="#274B41"/>
                      <circle cx="122" cy="102" r="65" fill="#69C0AC"/>
                      <path d="M122.006 129C137.473 129 150.012 116.688 150.012 101.5C150.012 86.3122 137.473 74 122.006 74C106.539 74 94 86.3122 94 101.5C94 116.688 106.539 129 122.006 129Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M122.006 87.75V101.5L138.809 112.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <text className="botao" x="57" y="205" fontSize="20" fontWeight="400" fill="#008C79">Apoio à tomada de decisão em</text>
                      <text className="botao" x="57" y="230" fontSize="20" fontWeight="400" fill="#008C79">tempo real</text>
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

      {/* Security Info SVG Section */}
      <section className="py-16 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            {/* Image Side - Left (4 columns) - Desktop only */}
            <div className="hidden lg:flex col-span-12 lg:col-span-4 items-end justify-center lg:justify-end" style={{ marginRight: '-50px' }}>
              <img 
                src={drs360Final} 
                alt="DRS 360 Segurança" 
                className="w-full max-w-[400px] h-auto object-contain"
              />
            </div>
            
            {/* SVG Side - Right (8 columns) - Desktop */}
            <div className="hidden lg:block col-span-12 lg:col-span-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 847 564" fill="none">
                <path d="M71.8609 204.7L33.7256 204.696C15.0985 204.696 1.63619e-05 189.612 1.71753e-05 171.004L2.3026e-05 37.1558C2.39229e-05 16.638 16.6508 -3.62957e-05 37.1938 -3.53978e-05L704.584 0.000298951C723.523 0.000299778 738.873 15.3338 738.873 34.2543L738.873 58.6092C738.873 76.6171 753.487 91.2114 771.508 91.2114L812.999 91.2114C831.776 91.2114 847 106.416 847 125.178L847 526.773C847 547.29 830.349 563.929 809.806 563.929L141.148 563.929C121.011 563.929 104.687 547.621 104.687 527.504L104.687 397.172L104.687 237.493C104.687 219.383 89.9892 204.7 71.8609 204.7Z" fill="#F39325"/>
                <text className="titulos" x="180" y="144" fontSize="30" fontWeight="900" fill="#000000">Segurança da informação</text>
                <text className="botao" x="180" y="190" fontSize="20" fontWeight="400" fill="#000000">A plataforma segue rígidos protocolos de segurança digital</text>
                <text className="botao" x="180" y="218" fontSize="20" fontWeight="400" fill="#000000">e privacidade de dados, com backup contínuo,</text>
                <text className="botao" x="180" y="246" fontSize="20" fontWeight="400" fill="#000000"> hospedagem segura em nuvem e conformidade total com a </text>
                <text className="botao" x="180" y="274" fontSize="20" fontWeight="400" fill="#000000">LGPD e regulações internacionais (como HIPAA e GDPR). </text>
                <text className="botao" x="195" y="318" fontSize="20" fontWeight="400" fill="#000000">• +115 clientes ativos</text>
                <text className="botao" x="195" y="350" fontSize="20" fontWeight="400" fill="#000000">• +500 projetos gerenciados</text>
                <text className="botao" x="195" y="382" fontSize="20" fontWeight="400" fill="#000000">• Dashboard por estudo clínico, programa de paciente ou</text>
                <text className="botao" x="209" y="402" fontSize="20" fontWeight="400" fill="#000000">projeto logístico</text>
                <text className="botao" x="195" y="434" fontSize="20" fontWeight="400" fill="#000000">• Compliance FDA, EMA, ANVISA, LGPD/GDPR,</text>
                <text className="botao" x="209" y="454" fontSize="20" fontWeight="400" fill="#000000">ISO27001/27701</text>
              </svg>
            </div>
            
            {/* Mobile SVG */}
            <div className="col-span-12 lg:hidden px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 408 713" fill="none" className="w-full h-auto">
                <path d="M56.1159 655.315L56.1121 685.886C56.1121 700.819 44.0226 712.922 29.1075 712.922H-14.2189C-30.6643 712.922 -44 699.574 -44 683.106L-44 114.169C-44 98.9857 -31.7099 86.6802 -16.5447 86.6802H2.97623C17.4098 86.6802 29.1075 74.9651 29.1075 60.5184V27.2567C29.1075 12.2046 41.2941 0 56.3324 0L378.218 9.44393e-05C394.664 9.44393e-05 408 13.3482 408 29.8165L408 599.77C408 615.914 394.929 629 378.804 629L210.385 629H82.4003C67.8846 629 56.1159 640.782 56.1159 655.315Z" fill="#F39325"></path>
                <text className="titulos" x="40" y="120" fontSize="30" fontWeight="900" fill="#000000">Segurança da</text>
                <text className="titulos" x="40" y="155" fontSize="30" fontWeight="900" fill="#000000">informação</text>
                <text className="botao2" x="40" y="210" fontSize="20" fontWeight="400" fill="#000000">A plataforma segue rígidos protocolos</text>
                <text className="botao2" x="40" y="240" fontSize="20" fontWeight="400" fill="#000000">de segurança digital e privacidade de</text>
                <text className="botao2" x="40" y="270" fontSize="20" fontWeight="400" fill="#000000">dados, com backup contínuo,</text>
                <text className="botao2" x="40" y="298" fontSize="20" fontWeight="400" fill="#000000"> hospedagem segura em nuvem e </text>
                <text className="botao2" x="40" y="328" fontSize="20" fontWeight="400" fill="#000000">conformidade total com a LGPD e</text>
                <text className="botao2" x="40" y="356" fontSize="20" fontWeight="400" fill="#000000">regulações internacionais (como</text>
                <text className="botao2" x="40" y="384" fontSize="20" fontWeight="400" fill="#000000">HIPAA e GDPR)</text>
                <text className="botao2" x="40" y="425" fontSize="20" fontWeight="400" fill="#000000">• +115 clientes ativos</text>
                <text className="botao2" x="40" y="455" fontSize="20" fontWeight="400" fill="#000000">• +500 projetos gerenciados</text>
                <text className="botao2" x="40" y="485" fontSize="20" fontWeight="400" fill="#000000">• Dashboard por estudo clínico,</text>
                <text className="botao2" x="52" y="513" fontSize="20" fontWeight="400" fill="#000000">programa de paciente ou projeto</text>
                <text className="botao2" x="52" y="540" fontSize="20" fontWeight="400" fill="#000000">logístico</text>
                <text className="botao2" x="40" y="568" fontSize="20" fontWeight="400" fill="#000000">• Compliance FDA, EMA, ANVISA,</text>
                <text className="botao2" x="52" y="595" fontSize="20" fontWeight="400" fill="#000000">LGPD/GDPR, ISO27001/27701</text>
              </svg>
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
                    Acesse agora a plataforma DRS 360.
                  </h2>
                  <a href="https://360.drsgroup.com.br/" target="_blank" rel="noopener noreferrer" className="drs-btn drs-btn-uppercase inline-flex w-fit">
                    <ArrowIcon className="w-4 h-3" />
                    Clique aqui
                  </a>
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
      </div>
    </Layout>
  );
}
