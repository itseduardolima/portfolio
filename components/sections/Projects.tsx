"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/mock/projectsData"
import Image from "next/image"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Button } from "@/components/ui/button"

interface ProjectsSectionProps {
  fadeInUp: object
  projects: Project[]
  id?: string
}

export function ProjectsSection({ fadeInUp, projects, id }: ProjectsSectionProps) {
  const ref = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <motion.section id={id} ref={ref} className="relative min-h-[75vh]  lg:min-h-screen overflow-hidden" {...fadeInUp}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold mb-6 text-teal-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projetos em Destaque
        </motion.h2>

        <div className="relative md:px-12 py-6 md:py-10">
          {/* Navigation buttons - Hidden on small screens, visible on medium and up */}
          <Button
            variant="ghost"
            className="swiper-button-prev absolute -left-2 md:left-0 top-1/2 z-10 -translate-y-1/2 h-10 w-10 p-0 rounded-full"
            aria-label="Previous slide"
          >
            <ChevronLeft className="hidden md:block" />
          </Button>

          <Button
            variant="ghost"
            className="swiper-button-next absolute -right-2 md:right-0 top-1/2 z-10 -translate-y-1/2 h-10 w-10 p-0 rounded-full"
            aria-label="Next slide"
          >
            <ChevronRight className="hidden md:block" />
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
              <SwiperSlide key={index} className="w-full md:w-[80%] max-w-4xl">
                {/* Mobile Layout (flex column) */}
                <div className="md:hidden flex flex-col bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      width={1200}
                      height={800}
                      priority={index === 0}
                    />
                  </div>

                  {/* Content Below Image */}
                  <div className="p-4 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                    {/* Project type badge */}
                    <Badge
                      className={`${project.isFreelance ? "bg-purple-500" : "bg-teal-500"} text-white text-xs px-2 py-0.5 mb-2`}
                    >
                      {project.isFreelance ? "Freelance" : "Projeto Pessoal"}
                    </Badge>

                    {/* Description */}
                    <p className="text-white/90 text-sm mb-3 line-clamp-3">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-white/20 text-white border-none text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons - Smaller on mobile */}
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={project.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-teal-600 font-medium text-xs py-1.5 px-3 rounded-full shadow-lg"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" /> Ver Deploy
                      </a>

                      {!project.isFreelance && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-black/30 text-white font-medium text-xs py-1.5 px-3 rounded-full"
                        >
                          <Github className="mr-1 h-3 w-3" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (hover effect) */}
                <div className="hidden md:block relative overflow-hidden rounded-3xl shadow-2xl h-[400px] group">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="object-cover object-center w-full h-full transition-all duration-700"
                      width={1200}
                      height={800}
                      priority={index === 0}
                    />
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content that appears on hover */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-8 px-12 py-7 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                    <motion.div className="max-w-2xl">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{project.title}</h3>

                      {/* Description */}
                      <p className="text-white/90 text-lg mb-6">{project.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-white/20 hover:bg-white/30 text-white border-none transition-colors duration-300 text-sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.isFreelance && (
                          <Badge className="bg-purple-500/70 hover:bg-purple-500/90 text-white border-none transition-colors duration-300 text-sm">
                            Freelance
                          </Badge>
                        )}
                        {!project.isFreelance && (
                          <Badge className="bg-teal-500/70 hover:bg-teal-500/90 text-white border-none transition-colors duration-300 text-sm">
                            Projeto Pessoal
                          </Badge>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white text-teal-600 hover:bg-teal-50 font-medium text-base py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Ver Deploy
                        </a>

                        {!project.isFreelance && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-black/30 text-white hover:bg-black/40 font-medium text-base py-3 px-6 rounded-full transition-all duration-300"
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

          {/* Custom pagination indicator - Smaller on mobile */}
          <div className="flex justify-center mt-4 md:mt-8 gap-1 md:gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`h-1.5 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? "bg-teal-400 w-5 md:w-10" : "bg-gray-600 w-1.5 md:w-3"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  if (swiperInstance) {
                    swiperInstance.slideTo(index)
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

