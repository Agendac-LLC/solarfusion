import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import Index from "./pages/Index";
import Particuliers from "./pages/Particuliers";
import B2B from "./pages/B2B";
import DomotiquePAC from "./pages/DomotiquePAC";
import Expertise from "./pages/Expertise";
import SimulateurPage from "./pages/SimulateurPage";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/particuliers" element={<Particuliers />} />
            <Route path="/b2b" element={<B2B />} />
            <Route path="/domotique-pac" element={<DomotiquePAC />} />
            <Route path="/notre-expertise" element={<Expertise />} />
            <Route path="/simulateur" element={<SimulateurPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
