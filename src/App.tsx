import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ERP = lazy(() => import("./pages/ERP"));
const Industries = lazy(() => import("./pages/Industries"));
const Consultation = lazy(() => import("./pages/Consultation"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Development = lazy(() => import("./pages/Development"));
const Cloud = lazy(() => import("./pages/Cloud"));
const AI = lazy(() => import("./pages/AI"));
const ServiceConfigurator = lazy(() => import("./pages/ServiceConfigurator"));
const ImplementationMethodology = lazy(() => import("./pages/ImplementationMethodology"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/erp" element={<ERP />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/about" element={<About />} />
            {/* Service-specific pages */}
            <Route path="/development" element={<Development />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/service-configurator" element={<ServiceConfigurator />} />
            <Route path="/implementation-methodology" element={<ImplementationMethodology />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Consultation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
