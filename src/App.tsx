import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/FilmGrain";

// Eager: homepage (first paint)
import Index from "./pages/Index";

// Lazy: secondary pages (code-split)
const Particuliers = lazy(() => import("./pages/Particuliers"));
const B2B = lazy(() => import("./pages/B2B"));
const DomotiquePAC = lazy(() => import("./pages/DomotiquePAC"));
const Expertise = lazy(() => import("./pages/Expertise"));
const SimulateurPage = lazy(() => import("./pages/SimulateurPage"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FilmGrain />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Suspense fallback={<div className="min-h-screen" />}>
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
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
