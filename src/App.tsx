
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Frontliner from "./pages/Frontliner";
import TopOnePercent from "./pages/TopOnePercent";
import NotFound from "./pages/NotFound";
import ReferralPage from "./pages/ReferralPage";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/frontliner" element={<Frontliner />} />
          <Route path="/top-one-percent" element={<TopOnePercent />} />
          <Route path="/blogs" element={<NotFound />} /> {/* Placeholder for future blogs page */}
          <Route path="/blog/:id" element={<NotFound />} /> {/* Placeholder for future blog detail page */}
          <Route path="/referral/:storyId" element={<ReferralPage />} />
          <Route path="/legal" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
