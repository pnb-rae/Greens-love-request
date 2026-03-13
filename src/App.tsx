import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MusicProvider } from "@/components/MusicProvider";
import MusicToggle from "@/components/MusicToggle";
import FloatingHearts from "@/components/FloatingHearts";
import Index from "./pages/Index";
import ReasonPage from "./pages/ReasonPage";
import CardsPage from "./pages/CardsPage";
import GamePage from "./pages/GamePage";
import LoveLetterPage from "./pages/LoveLetterPage";
import TimelinePage from "./pages/TimelinePage";
import ScratchCardPage from "./pages/ScratchCardPage";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";
import CelebrationPage from "./pages/CelebrationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/reason" element={<ReasonPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/love-letter" element={<LoveLetterPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/scratch-card" element={<ScratchCardPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/celebration" element={<CelebrationPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MusicProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MusicToggle />
          <FloatingHearts />
          <AnimatedRoutes />
        </BrowserRouter>
      </MusicProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
