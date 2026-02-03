import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Tag } from '@/components/ui/Tag';
import { InsightCard } from '@/components/ui/InsightCard';
import { CTASection } from '@/components/sections';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Search } from 'lucide-react';

const categories = ['Tecnologia', 'Logística', 'Transporte', 'Entrevistas'];
const insights = [
  { title: 'Sai Pátria, entra Vinci: após rearranjo societário, DRS avança no exterior', date: '08 outubro, 2025', slug: 'sai-patria-entra-vinci', categories: ['Logística', 'Tecnologia'] },
  { title: 'Mobilidade inteligente no setor logístico', date: '7 março, 2025', slug: 'mobilidade-inteligente', categories: ['Transporte'] },
  { title: 'Como a Inteligência Artificial está transformando a logística moderna', date: '17 junho, 2025', slug: 'ia-logistica', categories: ['Logística', 'Tecnologia'] },
];

export default function Insights() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-primary">
        <div className="drs-container">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            As últimas notícias,<br/>entrevistas, tecnologias e<br/>recursos do setor.
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Buscar" className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
              <div>
                <h3 className="font-semibold mb-4">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <Checkbox checked={selectedCategories.includes(cat)} onCheckedChange={(checked) => {
                        if (checked) setSelectedCategories([...selectedCategories, cat]);
                        else setSelectedCategories(selectedCategories.filter(c => c !== cat));
                      }} />
                      <span className="text-sm">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {insights.map((insight) => (
                  <InsightCard key={insight.slug} {...insight} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
