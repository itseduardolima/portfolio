"use client"

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { ProjectsSection } from "@/components/sections/Projects";
import { Footer } from "@/components/Footer";
import { skillsData } from "@/mock/skillsData";
import { experienceData } from "@/mock/experiencesData";
import { projectData } from "@/mock/projectsData";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-400 z-50"
        style={{ scaleX }}
      />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="container mx-auto px-6 pt-20">
        <AboutSection fadeInUp={fadeInUp} />
        <SkillsSection fadeInUp={fadeInUp} skills={skillsData} />
        <ExperienceSection fadeInUp={fadeInUp} experience={experienceData} />
        <ProjectsSection fadeInUp={fadeInUp} projects={projectData} />
      </main>
      <Footer />
    </div>
  );
}
