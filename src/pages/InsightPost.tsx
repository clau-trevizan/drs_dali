import { useParams } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Tag } from '@/components/ui/Tag';
import { CTASection } from '@/components/sections';
import { InsightCard } from '@/components/ui/InsightCard';
import { Twitter, Linkedin, Link2 } from 'lucide-react';

export default function InsightPost() {
  const { slug } = useParams();

  return (
    <Layout>
      <article className="py-16 bg-background">
        <div className="drs-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-2 mb-4">
              <Tag variant="outline" size="sm">Logística</Tag>
              <Tag variant="outline" size="sm">Tecnologia</Tag>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sai Pátria, entra Vinci: após rearranjo societário, DRS avança no exterior
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>08 outubro, 2025</span>
              <span>Por Equipe DRS</span>
              <div className="flex gap-2 ml-auto">
                <button className="p-2 rounded-full hover:bg-muted"><Twitter className="w-4 h-4" /></button>
                <button className="p-2 rounded-full hover:bg-muted"><Linkedin className="w-4 h-4" /></button>
                <button className="p-2 rounded-full hover:bg-muted"><Link2 className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>Fundador do grupo que atua em pesquisa clínica retomou controle e abre operação na Europa.</p>
              <p>A DRS fez um rearranjo em sua estrutura societária, que permite à companhia, agora, focar em seu plano de crescimento internacional. O grupo atua na cadeia de pesquisa clínica e medicamentos, desde fornecimento de insumos e amostras biológicas à logística com controle de temperatura.</p>
            </div>
          </div>
        </div>
      </article>

      <CTASection variant="compact" />

      <section className="py-16 bg-background">
        <div className="drs-container">
          <h2 className="text-2xl font-bold mb-8">Insights similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsightCard title="Como a Inteligência Artificial está transformando a logística moderna" date="17 junho, 2025" slug="ia-logistica" categories={['Logística', 'Tecnologia']} />
            <InsightCard title="Mobilidade inteligente no setor logístico" date="7 março, 2025" slug="mobilidade-inteligente" categories={['Transporte']} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
