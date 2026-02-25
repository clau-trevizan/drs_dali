import { useState, useMemo, useEffect } from 'react';
import { Layout } from '@/components/layout';
import { Link, useSearchParams } from 'react-router-dom';
import imgInsights from '@/assets/img-insights.jpg';
import iconPageArrow from '@/assets/icon-page-arrow.svg';

const categories = ['Tecnologia', 'Logística', 'Transporte', 'Entrevistas'];

const allInsights = [
  { title: 'Sai Pátria, entra Vinci: após rearranjo societário, DRS avança no exterior', date: '08 outubro, 2025', slug: 'sai-patria-entra-vinci', categories: ['Logística', 'Tecnologia'] },
  { title: 'Mobilidade inteligente no setor logístico', date: '7 março, 2025', slug: 'mobilidade-inteligente', categories: ['Transporte'] },
  { title: 'Como a Inteligência Artificial está transformando a logística moderna', date: '17 junho, 2025', slug: 'ia-logistica', categories: ['Logística', 'Tecnologia'] },
  { title: 'Inovações em cold chain para o setor farmacêutico', date: '22 maio, 2025', slug: 'inovacoes-cold-chain', categories: ['Tecnologia', 'Logística'] },
  { title: 'Entrevista exclusiva com o CEO do Grupo DRS', date: '15 abril, 2025', slug: 'entrevista-ceo', categories: ['Entrevistas'] },
  { title: 'O futuro do transporte refrigerado no Brasil', date: '03 abril, 2025', slug: 'futuro-transporte-refrigerado', categories: ['Transporte', 'Tecnologia'] },
  { title: 'Sustentabilidade na cadeia de suprimentos de saúde', date: '28 março, 2025', slug: 'sustentabilidade-cadeia', categories: ['Logística'] },
  { title: 'Como garantir a integridade de amostras biológicas no transporte', date: '20 fevereiro, 2025', slug: 'integridade-amostras', categories: ['Logística', 'Tecnologia'] },
  { title: 'O papel da tecnologia na pesquisa clínica', date: '14 fevereiro, 2025', slug: 'tecnologia-pesquisa-clinica', categories: ['Tecnologia', 'Entrevistas'] },
  { title: 'Novas regulamentações para transporte de medicamentos', date: '05 janeiro, 2025', slug: 'regulamentacoes-transporte', categories: ['Transporte', 'Logística'] },
  { title: 'Tendências de logística para 2025', date: '28 dezembro, 2024', slug: 'tendencias-logistica-2025', categories: ['Logística', 'Tecnologia'] },
  { title: 'DRS Group expande operações na Europa', date: '15 dezembro, 2024', slug: 'drs-expande-europa', categories: ['Entrevistas'] },
  { title: 'Data loggers: tecnologia essencial para a cadeia fria', date: '10 novembro, 2024', slug: 'data-loggers-essencial', categories: ['Tecnologia'] },
  { title: 'Entrevista: o impacto da IA na logística de saúde', date: '01 novembro, 2024', slug: 'entrevista-ia-logistica', categories: ['Entrevistas', 'Tecnologia'] },
  { title: 'Desafios do transporte de vacinas no Brasil', date: '20 outubro, 2024', slug: 'desafios-transporte-vacinas', categories: ['Transporte', 'Logística'] },
  { title: 'Embalagens térmicas sustentáveis: o caminho para o futuro', date: '12 outubro, 2024', slug: 'embalagens-sustentaveis', categories: ['Tecnologia', 'Logística'] },
  { title: 'Como o DRS 360 revoluciona a gestão de operações', date: '05 setembro, 2024', slug: 'drs360-revoluciona', categories: ['Tecnologia'] },
  { title: 'Parceria estratégica para pesquisa clínica global', date: '25 agosto, 2024', slug: 'parceria-pesquisa-global', categories: ['Entrevistas', 'Logística'] },
];

