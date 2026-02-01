import { BrowserRouter, Route, Routes } from "react-router-dom";

import InteractiveBackground from "./components/InteractiveBackground";
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

function App() {
  return (
    <BrowserRouter>
      {/* Mouse Effect */}
      <InteractiveBackground />

      <div className="min-h-screen bg-white relative">
        <Navigation />

        <Routes>
          {/* Home */}
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

          {/* Projects */}
          <Route
            path="/projects/Project_Manager"
            element={<Project_Manager />}
          />
          <Route
            path="/projects/Adventure_Works"
            element={<Adventure_Works />}
          />
          <Route
            path="/projects/Business_Project"
            element={<Business_Project />}
          />
          <Route
            path="/projects/Maven_Market"
            element={<Maven_Market />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
