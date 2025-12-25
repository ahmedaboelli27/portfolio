import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/About';
import BusinessImpact from "./components/BusinessImpact";
import Contact from './components/Contact';
import Hero from './components/Hero';
import MyAnalyticsProcess from "./components/MyAnalyticsProcess";
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Adventure_Works from './components/Projects/Adventure_Works';
import Business_Project from './components/Projects/Business_Project';
import Maven_Market from './components/Projects/Maven_Market';
import Project_Manager from './components/Projects/Project_Maneger';
import UseCases from "./components/UseCases";




function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />

        <Routes>
          {/* Home Page */}
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
                <Contact />
              </>
            }
          />

          {/* Project Portfolio Page */}
          <Route
            path="/projects/Project_Manager"
            element={<Project_Manager />}
          />
          <Route path="/projects/Adventure_Works" element={<Adventure_Works />} />
          <Route path="/projects/Business_Project" element={<Business_Project />} />
          <Route path="/projects/Maven_Market" element={<Maven_Market />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
