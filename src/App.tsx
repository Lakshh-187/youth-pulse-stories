import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Frontliner from "./pages/Frontliner";
import TopOnePercent from "./pages/TopOnePercent";
import SEP700 from "./pages/SEP700";
import SEP1300 from "./pages/SEP1300";
import IEP from "./pages/IEP";
import NotFound from "./pages/NotFound";
import ReferralPage from "./pages/ReferralPage";
import Legal from "./pages/Legal";
import CampaignLeaders from "./pages/CampaignLeaders";
import WhoStopsYou from "./pages/WhoStopsYou";
import Career from "./pages/Career";
import YLC from "./pages/YLC";
import StanburgAward from "./pages/StanburgAward";
import ExecutionPlan from "./pages/ExecutionPlan";
import Store from "./pages/Store";
import DigitalStore from "./pages/DigitalStore";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Store routes */}
          <Route path="/store" element={<Store />} />
          <Route path="/store/digital" element={<DigitalStore />} />
          <Route path="/store/product/:id" element={<ProductDetail />} />
          <Route path="/store/cart" element={<Cart />} />
          {/* Program-related routes */}
          <Route path="/frontliner" element={<Frontliner />} />
          <Route path="/top-one-percent" element={<TopOnePercent />} />
          <Route path="/sep-700" element={<SEP700 />} />
          <Route path="/sep-1300" element={<SEP1300 />} />
          <Route path="/iep" element={<IEP />} />
          <Route path="/campaign-leaders" element={<CampaignLeaders />} />
          <Route path="/who-stops-you" element={<WhoStopsYou />} />
          <Route path="/career" element={<Career />} />
          <Route path="/ylc" element={<YLC />} />
          <Route path="/stanburg-award" element={<StanburgAward />} />
          <Route path="/execution-plan" element={<ExecutionPlan />} />
          {/* Placeholder routes for future blog functionality */}
          <Route path="/blogs" element={<NotFound />} />
          <Route path="/blog/:id" element={<NotFound />} />
          <Route path="/referral/:storyId" element={<ReferralPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
