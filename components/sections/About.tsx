"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Me from "../../public/assets/images/person.jpeg"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

interface AboutSectionProps {
  fadeInUp: object
  id?: string
}

export function AboutSection({ fadeInUp, id }: AboutSectionProps) {
  const ref = useRef(null)
  const [jobTitleIndex, setJobTitleIndex] = useState(0)
  const jobTitles = ["Desenvolvedor Frontend", "Desenvolvedor Backend", "Desenvolvedor FullStack"]
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [jobTitles.length])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.section
      id={id}
      ref={ref}
      className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto"
      {...fadeInUp}
    >
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-teal-400">
            Olá, eu sou o Eduardo <br />
            <div className="h-[40px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={jobTitleIndex}
                  className="inline-block"
                  initial={{
                    y: 40,
                    opacity: 0,
                    color: "#2dd4bf",
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    color: ["#2dd4bf", "#3b82f6", "#2dd4bf"],
                    transition: {
                      y: { type: "spring", stiffness: 100, damping: 15 },
                      opacity: { duration: 0.4 },
                      color: { duration: 2, times: [0, 0.5, 1] },
                    },
                  }}
                  exit={{
                    y: -40,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  {jobTitles[jobTitleIndex].split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.05,
                          duration: 0.3,
                        },
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: cursorVisible ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block ml-1 w-[3px] h-[30px] bg-teal-400"
                  />
                </motion.span>
              </AnimatePresence>
            </div>
          </h2>
          <p className="lg:text-xl mb-6 text-gray-300">
            Bem-vindo ao meu portfólio! Sou um <span className="text-teal-400">Desenvolvedor</span> com uma sólida
            experiência em construção de aplicações modernas. Minhas habilidades abrangem uma variedade de tecnologias,
            destacando-me na criação de soluções robustas e eficientes.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/itseduardolima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eduardolima07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 border border-teal-400 hover:bg-teal-400 hover:text-gray-900 font-medium py-2 px-4 rounded-full transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Me}
            alt="Eduardo"
            className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-teal-400 shadow-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}