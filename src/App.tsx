import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { PageLoader } from "@/components/ui/PageLoader";

import { SmoothScroll } from "@/components/ui/SmoothScroll";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { CookieConsent } from "./components/ui/CookieConsent";

// Lazy load pages
const Solucoes = lazy(() => import("./pages/Solucoes"));
const CTS = lazy(() => import("./pages/areas/CTS"));
const PCS = lazy(() => import("./pages/areas/PCS"));
const TIS = lazy(() => import("./pages/areas/TIS"));
const DRS360 = lazy(() => import("./pages/DRS360"));
const GrupoDRS = lazy(() => import("./pages/GrupoDRS"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightPost = lazy(() => import("./pages/InsightPost"));
const Contato = lazy(() => import("./pages/Contato"));
const PoliticaPrivacidade = lazy(() => import("./pages/PoliticaPrivacidade"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmoothScroll />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <PageLoader />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solucoes" element={<Solucoes />} />
              <Route path="/areas/cts" element={<CTS />} />
              <Route path="/areas/pcs" element={<PCS />} />
              <Route path="/areas/tis" element={<TIS />} />
              <Route path="/drs-360" element={<DRS360 />} />
              <Route path="/grupo-drs" element={<GrupoDRS />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightPost />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
