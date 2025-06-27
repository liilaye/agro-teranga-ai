
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex min-h-screen">
                  <Navigation />
                  <div className="flex-1">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/fields" element={<Dashboard />} />
                      <Route path="/crops" element={<Dashboard />} />
                      <Route path="/alerts" element={<Dashboard />} />
                      <Route path="/planning" element={<Dashboard />} />
                      <Route path="/team" element={<Dashboard />} />
                      <Route path="/settings" element={<Dashboard />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
