import { Layout } from '@/components/layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import heroContato from '@/assets/hero-contato.png';
import flutuante2 from '@/assets/flutuante2.svg';

export default function Contato() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: '',
    privacidade: false
  });

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear form
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      mensagem: '',
      privacidade: false
    });
    // Show success modal
    setShowSuccessModal(true);
  };

  return (
    <Layout>
      {/* Hero Section - Copied from Solucoes */}
      <section className="relative overflow-hidden bg-background">
        <div className="drs-container py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-0 items-stretch min-h-[300px] lg:min-h-[400px]">
            {/* Image Side - Left */}
            <div className="relative w-full lg:w-1/2" style={{ position: 'relative', zIndex: 1 }}>
              <img 
                src={heroContato} 
                alt="Contato DRS" 
                className="w-full h-full min-h-[200px] lg:min-h-[400px] object-cover rounded-t-[24px] lg:rounded-t-none lg:rounded-l-[32px] lg:rounded-tl-[40px] lg:rounded-bl-[40px]"
              />
            </div>

            {/* Content Side - Right with teal background */}
            <div 
              className="relative w-full lg:w-1/2 flex flex-col justify-center overflow-hidden rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[32px] lg:rounded-tr-[40px] lg:rounded-br-[40px] p-[4rem_0.5rem_0.5rem_0.5rem] lg:p-0 mt-[-50px] lg:mt-0"
              style={{ backgroundColor: '#69C0AC' }}
            >
              <div className="lg:ml-[-35px] lg:w-[calc(100%+35px)] lg:p-[5.5rem]">
                <h1 className="text-[22px] md:text-[28px] lg:text-[35px] leading-[28px] md:leading-[34px] lg:leading-[40px]" style={{ color: '#000', fontWeight: 900 }}>
                  Se você deseja trabalhar conosco ou enviar uma proposta como fornecedor, acesse os canais abaixo:
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section with floating elements */}
      <section className="py-8 md:py-16 lg:py-24 bg-background overflow-hidden relative">
        {/* Floating decorative image */}
        <img 
          src={flutuante2} 
          alt="Decorativo" 
          className="hidden lg:block animate-float"
          style={{ position: 'absolute', right: 0, top: '80px', width: '200px', height: 'auto' }}
        />
        <div className="drs-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-start">
            <div className="lg:col-span-4">
              <Link
                to="#"
                className="flex items-center gap-4 p-4 rounded-xl transition-colors group w-full"
                style={{ backgroundColor: '#274B41', color: '#fff', fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                  <path d="M3.33334 19.9999C3.33334 12.1432 3.33334 8.2148 5.77413 5.77404C8.21489 3.33325 12.1433 3.33325 20 3.33325C27.8567 3.33325 31.7852 3.33325 34.2258 5.77404C36.6667 8.2148 36.6667 12.1432 36.6667 19.9999C36.6667 27.8566 36.6667 31.7851 34.2258 34.2258C31.7852 36.6666 27.8567 36.6666 20 36.6666C12.1433 36.6666 8.21489 36.6666 5.77413 34.2258C3.33334 31.7851 3.33334 27.8566 3.33334 19.9999Z" stroke="white" strokeWidth="2"/>
                  <path className="origin-center transition-transform duration-300 group-hover:rotate-180" d="M25 20H20M20 20H15M20 20V15M20 20V25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Sou fornecedor</span>
              </Link>
            </div>
            <div className="lg:col-span-4">
              <a
                href="https://vagasdrsgroup.gupy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-colors group w-full"
                style={{ backgroundColor: '#274B41', color: '#fff', fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
                  <path d="M3.33334 19.9999C3.33334 12.1432 3.33334 8.2148 5.77413 5.77404C8.21489 3.33325 12.1433 3.33325 20 3.33325C27.8567 3.33325 31.7852 3.33325 34.2258 5.77404C36.6667 8.2148 36.6667 12.1432 36.6667 19.9999C36.6667 27.8566 36.6667 31.7851 34.2258 34.2258C31.7852 36.6666 27.8567 36.6666 20 36.6666C12.1433 36.6666 8.21489 36.6666 5.77413 34.2258C3.33334 31.7851 3.33334 27.8566 3.33334 19.9999Z" stroke="white" strokeWidth="2"/>
                  <path className="origin-center transition-transform duration-300 group-hover:rotate-180" d="M25 20H20M20 20H15M20 20V15M20 20V25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Quero trabalhar com vocês</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="overflow-hidden relative pb-[3rem] lg:pb-[12rem]">
        <div className="drs-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div 
              className="col-span-1 lg:col-span-7 rounded-[24px] lg:rounded-[32px] contato-green-box"
              style={{ 
                backgroundColor: '#69C0AC', 
                color: '#000',
                backgroundImage: 'url(/images/canto-esquerdo.jpg)',
                backgroundPosition: 'top left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100px',
                padding: 'clamp(1.5rem, 4vw, 10rem) clamp(1.5rem, 4vw, 5rem) clamp(1.5rem, 2vw, 5rem) clamp(1.5rem, 4vw, 5rem)'
              }}
            >
              <h2 className="text-[20px] md:text-[28px] lg:text-[35px] leading-[26px] md:leading-[34px] lg:leading-[40px] mb-4" style={{ fontWeight: 900 }}>
                Quer saber mais sobre nossos serviços ou entender como podemos apoiar seu projeto?
              </h2>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[25px]" style={{ color: '#000', fontWeight: 400 }}>
                Preencha o formulário ao lado e nosso time comercial entrará em contato com você o mais breve possível.
              </p>
            </div>
            <div 
              className="col-span-1 lg:col-span-5"
              style={{ padding: 'clamp(1rem, 2vw, 4rem) clamp(1rem, 2vw, 4rem) 0 clamp(1rem, 2vw, 4rem)' }}
            >
              <form className="space-y-4 contato-form" onSubmit={handleSubmit}>
                <input 
                  type="text"
                  placeholder="Nome" 
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full outline-none focus:ring-0"
                  style={{ 
                    borderRadius: '8px', 
                    background: '#FFF', 
                    padding: '12px 20px', 
                    color: '#15AF97',
                    border: '1px solid #274B41',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full outline-none focus:ring-0"
                  style={{ 
                    borderRadius: '8px', 
                    background: '#FFF', 
                    padding: '12px 20px', 
                    color: '#15AF97',
                    border: '1px solid #274B41',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
                <input 
                  type="text"
                  placeholder="Empresa" 
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full outline-none focus:ring-0"
                  style={{ 
                    borderRadius: '8px', 
                    background: '#FFF', 
                    padding: '12px 20px', 
                    color: '#15AF97',
                    border: '1px solid #274B41',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
                <input 
                  type="tel" 
                  placeholder="Telefone" 
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  className="w-full outline-none focus:ring-0"
                  style={{ 
                    borderRadius: '8px', 
                    background: '#FFF', 
                    padding: '12px 20px', 
                    color: '#15AF97',
                    border: '1px solid #274B41',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
                <textarea 
                  placeholder="Mensagem" 
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full outline-none focus:ring-0 min-h-[120px] resize-none"
                  style={{ 
                    borderRadius: '8px', 
                    background: '#FFF', 
                    padding: '12px 20px', 
                    color: '#15AF97',
                    border: '1px solid #274B41',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                  }}
                />
                <label className="flex items-start gap-2 text-sm">
                  <Checkbox 
                    className="mt-0.5" 
                    checked={formData.privacidade}
                    onCheckedChange={(checked) => setFormData({...formData, privacidade: checked as boolean})}
                  />
                  <span style={{ color: '#666', fontSize: '14px' }}>
                    Li e concordo com a <a href="#" className="underline" style={{ color: '#274B41' }}>política de privacidade</a>.
                  </span>
                </label>
                <button 
                  type="submit" 
                  className="drs-btn"
                  style={{ backgroundColor: '#274B41', width: 'fit-content' }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md" style={{ borderRadius: '20px', padding: '2rem', textAlign: 'center' }}>
          <div className="flex flex-col items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#15AF97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#274B41' }}>
              Mensagem enviada com sucesso!
            </h3>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Em breve entraremos em contato.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
