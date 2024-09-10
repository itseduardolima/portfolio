import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Me from "../../public/assets/images/person.jpeg";
import Image from "next/image";
import { useRef } from "react";

interface AboutSectionProps {
  fadeInUp: object;
  id?: string;
}

export function AboutSection({ fadeInUp, id }: AboutSectionProps) {

  const ref = useRef(null);

  return (
    <motion.section id={id} ref={ref} className="py-20" {...fadeInUp}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 text-teal-400">
            Olá, eu sou o Eduardo
          </h2>
          <p className="text-xl mb-6 text-gray-300">
            Bem-vindo ao meu portfólio! Sou um <span className="text-teal-400">Desenvolvedor FullStack</span> com uma sólida
            experiência em construção de aplicações modernas. Minhas habilidades
            abrangem uma variedade de tecnologias, destacando-me na criação de
            soluções robustas e eficientes.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/itseduardolima"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/eduardolima07/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-teal-400 border border-teal-400 hover:bg-teal-400 hover:text-gray-900 font-medium py-2 px-4 rounded transition-colors"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <motion.div
          className="md:w-1/2"
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
  );
}
