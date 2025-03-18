import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Experience } from "@/mock/experiencesData";
import { useRef } from "react";

interface ExperienceSectionProps {
  fadeInUp: object;
  experience: Experience[];
  id?: string;
}

export function ExperienceSection({
  fadeInUp,
  experience,
  id,
}: ExperienceSectionProps) {
  const ref = useRef(null);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="min-h-screen max-w-5xl mx-auto"
      {...fadeInUp}
    >
      <motion.h2
        className="text-2xl lg:text-4xl font-bold mb-20 text-teal-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Experiência Profissional
      </motion.h2>
      <div className="relative border-l-4 border-teal-400">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="hidden md:flex absolute -left-10 justify-center items-center w-6 h-6 bg-teal-400 rounded-full ring-8 ring-gray-900">
              <Calendar className="w-3 h-3 text-gray-900" />
            </span>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border-teal-400">
              <CardHeader>
                <CardTitle className="text-teal-400">{job.title}</CardTitle>
                <CardDescription className="text-gray-400">
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
                      className="bg-teal-400 text-gray-900"
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
    </motion.section>
  );
}
