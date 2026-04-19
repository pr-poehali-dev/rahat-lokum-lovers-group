import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import Navigation from "./components/Navigation";

type Page = "home" | "about" | "contacts";

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #fdf6f0 0%, #fce8ef 45%, #f5ede0 100%)" }}>
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contacts" && <ContactsPage />}
      </div>
    </TooltipProvider>
  );
};

export default App;
