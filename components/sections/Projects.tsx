"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import type { Project } from "@/mock/projectsData";
import Image from "next/image";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { professionalProjectsData } from "@/mock/professionalProjectsData";

interface ProjectsSectionProps {
  fadeInUp: object;
  projects: Project[];
  id?: string;
}

export function ProjectsSection({ projects, id }: ProjectsSectionProps) {
  return (
    <section id={id} className="py-24 lg:py-32">
      <SectionHeading
        index="04"
        eyebrow="Projetos"
        title="Sistemas em produção"
        description="Projetos profissionais desenvolvidos para o setor industrial e educacional, e projetos independentes entregues como freelancer."
      />

      {/* Profissionais / corporativos */}
      <div className="mb-6 flex items-center gap-3">
        <span className="mono-caps text-xs text-faint">Profissionais — corporativo</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-line border border-line mb-20 lg:mb-24">
        {professionalProjectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="bg-panel p-6 lg:p-7 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="font-display font-bold uppercase text-2xl text-ink leading-tight">
                {project.title}
              </h3>
              <span className="rounded-full inline-flex items-center gap-1.5 mono-caps text-[10px] text-faint border border-line2 px-2.5 py-1 shrink-0">
                <Lock className="h-3 w-3" /> Privado
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{project.summary}</p>
            <ul className="space-y-1.5 mb-5">
              {project.highlights.map((h) => (
                <li key={h} className="text-xs text-muted leading-relaxed pl-3 relative">
                  <span className="absolute left-0 text-amber">·</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full font-mono text-[11px] text-muted border border-line2 px-2.5 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Independentes / freelance */}
      <div className="mb-6 flex items-center gap-3">
        <span className="mono-caps text-xs text-faint">Independentes — freelance</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <Panel className="overflow-hidden group h-full flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  width={800}
                  height={500}
                  priority={index === 0}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold uppercase text-xl text-ink leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full font-mono text-[10px] text-faint border border-line2 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md inline-flex items-center gap-1.5 font-mono text-xs text-graphite bg-amber px-3 py-2 hover:bg-ink transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Deploy
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md inline-flex items-center gap-1.5 font-mono text-xs text-ink border border-line2 px-3 py-2 hover:border-amber hover:text-amber transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Código
                    </a>
                  )}
                </div>
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
