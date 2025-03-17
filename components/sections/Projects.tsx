"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/mock/projectsData";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../ui/button";

interface ProjectsSectionProps {
  fadeInUp: object;
  projects: Project[];
  id?: string;
}

export function ProjectsSection({
  fadeInUp,
  projects,
  id,
}: ProjectsSectionProps) {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      {...fadeInUp}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold mb-6 text-teal-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projetos em Destaque
        </motion.h2>

        <div className="relative px-4 md:px-12 py-10">
          <Button
            variant="ghost"
            className="swiper-button-prev absolute -left-5 top-1/2 z-10 -translate-y-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="absolute" />
          </Button>

          <Button
            variant="ghost"
            className="swiper-button-next absolute -right-5 top-1/2 z-10 -translate-y-1/2"
            aria-label="Next slide"
          >
            <ChevronRight className="absolute" />
          </Button>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-[80%] max-w-4xl">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] group">
                  {/* Background Image */}
                  <div className="absolute z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover object-center w-full h-full transition-all duration-700"
                      width={1200}
                      height={800}
                      priority={index === 0}
                    />
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project title that's always visible but subtle */}
                  <div className="absolute bottom-6 left-6 z-10 transition-all duration-300 group-hover:opacity-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>

                  {/* Content that appears on hover */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 md:px-12 md:py-7 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                    <motion.div className="max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      <p className="text-white/90 text-lg max-w-md mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-white/20 hover:bg-white/30 text-white border-none transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.isFreelance && (
                          <Badge className="bg-purple-500/70 hover:bg-purple-500/90 text-white border-none transition-colors duration-300">
                            Freelance
                          </Badge>
                        )}
                        {!project.isFreelance && (
                          <Badge className="bg-teal-500/70 hover:bg-teal-500/90 text-white border-none transition-colors duration-300">
                            Projeto Pessoal
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver Deploy
                        </a>

                        {!project.isFreelance && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-black/30 text-white hover:bg-black/40 font-medium py-3 px-6 rounded-full transition-all duration-300"
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "bg-teal-400 w-10" : "bg-gray-600 w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  if (swiperInstance) {
                    swiperInstance.slideTo(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
