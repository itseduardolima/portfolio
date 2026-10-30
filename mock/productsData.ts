export interface Product {
  name: string;
  tag: string;
  bg: string;
  fg: string;
  accent: string;
  summary: string;
  status: string;
  stack?: string[];
  href?: string;
  shots: string[];
  kind: "desktop" | "mobile";
}

export const products: Product[] = [
  {
    name: "Nexo",
    tag: "Meu produto principal",
    bg: "#4448F5",
    fg: "#FFFFFF",
    accent: "#D9DBFE",
    summary:
      "Plataforma para lojas gerenciarem vendas, pedidos e operação em um só lugar. Desenhei todo o produto, do kanban de pedidos à vitrine com promoções.",
    status: "Em construção — design completo, ainda não está no ar",
    shots: ["/projects/nexo/loja.png", "/projects/nexo/kanban.png"],
    kind: "desktop",
  },
  {
    name: "AbacaTudo",
    tag: "App mobile (PWA)",
    bg: "#1B3A0A",
    fg: "#F3F8EC",
    accent: "#9DE86B",
    summary:
      "Gerenciador de gastos pessoais com Open Finance e IA: renda, faturas, categorias e dicas para economizar, pensado para o celular.",
    status: "Código aberto",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Pluggy", "Turborepo", "Docker", "Cypress"],
    href: "https://github.com/itseduardolima/abacatudo",
    shots: [
      "/projects/abacatudo/inicio.jpg",
      "/projects/abacatudo/fatura-meu.jpg",
      "/projects/abacatudo/gastos-categorias.jpg",
    ],
    kind: "mobile",
  },
  {
    name: "PDV",
    tag: "Ponto de venda white-label",
    bg: "#F9A8D4",
    fg: "#3A1A2A",
    accent: "#FFFFFF",
    summary:
      "PDV multi-tenant para pequenos mercados: cada loja tem seu subdomínio, login por PIN, vendas e relatórios.",
    status: "Código aberto",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL RLS", "MinIO", "Swagger"],
    href: "https://github.com/itseduardolima/pdv-web",
    shots: ["/projects/pdv/vender.png", "/projects/pdv/relatorios.png"],
    kind: "desktop",
  },
];
