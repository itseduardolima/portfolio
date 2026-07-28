export interface Skills {
  [category: string]: string[];
}

export const skillsData: Skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Styled-Components",
    "React Native",
    "Material-UI",
    "Radix UI",
    "React Query",
    "React Hook Form",
    "Zod",
  ],
  Backend: [
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "FastAPI",
    "REST API",
    "WebSocket",
    "RabbitMQ",
  ],
  "IA / ML": [
    "Whisper",
    "FAISS",
    "SentenceTransformers",
    "Llama 3.1",
    "RAG",
    "Argos Translate",
  ],
  Testes: ["Jest", "Vitest", "Testing Library", "Pytest"],
  "Banco de Dados": ["MySQL", "MongoDB", "SQL Server", "Prisma ORM", "Redis"],
  "DevOps / Tools": ["Docker", "Git", "GitLab", "MinIO S3", "FFmpeg"],
  Metodologias: ["Scrum", "Kanban", "Jira"],
};
