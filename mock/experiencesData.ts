export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Desenvolvedor FullStack Pleno",
    company: "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
    period: "Mai 2025 - Presente",
    description:
      "Desenvolvo projetos para o setor industrial, com foco em soluções que integram Inteligência Artificial (IA) e dados em tempo real. Sou responsável por todo o ciclo de vida do software, garantindo a criação de sistemas que melhoram a eficiência operacional e a tomada de decisões.",
    technologies: [
      "React",
      "TypeScript",
      "Styled-Components",
      "Zod",
      "Yup",
      "Nestjs",
      "Node.js",
      "Nest.js",
      "Prisma",
      "Figma",
      "Docker",
      "Swagger",
      "JWT",
      "TypeORM",
      "SQLServer",
    ],
  },
  {
    title: "Desenvolvedor FullStack",
    company: "Autônomo",
    period: "Nov 2024 - Mai 2025",
    description:
      "Atualmente atuo como desenvolvedor freelancer, oferecendo soluções personalizadas para diversos clientes. Desenvolvo landing pages de alta conversão, sistemas web completos e workspaces corporativos, sempre focando em design responsivo e experiência do usuário.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
      "Styled-Components",
      "Zod",
      "Node.js",
      "Framer Motion",
      "Figma",

    ],
  },
  {
    title: "Desenvolvedor Frontend",
    company: "MW Tecnologia e Programação",
    period: "Jan 2024 - Ago 2024",
    description:
      "Fui responsável por implementar e manter funcionalidades em sistemas CRMs, realizar integrações com APIs e desenvolver gráficos interativos utilizando Chart.js.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    title: "Desenvolvedor Backend - Estagiário",
    company: "Instituto Conecthus - Tecnologia e Biotecnologia do Amazonas",
    period: "Mar 2023 - Dez 2023",
    description:
      "Como estagiário, contribui no desenvolvimento de APIs escaláveis e bem documentadas. Atuei na implementação de validações, garantindo a integridade dos dados e o acesso eficiente aos recursos do sistema. Além disso, participei de integrações e otimizações que aprimoraram a performance e a confiabilidade das APIs, aplicando as melhores práticas relacionadas ao Nest.js.",
    technologies: ["Node.js", "Nest.js", "Swagger", "TypeOrm", "JWT"],
  },
];
