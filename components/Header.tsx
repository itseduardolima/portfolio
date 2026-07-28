"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StatusDot } from "@/components/ui/status-dot";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-graphite/85 backdrop-blur-md">
      <div className="max-w-rail mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm text-ink shrink-0">
          E.LIMA<span className="text-amber">_</span>CASTRO
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono-caps text-[11px] text-muted hover:text-amber transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <StatusDot color="signal" />
          <span className="mono-caps text-[11px] text-muted">Disponível</span>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          className="md:hidden rounded-md text-ink p-1.5 hover:bg-panel transition-colors"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="md:hidden overflow-hidden rounded-b-xl border-t border-line bg-graphite"
      >
        <div className="flex flex-col px-5 py-4 gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="mono-caps text-xs text-muted hover:text-amber transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-line">
            <StatusDot color="signal" />
            <span className="mono-caps text-[11px] text-muted">
              Disponível — freelance / remoto
            </span>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
