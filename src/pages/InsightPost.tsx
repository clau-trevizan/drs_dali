import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowIcon } from '@/components/ui/ArrowIcon';
import iconX from '@/assets/icon-x.svg';
import iconLinkedin from '@/assets/icon-linkedin.svg';
import iconFacebook from '@/assets/icon-facebook.svg';

// Mock data - same as Insights page
const allInsights = [
  { title: 'Sai Pátria, entra Vinci: após rearranjo societário, DRS avança no exterior', date: '08 de outubro, 2025', source: 'Equipe DRS', slug: 'sai-patria-entra-vinci', categories: ['Logística', 'Tecnologia'], content: '<p>Fundador do grupo que atua em pesquisa clínica retomou controle e abre operação na Europa.</p><p>A DRS fez um rearranjo em sua estrutura societária, que permite à companhia, agora, focar em seu plano de crescimento internacional. O grupo atua na cadeia de pesquisa clínica e medicamentos, desde fornecimento de insumos e amostras biológicas à logística com controle de temperatura.</p><p>Com a saída da Pátria e a entrada da Vinci como novo parceiro estratégico, a DRS ganha mais flexibilidade para executar seu plano de expansão internacional, com foco inicial na Europa. A operação europeia permitirá ao grupo atender diretamente clientes farmacêuticos e de pesquisa clínica no continente.</p>' },
  { title: 'Mobilidade inteligente no setor logístico', date: '07 de março, 2025', source: 'Redação', slug: 'mobilidade-inteligente', categories: ['Transporte'], content: '<p>A mobilidade inteligente está revolucionando o setor logístico, com novas tecnologias de rastreamento e otimização de rotas.</p>' },
  { title: 'Como a Inteligência Artificial está transformando a logística moderna', date: '17 de junho, 2025', source: 'Equipe DRS', slug: 'ia-logistica', categories: ['Logística', 'Tecnologia'], content: '<p>A inteligência artificial está sendo cada vez mais utilizada na logística moderna para otimizar processos e reduzir custos.</p>' },
  { title: 'Inovações em cold chain para o setor farmacêutico', date: '22 de maio, 2025', source: 'Equipe DRS', slug: 'inovacoes-cold-chain', categories: ['Tecnologia', 'Logística'], content: '<p>Novas tecnologias de cadeia fria estão transformando o setor farmacêutico.</p>' },
  { title: 'Entrevista exclusiva com o CEO do Grupo DRS', date: '15 de abril, 2025', source: 'Redação', slug: 'entrevista-ceo', categories: ['Entrevistas'], content: '<p>Em entrevista exclusiva, o CEO do Grupo DRS fala sobre o futuro da empresa.</p>' },
  { title: 'O futuro do transporte refrigerado no Brasil', date: '03 de abril, 2025', source: 'Equipe DRS', slug: 'futuro-transporte-refrigerado', categories: ['Transporte', 'Tecnologia'], content: '<p>O transporte refrigerado no Brasil está passando por uma revolução tecnológica.</p>' },
  { title: 'Sustentabilidade na cadeia de suprimentos de saúde', date: '28 de março, 2025', source: 'Equipe DRS', slug: 'sustentabilidade-cadeia', categories: ['Logística'], content: '<p>A sustentabilidade está se tornando um fator essencial na cadeia de suprimentos de saúde.</p>' },
  { title: 'Como garantir a integridade de amostras biológicas no transporte', date: '20 de fevereiro, 2025', source: 'Equipe DRS', slug: 'integridade-amostras', categories: ['Logística', 'Tecnologia'], content: '<p>Garantir a integridade de amostras biológicas durante o transporte é fundamental para a pesquisa clínica.</p>' },
  { title: 'O papel da tecnologia na pesquisa clínica', date: '14 de fevereiro, 2025', source: 'Redação', slug: 'tecnologia-pesquisa-clinica', categories: ['Tecnologia', 'Entrevistas'], content: '<p>A tecnologia desempenha um papel cada vez mais central na pesquisa clínica moderna.</p>' },
  { title: 'Novas regulamentações para transporte de medicamentos', date: '05 de janeiro, 2025', source: 'Equipe DRS', slug: 'regulamentacoes-transporte', categories: ['Transporte', 'Logística'], content: '<p>Novas regulamentações estão mudando a forma como medicamentos são transportados no Brasil.</p>' },
  { title: 'Tendências de logística para 2025', date: '28 de dezembro, 2024', source: 'Equipe DRS', slug: 'tendencias-logistica-2025', categories: ['Logística', 'Tecnologia'], content: '<p>As principais tendências de logística para 2025 incluem automação, IA e sustentabilidade.</p>' },
  { title: 'DRS Group expande operações na Europa', date: '15 de dezembro, 2024', source: 'Redação', slug: 'drs-expande-europa', categories: ['Entrevistas'], content: '<p>O Grupo DRS anuncia a expansão de suas operações para o mercado europeu.</p>' },
  { title: 'Data loggers: tecnologia essencial para a cadeia fria', date: '10 de novembro, 2024', source: 'Equipe DRS', slug: 'data-loggers-essencial', categories: ['Tecnologia'], content: '<p>Data loggers são ferramentas essenciais para monitorar e garantir a qualidade da cadeia fria.</p>' },
  { title: 'Entrevista: o impacto da IA na logística de saúde', date: '01 de novembro, 2024', source: 'Redação', slug: 'entrevista-ia-logistica', categories: ['Entrevistas', 'Tecnologia'], content: '<p>Em entrevista, especialistas discutem o impacto da inteligência artificial na logística de saúde.</p>' },
  { title: 'Desafios do transporte de vacinas no Brasil', date: '20 de outubro, 2024', source: 'Equipe DRS', slug: 'desafios-transporte-vacinas', categories: ['Transporte', 'Logística'], content: '<p>O transporte de vacinas no Brasil enfrenta desafios logísticos significativos.</p>' },
  { title: 'Embalagens térmicas sustentáveis: o caminho para o futuro', date: '12 de outubro, 2024', source: 'Equipe DRS', slug: 'embalagens-sustentaveis', categories: ['Tecnologia', 'Logística'], content: '<p>As embalagens térmicas sustentáveis estão ganhando espaço no mercado de logística de saúde.</p>' },
  { title: 'Como o DRS 360 revoluciona a gestão de operações', date: '05 de setembro, 2024', source: 'Equipe DRS', slug: 'drs360-revoluciona', categories: ['Tecnologia'], content: '<p>A plataforma DRS 360 está revolucionando a gestão de operações logísticas.</p>' },
  { title: 'Parceria estratégica para pesquisa clínica global', date: '25 de agosto, 2024', source: 'Redação', slug: 'parceria-pesquisa-global', categories: ['Entrevistas', 'Logística'], content: '<p>Uma nova parceria estratégica promete fortalecer a pesquisa clínica global.</p>' },
];

