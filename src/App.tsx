import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import AdminDashboard from "@/components/AdminDashboard";
import SAPAdminPage from "@/pages/SAPAdminPage";

const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ERP = lazy(() => import("./pages/ERP"));
const Industries = lazy(() => import("./pages/Industries"));
const Consultation = lazy(() => import("./pages/Consultation"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const JobApplication = lazy(() => import("./pages/JobApplication"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const DataProtection = lazy(() => import("./pages/DataProtection"));
const AccessibilityStatement = lazy(() => import("./pages/AccessibilityStatement"));
const Development = lazy(() => import("./pages/Development"));
const Cloud = lazy(() => import("./pages/Cloud"));
const AI = lazy(() => import("./pages/AI"));
const ServiceConfigurator = lazy(() => import("./pages/ServiceConfigurator"));
const ImplementationMethodology = lazy(() => import("./pages/ImplementationMethodology"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const KeyboardShortcuts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl+Alt+Shift+A
      if (event.ctrlKey && event.altKey && event.shiftKey && event.key === 'A') {
        event.preventDefault();
        navigate('/admin');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AdminDashboard />
      <BrowserRouter>
        <KeyboardShortcuts />
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/erp" element={<ERP />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply/:jobId" element={<JobApplication />} />
            {/* Privacy and Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy/cookies" element={<CookiePolicy />} />
            <Route path="/privacy/data-protection" element={<DataProtection />} />
            <Route path="/privacy/accessibility" element={<AccessibilityStatement />} />
            {/* Service-specific pages */}
            <Route path="/development" element={<Development />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/service-configurator" element={<ServiceConfigurator />} />
            <Route path="/implementation-methodology" element={<ImplementationMethodology />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/contact" element={<Consultation />} />
            {/* SAP-Style Admin Portal */}
            <Route path="/admin" element={<SAPAdminPage onLogout={() => window.location.href = '/'} />} />
            <Route path="/admin/*" element={<SAPAdminPage onLogout={() => window.location.href = '/'} />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
