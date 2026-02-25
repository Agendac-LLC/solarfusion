import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import ReviewsBanner from "@/components/ReviewsBanner";
import WhatsAppButton from "@/components/WhatsAppButton";

// Eager: homepage (first paint)
import Index from "./pages/Index";

// Lazy: secondary pages (code-split)
const Particuliers = lazy(() => import("./pages/Particuliers"));
const B2B = lazy(() => import("./pages/B2B"));
const DomotiquePAC = lazy(() => import("./pages/DomotiquePAC"));
const SimulateurPage = lazy(() => import("./pages/SimulateurPage"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy: non-critical UI
const ScrollProgress = lazy(() => import("@/components/ScrollProgress"));

const queryClient = new QueryClient();

// Custom domain on GitHub Pages: use HashRouter in production for SPA routing
const Router = import.meta.env.MODE === "production" ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LazyMotion features={domAnimation} strict>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <ScrollToTop />
          <Suspense fallback={null}>
            <ScrollProgress />
          </Suspense>
          <Header />
          <main>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/particuliers" element={<Particuliers />} />
                <Route path="/b2b" element={<B2B />} />
                <Route path="/domotique-pac" element={<DomotiquePAC />} />
                <Route path="/simulateur" element={<SimulateurPage />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <ReviewsBanner />
          <Footer />
          <WhatsAppButton />
        </Router>
      </TooltipProvider>
    </LazyMotion>
  </QueryClientProvider>
);

export default App;
