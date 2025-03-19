"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";
import type { Experience } from "@/mock/experiencesData";
import { useRef } from "react";
import { Education } from "@/mock/educationData";
import { CheckIcon } from "@/public/assets/icons/CheckIcon";

interface ExperienceEducationSectionProps {
  fadeInUp: object;
  experience: Experience[];
  education: Education[];
  id?: string;
}

export function ExperienceSection({
  fadeInUp,
  experience,
  education,
  id,
}: ExperienceEducationSectionProps) {
  const ref = useRef(null);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="max-w-6xl lg:mx-auto"
      {...fadeInUp}
    >
      <motion.h2
        className="text-2xl lg:text-4xl font-bold mb-10 lg:mb-20 text-teal-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experiência & Educação
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Experiência Profissional */}
        <div>
          <motion.h3
            className="text-xl lg:text-2xl font-bold mb-6 text-white flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Briefcase className="mr-2 text-teal-400" size={24} />
            Experiência Profissional
          </motion.h3>

          <div className="relative border-l-4 border-teal-400 pl-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="absolute -left-3 flex justify-center items-center w-6 h-6 bg-teal-400 rounded-full ring-8 ring-gray-900">
                  <Briefcase className="w-3 h-3 text-gray-900" />
                </span>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border-teal-400/20 hover:border-teal-400/50">
                  <CardHeader>
                    <CardTitle className="text-teal-400">{job.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {job.company} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-base font-normal text-gray-300">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-teal-400/20 text-teal-300 hover:bg-teal-400/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Educação */}
        <div>
          <motion.h3
            className="text-xl lg:text-2xl font-bold mb-6 text-white flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="mr-2 text-teal-400" size={24} />
            Educação
          </motion.h3>

          <div className="relative border-l-4 border-teal-400 pl-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="absolute -left-3 flex justify-center items-center w-6 h-6 bg-teal-400 rounded-full ring-8 ring-gray-900">
                  <GraduationCap className="w-3 h-3 text-gray-900" />
                </span>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border-teal-400/20 hover:border-teal-400/50">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <CardTitle className="text-teal-400">
                        {edu.course}
                      </CardTitle>
                      <Badge
                        className={
                          edu.isCompleted
                            ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                            : "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
                        }
                      >
                        {edu.isCompleted ? (
                          <span className="flex items-center">
                            <CheckIcon />
                            Concluído
                          </span>
                        ) : (
                          "Em andamento"
                        )}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-teal-400" />
                      <span className="text-gray-300">
                        {edu.startDate}
                        {edu.endDate ? ` - ${edu.endDate}` : ""}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="mt-3 text-base font-normal text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
