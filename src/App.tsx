import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";

import About from "./components/About";
import BusinessImpact from "./components/BusinessImpact";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MyAnalyticsProcess from "./components/MyAnalyticsProcess";
import ProfessionalDevelopment from "./components/ProfessionalDevelopment";
import Projects from "./components/Projects";
import UseCases from "./components/UseCases";

import Adventure_Works from "./components/Projects/Adventure_Works";
import Business_Project from "./components/Projects/Business_Project";
import Maven_Market from "./components/Projects/Maven_Market";
import Project_Manager from "./components/Projects/Project_Maneger";

// **تعريف window.gtag لتجنب خطأ TypeScript**
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-1KPTP8TFW0", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <About />
            <MyAnalyticsProcess />
            <UseCases />
            <BusinessImpact />
            <Projects />
            <ProfessionalDevelopment />
            <Contact />
          </>
        }
      />
      <Route path="/projects/Project_Manager" element={<Project_Manager />} />
      <Route path="/projects/Adventure_Works" element={<Adventure_Works />} />
      <Route path="/projects/Business_Project" element={<Business_Project />} />
      <Route path="/projects/Maven_Market" element={<Maven_Market />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-transparent relative"
        style={{
          backgroundImage: "url('/hero_background.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navigation />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;