import { Layout } from '@/components/layout';
import { useTranslation } from '@/hooks/useTranslation';
import { useCookiesPolicy } from '@/hooks/useStrapi';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function PoliticaCookies() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { data, isLoading } = useCookiesPolicy(language);

  return (
    <Layout>
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
              <div className="col-span-12 lg:col-start-3 lg:col-span-10">
                <h1 
                  style={{ 
                    color: '#000', 
                    fontSize: '35px', 
                    fontStyle: 'normal', 
                    fontWeight: 900, 
                    lineHeight: '40px' 
                  }}
                >
                  {data?.title || 'Política de Cookies'}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="politica-section2 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              {isLoading ? (
                <div className="flex justify-center py-20">
                  <div className="w-8 h-8 border-4 border-[#15AF97] border-t-transparent rounded-full animate-spin" />
                </div>
              ) : data?.content ? (
                <div className="prose prose-lg max-w-none privacy-content" style={{ color: '#000', fontSize: '18px', lineHeight: '1.6' }}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {data.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-center py-20" style={{ color: '#666' }}>
                  Conteúdo não disponível.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
