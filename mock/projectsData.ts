import type { StaticImageData } from "next/image";
import AllinsysImage from "@/public/assets/images/allinsys.png";
import TravelTagsImage from "@/public/assets/images/traveltags.png";
import PassImage from "@/public/assets/images/pass.png";
import WorkflowImage from "@/public/assets/images/workflow-pro.png";
import LoveJourneyImage from "@/public/assets/images/lovejourney.png";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  deployLink: string;
  githubLink: string;
  image: StaticImageData;
  isFreelance: boolean;
}

export const projectData: Project[] = [
  {
    title: "LoveJourney",
    description:
      "É uma plataforma digital dedicada a casais que desejam preservar e celebrar os momentos especiais de seu relacionamento. Uma maneira única e interativa para você documentar sua jornada de amor, desde o primeiro encontro até os momentos mais recentes, em uma bela linha do tempo visual que pode ser compartilhada com amigos e familiares.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer-motion", "Node", "Nest"],
    deployLink: "https://lovejourney.vercel.app/",
    githubLink: "https://github.com/itseduardolima/love-journey-frontend",
    image: LoveJourneyImage,
    isFreelance: false,
  },
  {
    title: "Allinsys",
    description:
      "Landing page para uma plataforma de processos personalizados voltada para gestão de negócios.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer-motion",
      "i18n",
      "zod",
    ],
    deployLink: "https://www.allinsys.com",
    githubLink: "",
    image: AllinsysImage,
    isFreelance: true,
  },
  {
    title: "WorkflowPro",
    description:
      "Landing page elegante e responsiva para demonstrar ferramentas de automação de fluxo de trabalho.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer-motion"],
    deployLink: "https://workflow-pro-tau.vercel.app/",
    githubLink: "https://github.com/itseduardolima/WorkflowPro",
    image: WorkflowImage,
    isFreelance: false,
  },
  {
    title: "Passb2b",
    description:
      "Landing page para uma plataforma de gestão e distribuição no setor de turismo.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer-motion",
      "i18n",
      "zod",
    ],
    deployLink: "https://www.passb2b.com",
    githubLink: "",
    image: PassImage,
    isFreelance: true,
  },
  {
    title: "TravelTags",
    description:
      "Landing page para um aplicativo de rastreamento de bagagens. Desenvolvi uma interface que comunica de forma clara e atraente o funcionamento do sistema de tags e notificações.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer-motion",
      "i18n",
    ],
    deployLink: "https://traveltags.vercel.app",
    githubLink: "",
    image: TravelTagsImage,
    isFreelance: true,
  },
];
