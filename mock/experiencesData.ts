export interface Experience {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Desenvolvedor Fullstack Pleno",
    company: "Instituto Conecthus — Tecnologia e Biotecnologia do Amazonas",
    period: "Mai 2025 — Atual",
    current: true,
    description:
      "Atuo em 2 a 3 projetos simultâneos para o setor industrial, integrando IA, dados em tempo real e automação de processos. Responsável pelo ciclo completo do software — arquitetura, implementação, integração com modelos de IA, testes e manutenção. Realizo code review diário e apoio técnico ao time.",
    technologies: [
      "NestJS",
      "React",
      "Python",
      "FastAPI",
      "RabbitMQ",
      "Docker",
      "WebSocket",
    ],
  },
  {
    title: "Desenvolvedor Fullstack",
    company: "Autônomo — Freelancer",
    period: "Nov 2024 — Atual",
    current: true,
    description:
      "Desenvolvo landing pages, sistemas web e workspaces corporativos sob medida, com foco em design responsivo e UX. Gerencio o ciclo completo — requisitos, arquitetura, implementação e manutenção pós-entrega — em contato direto com cada cliente.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Framer Motion",
    ],
  },
  {
    title: "Desenvolvedor Frontend Jr.",
    company: "M.W Tecnologia e Programação",
    period: "Jan 2024 — Ago 2024",
    description:
      "Implementei e mantive funcionalidades em sistemas CRM com React e Next.js, integrando APIs de terceiros. Atuei em todas as fases do frontend — componentes, integração REST, correção de bugs e revisão de código — em equipe ágil Scrum.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
];
