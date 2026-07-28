import type { Metadata } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Eduardo Lima Castro — Desenvolvedor Fullstack",
    template: "%s — Eduardo Lima Castro",
  },
  description:
    "Desenvolvedor Fullstack pleno especializado em sistemas industriais, Inteligência Artificial e plataformas SaaS. React, Next.js, NestJS e Python. Disponível para projetos freelance e vagas híbridas/remotas.",
  keywords: [
    "desenvolvedor fullstack",
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
    title: "Eduardo Lima Castro — Desenvolvedor Fullstack",
    description:
      "Sistemas industriais, IA e plataformas SaaS. Disponível para projetos freelance e vagas híbridas/remotas.",
    url: "https://www.eduardolima.tech",
    siteName: "Eduardo Lima Castro",
    locale: "pt_BR",
    type: "website",
  },
  category: "technology",
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
        {children}
      </body>
    </html>
  );
}
