import type { StaticImageData } from "next/image";
import AllinsysImage from "@/public/assets/images/allinsys.png";
import TravelTagsImage from "@/public/assets/images/traveltags.png";

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
    deployLink: "https://allinsys.vercel.app",
    githubLink: "",
    image: AllinsysImage,
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
