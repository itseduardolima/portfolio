import { StaticImageData } from "next/image";
import RestaurantImage from "../public/assets/images/restaurant.png";
import EdmindImage from "../public/assets/images/edmind.jpeg";
import KaduFitnessImage from "../public/assets/images/kadu-fitness.jpeg";

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
    title: "Restaurante Arte & Sabor",
    description:
      "Esta é uma landing page desenvolvida para um restaurante fictício. O objetivo principal desta página é apresentar o restaurante, seu cardápio diversificado e atrair clientes por meio de um design moderno e intuitivo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Html"],
    deployLink: "https://restaurante-sabor-e-arte.vercel.app/",
    githubLink: "https://github.com/itseduardolima/landing-page-restaurant",
    image: RestaurantImage,
  },
  {
    title: "Edmind Soluctions",
    description:
      "Projeto pessoal que oferece soluções de desenvolvimento web, design gráfico e serviços de SEO para impulsionar a presença online do cliente.",
    technologies: ["React", "Vite", "TypeScript", "Styled Components", "Html"],
    deployLink: "https://edmind.netlify.app/",
    githubLink: "https://github.com/itseduardolima/edmind-frontend",
    image: EdmindImage,
  },
  {
    title: "Kadu Fitness",
    description:
      "Landing page dedicada a apresentar as diversas aulas oferecidas na Kadu Fitness, bem como destacar os talentosos professores que as conduzem.",
    technologies: ["React", "Vite", "TypeScript", "Styled Components", "Html"],
    deployLink: "https://kadufitness.netlify.app/",
    githubLink: "https://github.com/itseduardolima/kadu-fitness",
    image: KaduFitnessImage,
  },
];
