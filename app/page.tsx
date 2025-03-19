"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";
import { skillsData } from "@/mock/skillsData";
import { experienceData } from "@/mock/experiencesData";
import { projectData } from "@/mock/projectsData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { educationData } from "@/mock/educationData";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="container mx-auto px-4 pt-20">
        <AboutSection fadeInUp={fadeInUp} id="about" />
        <ProjectsSection
          fadeInUp={fadeInUp}
          id="projects"
          projects={projectData}
        />
        <ExperienceSection
          fadeInUp={fadeInUp}
          id="experience"
          experience={experienceData}
          education={educationData}
        />
        <SkillsSection fadeInUp={fadeInUp} id="skills" skills={skillsData} />
      </main>
      <Footer id="contact" />
      <ToastContainer />
    </div>
  );
}