export default function InsightPost() {
  const { slug } = useParams();
  const post = allInsights.find(i => i.slug === slug) || allInsights[0];

  // Similar insights: same categories
  const similarInsights = allInsights
    .filter(i => i.slug !== post.slug && i.categories.some(c => post.categories.includes(c)))
    .slice(0, 2);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(currentUrl);

  // Build category filter params for "Mais" button
  const categoryParams = post.categories.map(c => `cat=${encodeURIComponent(c)}`).join('&');

  return (
    <Layout>
      {/* Section 1: Hero - Privacy Policy style */}
      <section className="politica-section1 bg-background">
        <div className="drs-container">
          <div
            className="politica-green-box rounded-[24px] lg:rounded-[40px]"
            style={{
              backgroundColor: '#69C0AC',
              backgroundImage: 'url(/images/topo_pp.png)',
              backgroundPosition: 'top left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-start-2 lg:col-span-11">
                {/* Category tags */}
                <div className="flex gap-2 mb-4">
                  {post.categories.map(cat => (
                    <span
                      key={cat}
                      style={{
                        color: '#000', textAlign: 'center', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px',
                        padding: '3px 25px', borderRadius: '16px', border: '1px solid #274B41'
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title + Share */}
                <div className="d-flex gap-4 items-start">
                  <div className="col-60">
                    <h1 style={{ color: '#000', fontSize: '35px', fontStyle: 'normal', fontWeight: 900, lineHeight: '40px' }}>
                      {post.title}
                    </h1>
                  </div>
                  <div className="col-20 items-center gap-3">
                    <span style={{ color: '#000', fontSize: '14px', fontWeight: 400 }}>Compartilhar</span>
                    <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconX} alt="X" className="h-[50px] w-auto" />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconLinkedin} alt="LinkedIn" className="h-[50px] w-auto" />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                      <img src={iconFacebook} alt="Facebook" className="h-[50px] w-auto" />
                    </a>
                  </div>
                </div>

                {/* Date and source */}
                <div className="mt-4" style={{ color: '#000', fontSize: '16px', fontWeight: 400, lineHeight: '21px' }}>
                  <span>{post.date}</span>
                  <span> - por {post.source}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Post content */}
      <section className="politica-section2 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <div
                className="prose prose-lg max-w-none"
                style={{ color: '#000', fontSize: '18px', lineHeight: '1.6' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Orange CTA Section - Copied from DRS360 */}
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
            <div className="lg:col-span-4">
              <h2 style={{ fontWeight: 900, fontSize: '30px', color: '#000', lineHeight: '1.2' }}>
                Transforme sua operação em saúde com o apoio da DRS.
              </h2>
            </div>
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

      {/* Similar Insights Section */}
      <section className="py-16 bg-white" style={{ paddingBottom: '100px' }}>
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              {/* Header with "Mais" button */}
              <div className="flex items-center justify-between mb-8">
                <h2 style={{ color: '#000', fontSize: '24px', fontWeight: 700 }}>
                  Insights similares
                </h2>
                <Link
                  to={`/insights?${categoryParams}`}
                  className="drs-btn"
                  style={{ backgroundColor: '#274B41', width: 'fit-content' }}
                >
                  <ArrowIcon className="w-4 h-3" />
                  Mais
                </Link>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarInsights.map((insight) => (
                  <Link
                    key={insight.slug}
                    to={`/insights/${insight.slug}`}
                    className="group block"
                    style={{ marginBottom: '50px' }}
                  >
                    <div className="aspect-video rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: '#e5e5e5' }}>
                      <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, rgba(105,192,172,0.2), rgba(243,147,37,0.2))' }} />
                    </div>
                    <p style={{ color: '#012025', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '21px', marginBottom: '8px' }}>
                      {insight.date}
                    </p>
                    <h3 className="group-hover:opacity-80 transition-opacity" style={{ color: '#000', fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: '28.33px', letterSpacing: '0.55px', marginBottom: '12px' }}>
                      {insight.title}
                    </h3>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
