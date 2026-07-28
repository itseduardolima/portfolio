"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";
import type { Experience } from "@/mock/experiencesData";
import type { Education } from "@/mock/educationData";
import { profile } from "@/mock/profileData";

interface ExperienceEducationSectionProps {
  fadeInUp: object;
  experience: Experience[];
  education: Education[];
  id?: string;
}

export function ExperienceSection({
  experience,
  education,
  id,
}: ExperienceEducationSectionProps) {
  return (
    <section id={id} className="py-24 lg:py-32">
      <SectionHeading
        index="03"
        eyebrow="Experiência"
        title="Registro de operação"
        description="Histórico profissional em ordem cronológica reversa."
      />

      <div>
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 py-8 border-t border-line first:border-t-0"
          >
            <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-2">
              <span className="font-mono text-xs text-faint">{job.period}</span>
              {job.current && (
                <span className="inline-flex items-center gap-1.5">
                  <StatusDot color="signal" />
                  <span className="mono-caps text-[10px] text-signal">Atual</span>
                </span>
              )}
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-2xl lg:text-3xl text-ink leading-tight">
                {job.title}
              </h3>
              <p className="mono-caps text-xs text-amber mt-1.5 mb-4">{job.company}</p>
              <p className="text-sm lg:text-base text-muted leading-relaxed max-w-3xl">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full font-mono text-[11px] text-muted border border-line2 px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-line border border-line mt-4">
        <div className="bg-panel p-6 lg:p-7">
          <h3 className="mono-caps text-xs text-amber mb-4">Formação</h3>
          <div>
            {education.map((edu) => (
              <div
                key={edu.course}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-b-0"
              >
                <div>
                  <p className="text-sm text-ink">{edu.course}</p>
                  <p className="text-xs text-faint mt-0.5">{edu.institution}</p>
                </div>
                <span className="font-mono text-[11px] text-faint shrink-0">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-panel p-6 lg:p-7">
          <h3 className="mono-caps text-xs text-amber mb-4">Idiomas</h3>
          <div>
            {profile.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between border-b border-line py-3 last:border-b-0"
              >
                <span className="text-sm text-ink">{lang.name}</span>
                <span className="font-mono text-[11px] text-faint">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