const PAGE_SIZE = 6;

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
    <g clipPath="url(#clip0_check)">
      <path d="M16.5051 1.10473L6.15221 11.4576C6.09211 11.5179 6.02075 11.5656 5.9422 11.5981C5.86364 11.6307 5.77944 11.6475 5.69441 11.6475C5.60937 11.6475 5.52517 11.6307 5.44662 11.5981C5.36808 11.5656 5.29671 11.5179 5.23661 11.4576L0.707203 6.92826C0.585788 6.80684 0.517578 6.64216 0.517578 6.47046C0.517578 6.29876 0.585788 6.13408 0.707203 6.01266C0.828617 5.89125 0.993291 5.82304 1.165 5.82304C1.3367 5.82304 1.50138 5.89125 1.62279 6.01266L5.69441 10.0851L15.5896 0.189135C15.7109 0.0677213 15.8756 -0.000488282 16.0473 -0.000488281C16.2191 -0.00048828 16.3838 0.0677213 16.5051 0.189135C16.6265 0.310551 16.6948 0.475224 16.6948 0.64693C16.6948 0.818637 16.6265 0.983311 16.5051 1.10473Z" fill="#15AF97"/>
    </g>
    <defs>
      <clipPath id="clip0_check">
        <rect width="17.6" height="12.4235" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14.6673 14.6666L11.4451 11.4444M13.1858 7.25924C13.1858 10.5321 10.5327 13.1851 7.25991 13.1851C3.98711 13.1851 1.33398 10.5321 1.33398 7.25924C1.33398 3.98644 3.98711 1.33331 7.25991 1.33331C10.5327 1.33331 13.1858 3.98644 13.1858 7.25924Z" stroke="#15AF97" strokeWidth="1.48148" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Insights() {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Read category filters from URL params (from "Mais" button on InsightPost)
  useEffect(() => {
    const catParams = searchParams.getAll('cat');
    if (catParams.length > 0) {
      setSelectedCategories(catParams.filter(c => categories.includes(c)));
    }
  }, [searchParams]);
  const filteredInsights = useMemo(() => {
    let results = allInsights;

    if (selectedCategories.length > 0) {
      results = results.filter(insight =>
        insight.categories.some(cat => selectedCategories.includes(cat))
      );
    }

    if (search.trim()) {
      const searchLower = search.toLowerCase();
      results = results.filter(insight =>
        insight.title.toLowerCase().includes(searchLower)
      );
    }

    return results;
  }, [selectedCategories, search]);

  const totalPages = Math.max(1, Math.ceil(filteredInsights.length / PAGE_SIZE));
  const paginatedInsights = filteredInsights.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset page when filters change
  const handleCategoryToggle = (cat: string) => {
    setCurrentPage(1);
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter(c => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <Layout>
      {/* Hero Section - Copied from Contato */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img 
                src={imgInsights} 
                alt="Insights DRS" 
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>
            <div 
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
                <h1 className="text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>
                  As últimas notícias, entrevistas, tecnologias e recursos do setor.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background" style={{ paddingBottom: '100px' }}>
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="relative mb-6">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </div>
                <input 
                  placeholder="Buscar" 
                  value={search} 
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full outline-none focus:ring-0"
                  style={{ 
                    borderRadius: '8px', 
                    border: '1px solid #274B41',
                    padding: '10px 12px 10px 36px',
                    color: '#15AF97',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
              </div>

              {/* Categories */}
              <div>
                <h3 style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: '34px' }}>
                  Categorias
                </h3>
                <div className="space-y-2 mt-2">
                  {categories.map((cat) => (
                    <label 
                      key={cat} 
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleCategoryToggle(cat)}
                    >
                      <span className="w-[18px] h-[13px] flex items-center justify-center flex-shrink-0">
                        {selectedCategories.includes(cat) && <CheckIcon />}
                      </span>
                      <span style={{ color: '#274B41', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px' }}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedInsights.map((insight) => (
                  <Link
                    key={insight.slug}
                    to={`/insights/${insight.slug}`}
                    className="group block"
                    style={{ marginBottom: '50px' }}
                  >
                    {/* Image placeholder */}
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: '#e5e5e5' }}>
                      <div className="w-full h-full bg-gradient-to-br" style={{ background: 'linear-gradient(135deg, rgba(105,192,172,0.2), rgba(243,147,37,0.2))' }} />
                    </div>
                    {/* Date */}
                    <p style={{ color: '#012025', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '21px', marginBottom: '8px' }}>
                      {insight.date}
                    </p>
                    {/* Title */}
                    <h3 className="group-hover:opacity-80 transition-opacity" style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '28.33px', letterSpacing: '0.55px', marginBottom: '12px' }}>
                      {insight.title}
                    </h3>
                    {/* Category tags */}
                    <div className="flex flex-wrap gap-2">
                      {insight.categories.map((category) => (
                        <span 
                          key={category}
                          style={{ 
                            color: '#000', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px',
                            padding: '3px 25px', borderRadius: '16px', border: '1px solid #274B41'
                          }}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="transition-opacity"
                    style={{ opacity: currentPage === 1 ? 0.3 : 1, transform: 'rotate(180deg)' }}
                  >
                    <img src={iconPageArrow} alt="Anterior" className="h-[50px] w-auto" />
                  </button>
                  <span style={{ color: '#012025', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '21px' }}>
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="transition-opacity"
                    style={{ opacity: currentPage === totalPages ? 0.3 : 1 }}
                  >
                    <img src={iconPageArrow} alt="Próxima" className="h-[50px] w-auto" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
