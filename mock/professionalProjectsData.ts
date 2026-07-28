export interface ProfessionalProject {
  title: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const professionalProjectsData: ProfessionalProject[] = [
  {
    title: "LMS Training",
    summary:
      "Plataforma corporativa completa de gestão de treinamentos (online e presencial) para o setor industrial, com fluxos de aprovação, avaliações, streaming de vídeo e assistente de IA integrado.",
    highlights: [
      "Backend em NestJS + Prisma (SQL Server): matrículas, avaliações, presença e emissão de certificados",
      "Fluxo de aprovação multi-nível com notificações automáticas e rastreamento de estado",
      "Player de vídeo, editor rico, dashboard com KPIs e exportação PDF/Excel",
    ],
    technologies: [
      "NestJS",
      "React",
      "Prisma",
      "SQL Server",
      "RabbitMQ",
      "MinIO",
      "Material-UI",
      "Docker",
    ],
  },
  {
    title: "AI Assistant",
    summary:
      "Microsserviço de IA para plataforma educacional corporativa — transcrição de vídeos, extração de documentos e assistente inteligente com RAG.",
    highlights: [
      "Pipeline RAG completo: Whisper, embeddings multilíngues, busca vetorial FAISS e respostas via Llama 3.1",
      "Indexação bilíngue automática (PT/EN) com tradução neural offline",
      "Arquitetura event-driven com RabbitMQ e cache distribuído Redis",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Whisper",
      "FAISS",
      "Llama 3.1",
      "RabbitMQ",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Inspeção de Produtos com IA",
    summary:
      "Sistema fullstack para inspeção de qualidade em linhas de produção industriais, com detecção de anomalias via IA e alertas em tempo real.",
    highlights: [
      "API em NestJS para ingestão de dados de câmeras em tempo real",
      "Integração com modelo de IA para detecção de anomalias e alertas via WebSocket",
      "Dashboard para operadores com histórico de ações e status da linha",
    ],
    technologies: ["NestJS", "React", "TypeScript", "WebSocket", "Docker"],
  },
  {
    title: "Loja Virtual — SaaS Multi-Vendedor",
    summary:
      "Plataforma SaaS onde vendedores criam e gerenciam lojas online, com checkout, assinaturas e painel administrativo completo.",
    highlights: [
      "Autenticação Google OAuth, produtos com variações dinâmicas e carrinho anônimo",
      "Checkout via Asaas com rastreamento de pedidos",
      "Dashboard de vendas e sistema de assinaturas com planos",
    ],
    technologies: ["Next.js", "NestJS", "MongoDB", "Tailwind CSS", "OAuth", "Asaas"],
  },
  {
    title: "LMS Project — Lean Management System",
    summary:
      "Plataforma web enterprise para gestão de melhoria contínua, integrando múltiplas metodologias Lean: DMAIC, PDCA, Kanban, Ishikawa, Pareto, VSM e outras.",
    highlights: [
      "Módulos configuráveis por metodologia de melhoria contínua",
      "Estrutura multi-time para times de operação industrial",
    ],
    technologies: ["Next.js", "NestJS", "MySQL", "Tailwind CSS", "Docker"],
  },
];
