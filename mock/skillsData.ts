export interface Skills {
  [category: string]: string[];
}

export const skillsData: Skills = {
  Frontend: [
    "React.js",
    "React Native",
    "Next.js",
    "Vite",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Styled Components",
  ],
  Backend: [
    "Node.js",
    "Nest.js",
    "Swagger",
    "Postman",
    "JWT",
    "TypeOrm",
    "Docker",
  ],
  Design: ["Figma", "Adobe XD"],
  Banco: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL Server"],
};
