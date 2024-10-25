import { StaticImageData } from "next/image";
import RestaurantImage from "../public/assets/images/restaurant.png";
import LoveJourneyImage from "../public/assets/images/love-journey.png";
import WorkflowImage from "../public/assets/images/workflow-pro.png";
import EdSolutionsImage from "../public/assets/images/edsolutions.png";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  deployLink: string;
  githubLink: string;
  image: StaticImageData;
}

export const projectData: Project[] = [
  {
    title: "Love Journey",
    description:
      "Projeto pessoal FullStack onde a ideia é que o usuário crie uma narrativa visual única do seu relacionamento, destacando momentos especiais e marcos importantes em uma bela linha do tempo interativa.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Html"],
    deployLink: "https://lovejourney.vercel.app/",
    githubLink: "https://github.com/itseduardolima/love-journey-frontend.git",
    image: LoveJourneyImage,
  },
  {
    title: "EdSoluctions",
    description:
      "Projeto pessoal que oferece soluções de desenvolvimento web e serviços de SEO para impulsionar a presença online do cliente.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Html"],
    deployLink: "https://edsolutions.vercel.app/",
    githubLink: "https://github.com/itseduardolima/edsolutions",
    image: EdSolutionsImage,
  },
  {
    title: "WorkflowPro",
    description:
      "Modelo de landing page elegante e responsivo, projetado para mostrar ferramentas de automação de fluxo de trabalho e SaaS. Perfeito para pequenas e médias empresas, ele apresenta seções personalizáveis ​​como Recursos, Preços e FAQ. Com animações envolventes, botões de call-to-action de alta conversão e otimização de SEO, o WorkflowPro ajuda apresentar serviços forma eficaz e converter leads sem esforço.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Html"],
    deployLink: "https://workflow-pro-tau.vercel.app/",
    githubLink: "https://github.com/itseduardolima/WorkflowPro",
    image: WorkflowImage,
  },
  {
    title: "Restaurante Arte & Sabor",
    description:
      "Esta é uma landing page desenvolvida para um restaurante fictício. O objetivo principal desta página é apresentar o restaurante, seu cardápio diversificado e atrair clientes por meio de um design moderno e intuitivo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Html"],
    deployLink: "https://restaurante-sabor-e-arte.vercel.app/",
    githubLink: "https://github.com/itseduardolima/landing-page-restaurant",
    image: RestaurantImage,
  },
];
