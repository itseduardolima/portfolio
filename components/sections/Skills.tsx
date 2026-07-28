"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Skills } from "@/mock/skillsData";

interface SkillsSectionProps {
  fadeInUp: object;
  skills: Skills;
  id?: string;
}

export function SkillsSection({ skills, id }: SkillsSectionProps) {
  const entries = Object.entries(skills);

  return (
    <section id={id} className="py-24 lg:py-32">
      <SectionHeading
        index="02"
        eyebrow="Stack técnica"
        title="Registro de stack"
        description="Ferramentas e frameworks que uso no dia a dia, agrupados por camada — do frontend à infraestrutura e IA."
      />

      <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
        {entries.map(([category, techs], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-panel p-6 lg:p-7"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="mono-caps text-xs text-amber">{category}</h3>
              <span className="font-mono text-[11px] text-faint">
                {String(techs.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full font-mono text-xs text-ink border border-line2 px-2.5 py-1.5 hover:border-amber hover:text-amber transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
