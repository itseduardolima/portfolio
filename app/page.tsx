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
    initial: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-graphite text-ink">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main id="hero" className="max-w-rail mx-auto px-5 lg:px-8">
        <AboutSection fadeInUp={fadeInUp} id="sobre" />
        <SkillsSection fadeInUp={fadeInUp} id="stack" skills={skillsData} />
        <ExperienceSection
          fadeInUp={fadeInUp}
          id="experiencia"
          experience={experienceData}
          education={educationData}
        />
        <ProjectsSection
          fadeInUp={fadeInUp}
          id="projetos"
          projects={projectData}
        />
      </main>
      <Footer id="contato" />
      <ToastContainer theme="dark" />
    </div>
  );
}
