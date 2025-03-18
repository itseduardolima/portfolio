export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Desenvolvedor Frontend",
    company: "Autônomo",
    period: "Nov 2024 - Presente",
    description:
      "Atualmente atuo como desenvolvedor freelancer, oferecendo soluções personalizadas para diversos clientes. Desenvolvo landing pages de alta conversão, sistemas web completos e workspaces corporativos, sempre focando em design responsivo e experiência do usuário. Gerencio todo o ciclo de desenvolvimento, desde o levantamento de requisitos até a implementação e manutenção. Trabalho diretamente com os clientes para entender suas necessidades específicas e entregar soluções que atendam precisamente às suas expectativas, garantindo código limpo, performance otimizada e interfaces intuitivas.",
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
      "Contratado como Desenvolvedor Júnior PJ, mas as vezes desempenhando atividades de nível pleno, fui responsável por implementar e manter funcionalidades em sistemas CRMs, realizar integrações com APIs e desenvolver gráficos interativos utilizando Chart.js. Trabalhei sozinho em todo o front-end, utilizando React.js e Next.js, e focando em escrever código limpo e escalável. Desenvolvi componentes reutilizáveis para otimizar a manutenção e a eficiência do sistema, aplicando as melhores práticas de desenvolvimento.",
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
      "Como estagiário, utilizei tecnologias como Node.js, Nest.js, TypeORM, Docker e Swagger para contribuir no desenvolvimento de APIs escaláveis e bem documentadas. Atuei na implementação de validações, garantindo a integridade dos dados e o acesso eficiente aos recursos do sistema. Além disso, participei de integrações e otimizações que aprimoraram a performance e a confiabilidade das APIs, aplicando as melhores práticas relacionadas ao Nest.js.",
    technologies: ["Node.js", "Nest.js", "Swagger", "TypeOrm", "JWT"],
  },
];
