import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
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
const JobApplication = lazy(() => import("./pages/JobApplicationMultiStep"));
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

// ERP Subpages
const ERPOverview = lazy(() => import("./pages/erp/Overview"));
const OdooImplementation = lazy(() => import("./pages/erp/Odoo"));
const ERPMigration = lazy(() => import("./pages/erp/Migration"));
const ERPCustomization = lazy(() => import("./pages/erp/Customization"));

// Development Subpages  
const DevelopmentOverview = lazy(() => import("./pages/development/Overview"));
const WebDevelopment = lazy(() => import("./pages/development/Web"));
const MobileDevelopment = lazy(() => import("./pages/development/Mobile"));
const EnterpriseDevelopment = lazy(() => import("./pages/development/Enterprise"));
const EcommerceDevelopment = lazy(() => import("./pages/development/Ecommerce"));

// Cloud Subpages
const CloudInfrastructure = lazy(() => import("./pages/cloud/Infrastructure"));
const CloudMigration = lazy(() => import("./pages/cloud/Migration"));
const CloudDevOps = lazy(() => import("./pages/cloud/DevOps"));
const CloudSecurity = lazy(() => import("./pages/cloud/Security"));

// AI Subpages
const AIML = lazy(() => import("./pages/ai/ML"));
const AIAutomation = lazy(() => import("./pages/ai/Automation"));
const AIChatbots = lazy(() => import("./pages/ai/Chatbots"));
const AIAnalytics = lazy(() => import("./pages/ai/Analytics"));

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
  <HelmetProvider>
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
            
            {/* ERP Routes */}
            <Route path="/erp" element={<ERPOverview />} />
            <Route path="/erp/overview" element={<ERPOverview />} />
            <Route path="/erp/odoo" element={<OdooImplementation />} />
            <Route path="/erp/migration" element={<ERPMigration />} />
            <Route path="/erp/customization" element={<ERPCustomization />} />
            
            {/* Development Routes */}
            <Route path="/development" element={<DevelopmentOverview />} />
            <Route path="/development/overview" element={<DevelopmentOverview />} />
            <Route path="/development/web" element={<WebDevelopment />} />
            <Route path="/development/mobile" element={<MobileDevelopment />} />
            <Route path="/development/enterprise" element={<EnterpriseDevelopment />} />
            <Route path="/development/ecommerce" element={<EcommerceDevelopment />} />
            
            {/* Cloud Routes */}
            <Route path="/cloud" element={<Cloud />} />
            <Route path="/cloud/infrastructure" element={<CloudInfrastructure />} />
            <Route path="/cloud/migration" element={<CloudMigration />} />
            <Route path="/cloud/devops" element={<CloudDevOps />} />
            <Route path="/cloud/security" element={<CloudSecurity />} />
            
            {/* AI Routes */}
            <Route path="/ai" element={<AI />} />
            <Route path="/ai/ml" element={<AIML />} />
            <Route path="/ai/automation" element={<AIAutomation />} />
            <Route path="/ai/chatbots" element={<AIChatbots />} />
            <Route path="/ai/analytics" element={<AIAnalytics />} />
            
            {/* Legacy routes for compatibility */}
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
            
            {/* Legacy service-specific pages - redirect to new structure */}
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
  </HelmetProvider>
);

export default App;
