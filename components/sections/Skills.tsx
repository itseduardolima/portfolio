import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skills } from "@/mock/skillsData";
import { useRef } from "react";

interface SkillsSectionProps {
  fadeInUp: object;
  skills: Skills;
  id?: string;
}

export function SkillsSection({ fadeInUp, skills, id }: SkillsSectionProps) {

  const ref = useRef(null);

  return (
    <motion.section id={id} ref={ref} className="py-20" {...fadeInUp}>
      <h2 className="text-3xl font-bold mb-10 text-teal-400">
        Minhas Habilidades
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, techs], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border-teal-400">
              <CardHeader>
                <CardTitle className="text-teal-400">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <Badge
                      key={tech}
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
