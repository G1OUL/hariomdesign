import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import type { ProjectCaseStudy, ServicePackage } from "./config/portfolio";

export const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);

  const handleSelectService = (service: ServicePackage) => {
    setSelectedService(service);
    // Smooth scroll to contact section
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenInquiry = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Landmarks */}
      <main id="main-content">
        <Hero onOpenInquiry={handleOpenInquiry} />
        <SelectedWork onSelectProject={(project) => setActiveProject(project)} />
        <Services onSelectService={handleSelectService} />
        <Process />
        <About />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />
    </div>
  );
};

export default App;
