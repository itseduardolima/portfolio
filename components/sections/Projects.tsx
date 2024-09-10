import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/mock/projectsData";
import Image from "next/image";
import { useRef } from "react";

interface ProjectsSectionProps {
  fadeInUp: object;
  projects: Project[];
  id?: string;
}

export function ProjectsSection({ fadeInUp, projects, id }: ProjectsSectionProps) {

  const ref = useRef(null);

  return (
    <motion.section id={id} ref={ref} className="py-20" {...fadeInUp}>
      <h2 className="text-3xl font-bold mb-10 text-teal-400">Projetos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border-teal-400">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
                layout="responsive"
                width={400}
                height={200}
              />
              <CardHeader>
                <CardTitle className="text-teal-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-teal-400 text-gray-900">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-teal-600 text-white hover:bg-teal-700 font-medium py-2 px-4 rounded transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver Deploy
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 border border-teal-400 hover:bg-teal-400 hover:text-gray-900 font-medium py-2 px-4 rounded transition-colors"
                  >
                    <Github className="mr-2 h-4 w-4" /> Ver GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}