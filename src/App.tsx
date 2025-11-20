import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import { allServicesData } from "./data/allServicesData";
import Index from "./pages/Index";
import { Navigate } from "react-router-dom";

// ScrollToTop component to automatically scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper component to load service data based on URL slug
const ServiceDetailWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allServicesData.find(s => s.slug === slug);
  
  return <ServiceDetail service={service} />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index  />} />
          <Route path="/about" element={<Navigate to="/about-us" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetailWrapper />} />
          {/* <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
          <Route path="/visitor-visa-insurance" element={<VisitorVisaInsurance />} />
          <Route path="/life-insurance" element={<LifeInsurance />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
