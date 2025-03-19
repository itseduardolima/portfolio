export interface Education {
  course: string;
  institution: string;
  startDate: string;
  endDate?: string;
  isCompleted: boolean;
  description?: string;
}

export const educationData: Education[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário do Norte (UniNorte)",
    startDate: "2022",
    endDate: "2024",
    isCompleted: true,
    description:
      "Formação superior focada no desenvolvimento de sistemas computacionais, abrangendo análise, projeto, documentação, especificação, teste, implementação e manutenção de sistemas. O curso proporciona conhecimentos em programação, banco de dados, engenharia de software e metodologias ágeis.",
  },
  {
    course: "Formação React com TypeScript",
    institution: "Alura",
    startDate: "Setembro 2023",
    endDate: "Dezembro 2023",
    isCompleted: true,
    description:
      "Curso completo de React com TypeScript, abordando componentes, hooks, gerenciamento de estado, rotas e integração com APIs. Desenvolvimento de projetos práticos com foco em boas práticas e padrões de código.",
  },
  {
    course: "Formação Next.js",
    institution: "Alura",
    startDate: "Maio 2023",
    endDate: "Junho 2023",
    isCompleted: true,
    description:
      "Especialização em Next.js, framework React para desenvolvimento de aplicações web. Abordagem de SSR, SSG, ISR, API Routes, e otimizações de performance. Criação de projetos completos com foco em SEO e experiência do usuário.",
  },
];
