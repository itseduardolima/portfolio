import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-opacity-90 backdrop-blur-sm bg-gray-900">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-teal-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Eduardo Lima
        </motion.h1>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-300 hover:text-teal-400 font-bold"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <motion.div
          className="hidden md:flex items-center space-x-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#about" className="text-gray-300 hover:text-teal-400 font-bold transition-colors">
            Sobre
          </a>
          <a href="#skills" className="text-gray-300 hover:text-teal-400 font-bold transition-colors">
            Habilidades
          </a>
          <a href="#experience" className="text-gray-300 hover:text-teal-400 font-bold transition-colors">
            Experiência
          </a>
          <a href="#projects" className="text-gray-300 hover:text-teal-400 font-bold transition-colors">
            Projetos
          </a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400 font-bold transition-colors">
            Contato
          </a>
        </motion.div>
      </nav>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-gray-800 overflow-hidden"
      >
        <div className="flex flex-col p-4 space-y-4">
          <a href="#about" className="text-gray-300 hover:text-teal-400 font-bold transition-colors" onClick={toggleMenu}>
            Sobre
          </a>
          <a href="#skills" className="text-gray-300 hover:text-teal-400 font-bold transition-colors" onClick={toggleMenu}>
            Habilidades
          </a>
          <a href="#experience" className="text-gray-300 hover:text-teal-400 font-bold transition-colors" onClick={toggleMenu}>
            Experiência
          </a>
          <a href="#projects" className="text-gray-300 hover:text-teal-400 font-bold transition-colors" onClick={toggleMenu}>
            Projetos
          </a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400 font-bold transition-colors" onClick={toggleMenu}>
            Contato
          </a>
        </div>
      </motion.div>
    </header>
  );
}
