import type { Metadata } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/mock/profileData";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Eduardo Lima Castro — Dev Fullstack em Manaus | Sites e Sistemas",
    template: "%s — Eduardo Lima Castro",
  },
  description:
    "Desenvolvedor fullstack em Manaus. Crio sites, sistemas web e lojas virtuais sob medida para empresas, além de projetos com Inteligência Artificial. Disponível para freelance e vagas remotas.",
  keywords: [
    "desenvolvedor fullstack",
    "desenvolvedor fullstack manaus",
    "criar site",
    "criação de sites",
    "criar sistema",
    "sistema sob medida",
    "loja virtual",
    "freelancer",
    "react",
    "next.js",
    "nestjs",
    "python",
    "inteligência artificial",
    "sistemas industriais",
    "manaus",
    "portfolio",
  ],
  authors: [{ name: "Eduardo Lima Castro" }],
  creator: "Eduardo Lima Castro",
  publisher: "Eduardo Lima Castro",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.eduardolima.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eduardo Lima Castro — Dev Fullstack em Manaus | Sites e Sistemas",
    description:
      "Sites, sistemas web, lojas virtuais e projetos com IA. Disponível para freelance e vagas remotas.",
    url: "https://www.eduardolima.tech",
    siteName: "Eduardo Lima Castro",
    locale: "pt_BR",
    type: "website",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.eduardolima.tech/#person",
      name: profile.name,
      url: "https://www.eduardolima.tech",
      jobTitle: profile.role,
      email: `mailto:${profile.email}`,
      telephone: "+" + profile.phoneIntl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manaus",
        addressRegion: "AM",
        addressCountry: "BR",
      },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        "Desenvolvimento de sites",
        "Desenvolvimento de sistemas web",
        "React",
        "Next.js",
        "NestJS",
        "Python",
        "Inteligência Artificial",
      ],
      worksFor: { "@id": "https://www.eduardolima.tech/#business" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.eduardolima.tech/#business",
      name: "Eduardo Lima Castro — Desenvolvimento de Sites e Sistemas",
      legalName: profile.legalName,
      taxID: profile.cnpj,
      url: "https://www.eduardolima.tech",
      email: profile.email,
      telephone: "+" + profile.phoneIntl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manaus",
        addressRegion: "AM",
        addressCountry: "BR",
      },
      areaServed: ["Manaus", "Amazonas", "Brasil", "Remoto"],
      founder: { "@id": "https://www.eduardolima.tech/#person" },
      sameAs: [profile.github, profile.linkedin],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased bg-graphite text-ink font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
