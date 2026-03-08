import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import ReviewsBanner from "@/components/ReviewsBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

// All pages imported eagerly (required for react-snap prerendering)
import Index from "./pages/Index";
import Particuliers from "./pages/Particuliers";
import B2B from "./pages/B2B";
import DomotiquePAC from "./pages/DomotiquePAC";
import SimulateurPage from "./pages/SimulateurPage";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation} strict>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ScrollProgress />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/particuliers" element={<Particuliers />} />
              <Route path="/b2b" element={<B2B />} />
              <Route path="/domotique-pac" element={<DomotiquePAC />} />
              <Route path="/simulateur" element={<SimulateurPage />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <ReviewsBanner />
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
